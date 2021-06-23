<?php
namespace App\Helper;

require_once 'vendor/autoload.php';
 use kornrunner\Blurhash\Blurhash;

class BlurHashHelper
{
    public static function encode($image_file)
    {
        $image = imagecreatefromstring($image_file);
        $width = imagesx($image);
        $height = imagesy($image);
    
        $pixels = [];
        for ($y = 0; $y < $height; ++$y) {
            $row = [];
            for ($x = 0; $x < $width; ++$x) {
                $index = imagecolorat($image, $x, $y);
                $colors = imagecolorsforindex($image, $index);
    
                $row[] = [$colors['red'], $colors['green'], $colors['blue']];
            }
            $pixels[] = $row;
        }
    
        $components_x = 4;
        $components_y = 2;
        $blurhash = Blurhash::encode($pixels, $components_x, $components_y);
        $pixels = [];
        return $blurhash;
    }
}
