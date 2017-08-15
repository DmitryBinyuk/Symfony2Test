<?php

namespace ApiBundle\Services;

use Symfony\Component\Translation\Loader\JsonFileLoader;

class ParseJsonSourceService extends JsonFileLoader
{
    public function getJson()
    {
        $Loader = new JsonFileLoader();

	$file = $Loader->load(__DIR__.'/data.json');
	
	return json_encode($file);
    }
}

