<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getNoCours();
echo json_encode($lines);