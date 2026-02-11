<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/coba', function () {
    $gambar1 = asset('gambar/coba1.jpg');
    $judul = 'Coba Page';
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
    return Inertia::render('coba', [
        'gambar1' => $gambar1,
        'judul' => $judul,
        'carousel' => $carousel,
        'kartuUcapan' => $kartuUcapan,
        'gambarMomen' => $gambarMomen,
    ]);
})->name('coba');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/settings.php';
