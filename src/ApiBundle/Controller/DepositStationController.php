<?php

namespace ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Translation\Loader\JsonFileLoader;
use Symfony\Component\Config\Loader\FileLoader;
use ApiBundle\Services\ParseJsonSourceService;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\HttpFoundation\JsonResponse;

class DepositStationController extends Controller
{
    /**
     * @Route("/get")
     * @Template()
     */
    public function getAction()
    {
	//prepare data for response from JSON file
        $jsonService = $this->get('parse.json.service');
        $json = $jsonService->getJson();
	
	$obj = json_decode($json);
	
	$labels = [];
	$groups = [];
	$statuses = [];
	$details = [];
	
	foreach($obj->collections->patient as $key=>$val){
	    if(!in_array($val->label, $labels)){
		$labels[] = $val->label;
	    }
	    
	    if(!in_array($val->group, $groups)){
		$groups[] = $val->group;
	    }
	    
	    if(!in_array($val->status, $statuses)){
		$statuses[] = $val->status;
	    }
	    
	    if(!in_array($val->details, $details)){
		$details['email'] = $val->details->email;
		$details['tel'] = $val->details->tel;
	    }
	}
	
	$responseArray = [];
	
	$responseArray['navigation'] = json_decode(json_encode($obj->navigation), true);
	
	for($i=1; $i<=20; $i++){
	    
	    $compinedValue = ['id' => $i,
			      'label' => $labels[rand(0, count($labels)-1)],
			      'group' => $groups[rand(0, count($groups)-1)],
			      'status' => $statuses[rand(0, count($statuses)-1)],
			      'details' => ['email' => $details['email'], 'tel' => $details['tel']],
	    		     ];
	    
	    $responseArray['collections']['patient'][] = $compinedValue;
	}

	$response = new JsonResponse(['data' => $responseArray]);
	
	return $response;
    }

}
