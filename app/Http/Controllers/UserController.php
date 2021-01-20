<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
    	return $request->user();
    }
    public function show(Request $request, $id)
    {
    	
    }
}
