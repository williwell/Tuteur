<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$matricule = $_POST['matricule'];

$lines = $query->getMyTutor($matricule);
echo json_encode($lines);