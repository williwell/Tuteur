<?php
    try{
        require_once('Query.php');
        $noCour =  $_POST['noCours'];
        $title = $_POST['title'];

        $target_dir = "../Cours/$noCour/";
        if(!is_dir($target_dir)){
            mkdir($target_dir);
        }

        $target_file = $target_dir . basename($_FILES["fichier"]["name"]);

        if (move_uploaded_file($_FILES["fichier"]["tmp_name"], $target_file)) {
            //faire la requete sur le query pour ajouter dans la base de donnée les info pour voir le fichier
            echo json_encode("Le fichier ". htmlspecialchars( basename($_FILES["fichier"]["name"])). " a bien ete ajouter.");
        } else {
            echo json_encode("Desoler, un erreure a empeche l'ajaout du fichier.");
        }
    }
    catch(PDOException $e) {
        echo $e;
    }
?>