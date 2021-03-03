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
           $request = "SELECT * FROM cours where    Code like '%$search%' or
                                                    CodeProgramme like '%$search%'or
                                                    Nom like '%$search%' 
                                                    order by CodeProgramme";
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
           $request = "SELECT e.Matricule,e.Nom, e.Courriel, e.Telephone, p.Nom, e.Prenom
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
           $request = "SELECT e.Matricule,e.Nom, e.Courriel, e.Telephone, p.Nom, t.password, e.prenom
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
           $request = "SELECT e.Matricule,e.Nom, e.Courriel, e.Telephone, p.Nom, t.password, e.prenom
                       FROM tutorer t 
                       INNER JOIN eleves e ON t.Matricule=e.Matricule 
                       INNER JOIN programme p ON e.Programme=p.Code 
                       WHERE t.Matricule LIKE ".$matricule;
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();
           return  $lines;
       }
        catch(PDOException $e) {
            return $e;
        }
    }

    function getTutorClasses($matricule):array
    {
        $lines = array();
        try {
            $request = "SELECT c.Code, c.Nom FROM tuteur t INNER JOIN cours_enseigner ce ON t.Matricule=ce.Matricule INNER JOIN cours c ON ce.Cours=c.Code WHERE  t.Matricule LIKE ".$matricule;
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();

            return $lines;
        }
        catch(PDOException $e) {
            return $lines;
        }
    }

    function getInfoCour($NoCours):array
    {
        $lines = array();
        try{
            $request = "SELECT * from cours where Code = '".$NoCours."'";
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();
            return $lines;
        }
        catch(PDOException $e) {
            return $lines;
        }
    }

   function newEtudiant($matricule,$nom,$prenom,$courriel,$programme,$telephone,$enseignant){
    $request = "Insert Into élèves VALUES ('$matricule','$prenom $nom','$courriel','$programme','$telephone','$enseignant')";
    $result = $this->connexion->exec($request);
     echo json_encode($result);
    return $result;
   }

   function Tutor($matricule,$password){
    try{
    $request = "Insert Into tuteur(Matricule,password) VALUES ('$matricule', '$password')";
    $result = $this->connexion->exec($request);
    return $result;
   }
   catch(PDOException $e) {
    return $e;
    }
}
   
   function newTutor($matricule,$nom,$courriel,$programme,$telephone,$enseignant)
    {
       try{
           $request = "Insert Into élèves VALUES (".$matricule.",".$nom.",".$courriel.",".$programme.",".$telephone.",".$enseignant.")";
           $result = $this->connexion->exec($request);
            echo json_encode($matricule);
           return $result;
        }
       catch(PDOException $e) {
           return $e;
        }
    }

    function Tutore($matricule,$password){
        try{
        $request = "Insert Into tutorer(Matricule,password) VALUES ('$matricule', '$password')";
        $result = $this->connexion->exec($request);
        return $result;
       }
       catch(PDOException $e) {
        return $e;
       }
    }

    
   function login($User,$Mdp)
   {
      $lines = array();
      try {
          $request = "SELECT COUNT(Matricule) FROM tuteur WHERE Matricule LIKE '".$User."' AND password LIKE '".$Mdp."'";
          $result = $this->connexion->query($request);
          $lines = $result->fetchAll();

           if($lines[0][0]==1){
               setcookie("isLogged", "1", time() + (86400 * 30), "/");
               setcookie("MatriculeLogged", $User, time() + (86400 * 30), "/"); 
               setcookie("isTutor", "1", time() + (86400 * 30), "/"); 
               echo "Value is: " .$_COOKIE["isLogged"];
               echo "Value is: " .$_COOKIE["MatriculeLogged"];
               echo "Value is: " .$_COOKIE["isTutor"];
               return $User;
           }
           else{
               try {
               $request = "SELECT COUNT(Matricule) FROM tutorer WHERE Matricule LIKE '".$User."' AND password LIKE '".$Mdp."'";
               $result = $this->connexion->query($request);
               $lines = $result->fetchAll();

               if($lines[0][0]==1){
                   setcookie("isLogged", "1", time() + (86400 * 30), "/");
                   setcookie("MatriculeLogged", $User, time() + (86400 * 30), "/");
                   setcookie("isTutor", "2", time() + (86400 * 30), "/");
                   return $User;
               }
               else{
                   try {
                       $request = "SELECT COUNT(a.username) FROM compteadmin a WHERE a.username LIKE '".$User."' AND a.password LIKE '".$Mdp."'";
                       $result = $this->connexion->query($request);
                       $lines = $result->fetchAll();
       
                       if($lines[0][0]==1){
                           setcookie("isLogged", "1", time() + (86400 * 30), "/");
                           setcookie("MatriculeLogged", $User, time() + (86400 * 30), "/");
                           setcookie("isTutor", "3", time() + (86400 * 30), "/");
                           return 3;
                       }
                       else{
                         return "nope";
                       }
                   }
                   catch(PDOException $e) {
                       return $e;
                   }
               }
               }
               catch(PDOException $e) {
                   return $e;
               }
           }

      }
      catch(PDOException $e) {
          return $e;
      }
   }

  



   function getDispoTuteur($matricule){
        $lines = array();
        try {
            $request = "SELECT Jours,Session,Annee,CONCAT('Entre ',CONCAT(Heure_debut,CONCAT('h et ',CONCAT(Heure_fin,'h')))), d.Session_tutorat   FROM disponibiliter d Inner Join dispo_tuteur dt On d.Code = dt.Code_Dispo where dt.Matricule LIKE ".$matricule;
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

    function getAllDispo($jour,$debut,$fin,$matricule){
        $lines = array();
        try {
            $request = "SELECT Jours,Session,Annee,CONCAT('Entre ',CONCAT(Heure_debut,CONCAT('h et ',CONCAT(Heure_fin,'h')))), d.Code,Heure_debut,Heure_fin, (SELECT dt.Matricule FROM dispo_tuteur dt WHERE dt.Matricule = 1734055 AND d.Code = dt.Code_Dispo) FROM disponibiliter d where d.Jours LIKE '%".$jour."%' AND Heure_debut>=".$debut." AND Heure_debut<".$fin." AND Heure_fin<=".$fin." AND Heure_fin>".$debut." ORDER BY Heure_debut";
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

   function getTutoratDemand($matricule){
        $lines = array();
        try{
            $request = "SELECT tuteur.Nom, tutorer.Nom, st.date, st.Heure,st.accepter,st.Matricule_Tuteur, st.Matricule_Tutorer,tuteur.Prenom,tutorer.prenom, st.Session_tutorat  FROM session_tutorat st INNER JOIN eleves tuteur ON st.Matricule_Tuteur=tuteur.Matricule INNER JOIN eleves tutorer ON st.Matricule_Tutorer=tutorer.Matricule WHERE Matricule_Tuteur  LIKE ".$matricule." OR Matricule_Tutorer LIKE ".$matricule;
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();
            return $lines;
        }
        catch(PDOException $e) {
            return $lines;
        }
    }


    function getOneDemand($id_session){
         $lines = array();
         try{
             $request = "SELECT CONCAT(CONCAT(tuteur.prenom,' '),tuteur.Nom), CONCAT(CONCAT(tutorer.prenom,' '),tutorer.Nom), cTuteur.Commentaire, cTutorer.Note_tuteur, tuteur.Matricule, tutorer.Matricule, st.Date, st.Heure,st.accepter
             FROM Session_tutorat st
              INNER JOIN eleves tuteur ON st.Matricule_Tuteur=tuteur.Matricule
              INNER JOIN eleves tutorer ON st.Matricule_Tutorer=tutorer.Matricule
              LEFT JOIN commentaire_tuteur cTuteur ON st.Session_tutorat = cTuteur.Session_tutorat
              LEFT JOIN commentaire_tutorer cTutorer ON st.Session_tutorat = cTutorer.Session_tutorat
              WHERE st.Session_tutorat = ".$id_session;
             $result = $this->connexion->query($request);
             $lines = $result->fetchAll();
             return $lines;
         }
         catch(PDOException $e) {
             return $lines;
         }
    }

   
   function updateTutor($matricule,$nom,$courriel,$téléphone,$programme,$password,$prenom){
        try{
            $request = "UPDATE eleves e INNER JOIN tuteur t ON t.matricule=e.matricule INNER JOIN programme p ON e.Programme=p.code SET e.Nom='".$nom."', e.Courriel = '".$courriel."', e.Telephone = '".$téléphone."', p.Nom = '".$programme."', t.password = '".$password."', e.Prenom = '".$prenom."' WHERE e.Matricule = ".$matricule;
            $this->connexion->exec($request);
            return "ok";
        }
        catch(PDOException $e) {
            return  $e;
        }
    }

   
   function updateAider($matricule,$nom,$courriel,$téléphone,$programme,$password,$prenom){
       try{
            $request = "UPDATE eleves e 
            INNER JOIN tutorer t ON t.matricule=e.matricule 
            INNER JOIN programme p ON e.Programme=p.code 
            SET e.Nom='".$nom."', e.Courriel = '".$courriel."', e.Telephone = '".$téléphone."', p.Nom = '".$programme."', t.password = '".$password."', e.Prenom = '".$prenom."'  WHERE e.Matricule = ".$matricule;
            $this->connexion->exec($request);
            return "ok";
        }
        catch(PDOException $e) {
            return  $e;
        }
   }

   
   function updateDemande($id_session,$commentaire,$note,$etatDemande){
    try{
        $request = "UPDATE Session_tutorat SET accepter=".$etatDemande." WHERE Session_tutorat=".$id_session;
        $this->connexion->exec($request);
        $request = "UPDATE commentaire_tuteur SET Commentaire = '".$commentaire."' WHERE Session_tutorat = ".$id_session;
        $this->connexion->exec($request);
        $request = "UPDATE commentaire_tutorer SET Note_tuteur = '".$note."' WHERE Session_tutorat = ".$id_session;
        $this->connexion->exec($request);

        return "ok";
    }
    catch(PDOException $e) {
        return  $e;
    }
}

   function DeleteDemandTutorat($id_sessio){
    try{
            $request = "DELETE FROM commentaire_tuteur WHERE Session_tutorat LIKE ".$id_session;
            $this->connexion->exec($request);
            $request = "DELETE FROM commentaire_tutorer WHERE Session_tutorat LIKE ".$id_session;
            $this->connexion->exec($request);
            $request = "DELETE FROM session_tutorat WHERE Session_tutorat LIKE ".$id_session;
            $this->connexion->exec($request);
            return "ok";
    }
    catch(PDOException $e) {
        return $e;
    }
   }


   function deleteStudent($matricule,$isTuteur){
    try{
        if($isTuteur==1){
            $request = "DELETE FROM tuteur WHERE Matricule LIKE ".$matricule;
            $this->connexion->exec($request);
            $request = "DELETE FROM eleves WHERE Matricule LIKE ".$matricule;
            $this->connexion->exec($request);
            return "ok";
        }
        else if($isTuteur==2){
            $request = "DELETE FROM tutorer WHERE Matricule LIKE ".$matricule;
            $this->connexion->exec($request);
            $request = "DELETE FROM eleves WHERE Matricule LIKE ".$matricule;
            $this->connexion->exec($request);
            return "ok";
        }
      
    }
    catch(PDOException $e) {
        return $e;
    }

   }

   function getNoCours():array
   {
       $lines = array();
       try {
           $request = "SELECT Code FROM cours";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
   }
   function AddDispo($matricule,$code){
    try{
        $request = "INSERT INTO dispo_tuteur VALUES('".$matricule."','".$code."')";
        $result = $this->connexion->exec($request);
        return "ok";
      
    }
    catch(PDOException $e) {
        return $e;
    }
   }

   function AddDemande($matriculeAider,$matriculeTuteur,$date,$heure){
    $lines = array();
    try{
        $request = "INSERT INTO session_tutorat (Session_tutorat, Matricule_Tuteur, Matricule_Tutorer, Date, Heure, accepter) VALUES (NULL, '".$matriculeTuteur."', '".$matriculeAider."', '".$date."', '".$heure."', '0')";
        $result = $this->connexion->exec($request);

        $request = "SELECT Session_tutorat FROM Session_tutorat WHERE Matricule_Tutorer like '".$matriculeAider."' AND Matricule_tuteur like '".$matriculeTuteur."'";
        $result = $this->connexion->query($request);
        $lines = $result->fetchAll();
        $i = count($lines)-1;
        $sessionTutorat = $lines[$i][0];
        $request = "INSERT INTO commentaire_tuteur (Session_tutorat, Matricule_Tuteur, Matricule_Tutorer,Commentaire) VALUES ('".$sessionTutorat."', '".$matriculeTuteur."', '".$matriculeAider."', '')";
        $result = $this->connexion->exec($request);
        $request = "INSERT INTO commentaire_tutorer (Session_tutorat,Matricule_Tutorer, Matricule_Tuteur,Note_tuteur) VALUES ('".$sessionTutorat."', '".$matriculeAider."', '".$matriculeTuteur."', 0)";
        $result = $this->connexion->exec($request);
        return "ok";
      
    }
    catch(PDOException $e) {
        return $e;
    }
   }
   function newMatiere($lien,$noCours,$titre,$decription)
    {
       try{
           $request = "Insert Into matières VALUES ('$lien','$noCours','$titre','$decription')";
           $result = $this->connexion->exec($request);
           return $result;
        }
       catch(PDOException $e) {
           return $e;
        }
    }

    function checkMatiere($fichier,$noCour)
    {
        try{
            $request = "SELECT * from matières where Lien = '".$fichier."' and NoCour = '".$noCour."'";
            $result = $this->connexion->query($request);
            $lines = $result->fetchAll();

            return $lines;
        }
        catch(PDOException $e){
            return $e;
        }
    }


    function getCommentaire($matricule)
    {
    $lines = array();
       try{
           $request = " SELECT ct.Commentaire FROM commentaire_tuteur ct WHERE ct.Matricule_Tutorer='".$matricule."'";
           $result = $this->connexion->query($request);
           $lines = $result->fetchAll();

           return $lines;
       }
       catch(PDOException $e) {
           return $lines;
       }
    }

   
}