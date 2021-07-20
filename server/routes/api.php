<?php

use App\Models\Game;
use App\Models\Platform;
use Illuminate\Http\Request;
use App\Http\Controllers\TagConroler;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\GenreConroller;
use App\Http\Controllers\PlatformConroller;

Route::post('/sanctum/token', [AuthController::class, 'issue_token']);


Route::get('/games', [GameController::class, 'index']);
Route::get('/tags', [TagConroler::class, 'index']);
Route::get('/genres', [GenreConroller::class, 'index']);

// platforms
Route::get('/platforms', [PlatformConroller::class, 'index']);
Route::get('/platforms/{slug}/{slug2?}', [PlatformConroller::class, 'show']);


Route::get('test', function () {
    return Game::whereHas('platforms', function ($q) {
        $q->where('slug', 'pc')->with('platforms');
    })->get();
});
