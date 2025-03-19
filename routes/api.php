<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/**
 * Handle:
 * 
 * - registration
 * - login
 * - logout (with middleware because authentication is required)
 */
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

/**
 * Protect admin area.
 */
Route::middleware(['auth:sanctum', 'admin'])->group(function() {
    Route::get('/admin', function() {
        return response()->json([
            'message' => 'Welcome to the admin area.'
        ]);
    });
});

/**
 * Handle CRM API endpoints.
 */
Route::middleware('auth:sanctum')->group(function () {
    /**
     * Handle single current user and users.
     */
    Route::get('/user', [AuthController::class, 'user']);

    /**
     * Handle post types.
     */
});
