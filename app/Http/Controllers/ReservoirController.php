<?php

namespace App\Http\Controllers;

use App\Models\reservoir;
use Illuminate\Http\Request;

class ReservoirController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reservoir = Reservoir::orderby('id','DESC')->get();
        return response()->json($reservoir);
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
    public function show(reservoir $reservoir)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(reservoir $reservoir)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, reservoir $reservoir)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(reservoir $reservoir)
    {
        //
    }
}
