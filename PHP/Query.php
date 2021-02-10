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


   function getMatiere():array
   {
       $lines = array();
       try {
           $request = "SELECT * FROM matiere";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }

   /*function newTutor($matricule,$nom,$courriel,$programme,$telephone,$enseignant):String
   {
       try{
           $request = "Insert Into élèves (Matricule, Nom, Courriel, Programme, Téléphone, Enseignant_ressource)
           VALUES ('$matricule','$nom','$courriel','$programme','$telephone','$enseignant')";
           $result = $this->connexion->query($request);
           return $result;
       }
       catch(PDOException $e) {
           return $result;
       }
   }*/
}