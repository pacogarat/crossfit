<?php

namespace Crossfit\A6\FrontBundle\Controller;

use Facebook\FacebookRequest;
use Facebook\FacebookSession;
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
        $texts = $this->getDoctrine()->getManager()->getRepository('CrossfitA6FrontBundle:Text')->findBy(array(
            'page'=>'inicio'
        ));
        return array(
            'menu' => 'index',
            'texts' => $texts,
            'name' => 'crossfit'
        );
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
     * @Route("/que-es-crossfit", name="crossfit")
     * @Template()
     */
    public function crossfitAction()
    {
        return array(
            'menu' => 'crossfit',
            'submenu' => 'que_es',
            'name' => 'crossfit');
    }

    /**
     * @Route("/ejercicios-de-crossfit", name="ejercicios")
     * @Template()
     */
    public function ejerciciosAction()
    {
        return array(
            'menu' => 'crossfit',
            'submenu' => 'ejercicios',
            'name' => 'crossfit');
    }

    /**
     * @Route("/diccionario-de-crossfit", name="diccionario")
     * @Template()
     */
    public function diccionarioAction()
    {
        return array(
            'menu' => 'crossfit',
            'submenu' => 'diccionario',
            'name' => 'crossfit');
    }

    /**
     * @Route("/galeria-de-fotos", name="gallery")
     * @Template()
     */
    public function galleryAction()
    {
        /*
         * FacebookSession::setDefaultApplication('329667867100165', '5eb9dd8c8a7f5ecc6a6f3cf48a7d4361');

        // If you already have a valid access token:
        $session = new FacebookSession('329667867100165|1JERGE84NtiqPVsf73LQlj6wdDc');

        // If you're making app-level requests:
        // $session = FacebookSession::newAppSession();
        // To validate the session:
        try {
            $session->validate();

            $request = new FacebookRequest(
                $session,
                'GET',
                '/329667867100165/picture'
            );
            $response = $request->execute();
            $graphObject = $response->getGraphObject();
            var_dump($graphObject);die();
        } catch (FacebookRequestException $ex) {
            // Session not valid, Graph API returned an exception with the reason.
            echo $ex->getMessage();
        } catch (\Exception $ex) {
            // Graph API returned info, but it may mismatch the current app or have expired.
            echo $ex->getMessage();
        }*/
        return array(
            'menu' => 'gallery',
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
