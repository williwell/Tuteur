<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$matricule = $_POST['matricule'];
$code = $_POST['code'];

$lines = $query->DeleteDispo($matricule,$code);
echo json_encode($lines);