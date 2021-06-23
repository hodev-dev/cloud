<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $response = Http::get('https://api.rawg.io/api/genres?key=a8175a54c4164e2ebb75d41fe6fba77b');
        $body = json_decode($response->body(), true);
        $results = $body['results'];
        foreach ($results as $result) {
            // dd($result);
            Genre::firstOrCreate(['id'=> $result['id'],'name' => $result['name'],'slug' => $result['slug']]);
        }
        echo "DB Genre Created For Page 1 \n";
    }
}
