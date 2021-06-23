<?php

namespace App\Http\Controllers;

use App\Models\Selection;
use Illuminate\Http\Request;

class SelectionController extends Controller
{
    public function selections_with_games()
    {
        $selection_game = Selection::with('games')->paginate(3);
        return $selection_game;
    }
}
