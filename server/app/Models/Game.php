<?php

namespace App\Models;

use App\Models\Tag;
use App\Models\Esrb;
use App\Models\Post;
use App\Models\Genre;
use App\Models\Store;
use App\Models\Platform;
use App\Models\Developer;
use App\Models\Publisher;
use App\Models\Screenshot;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Game extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'slug',
        'name',
        'name_original',
        'description',
        'website',
        'released',
        'metacritic',
        'background_image',
        'background_image_hash',
        'metacritic_url',
        'tba',
        'game_series_count',
        'screenshots_count',
        'creators_count',
    ];
    public function screenshots()
    {
        return $this->hasMany(Screenshot::class);
    }
    public function esrbs()
    {
        return $this->hasMany(Esrb::class);
    }
    public function stores()
    {
        return $this->belongsToMany(Store::class);
    }
    public function genres()
    {
        return $this->belongsToMany(Genre::class);
    }
    public function platforms()
    {
        return $this->belongsToMany(Platform::class);
    }
    public function publishers()
    {
        return $this->belongsToMany(Publisher::class);
    }
    public function developers()
    {
        return $this->belongsToMany(Developer::class);
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
