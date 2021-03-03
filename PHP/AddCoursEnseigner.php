<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$matricule = $_POST['matricule'];
$cours = $_POST['cours'];

$lines = $query->AddCoursEnseigner($matricule,$cours);
echo json_encode($lines);