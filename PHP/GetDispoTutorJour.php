<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$matricule = $_POST['matricule'];
$jour = $_POST['jour'];

$lines = $query->getDispoTuteurJour($matricule,$jour);
echo json_encode($lines);