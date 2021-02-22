<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$matricule = $_POST['matricule'];

$lines = $query->getDispoTuteur($matricule);
echo json_encode($lines);