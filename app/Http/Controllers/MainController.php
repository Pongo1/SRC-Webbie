<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subdomain;
use App\Event; 
use App\About; 
use App\Images; 
use App\Guest;
use App\Tagline;
class MainController extends Controller
{


  
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

  }
  function saveGuests($guests,$id){
    if(count($guests)==0){ return ; }
    foreach ($guests as $g) {
      $new = new Guest();
      $new->name = $g; 
      $new->event_id = $id;
      $new->save();
    }
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
