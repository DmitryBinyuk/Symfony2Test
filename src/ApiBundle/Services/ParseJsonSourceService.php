<?php

namespace ApiBundle\Services;

use Symfony\Component\Translation\Loader\JsonFileLoader;

class ParseJsonSourceService extends JsonFileLoader
{
    public function getJson()
    {
        $Loader = new JsonFileLoader();

	$a = $Loader->loadResource(__DIR__.'/data.json');
	
	return json_encode($a);
    }
}

