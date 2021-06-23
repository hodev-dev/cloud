<?php

namespace Database\Seeders;

use App\Models\Game;
use App\Models\Screenshot;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class GameSeeder extends Seeder
{
    public $page = 1;
    public $index = 0;
    public $next = 1;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function add_game($id)
    {
        $games_detail = Http::retry(100, 1000)->get("https://api.rawg.io/api/games/".$id."?key=a8175a54c4164e2ebb75d41fe6fba77b");
        $games_detail_response = json_decode($games_detail->body(), true);
        echo $this->index.'-'.$games_detail_response['name']. "\n";
        $background_image = file_get_contents($games_detail_response['background_image']);
        $extension = pathinfo($games_detail_response['background_image'], PATHINFO_EXTENSION);
        $store_path = "public/games"."/".$games_detail_response['slug']."/background_image/".$games_detail_response['slug'].'.'.$extension;
        $access_path = "/storage/games/".$games_detail_response['slug']."/background_image/".$games_detail_response['slug'].'.'.$extension;
        $save = Storage::put($store_path, $background_image);
        if ($save) {
            echo "-background saved succesfully". "\n";
            $save_game = Game::firstOrCreate([
                'id'=> $games_detail_response['id'],
                'name' => $games_detail_response['name'],
                'name_original' => $games_detail_response['name_original'],
                'slug' => $games_detail_response['slug'],
                'description' => $games_detail_response['description_raw'],
                'website' => $games_detail_response['website'],
                'released' => $games_detail_response['released'],
                'tba' => $games_detail_response['tba'],
                'background_image' => $access_path,
                'metacritic' => $games_detail_response['metacritic'],
                'metacritic_url' => $games_detail_response['metacritic_url'],
                'game_series_count' => $games_detail_response['game_series_count'],
                'screenshots_count' => $games_detail_response['screenshots_count'],
                'creators_count' => $games_detail_response['creators_count'],
            ]);
            if ($save_game) {
                echo "-game data saved successfully". "\n";
            } else {
                echo "-saving data of game failed!". "\n";
            }
        } else {
            echo "-saving background failed!". "\n";
        }
    }

    public function add_screenshots($id)
    {
        $screenshots_response = Http::retry(100, 1000)->get("https://api.rawg.io/api/games/$id/screenshots?key=a8175a54c4164e2ebb75d41fe6fba77b");
        $screenshots = json_decode($screenshots_response->body(), true);
        foreach ($screenshots['results'] as $screenshot) {
            $save = Screenshot::firstOrCreate([
                'game_id' => $id,
                'image' => $screenshot['image'],
                'width' => $screenshot['width'],
                'height' => $screenshot['height']
            ]);
            if ($save) {
                echo "-screenshot saved"."\n";
            }
        }
    }

    public function run()
    {
        $this->next = 'not null';
        $start = hrtime(true);
        while (!is_null($this->next)) {
            $start = hrtime(true);
            echo "Page:".$this->page. "\n";
            $games = Http::retry(100, 1000)->get("https://api.rawg.io/api/games?key=a8175a54c4164e2ebb75d41fe6fba77b&page=$this->page&page_size=50");
            $games_response = json_decode($games->body(), true);
            $games_results = $games_response['results'];
            foreach ($games_results as $game_result) {
                $this->add_game($game_result['id']);
                $this->add_screenshots($game_result['id']);
                $this->index++;
            }
            echo "Game Created For Page $this->page \n";
            if (!is_null($games_response['next'])) {
                $this->page++;
                $this->index= 0;
            } else {
                $this->next = null;
            }
        }
        $end = hrtime(true);
        echo "Time:". ($end - $start) / 1000000000 ."\n";
    }
}
