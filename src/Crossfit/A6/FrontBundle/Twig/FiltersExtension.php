<?php

namespace Crossfit\A6\FrontBundle\Twig;

use Crossfit\A6\FrontBundle\Entity\Text;
use Doctrine\Common\Collections\ArrayCollection;

class FiltersExtension extends \Twig_Extension
{
    public function getFilters()
    {
        return array(
            new \Twig_SimpleFilter('position', array($this, 'positionFilter')),
        );
    }

    public function positionFilter($array, $position)
    {
        $b = array_filter($array, function(Text $e) use ($position) {
            return ($e->getPosition() == $position);
        });

        if(is_array($b) && count($b) > 0) {
            return array_pop($b)->getText();
        }
        else return 'not found';
    }

    public function getName()
    {
        return 'filters_extension';
    }
}