<?php

namespace App\Http\Controllers;

use App\Models\Rain;
use Illuminate\Http\Request;

class RainController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $rain = Rain::orderby('id','DESC')->get();
        return response()->json($rain);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Rain $rain)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Rain $rain)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rain $rain)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Rain $rain)
    {
        //
    }
}
