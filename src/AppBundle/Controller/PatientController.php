<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Navigation;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Patient;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;

class PatientController extends Controller
{
    /**
     * Get patients with filters
     *
     * @Route("/patients")
     */
    public function indexAction(Request $request)
    {
        $group = $request->query->get('group');
        $name = $request->query->get('name');
        $status = $request->query->get('status');

        $normalizer = new GetSetMethodNormalizer();

        $result = [];

        //Get navigation data
        $repositoryNavigation = $this->getDoctrine()->getRepository(Navigation::class);
        $navigations = $repositoryNavigation->findAll();
        $result['navigation'] = [];

        foreach ($navigations as $navigation){
            $normalizedNavigation = $normalizer->normalize($navigation);
            array_push($result['navigation'], $normalizedNavigation);
        }
	
	    //Get patient data
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

        if(!is_null($name)){
            $query->andWhere("LOWER(p.label) LIKE LOWER(:label)");
            $query->setParameter('label', $name);
        }

        $query = $query->getQuery();
        $patients = $query->getResult();

        $result['collections']['patient'] = array();

        foreach ($patients as $key=>$patient){
            $normalizedPatient = $normalizer->normalize($patient);
            array_push($result['collections']['patient'], $normalizedPatient);
        }

	$response = new Response();
	$response->setContent(json_encode(array(
	    'data' => $result,
	)));
	$response->headers->set('Content-Type', 'application/json');

	return $response;
    }
    
      /**
       * Get list of groups
       *
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

        $response = new Response();
        $response->setContent(json_encode(array(
            'data' => $groups,
        )));

        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
