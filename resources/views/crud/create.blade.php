@extends('crud.layout')
@section('content')
<div class="flex justify-center mt-5 mb-2">
	<form action="{{ route('berita.store') }}" method="POST" class="p-6 w-1/2 shadow-xl bg-gray-200">
		@csrf
		<div class="my-4">
		<label for="" class="block text-gray-700 font-bold mb-2">Judul</label>
		<input type="text" class="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4" name="judul">
		</div>
			<div class="my-4">
		<label for="" class="block text-gray-700 font-bold mb-2">Isi</label>
		<textarea name="isi" id="" cols="10" rows="5" class="border-2 border-gray-700 rounded w-full py-2 px-4"></textarea>
		</div>
			<div class="my-4">
		<label for="" class="block text-gray-700 font-bold mb-2">Penulis</label>
		<input type="text" class="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4" name="penulis">
		</div>
			<div class="my-4">
		<label for="" class="block text-gray-700 font-bold mb-2">Tgl</label>
		<input type="date" class="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-gray-700" name="tgl_terbit">
		</div>
			<div class="my-4">
				<button type="submit" class="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 font-bold rounded">Simpan</button>
		</div>
	</form>
</div>
@endsection