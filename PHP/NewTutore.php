<?php
require_once('Query.php');
    try {
        $lines = array();
        $query = new Query();
    
        $matricule = $_POST['matricule'];
            $nom = addslashes($matricule);
        $password = $_POST['password'];
            $password = addslashes($password);
        
        $reponse = $query->Tutore($matricule,$password);
        echo json_encode($reponse);
    
    }
    catch(PDOException $e) {
        return $e;
    }