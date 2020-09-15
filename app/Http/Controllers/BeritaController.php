<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Berita;
class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $berita = Berita::all();
       // return view('crud.index',compact('berita'));
       return $berita;
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
            'judul'=> 'required|max:255',
            'isi'=> 'required',
            'penulis'=> 'required|max:255',
        ]);
        $berita = Berita::create([
            'judul'     => request('judul'),
            'isi'       => request('isi'),
            'penulis'   => request('penulis'),
            'tgl_terbit'=> request('tgl_terbit')
        ]);
       // return redirect()->route('berita.index');
        return $berita;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Berita::find($id);
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
        // $berita = Berita::find($id);
        // $berita->update($request->all());
        // return $berita;
        $berita = Berita::find($id)->update([
            'judul' => request('judul'),
            'isi' => request('isi'),
            'penulis' => request('penulis'),
            'tgl_terbit' => request('tgl_terbit')
        ]);
        // return redirect(route('berita.index'));
        return $berita;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $berita = Berita::find($id);
        $berita->delete();
        // return redirect(route('berita.index'));
        return 204;
    }
}
