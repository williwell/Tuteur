<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getTutorClasses($_POST['matricule']);
echo json_encode($lines);