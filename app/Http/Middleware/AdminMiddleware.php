<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {   
        /**
         * By Michele Mincone 19 March 2025.
         * 
         * If the user role is not admin, you are unauthorized.
         */
        if ($request->user()->role !== 'admin') {
            return response()->json([
                'message' => 'Unauthorized.'
            ], 401);
        }

        return $next($request);
    }
}
