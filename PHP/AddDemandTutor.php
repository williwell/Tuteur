<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$matriculeAider = $_POST['matriculeAider'];
$matriculeTuteur = $_POST['matriculeTuteur'];
$date = $_POST['date'];
$heure = $_POST['heure'];

$lines = $query->AddDemande($matriculeAider,$matriculeTuteur,$date,$heure);
echo json_encode($lines);