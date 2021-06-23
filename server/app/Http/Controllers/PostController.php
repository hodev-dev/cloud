<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function get_posts()
    {
        return Post::with('user', 'game')->paginate(2);
    }
}
