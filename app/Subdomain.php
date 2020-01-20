<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subdomain extends Model
{
    function user(){
      return $this->hasOne('App\User');
    }
}
