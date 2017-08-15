<?php

namespace ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Translation\Loader\JsonFileLoader;
use ApiBundle\Services\ParseJsonSourceService;
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
        $jsonObject = $jsonService->getJson();
	
        $labels = [];
        $groups = [];
        $statuses = [];
        $details = [];
	
	    foreach($jsonObject->collections->patient as $key=>$value){
            if(!in_array($value->label, $labels)){
                $labels[] = $value->label;
            }

            if(!in_array($value->group, $groups)){
                $groups[] = $value->group;
            }

            if(!in_array($value->status, $statuses)){
                $statuses[] = $value->status;
            }

            if(!in_array($value->details, $details)){
                $details['email'] = $value->details->email;
                $details['tel'] = $value->details->tel;
	        }
	    }
	
        $responseArray = [];

        $responseArray['navigation'] = json_decode(json_encode($jsonObject->navigation), true);

        //create sequence of 20 000 elements woth random values from json file
        for($i=1; $i<=20000; $i++){

            $compinedValue = ['id' => $i,
                      'label' => $labels[rand(0, count($labels)-1)],
                      'group' => $groups[rand(0, count($groups)-1)],
                      'status' => $statuses[rand(0, count($statuses)-1)],
                      'details' => ['email' => $details['email'], 'tel' => $details['tel']],
                         ];

            $responseArray['collections']['patient'][] = $compinedValue;
        }

        $response = new JsonResponse(['data' => $responseArray]);
        $response->headers->set('Access-Control-Allow-Origin', 'http://localhost:8080');

        return $response;
    }

}
