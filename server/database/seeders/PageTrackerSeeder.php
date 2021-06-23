<?php

namespace Database\Seeders;

use App\Models\PageTracker;
use Illuminate\Database\Seeder;

class PageTrackerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PageTracker::create([
            'page' => 1,
            'index' => 0,
        ]);
    }
}
