<?php

use App\Models\Game;
use App\Models\Platform;
use Illuminate\Http\Request;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\PlatformController;
use App\Http\Controllers\StoreController;

// auth
Route::post('/sanctum/token', [AuthController::class, 'issue_token']);

// games
Route::get('/games', [GameController::class, 'index']);

// tags
Route::resource('/tags', TagController::class);

// genres
Route::resource('/genres', GenreController::class);

// stores 
Route::resource('/stores', StoreController::class);


// platforms
Route::get('/platforms', [PlatformController::class, 'index']);
Route::get('/platforms/{slug}/{slug2?}', [PlatformController::class, 'show']);

// test
Route::get('test', function () {
    return Game::whereHas('platforms', function ($q) {
        $q->where('slug', 'pc')->with('platforms');
    })->get();
});
