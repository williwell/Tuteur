<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getAllTutorClasses();
echo json_encode($lines);