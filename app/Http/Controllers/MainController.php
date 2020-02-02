<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subdomain;
use App\Event; 
use App\About; 
use App\Images; 
use App\Guest;
use App\Tagline;
use App\Subscribe;
class MainController extends Controller
{



  function subscribe(Request $request){
    $found = Subscribe::where('email',$request->email)->first(); 
    if(!$found){
      $s = new Subscribe(); 
      $s->email = $request->email; 
      $s->save(); 
    }
    return redirect()->back();
  }
  function saveContent(Request $request){
    return $request;
    $saveEvents = $this->saveEvents($request->events); 
    $saveAbout = $this->saveAbout($request->long_text); 
    $saveTagline = $this->saveTagline($request->tagline); 
    if($saveEvents && $saveAbout && $saveTagline){
      return [
        'status'=>TRUE, 
        'errors'=>[]
      ];
    }else{
      $errors = []; 
      if(!$saveAbout) {array_push($errors,"Saving about text failed!");}
      if(!$saveEvents) {array_push($errors,"Saving events failed!");}
      if(!$saveTagline) {array_push($errors,"Saving tagline text failed!");}
      return [
        'status'=>FALSE, 
        'errors'=>$errors
      ];
    }
  }
  function saveAbout($text){
    if(trim($text) ==""){ return ; }
    $new = new About(); 
    $new->body = $text; 
    $new->subdomain_id = Auth::User()->subdomain->id; 
    $new->save(); 

  }
  function saveTagline($tagline){
    if(trim($tagline) ==""){ return ; }
    $new = new Tagline(); 
    $new->text = $tageline; 
    $new->subdomain_id = Auth::User()->subdomain->id; 
    $new->save(); 
    return TRUE;

  }
  function saveGuests($guests,$id){
    if(count($guests)==0){ return ; }
    foreach ($guests as $g) {
      $new = new Guest();
      $new->name = $g; 
      $new->event_id = $id;
      $new->save();
    }
    return TRUE;
  }
  function saveEvents($events){
    if(count($events) == 0) {return ;}
    foreach ($events as  $ev) {
      $new = new Event(); 
      $new->subdomain_id = Auth::user()->subdomain->id; 
      $new->event_title = $ev->event_title; 
      $new->event_description = $ev->event_desc; 
      $new->start_date = $ev->event_start; 
      $new->end_date = $ev->event_end; 
      $new->save(); 
      //save guests 
      $this->saveGuests($ev->guests,$new->id);
      //now save the events image
      $filename = time().'.'.PATHINFO_EXTENSION;
      $path = public_path().'/event-imgs';
      $ev->image->move($path,$filename); 
      $img = new Images(); 
      $img->url = $path; 
      $img->$event_id = $new->id; 
      $img->save();
    }

    return TRUE;
    
  }
    function checkUniqueness($name){
      $response = [
        'success'=>true, 
        'data' =>null, 
        'error' =>null,
        'error_code'=>200
      ];
      $found = Subdomain::where('name',$name)->first(); 
      if($found){
        $response['data'] = $found;
        return $response;
      }
      $response['success'] = false;
      $response['error'] = 'This name could not be found'; 
      $response['error_code'] = 404; 
      return $response;
    }
}
