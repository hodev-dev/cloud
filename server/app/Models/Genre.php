<?php

namespace App\Models;

use App\Models\Game;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Genre extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function games()
    {
        return $this->belongsToMany(Game::class, 'game_genre');
    }
}
