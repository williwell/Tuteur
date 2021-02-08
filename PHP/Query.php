<?php
require_once('ConnexionBD.php');

class Query
{
    private $connexion;

    public function __construct()
    {
        $constants = new ConnectionDB();
        $this->connexion = $constants->getConnexion();
    }


   function getCours($search):array
   {
       $lines = array();
       try {
           $request = "SELECT * FROM cours where Code like '%$search%' or Nom like '%$search%' or CodeProgramme like '%$search%' limit 4";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }
}