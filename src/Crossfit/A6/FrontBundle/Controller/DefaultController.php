<?php

namespace Crossfit\A6\FrontBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="index")
     * @Template()
     */
    public function indexAction()
    {
        return array(
            'menu' => 'index',
            'name' => 'crossfit');
    }

    /**
     * @Route("/contacto", name="contact")
     * @Template()
     */
    public function contactAction()
    {
        return array(
            'menu' => 'contact',
            'name' => 'crossfit');
    }

    /**
     * @Route("/entrena-con-nosotros", name="training")
     * @Template()
     */
    public function trainingAction()
    {
        return array(
            'menu' => 'training',
            'name' => 'crossfit');
    }

    /**
     * @Route("/clases-y-horarios", name="classes")
     * @Template()
     */
    public function classesAction()
    {
        return array(
            'menu' => 'classes',
            'name' => 'crossfit');
    }
}
