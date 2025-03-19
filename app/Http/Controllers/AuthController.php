<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validate the request...
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|max:255',
            'password' => 'required|min:8|max:255',
        ]);

        // Create a new user...
    }

    public function login(Request $request)
    {
        // Validate the request...
        $validated = $request->validate([
            'email' => 'required|email|max:255',
            'password' => 'required|min:8|max:255',
        ]);

        // Log the user in...
    }

    public function logout(Request $request)
    {
        // Log the user out...
    }

    public function user(Request $request)
    {
        // Get the current user...
    }
}
