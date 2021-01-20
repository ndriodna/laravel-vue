<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::prefix('auth')->group(function (){
	Route::post('register', 'AuthController@register');
	Route::post('login', 'AuthController@login');
	Route::post('logout', 'AuthController@logout');
	Route::get('refresh','AuthController@refresh');
});
Route::group(['middleware' => 'auth:api'],function(){
	Route::get('users', 'UserController@index');
	Route::get('users/{id}','UserController@show');
});
Route::prefix('berita')->group(function ()
{
	Route::get('/','BeritaController@index');
	Route::get('/{berita}','BeritaController@show');

	Route::middleware('auth:api')->group(function (){
		Route::post('create','BeritaController@store');
		Route::put('update/{id}','BeritaController@update');
		Route::delete('destroy/{berita}','BeritaController@destroy');
	});
});


