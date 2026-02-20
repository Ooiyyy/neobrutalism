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
        // 'deadline' => '2026-02-19T13:02:00'
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
        asset('gambar/dia1.jpeg'),
        asset('gambar/dia2.jpeg'),
        asset('gambar/dia3.jpeg'),
        asset('gambar/dia4.jpeg'),
        asset('gambar/dia5.jpeg'),
        asset('gambar/dia6.jpeg'),
        asset('gambar/dia7.jpeg'),
    ];
    $kartuUcapan = "Selamat!";
    $gambarMomen = [
        asset('gambar/kita1.jpeg'),
        asset('gambar/kita2.jpeg'),
        asset('gambar/kita3.jpeg'),
        asset('gambar/kita4.jpeg'),
        asset('gambar/kita5.jpeg'),
        asset('gambar/kita6.jpeg'),
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
