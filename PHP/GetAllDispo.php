<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$jour = $_POST['jour'];

$lines = $query->getAllDispo($jour);
echo json_encode($lines);