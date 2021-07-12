<?php

namespace Database\Seeders;

use Database\Seeders\TagSeeder;
use Illuminate\Database\Seeder;
use Database\Seeders\GameSeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\GenreSeeder;
use Database\Seeders\PlatformSeeder;
use Database\Seeders\PageTrackerSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
           GenreSeeder::class,
           StoreSeeder::class,
           PlatformSeeder::class,
           PageTrackerSeeder::class,
        //    GameSeeder::class,
            //   PublisherSeeder::class,
        //    TagSeeder::class
        ]);
    }
}
