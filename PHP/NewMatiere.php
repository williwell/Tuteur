<?php
    try{
        require_once('Query.php');
        
        $lines = array();
        $query = new Query();

        $noCour =  $_POST['noCours'];
        $title = $_POST['title'];
        $fichier = basename($_FILES["fichier"]["name"]);
        $description = $_POST['description'];

        $lines = $query->checkMatiere($fichier,$noCour);
        if(sizeof($lines) < 1)
        {
            $lines = $query->getInfoCour($noCour);
            if(sizeof($lines) == 1)
           {
               $target_dir = "../Cours/$noCour/";
                if(!is_dir($target_dir)){
                    mkdir($target_dir);
                }
    
                $target_file = $target_dir . $fichier;
    
                if (move_uploaded_file($_FILES["fichier"]["tmp_name"], $target_file)) {
                    $lines = $query->newMatiere($fichier,$noCour,$title,$description);
                    echo json_encode("Ajout reussit");
                } else {
                    echo json_encode("Desoler, un erreure a empeche l'ajaout du fichier.");
                }
            }
            else
            {
                echo json_encode("Le numero de cours n'est pas vailde!");
            }
        }
        else{
            echo json_encode("Un fichier de ce nom existe deja pour ce cours");
        }
    }
    catch(PDOException $e) {
        echo $e;
    }
?>