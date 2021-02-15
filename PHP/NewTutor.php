<?php
require_once('Query.php');

$query = new Query();

$matricule = $_POST['matricule'];
    $matricule = addslashes($matricule);
$nom = $_POST["nom"];
    $nom = addslashes($nom);
$courriel = $_POST["courriel"];
    $courriel = addslashes($courriel);
$programme = $_POST["programme"];
    $programme = addslashes($programme);
$telephone = $_POST["telephone"];
    $telephone = addslashes($telephone);
$enseignant = $_POST["enseignant"];
    $enseignant = addslashes($enseignant);
    
$result = $query->newTutor($matricule, $nom, $courriel, $programme, $telephone, $enseignant);
echo json_encode($result);
/*
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $requete = "Insert Into élèves VALUES ('$matricule','$nom','$courriel','$programme','$telephone','$enseignant')";
    $reponse=$connexion->exec($requete);
    echo json_encode($reponse);
    $connexion = null;*/