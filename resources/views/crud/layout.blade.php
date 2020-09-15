<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>Laravel-blade</title>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
    </head>
    <body class="bg-gray-800">
        <nav class="flex bg-blue-300 p-6">
            <div class="mx-2 px-2">
                <a href="{{ url('/') }}" class="text-white font-bold">LaraBlade</a>
            </div>
            <div class="mx-5">
                <a href="{{ route('berita.create') }}" class="bg-blue-500 text-white rounded px-4 py-2">Tambah Berita</a>
            </div>
        </nav>
        <div class="container mx-auto">
            <div class="mx-20">
            @yield('content')
            </div>
        </div>
        <script src="{{ mix('js/app.js') }}"></script>
         <script>
          feather.replace()
        </script>
    </body>
</html>
