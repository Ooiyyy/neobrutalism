<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');
Route::get('/', function () {
    return Inertia::render('countdown', [
        'deadline' => '2026-02-21T00:00:00'
        // 'deadline' => '2026-02-18T15:59:00'
    ]);
});

Route::get('/coba', function () {
    $HBD = [
        "Happy Birthday sayang <3 |",
        "Semoga sehat selalu :) |",
        "Semoga panjang umur, banyak rejeki :) |",
        "Semoga diberi kelancaran dalam semua hal :) |"
    ];
    $gambar1 = asset('gambar/foto.jpeg');
    $judul = "Selamat ulang tahun ke 19\nSayangkuu, Adinda Alfa Zahra";
    $carousel = [
        asset('gambar/coba2.jpeg'),
        asset('gambar/coba3.jpg'),
        asset('gambar/coba4.jpg'),
    ];
    $kartuUcapan = "Selamat!";
    $gambarMomen = [
        asset('gambar/coba2.jpeg'),
        asset('gambar/coba4.jpg'),
        asset('gambar/coba5.jpeg'),
    ];
    $love = asset('gambar/love.jpg');
    return Inertia::render('coba', [
        'HBD' => $HBD,
        'gambar1' => $gambar1,
        'judul' => $judul,
        'carousel' => $carousel,
        'kartuUcapan' => $kartuUcapan,
        'gambarMomen' => $gambarMomen,
        'love' => $love
    ]);
})->name('coba');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/settings.php';
