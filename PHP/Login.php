<?php
require_once('Query.php');

    $lines = array();
    $query = new Query();
    
    $lines = $query->login($_POST['matricule'],$_POST['password']);
    echo json_encode($lines);