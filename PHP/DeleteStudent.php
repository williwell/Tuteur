<?php
try {
    require_once('Query.php');
$lines = array();
$query = new Query();
$matricule = $_POST['matricule'];
$isTuteur = $_POST['isTuteur'];

$lines = $query->deleteStudent($matricule,$isTuteur);
echo json_encode($lines);
}
catch(Exception $e) {
    echo json_encode($e);
}