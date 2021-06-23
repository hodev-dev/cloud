<?php

namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    public function get_stores()
    {
        $stores = Store::all();
        return $stores;
    }
}
