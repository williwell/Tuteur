<?php
require_once('Query.php');

$noCours = $_POST["noCours"];
$lines = array();
$query = new Query();

$lines = $query->getMatiere($noCours);
echo json_encode($lines);