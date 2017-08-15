<?php

namespace ApiBundle\Services;

use Symfony\Component\Translation\Loader\JsonFileLoader;

class ParseJsonSourceService extends JsonFileLoader
{
    public function getJson()
    {
        $file = file_get_contents(__DIR__.'/data.json', 'uk');
	
	    return json_decode($file);
    }
}

