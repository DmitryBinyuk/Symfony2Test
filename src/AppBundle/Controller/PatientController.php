<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Navigation;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Patient;

class PatientController extends Controller
{
    /**
     * @Route("/patients")
     */
    public function indexAction(Request $request)
    {
        $group = 'Ittri, Mulham';// $request->query->get('group');
        $name = $request->query->get('name');
        $status = 0;//$request->query->get('status');

        $repository = $this->getDoctrine()->getRepository(Patient::class);

        $query = $repository->createQueryBuilder('p')
            ->orderBy('p.label', 'ASC');

        if(!is_null($group)){
            $query->where('p.patientGroup = :group');
            $query->setParameter('group', $group);
        }
    //	die(1);
        if(!is_null($status)){
            $query->andWhere('p.status = :status');
            $query->setParameter('status', $status);
        }

        $query = $query->getQuery();

        $patients = $query->getResult();
    //	var_dump($patients);
    //	die;


        $result = [];
        $serializer = $this->get('serializer');
        foreach ($patients as $key=>$patient){
            $result['collections']['patient'][] = $serializer->serialize($patient, 'json');
        }

        $repositoryNavigation = $this->getDoctrine()->getRepository(Navigation::class);
        $navigations = $repositoryNavigation->findAll();

        foreach ($navigations as $navigation){
            $result['navigation'][] = $serializer->serialize($navigation, 'json');
        }

//        var_dump($result['navigation']);
    //	var_dump($result['collections']['patient']);
//	die;
	
	$response = new Response();
	$response->setContent(json_encode(array(
	    'data' => $result,
	)));
	$response->headers->set('Content-Type', 'application/json');
	
	return $response;
	
	
	
	$response = new JsonResponse();
	$response->setData(array(
	    'data' => $result
	));

	return $response;

    }
    
      /**
     * @Route("/groups")
     */
    public function groupsAction()
    {
	$repository = $this->getDoctrine()->getRepository(Patient::class);
	
	$query = $repository->createQueryBuilder('p')
			    ->select('p.patientGroup')
			    ->distinct();
		
		
	$query = $query->getQuery();
	
	$groups = $query->getResult();
	var_dump($groups);
	die;
		
    }
}
