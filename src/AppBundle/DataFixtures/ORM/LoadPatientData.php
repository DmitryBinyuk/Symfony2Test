<?php

namespace AppBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Entity\Patient;

class LoadPatientData implements FixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $patient = new Patient();
        $patient->setLabel('Vier Testfall');
        $patient->setPatientGroup('Mende, Manuela');
	$patient->setStatus(1);
	$patient->setEmail('test@test.de');
	$patient->setTel('1234');

        $manager->persist($patient);

	$patient = new Patient();
        $patient->setLabel('Beata Brysz');
        $patient->setPatientGroup('Ittri, Mulham');
	$patient->setStatus(1);
	$patient->setEmail('test@test.de');
	$patient->setTel('1234');

        $manager->persist($patient);

	$patient = new Patient();
        $patient->setLabel('Claus Nolte');
        $patient->setPatientGroup('Ittri, Mulham');
	$patient->setStatus(1);
	$patient->setEmail('test@test.de');
	$patient->setTel('1234');

        $manager->persist($patient);

	$patient = new Patient();
        $patient->setLabel('Andrea Kuckuck');
        $patient->setPatientGroup('Mende, Manuela');
	$patient->setStatus(1);
	$patient->setEmail('test@test.de');
	$patient->setTel('1234');

        $manager->persist($patient);

	$patient = new Patient();
        $patient->setLabel('Frank Weigel');
        $patient->setPatientGroup('Mende, Manuela');
	$patient->setStatus(1);
	$patient->setEmail('test@test.de');
	$patient->setTel('1234');

        $manager->persist($patient);

	$patient = new Patient();
        $patient->setLabel('Marie Meier');
        $patient->setPatientGroup('Ittri, Mulham');
	$patient->setStatus(1);
	$patient->setEmail('test@test.de');
	$patient->setTel('1234');

        $manager->persist($patient);

	$patient = new Patient();
        $patient->setLabel('Heike Otto');
        $patient->setPatientGroup('Ittri, Mulham');
	$patient->setStatus(0);
	$patient->setEmail('test@test.de');
	$patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Vier Testfall');
        $patient->setPatientGroup('Mende, Manuela');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Beata Brysz');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Claus Nolte');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Andrea Kuckuck');
        $patient->setPatientGroup('Mende, Manuela');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Frank Weigel');
        $patient->setPatientGroup('Mende, Manuela');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Marie Meier');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Heike Otto');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(0);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Vier Testfall');
        $patient->setPatientGroup('Mende, Manuela');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Beata Brysz');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Claus Nolte');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Andrea Kuckuck');
        $patient->setPatientGroup('Mende, Manuela');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Frank Weigel');
        $patient->setPatientGroup('Mende, Manuela');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Marie Meier');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Heike Otto');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(0);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Vier Testfall');
        $patient->setPatientGroup('Mende, Manuela');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Beata Brysz');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Claus Nolte');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Andrea Kuckuck');
        $patient->setPatientGroup('Mende, Manuela');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Frank Weigel');
        $patient->setPatientGroup('Mende, Manuela');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Marie Meier');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(1);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);

        $patient = new Patient();
        $patient->setLabel('Heike Otto');
        $patient->setPatientGroup('Ittri, Mulham');
        $patient->setStatus(0);
        $patient->setEmail('test@test.de');
        $patient->setTel('1234');

        $manager->persist($patient);
        $manager->flush();
    }
}
