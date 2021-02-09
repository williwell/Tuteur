<?php
require_once('Query.php');

$search = $_POST["search"];
$lines = array();
$query = new Query();

$lines = $query->getCours($search);
echo json_encode($lines);