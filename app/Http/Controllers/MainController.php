<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subdomain;
class MainController extends Controller
{
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
