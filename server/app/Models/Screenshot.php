<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Screenshot extends Model
{
    use HasFactory;
    protected $fillable = [
        'game_id',
        'image',
        'color',
        'image_hash',
        'width',
        'height',
    ];
}
