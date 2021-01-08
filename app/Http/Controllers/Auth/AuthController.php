<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function init()
    {
        $user = Auth::user();
        return response()->json($user, 200);
    }

    public function login(Request $request){
        if(Auth::attempt(['username'=> $request->userData['username'], 'password' => $request->userData['password']], true)){
            return response()->json(Auth::user(), 200);
        } else {
            return response()->json(['error' => 'Could not log you in'], 401);
        }
    }
    public function register(Request $request){

        $user = User::where('username', $request->userData['username'])->first();
        if(isset($user->id)){
            return response()->json(['error' => 'Username already exists.'], 401);
        };
        $user = new User;
        $user->first_name = $request->userData['first_name'];
        $user->last_name = $request->userData['last_name'];
        $user->email = $request->userData['email'];
        $user->position = $request->userData['position'];
        $user->username = $request->userData['username'];
        $user->password = bcrypt($request->userData['password']);
        $user->save();
        Auth::login($user);

        return response()->json($user, 200);
    }

    public function logout(Request $request){
        Auth::logout();
    }
}
