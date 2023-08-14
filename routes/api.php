<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TemperatureController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/temperature','App\Http\Controllers\TemperatureController@index');
Route::get('/rain','App\Http\Controllers\RainController@index');
Route::get('/reservoir','App\Http\Controllers\ReservoirController@index');

Route::get('/temp-chart','App\Http\Controllers\ChartController@tempchart');
Route::get('/rain-chart','App\Http\Controllers\ChartController@rainchart');
Route::get('/reservoir-chart','App\Http\Controllers\ChartController@reservoirchart');
