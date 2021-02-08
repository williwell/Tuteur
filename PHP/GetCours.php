<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getCours("4");
echo json_encode($lines);