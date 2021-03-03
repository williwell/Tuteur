<?php
require_once('Query.php');
    //try {
        $lines = array();
        $query = new Query();
    
        $matricule = $_POST['matricule'];
            $nom = addslashes($matricule);
        $nom = $_POST['nom'];
            $nom = addslashes($nom);
        $prenom = $_POST['prenom'];
            $prenom = addslashes($prenom);  
        $courriel = $_POST['courriel'];
            $courriel = addslashes($courriel);
        $programme = $_POST['programme'];
            $programme = addslashes($programme);
        $telephone = $_POST['telephone'];
            $telephone = addslashes($telephone);
        $enseignant = $_POST['enseignant'];
            $enseignant = addslashes($enseignant);
        
        $result = $query->newEtudiant($matricule, $nom,$prenom, $courriel, $programme, $telephone, $enseignant);
        echo json_encode($result);
     //   return($result);
    //}
    //catch(PDOException $e) {
    //    echo json_encode($e);
    //    return($result);
    //}
