<?php

namespace AppBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\Navigation;

class LoadNavigationData implements FixtureInterface
{
    public function load(ObjectManager $manager)
    {
	$navigation = new Navigation();
        $navigation->setName('sortation');
        $navigation->setUrl('patient-list');
	$navigation->setTitle('Patienten-Liste');
	$navigation->setCollection('patient');
	$navigation->setIsGroup(false);
	$navigation->setFilter("{status: 1}, filterBox: [{type: 'text' , value: ['name']}]");

        $manager->persist($navigation);
	
	$navigation = new Navigation();
        $navigation->setName('group');
        $navigation->setUrl('patient-list');
	$navigation->setTitle('Patienten-Liste');
	$navigation->setCollection('patient');
	$navigation->setIsGroup(true);
	$navigation->setFilter("");
	
        $manager->persist($navigation);
	
	$navigation = new Navigation();
        $navigation->setName('archive');
        $navigation->setUrl('patient-list-archived');
	$navigation->setTitle('Liste der archivierten Patienten');
	$navigation->setCollection('patient');
	$navigation->setIsGroup(false);
	$navigation->setFilter("{status: 0}");

        $manager->persist($navigation);
        $manager->flush();
    }
}    