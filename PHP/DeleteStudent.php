<?php
require_once('Query.php');
$lines = array();
$query = new Query();

$matricule = $_POST['matricule'];
$isTutor = $_POST['isTutor'];


$lines = $query->deleteStudent($matricule,$isTutor);
echo json_encode($lines);