<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGameGenreTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('game_genre', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('game_id')->index();
            $table->foreign('game_id')->references('id')->on('games')->onDelete('cascade');
            $table->unsignedBigInteger('genre_id')->index();
            $table->foreign('genre_id')->references('id')->on('genres')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('game_genre');
    }
}
