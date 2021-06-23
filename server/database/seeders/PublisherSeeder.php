<?php

namespace Database\Seeders;

use App\Models\Publisher;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class PublisherSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $next = 'not null';
        $page = 1;
        $start = hrtime(true);
        while (!is_null($next)) {
            $response = Http::retry(100, 100)->get("https://api.rawg.io/api/publishers?page=$page&page_size=50?key=a8175a54c4164e2ebb75d41fe6fba77b");
            $body = json_decode($response->body(), true);
            $results = $body['results'];
            foreach ($results as $result) {
                echo "-publisher".' '.$result['name'].' '.'created'."\n";
                Publisher::firstOrCreate(['id'=> $result['id'],'name' => $result['name'],'slug' => $result['slug']]);
            }
            echo "DB Publisher Created For Page: $page \n";
            sleep(0.25);
            if (!is_null($body['next'])) {
                $page++;
            } else {
                $next = null;
            }
        }
        $end = hrtime(true);
        echo "Time:". ($end - $start) / 1000000000 . "\n";
    }
}
