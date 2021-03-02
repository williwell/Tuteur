<?php
require_once('Query.php');

try {
    $lines = array();
    $query = new Query();

    $id_session=$_POST['id_session'];
    $commentaire=$_POST['commentaire'];
    $note=$_POST['note'];
    $etatDemande=$_POST['etatDemande'];

    $lines = $query->updateDemande($id_session,$commentaire,$note,$etatDemande);
    echo json_encode($lines);

}
catch(PDOException $e) {
    return $lines;
}