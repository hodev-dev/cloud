<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\GenreConroller;
use App\Http\Controllers\PlatformConroller;
use App\Http\Controllers\TagConroler;

Route::post('/sanctum/token', [AuthController::class, 'issue_token']);


Route::get('/games', [GameController::class, 'index']);
Route::get('/tags', [TagConroler::class, 'index']);
Route::get('/genres', [GenreConroller::class, 'index']);
Route::get('/platforms', [PlatformConroller::class, 'index']);
