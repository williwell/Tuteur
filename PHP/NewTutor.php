<?php
require_once('Query.php');
    try {
        $lines = array();
        $query = new Query();
    
        $matricule = $_POST['matricule'];
            $nom = addslashes($matricule);
        $nom = $_POST['nom'];
            $nom = addslashes($nom);
        $courriel = $_POST['courriel'];
            $courriel = addslashes($courriel);
        $programme = $_POST['programme'];
            $programme = addslashes($programme);
        $telephone = $_POST['telephone'];
            $telephone = addslashes($telephone);
        $enseignant = $_POST['enseignant'];
            $enseignant = addslashes($enseignant);
        
        $reponse = $query->newTutor($matricule);
        $result = $query->newEtudiant($matricule, $nom, $courriel, $programme, $telephone, $enseignant);
        echo json_encode($result);
        echo json_encode($reponse);
    
    }
    catch(PDOException $e) {
        return $e;
    }
