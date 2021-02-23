<?php
require_once('Query.php');

try {
    $lines = array();
    $query = new Query();

    $matricule=$_POST['matricule'];
    $nom=$_POST['nom'];
    $courriel=$_POST['courriel'];
    $téléphone=$_POST['téléphone'];
    $programme=$_POST['programme'];
    $password=$_POST['password'];
    
    $lines = $query->updateAider($matricule,$nom,$courriel,$téléphone,$programme,$password);
    echo json_encode($lines);

}
catch(PDOException $e) {
    return $lines;
}