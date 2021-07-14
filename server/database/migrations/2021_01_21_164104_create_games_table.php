<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->index();
            $table->string('slug')->nullable();
            $table->string('name')->nullable();
            $table->string('name_original')->nullable();
            $table->text('background_image')->nullable();
            $table->string('color');
            $table->text('description')->nullable();
            $table->text('website')->nullable();
            $table->date('released')->nullable();
            $table->boolean('tba')->nullable();
            $table->integer('metacritic')->nullable();
            $table->string('metacritic_url')->nullable();
            $table->integer('game_series_count')->nullable();
            $table->integer('screenshots_count')->nullable();
            $table->integer('creators_count')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_store');
        Schema::dropIfExists('games');
    }
}
