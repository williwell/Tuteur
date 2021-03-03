<?php
$matricule = $_POST["matricule"];

$target_dir = "../RESSOURCE/Picture/";
$target_file = $target_dir . $matricule . ".png";
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo json_encode("File is an image - " . $check["mime"] . ".");
    $uploadOk = 1;
  } else {
    echo json_encode("File is not an image.");
    $uploadOk = 0;
  }
}


// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  echo json_encode("Sorry, your file is too large.");
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "png") {
  echo json_encode("Only PNG files are allowed.");
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo json_encode("Sorry, your file was not uploaded.");
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo json_encode("le fichier ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " a bien ete uploader.");
  } else {
    echo json_encode("Desoler un erreure c'est produit.");
  }
}
?>