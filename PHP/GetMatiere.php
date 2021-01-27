<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getMatiere();
echo json_encode($lines);