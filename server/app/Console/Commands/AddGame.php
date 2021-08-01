<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Tag;
use App\Models\Esrb;
use App\Models\Game;
use App\Models\Developer;
use App\Models\Publisher;
use App\Models\Screenshot;
use App\Models\PageTracker;
use Illuminate\Bus\Queueable;
use App\Helper\BlurHashHelper;
use Illuminate\Support\Facades\Http;
use Intervention\Image\Facades\Image;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use ColorThief\ColorThief;
use Mexitek\PHPColors\Color;

class AddGame extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'game:fetch';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public $tries = 25;
    public $maxExceptions = 1000;

    public $page;
    public $index;
    public $next = 1;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $page_tracker = PageTracker::first();
        $this->page = $page_tracker->page;
        $this->index = $page_tracker->index;
    }

    /**
     * Execute the job.
     *
     * @return void
     */

    public function generateColor($image_path)
    {
        $dominantColor = ColorThief::getPalette($image_path, 2, 2)[0];
        $color = sprintf("#%02x%02x%02x", $dominantColor[0], $dominantColor[1], $dominantColor[2]);
        $colorObject = new Color($color);
        if ($colorObject->isLight()) {
            $newColor = ColorThief::getPalette($image_path, 2, 2)[1];
            return sprintf("#%02x%02x%02x", $newColor[0], $newColor[1], $newColor[2]);
        }
        return $color;
    }

    public function add_stores($stores, $id)
    {
        foreach ($stores as $store) {
            if (!is_null($store["store"]) && !is_null($store["store"]['id'])) {
                echo "-" . "store" . ' ' . $store['store']['name'] . ' ' . 'attached' . "\n";
                Game::where('id', $id)->first()->stores()->sync($store["store"]['id'], false);
            }
        }
    }

    public function add_genres($genres, $id)
    {
        foreach ($genres as $genre) {
            if (!is_null($genre['id'])) {
                echo "-" . "genre" . ' ' . $genre['name'] . ' ' . 'attached' . "\n";
                Game::where('id', $id)->first()->genres()->sync($genre['id'], false);
            }
        }
    }

    public function add_platforms($platforms, $id)
    {
        foreach ($platforms as $platform) {
            if (!is_null($platform["platform"]) && !is_null($platform["platform"]['id'])) {
                echo "-" . "platform" . ' ' . $platform["platform"]['name'] . ' ' . 'attached' . "\n";
                Game::where('id', $id)->first()->platforms()->sync($platform["platform"]['id'], false);
            }
        }
    }

    public function add_esrbs($esrb, $id)
    {
        if (!is_null($esrb)) {
            $save = Esrb::firstOrCreate([
                'game_id' => $id,
                'name' => $esrb["name"],
                'slug' => $esrb["slug"],
            ]);
            if ($save) {
                echo "-" . "esrb" . ' ' . $esrb["name"] . ' ' . 'attached' . "\n";
            }
        }
    }

    public function add_tags($tags, $id)
    {
        foreach ($tags as $tag) {
            if (!is_null($tag)) {
                $db_tag = Tag::firstOrCreate(
                    [
                        'slug' => $tag['slug']
                    ],
                    [
                        'id' => $tag['id'],
                        'name' => $tag['name'],
                        'slug' => $tag['slug'],
                    ]
                );
                if ($db_tag) {
                    Game::where('id', $id)->first()->tags()->sync($db_tag->id, false);
                    echo "-" . "tag" . ' ' . $tag['name'] . ' ' . 'attached' . "\n";
                } else {
                    echo "-tag not found" . "\n";
                }
            }
        }
    }

    public function add_publisher($publishers, $id)
    {
        foreach ($publishers as $publisher) {
            if (!is_null($publisher)) {
                $db_publisher = Publisher::firstOrCreate(
                    [
                        'slug' => $publisher['slug']
                    ],
                    [
                        'name' => $publisher['name'],
                        'slug' => $publisher['slug'],
                    ]
                );
                echo "-" . "publisher" . ' ' . $publisher['name'] . ' ' . 'attached' . "\n";
                if ($db_publisher) {
                    Game::where('id', $id)->first()->publishers()->sync($db_publisher->id, false);
                }
            }
        }
    }

    public function add_developer($developers, $id)
    {
        foreach ($developers as $developer) {
            if (!is_null($developer)) {
                $db_developer = Developer::firstOrCreate(
                    [
                        'slug' => $developer['slug']
                    ],
                    [
                        'name' => $developer['name'],
                        'slug' => $developer['slug'],
                    ]
                );
                echo "-" . "developer" . ' ' . $developer['name'] . ' ' . 'attached' . "\n";
                if ($db_developer) {
                    Game::where('id', $id)->first()->developers()->sync($db_developer->id, false);
                }
            }
        }
    }

    public function add_screenshots($id)
    {
        $screenshots_response = Http::retry(100, 1000)->get("https://api.rawg.io/api/games/$id/screenshots?key=a8175a54c4164e2ebb75d41fe6fba77b");
        $game_info = Game::where('id', $id)->first();
        $screenshots = json_decode($screenshots_response->body(), true);
        foreach ($screenshots['results'] as $index => $screenshot) {
            $image = file_get_contents($screenshot['image']);
            $extension = pathinfo($screenshot['image'], PATHINFO_EXTENSION);
            $store_path = "public/games" . "/" . $game_info['slug'] . "/screenshots/" . $game_info['slug'] . $index . '.' . $extension;
            $access_path = "/storage/games/" . $game_info['slug'] . "/screenshots/" . $game_info['slug'] . $index . '.' . $extension;
            $new_image = Image::make($image);
            echo "-optimzing screenshot image" . "\n";
            $optimized_image = (string) $new_image->resize(1920, 1080)->encode('jpg', 50);
            $save_screenshot = Storage::put($store_path, $optimized_image);
            echo "-screenshot image saved" . "\n";
            $color = $this->generateColor("http://localhost:8000" . $access_path);
            echo "-color image saved" . "\n";
            $save = Screenshot::firstOrCreate([
                'game_id' => $id,
                'image' => $access_path,
                'color' => $color,
                'width' => $screenshot['width'],
                'height' => $screenshot['height'],
            ]);
            if ($save) {
                echo "-screenshot saved" . "\n";
            }
        }
    }



    public function add_game($id)
    {
        $games_detail = Http::retry(100, 1000)->get("https://api.rawg.io/api/games/" . $id . "?key=a8175a54c4164e2ebb75d41fe6fba77b");
        $games_detail_response = json_decode($games_detail->body(), true);
        echo $this->index . '-' . $games_detail_response['name'] . "\n";
        echo $games_detail_response['background_image'] . "\n";
        $image = file_get_contents($games_detail_response['background_image']);
        $extension = pathinfo($games_detail_response['background_image'], PATHINFO_EXTENSION);
        $store_path = "public/games" . "/" . $games_detail_response['slug'] . "/background_image/" . $games_detail_response['slug'] . '.' . $extension;
        $access_path = "/storage/games/" . $games_detail_response['slug'] . "/background_image/" . $games_detail_response['slug'] . '.' . $extension;
        $new_image = Image::make($image);
        echo "-optimzing image" . "\n";
        $optimized_image = (string) $new_image->fit(640, 480)->sharpen(5)->encode('jpg', 60);
        Storage::put($store_path, $optimized_image);
        echo "-background image saved" . "\n";
        $color = $this->generateColor("http://localhost:8000" . $access_path);
        echo "-color image saved" . "\n";
        $save_game = Game::firstOrCreate([
            'id' => $games_detail_response['id'],
            'name' => $games_detail_response['name'],
            'name_original' => $games_detail_response['name_original'],
            'slug' => $games_detail_response['slug'],
            'background_image' => $access_path,
            'color' => $color,
            'description' => $games_detail_response['description_raw'],
            'website' => $games_detail_response['website'],
            'released' => date('Y-m-d', strtotime($games_detail_response['released'])),
            'tba' => $games_detail_response['tba'],
            'metacritic' => $games_detail_response['metacritic'],
            'metacritic_url' => $games_detail_response['metacritic_url'],
            'game_series_count' => $games_detail_response['game_series_count'],
            'screenshots_count' => $games_detail_response['screenshots_count'],
            'creators_count' => $games_detail_response['creators_count'],
        ]);
        if ($save_game) {
            echo "-game data saved successfully" . "\n";
            $this->add_stores($games_detail_response['stores'], $games_detail_response['id']);
            $this->add_genres($games_detail_response['genres'], $games_detail_response['id']);
            $this->add_platforms($games_detail_response['platforms'], $games_detail_response['id']);
            $this->add_esrbs($games_detail_response['esrb_rating'], $games_detail_response['id']);
            $this->add_tags($games_detail_response['tags'], $games_detail_response['id']);
            $this->add_publisher($games_detail_response['publishers'], $games_detail_response['id']);
            $this->add_developer($games_detail_response['developers'], $games_detail_response['id']);
            $blur_hash = null;
            $image = null;
            $save_screenshot = null;
            $save_game = null;
        } else {
            echo "-saving data of game $this->index $this->page failed!" . "\n";
        }
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->next = 'not null';
        $start = hrtime(true);
        while (!is_null($this->next)) {
            $page_tracker = PageTracker::first();
            $this->page = $page_tracker->page;
            $this->index = $page_tracker->index;
            $start = hrtime(true);
            echo "Page:" . $this->page . "\n";
            $games = Http::retry(100, 1000)->get("https://api.rawg.io/api/games?key=a8175a54c4164e2ebb75d41fe6fba77b&page=$this->page&page_size=50");
            $games_response = json_decode($games->body(), true);
            $games_results = $games_response['results'];
            foreach ($games_results as $index => $game_result) {
                if ($index >= $this->index) {
                    $this->add_game($game_result['id']);
                    // $this->add_screenshots($game_result['id']);
                    $this->index++;
                    PageTracker::where('id', 1)->update(['index' => $this->index]);
                }
            }
            echo "Game Created For Page $this->page \n";
            if (!is_null($games_response['next'])) {
                $this->page++;
                PageTracker::where('id', 1)->update(['page' => $this->page]);
                $this->index = 0;
                PageTracker::where('id', 1)->update(['index' => $this->index]);
            } else {
                $this->next = null;
            }
        }
        $end = hrtime(true);
        echo "Time:" . ($end - $start) / 1000000000 . "\n";
    }
}
