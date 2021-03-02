<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$jour = $_POST['jour'];
$debut = $_POST['debut'];
$fin = $_POST['fin'];
$matricule = $_POST['matricule'];

$lines = $query->getAllDispo($jour,$debut,$fin,$matricule);
echo json_encode($lines);