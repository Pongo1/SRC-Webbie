<?php
Route::get('/', function () {
    return view('welcome');
});
Auth::routes();
Route::get('/view',function(){
  return view('viewpage');
});
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/get-csrf-token',function(){
  return csrf_token();
});