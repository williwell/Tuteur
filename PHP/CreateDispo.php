<?php



$day =array('Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche');

echo "Code;Jours;Session;Année;Heure_début;Heure_fin<br>";

for ($y = 0; $y < 7; $y++) {
    for ($x = 0; $x < 24; $x++) {
        echo substr($day[$y],0,2)."H2021".$x.";".$day[$y].";H2021;2021;".$x.";".($x+1)."<br>";
    }
}

?>