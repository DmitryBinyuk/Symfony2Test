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
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;

class PatientController extends Controller
{
    /**
     * @Route("/patients")
     */
    public function indexAction(Request $request)
    {
        $group = $request->query->get('group');
        $name = $request->query->get('name');
        $status = $request->query->get('status');

        $repository = $this->getDoctrine()->getRepository(Patient::class);

        $query = $repository->createQueryBuilder('p')
            ->orderBy('p.label', 'ASC');

        if(!is_null($group)){
            $query->where('p.patientGroup = :group');
            $query->setParameter('group', $group);
        }

        if(!is_null($status)){
            $query->andWhere('p.status = :status');
            $query->setParameter('status', $status);
        }

        $query = $query->getQuery();
        $patients = $query->getResult();

        $result = [];

        $result['collections']['patient'] = array();

        $normalizer = new GetSetMethodNormalizer();

        foreach ($patients as $key=>$patient){
            $normalizedPatient = $normalizer->normalize($patient);
            array_push($result['collections']['patient'], $normalizedPatient);
        }

        $repositoryNavigation = $this->getDoctrine()->getRepository(Navigation::class);
        $navigations = $repositoryNavigation->findAll();
        $result['navigation'] = [];

        foreach ($navigations as $navigation){
            $normalizedNavigation = $normalizer->normalize($navigation);
            array_push($result['navigation'], $normalizedNavigation);
        }

//        var_dump($result['navigation']);
////    	var_dump($result['collections']['patient']);
//	die;

	$response = new Response();
	$response->setContent(json_encode(array(
	    'data' => $result,
	)));
	$response->headers->set('Content-Type', 'application/json');

	return $response;
	
	
//	$response = new JsonResponse();
//	$response->setData(array(
//	    'data' => $result
//	));
//
//	return $response;

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
	
//	var_dump(array_values($groups1));
//        die;
//
//        $normalizer = new GetSetMethodNormalizer();
//        $groups = $normalizer->normalize($groups1);
//
//        var_dump($groups);
//        die;

        $response = new Response();
        $response->setContent(json_encode(array(
            'data' => $groups,
        )));

        $response->headers->set('Content-Type', 'application/json');

        return $response;
		
    }
}
