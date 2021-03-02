<?php
require_once('Query.php');

$lines = array();
$query = new Query();

$id_session = $_POST['id_session'];

$lines = $query->getOneDemand($id_session);
echo json_encode($lines);