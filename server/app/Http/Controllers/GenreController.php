<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    public function get_genres_with_games()
    {
        $games_genres = Genre::take(6)->pagninate(1);
        return $games_genres;
    }
    public function get_genres()
    {
        $genres = Genre::all();
        return $genres;
    }
}
