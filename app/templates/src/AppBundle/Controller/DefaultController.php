<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="home", options={"expose"=true})
     */
    public function indexAction()
    {
        // replace this example code with whatever you need
        //return $this->redirectToRoute('nelmio_api_doc_index', array(), 301);

        return $this->render('layout.html.twig');
    }

    /**
     * @Route("/tables", name="tables", options={"expose"=true})
     */
    public function tablesAction(){

        return array('title'=>'pagina');

    }
}
