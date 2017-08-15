<?php

namespace ApiBundle\Services;

use Symfony\Component\Translation\Loader\JsonFileLoader;

class ParseJsonSourceService extends JsonFileLoader
{
    /**
     * Method for parse JSON file with data
     *
     * @return mixed
     */
    public function getJson()
    {
        try {
            $file = file_get_contents(__DIR__.'/data.json', 'uk');
            $content = json_decode($file);
        } catch (\Exception $e) {
	    throw new HttpException(500, "File parsing exeption!");
        }

	return $content;
    }
}

