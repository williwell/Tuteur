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

   function getAllTutor():array
   {
       $lines = array();
       try {
           $request = "SELECT e.Matricule,e.Nom, e.Courriel, e.Téléphone, e.Programme FROM tuteur t INNER JOIN élèves e ON t.Matricule=e.Matricule  WHERE t.Disponible = 1 ORDER BY t.Note";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }
}