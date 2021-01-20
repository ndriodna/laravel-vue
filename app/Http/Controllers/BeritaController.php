<?php

namespace App\Http\Controllers;

use App\Berita;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\BeritaResource;
use App\Http\Resources\BeritaCollection;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $berita = Berita::paginate(2);
       // return view('crud.index',compact('berita'));
       return BeritaResource::collection($berita);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('crud.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'=> 'required|min:3|max:255',
            'body'=> 'required',
            'subject'=> 'required',
        ]);
       $berita = auth()->user()->berita()->create($this->beritaStore());
       return $berita;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Berita $berita)
    {
        return new BeritaResource($berita);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $berita = Berita::find($id);
        // return view('crud.edit',compact('berita'));
        return $berita;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       $berita->update($this->beritaStore(),$id);
       return new BeritaResource($berita);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Berita $berita)
    {
        $berita->delete();
        // return redirect(route('berita.index'));
        return response()->json('delete success',200);
    }

    public function beritaStore()
    {
        return[
            'title' => request('title'),
            'slug' => Str::slug(request('title')),
            'body' => request('body'),
            'subject_id' => request('subject'),
        ];
    }
}
