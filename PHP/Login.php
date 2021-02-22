<?php
require_once('Query.php');

try {
    $lines = array();
    $query = new Query();
    
    $lines = $query->login($_POST['matricule'],$_POST['password']);
    echo json_encode($lines);
}
catch(PDOException $e) {
    return $lines;
}