<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'fname'     => 'required|max:32',
            'lname'     => 'required|max:32',
            'email'     => 'required|email|max:80',
            'password'  => 'required|min:8|max:20',
        ]);

        $user = User::create([
            'fname'     => $validated['fname'],
            'lname'     => $validated['lname'],
            'email'     => $validated['email'],
            'password'  => $validated['password'],
            'role'      => 'admin',
        ]);

        return response()->json([
            'statua'    => 'success',
            'message'   => 'User created successfully',
        ]);
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:80',
            'password' => 'required|min:8|max:20',
        ]);

        $user = User::where('email', $validated['email'])->first();

        if (!$user) {
            throw ValidationException::withMessages([
                'message' => ['Questa email non è registrata!'],
            ]);
        }

        if (!Hash::check($validated['password'], $user->password)) {
            throw ValidationException::withMessages([
                'message' => ['Password errata!'],
            ]);
        }

        return response()->json([
            'token' => $user->createToken('auth_token')->plainTextToken,
            'user'  => [
                'fname' => $user->fname,
                'lname' => $user->lname,
                'email' => $user->email,
                'role'  => $user->role,
            ],
        ]);
    }

    public function logout(Request $request)
    {
        // Log the user out...
    }

    public function user(Request $request)
    {
        return response()->json([
            'fname' => $request->user()->fname,
            'lname' => $request->user()->lname,
            'email' => $request->user()->email,
            'role'  => $request->user()->role,
        ]);
    }
}
