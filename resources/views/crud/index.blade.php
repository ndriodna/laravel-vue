@extends('crud.layout')
@section('content')
<div class="flex grid grid-cols-3 gap-3 mt-5">
    @foreach($berita as $data)
    <div class="rounded overflow-hidden shadow-xl p-6 m-2 bg-gray-200">
        <div class="flex justify-end">
            <form action="{{ route('berita.destroy',$data->id) }}" method="POST">
                @csrf
                @method('DELETE')
                <a href="{{ route('berita.edit',$data->id) }}" class="inline-flex"><i data-feather="edit"></i></a>
                <button type="submit"><i data-feather="trash-2"></i></button>
            </form>
        </div>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ $data->judul }}</div>
        </div>
        <div class="text-sm p-4">
            <p class="text-gray-700 leading-none">By {{ $data->penulis }}</p>
        </div>
        <div class="text-gray-700 text-base">{{Str::limit($data->isi,200, ) }}</div>
    </div>
    @endforeach
</div>
@endsection