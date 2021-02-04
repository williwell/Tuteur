<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getAllTutor();
echo json_encode($lines);