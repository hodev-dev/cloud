<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;

Route::post('/sanctum/token', [AuthController::class,'issue_token']);

// games
Route::get('/games', [GameController::class,'index']);
