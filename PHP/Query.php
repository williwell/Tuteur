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
           $request = "SELECT * FROM cours where Code like '%$search%' or Nom like '%$search%' or CodeProgramme like '%$search%'";
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
           $request = "SELECT e.Matricule,e.Nom, e.Courriel, e.Téléphone, p.Nom
                        FROM tuteur t 
                        INNER JOIN eleves e ON t.Matricule=e.Matricule 
                        INNER JOIN programme p ON e.Programme=p.Code 
                        WHERE t.Disponible = 1 
                        ORDER BY t.Note";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }

   function getAllTutorClasses():array
   {
       $lines = array();
       try {
           $request = "SELECT t.Matricule, c.Nom
                        FROM tuteur t 
                        INNER JOIN cours_enseigner ce ON t.Matricule=ce.Matricule 
                        INNER JOIN cours c ON ce.Cours=c.Code 
                        WHERE t.Disponible = 1";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }

   function getMyTutor($matricule)
   {
   $lines = array();
       try {
           $request = "SELECT e.Matricule,e.Nom, e.Courriel, e.Téléphone, p.Nom
                       FROM tuteur t 
                       INNER JOIN eleves e ON t.Matricule=e.Matricule 
                       INNER JOIN programme p ON e.Programme=p.Code 
                       WHERE t.Disponible = 1 AND t.Matricule LIKE ".$matricule." 
                       ORDER BY t.Note";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }


function getTutorClasses($matricule)
{
    $lines = array();
    try {
        $request = "SELECT t.Matricule, c.Nom
                     FROM tuteur t 
                     INNER JOIN cours_enseigner ce ON t.Matricule=ce.Matricule 
                     INNER JOIN cours c ON ce.Cours=c.Code 
                     WHERE t.Disponible = 1 AND  t.Matricule LIKE ".$matricule;
        $result = $this->connexion->query($request);
        $lines = $result->fetchAll();

        return $lines;
    }
    catch(PDOException $e) {
        return $lines;
    }
}


}
