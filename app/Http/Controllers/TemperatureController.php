<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Temperature;


class TemperatureController extends Controller
{
    public function index(){

       $temp = Temperature::orderby('id','DESC')->get();
       return response()->json($temp);

    }



}
