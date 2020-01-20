<?php
Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
Route::get('/view',function(){
  return view('viewpage');
});
Route::get('/kk',function(){
  return  App\Subdomain::where('id',1)->first()->user;
});
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/get-csrf-token',function(){
  return csrf_token();
});

Route::get('name.check/{name}','MainController@checkUniqueness');