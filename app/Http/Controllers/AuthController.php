<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request){
    
    $request->validate([
    	'name' => 'required|unique:users,name|min:3',
    	'email' => 'required|email|unique:users,email',
    	'password' => 'required|min:3'
    ]);

    $user = User::create([
    		'name' => request('name'),
    		'email' => request('email'),
    		'password' => bcrypt($request->password)
    	]);
    	return response()->json(['status' => 'success']);
    }

    public function login(Request $request){
    	
    	$request->validate([
    		'email' => 'required',
    		'password' => 'required'
    	]);

    	if (!$token = auth()->attempt($request->only('email','password'))) {
    		return response()->json(['account not valid'],401);
    	}
    	return response()->json(compact('token'));
    }

    public function logout(){
    	auth()->logout();
    	return response()->json('logout success');
    }

    public function refresh()
    {
    	
    }

}
