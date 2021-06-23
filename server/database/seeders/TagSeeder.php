<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class TagSeeder extends Seeder
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
            $start = hrtime(true);
            $response = Http::retry(100, 100)->get("https://api.rawg.io/api/tags?page=$page&page_size=50?key=a8175a54c4164e2ebb75d41fe6fba77b");
            $body = json_decode($response->body(), true);
            $results = $body['results'];
            foreach ($results as $result) {
                // dd($result);
                echo "-tag".' '.$result['name'].' '.'created'."\n";
                Tag::firstOrCreate(['id'=> $result['id'],'name' => $result['name'],'slug' => $result['slug']]);
            }
            echo "DB Tags Created For Page $page \n";
            sleep(1);
            if (!is_null($body['next'])) {
                $page++;
            } else {
                $next = null;
            }
        }
        $end = hrtime(true);
        echo "Time:". ($end - $start) / 1000000000 ."\n";
    }
}
