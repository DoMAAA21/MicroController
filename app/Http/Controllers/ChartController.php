<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
class ChartController extends Controller
{
    
    public function tempchart()
    {
    $order = DB::table('temperatures')->groupBy('status')->orderBy('total')->pluck(DB::raw('count(status) as total'),'status')->all();
    $labels = (array_keys($order));
    
    $data= array_values($order);
    // dd($customer, $data, $labels);
    return response()->json(array('data' => $data, 'labels' => $labels));
    }


    public function rainchart()
    {
    $order = DB::table('rain')->groupBy('status')->orderBy('total')->pluck(DB::raw('count(status) as total'),'status')->all();
    $labels = (array_keys($order));
    
    $data= array_values($order);
    // dd($customer, $data, $labels);
    return response()->json(array('data' => $data, 'labels' => $labels));
    }

    public function reservoirchart()
    {
    $order = DB::table('reservoirs')->groupBy('level')->orderBy('total')->pluck(DB::raw('count(level) as total'),'level')->all();
    $labels = (array_keys($order));
    
    $data= array_values($order);
    // dd($customer, $data, $labels);
    return response()->json(array('data' => $data, 'labels' => $labels));
    }
}
