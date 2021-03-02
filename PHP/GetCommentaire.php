<?php
require_once('Query.php');

try {
    $lines = array();
    $query = new Query();

    $matricule=$_POST['matricule'];

    $lines = $query->getCommentaire($matricule);
    echo json_encode($lines);

}
catch(PDOException $e) {
    return $lines;
}