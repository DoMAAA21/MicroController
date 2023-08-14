<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index.index');
});

Route::get('/table-rain', function () {
    return view('tables.rain');
});

Route::get('/table-reservoir', function () {
    return view('tables.reservoir');
});

Route::get('/table-temperature', function () {
    return view('tables.temperature');
});

Route::get('/charts', function () {
    return view('charts.index');
});
