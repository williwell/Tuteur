<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$matricule = $_POST['matricule'];
$code = $_POST['code'];

$lines = $query->AddDispo($matricule,$code);
echo json_encode($lines);