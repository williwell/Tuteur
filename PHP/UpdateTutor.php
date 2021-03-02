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
    $prenom=$_POST['prenom'];
    
    $lines = $query->updateTutor($matricule,$nom,$courriel,$téléphone,$programme,$password,$prenom);
    echo json_encode($lines);

}
catch(PDOException $e) {
    return $lines;
}