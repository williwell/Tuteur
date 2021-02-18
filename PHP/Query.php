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
           $request = "SELECT * FROM cours where Code like '%$search%' order by CodeProgramme";
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

   function getMatiere($NoCours):array
   {
       $lines = array();
       try{
           $request = "SELECT * from matières where NoCour = '$NoCours'";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();
           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }

   function getMyTutor($matricule):array
   {
   $lines = array();
       try {
           $request = "SELECT e.Matricule,e.Nom, e.Courriel, e.Téléphone, p.Nom
                       FROM tuteur t 
                       INNER JOIN eleves e ON t.Matricule=e.Matricule 
                       INNER JOIN programme p ON e.Programme=p.Code 
                       WHERE t.Matricule LIKE ".$matricule." 
                       ORDER BY t.Note";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }

   function getAider($matricule):array
   {
   $lines = array();
       try {
           $request = "SELECT e.Matricule,e.Nom, e.Courriel, e.Téléphone, p.Nom
                       FROM tutorer t 
                       INNER JOIN eleves e ON t.Matricule=e.Matricule 
                       INNER JOIN programme p ON e.Programme=p.Code 
                       WHERE t.Matricule LIKE ".$matricule;
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
        $request = "SELECT c.Code, c.Nom
                     FROM tuteur t 
                     INNER JOIN cours_enseigner ce ON t.Matricule=ce.Matricule 
                     INNER JOIN cours c ON ce.Cours=c.Code 
                     WHERE  t.Matricule LIKE ".$matricule;
        $result = $this->connexion->query($request);
        $lines = $result->fetchAll();

        return $lines;
    }
    catch(PDOException $e) {
        return $lines;
    }

   function getInfoCour($NoCours):array
   {
    $lines = array();
    try{
        $request = "SELECT * from cours where Code = '$NoCours'";
        $result = $this->connexion->query($request);
        $lines = $result->fetchAll();
        return $lines;
    }
    catch(PDOException $e) {
        return $lines;
    }
   }
}
   function newTutor($matricule,$nom,$courriel,$programme,$telephone,$enseignant)
   {
       try{
           $request = "Insert Into élèves VALUES ('$matricule','$nom','$courriel','$programme','$telephone','$enseignant')";
           $result = $this->connexion->exec($request);
           return $result;
       }
       catch(PDOException $e) {
           return $e;
       }
   }


   function getDispoTuteur($matricule){
        $lines = array();
        try {
            $request = "SELECT Jours,Session,Annee,CONCAT('Entre ',CONCAT(Heure_debut,CONCAT('h et ',CONCAT(Heure_fin,'h')))) FROM disponibiliter d Inner Join dispo_tuteur dt On d.Code = dt.Code_Dispo where dt.Matricule LIKE ".$matricule;
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();

            return $lines;
        }
        catch(PDOException $e) {
            return $lines;
        }
    }


    function getDispoTuteurJour($matricule,$jour){
        $lines = array();
        try {
            $request = "SELECT Jours,Session,Annee,CONCAT('Entre ',CONCAT(Heure_debut,CONCAT('h et ',CONCAT(Heure_fin,'h')))) FROM disponibiliter d Inner Join dispo_tuteur dt On d.Code = dt.Code_Dispo where dt.Matricule LIKE ".$matricule." AND d.Jours LIKE '%".$jour."%'";
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();
    
            return $lines;
        }
        catch(PDOException $e) {
            return $lines;
        }
    }

   function creerComtpe($User,$Mdp):String
   {
       try{
           $request = "insert into compte values($User,$Mdp)";
           $result = $this->connexion->query($request);
           return $result;
       }
       catch(PDOException $e) {
           return $result;
       }
   }

   function login($User,$Mdp)
   {
       $lines = array();
       try {
           $request = "SELECT COUNT(Matricule) FROM tuteur WHERE Matricule LIKE ".$User." AND password LIKE ".$Mdp;
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

            if($lines[0][0]==1){
                setcookie("isLogged", "1", time() + (86400 * 30), "/");
                setcookie("MatriculeLogged", $User, time() + (86400 * 30), "/"); 
                echo "Value is: " .$_COOKIE["isLogged"];
                echo "Value is: " .$_COOKIE["MatriculeLogged"];
                return $User;
            }
            else{
                $request = "SELECT COUNT(Matricule) FROM tutorer WHERE Matricule LIKE ".$User." AND password LIKE".$Mdp;
                $result = $this->connexion->query($request);
                $lines = $result->fetchAll();

                if($lines[0][0]==1){
                    setcookie("isLogged", "1", time() + (86400 * 30), "/");
                    setcookie("MatriculeLogged", $User, time() + (86400 * 30), "/");
                    return $User;
                }
            }

       }
       catch(PDOException $e) {
           return $lines;
       }
   }


   function getTutoratDemand($matricule){
    $lines = array();
    try{
        $request = "SELECT tuteur.Nom, tutorer.Nom, st.date, st.Heure,st.accepter,st.Matricule_Tuteur, st.Matricule_Tutorer FROM session_tutorat st INNER JOIN eleves tuteur ON st.Matricule_Tuteur=tuteur.Matricule INNER JOIN eleves tutorer ON st.Matricule_Tutorer=tutorer.Matricule WHERE Matricule_Tuteur  LIKE ".$matricule." OR Matricule_Tutorer LIKE ".$matricule;
        $result = $this->connexion->query($request);
        $lines = $result->fetchAll();
        return $lines;
    }
    catch(PDOException $e) {
        return $lines;
    }
   }


}
