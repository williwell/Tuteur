<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$lines = $query->getTutor($_POST['matricule']);
echo json_encode($lines);