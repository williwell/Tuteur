<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$matricule = $_POST['matricule'];

$lines = $query->getAider($matricule);
echo json_encode($lines);