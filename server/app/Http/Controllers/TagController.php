<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function get_tags()
    {
        $tags = Tag::paginate(20);
        return $tags;
    }
}
