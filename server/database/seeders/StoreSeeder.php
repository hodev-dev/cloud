<?php

namespace Database\Seeders;

use App\Models\Store;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $response = Http::get('https://api.rawg.io/api/stores?key=a8175a54c4164e2ebb75d41fe6fba77b');
        $body = json_decode($response->body(), true);
        $results = $body['results'];
        foreach ($results as $result) {
            // dd($result);
            Store::firstOrCreate(['id'=> $result['id'],'name' => $result['name'],'domain' => $result['domain'],'slug' => $result['slug']]);
        }
        echo "DB Stores Created For Page 1 \n";
    }
}
