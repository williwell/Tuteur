<?php
require_once('ConnexionBD.php');

$matricule = $_POST["matricule"];
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

    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $requete = "Insert Into élèves (Matricule, Nom, Courriel, Programme, Téléphone, Enseignant_ressource)
    VALUES ('$matricule','$nom','$courriel','$programme','$telephone','$enseignant')";
    $reponse=$connexion->exec($requete);
    echo json_encode($reponse);
    $connexion = null;