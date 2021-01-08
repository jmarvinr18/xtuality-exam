<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/videos/{id}', [App\Http\Controllers\VideosController::class, 'index']);
Route::get('/videos/details/{id}', [App\Http\Controllers\VideosController::class, 'show']);
Route::post('/videos/{id}', [App\Http\Controllers\VideosController::class, 'store']);
Route::put('/videos/{id}', [App\Http\Controllers\VideosController::class, 'update']);
Route::delete('/videos/{id}', [App\Http\Controllers\VideosController::class, 'destroy']);


Route::get('/streams', [App\Http\Controllers\StreamController::class, 'index']);
Route::get('/stream/{id}', [App\Http\Controllers\StreamController::class, 'show']);
Route::post('/stream/{user_id}/{video_id}', [App\Http\Controllers\StreamController::class, 'store']);