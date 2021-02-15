<?php
require_once('Query.php');

/*
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $requete = "Insert Into élèves VALUES ('$matricule','$nom','$courriel','$programme','$telephone','$enseignant')";
    $reponse=$connexion->exec($requete);
    echo json_encode($reponse);
    $connexion = null;*/


    try {
        $lines = array();
        $query = new Query();
    
        $matricule = $_POST['matricule'];
        //$nom = addslashes($matricule);
        echo "<script type='text/javascript'>alert(".$_POST['matricule'].");</script>";
        
        $nom = $_POST['nom'];
            //$nom = addslashes($nom);
        $courriel = $_POST['courriel'];
           // $courriel = addslashes($courriel);
        $programme = $_POST['programme'];
            //$programme = addslashes($programme);
        $telephone = $_POST['telephone'];
            //$telephone = addslashes($telephone);
        $enseignant = $_POST['enseignant'];
           // $enseignant = addslashes($enseignant);
            
        $result = $query->newTutor($matricule, $nom, $courriel, $programme, $telephone, $enseignant);
        echo json_encode($result);
    
    }
    catch(PDOException $e) {
        return $e;
    }
