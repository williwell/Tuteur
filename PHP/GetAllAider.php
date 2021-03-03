<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getAllAider();
echo json_encode($lines);