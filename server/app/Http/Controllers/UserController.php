<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return Response::json(['isLogedIn' => Auth::check(),'user' => Auth::user() ]);
        } else {
            return Response::json(['isLogedIn' => Auth::check(),'user' => null ]);
        }
    }

    public function regester(Request $request)
    {
        $validate = $this->validate(request(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required'
        ]);
        $user = User::create(request(['name', 'email', 'password']));
        if ($user) {
            $this->login($request);
            if (Auth::check()) {
                return Response::json(['isLogedIn' => Auth::check(),'user' => Auth::user() ]);
            }
        }
    }
    
    public function logout(Request $request)
    {
        Auth::logout();
        return Response::json(['isLogedIn' => Auth::check(),'user' => null ]);
    }
}
