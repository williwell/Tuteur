function putTutor(list) {
	console.log("téléchargement de la card des tuteurs: success");
	
    for (var i = 0; i < list.length; i++) {
      var idDivCourse="#"+list[i][0]+"Class";
					$("#Tuteur").append( 
            "<div class='outer-div'  onclick='goProfileTutor("+list[i][0]+")'>"+
              "<div class='inner-div'>"+
                "<div class='front'>"+
                  "<div class='front__bkg-photo'></div>"+
                  "<div class='front__face-photo' style='background:url(../RESSOURCE/Picture/"+list[i][0]+".png);background-size: cover;'></div>"+
                  "<div class='front__text'>"+
                    "<h3 class='front__text-header'>"+list[i][5]+" "+list[i][1]+"</h3>"+
                    "<p class='front__text-para'></i>"+list[i][4]+"</p><br><br>"+
                    "<p class='front__text-para'></i>"+list[i][2]+"</p>"+
                    "<p class='front__text-para'></i>"+list[i][3]+"</p>"+
                  "</div>"+
                "</div>"+
                "<div class='back'>"+
                  "<div id='"+list[i][0]+"Class' class='social-media-wrapper' style='color:white; font-size: 20px;'>"+
                  "<h3 class='front__text-header' style='color:#30c5e7'>Liste des cours</h3><br>"+
                  "</div>"+
                  "<div class='contact_info'>"+
                  "</div>"+
                "</div>"+
              "</div>"+
            "</div>"+
            "</div>"
	  			);
	}
}


function putTutorClasses(list) {
	console.log("téléchargement des cours des tuteurs: success");
    for (var i = 0; i < list.length; i++) {
      var idDivCourse="#"+list[i][0]+"Class";
					$(idDivCourse).append( 
              "<p>"+list[i][1]+"</p>"
	  			);
	}
}

function putCours(list) {
	$("#Cours").empty();
    for (var i = 0; i < list.length; i++) {
    if(i%2 == 0)
		  {
			  $("#Cours").append(
			    "<div id='courses-container'>"+
				    "<div id='course'>"+
					    "<div id='course-preview2'>"+
						    "<h6># Programme</h6>"+
						    "<h2>"+list[i][2]+"</h2>"+
					    "</div>"+
					    "<div id='course-info'>"+
							    "<h6 id='noCour'>"+list[i][0]+"</h6>"+
							    "<h2>"+list[i][1]+"</h2>"+
							    "<button id='btn2'>Voir exercice</button>"+
					    "</div>"+
				    "</div>"+
			    "</div>"
        );
		  }
	  	  else
		  {
			  $("#Cours").append(
				  "<div id='courses-container'>"+
				  	"<div id='course'>"+
						  "<div id='course-preview'>"+
							  "<h6># Programme</h6>"+
							  "<h2>"+list[i][2]+"</h2>"+
						  "</div>"+
						  "<div id='course-info'>"+
								  "<h6 id='noCour'>"+list[i][0]+"</h6>"+
								  "<h2>"+list[i][1]+"</h2>"+
								  "<button id='btn'>Voir exercice</button>"+
						  "</div>"+
					  "</div>"+
				  "</div>"
        );
		  }
    
	};

	console.log("téléchargement des cours: success");

	document.getElementById("btn").onclick = function() {
		localStorage.setItem("style","btn");   
    localStorage.setItem("noCour",document.getElementById("noCour").innerText);
		window.location = "http://localhost/Tuteur/HTML/Matière";
	};

	document.getElementById("btn2").onclick = function() {
    localStorage.setItem("style","btn2"); 
		localStorage.setItem("noCour",document.getElementById("noCour").innerText);
		window.location = "http://localhost/Tuteur/HTML/Matière";
	};


}

function putDocCours(list) {
	if (list.length > 0)
	{
		for(var i = 0; i < list.length; i++) {
			$("#DocCour").append(
				"<div id='telechargerDoc' class='row' style='margin-bottom: 2%; cursor: pointer; margin-left: 8%;'>"+
					"<a href='../Cours/"+list[i][1]+"/"+list[i][0]+"' download>"+
						"<h5>"+list[i][2]+"</h5>"+
					"</a>"+
					"<p>"+list[i][3]+"</p>"+
				"</div>");
		};
		console.log("téléchargement des documents: success");
	}
	else
	{
		$("#DocCour").append(
			"<divclass='row' style='margin-bottom: 2%; margin-left: 7%;'>"+
				"<p>Désoler il n'y a présentement aucun document disponible pour ce cours.</p>"+
			"</div>"
		);
	}
}


function goProfileTutor(matricule){
  setCookie("matriculeTuteur",matricule,200);
  location.replace("ProfileTuteur.html");
}


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



function profileTutorInfo(matricule,prenom,nom,courriel,téléphone,programme){
	$("#Info").append(
    "<div class='course'>"+
    "<div class='course-preview'>"+
    "<img  src='../RESSOURCE/Picture/"+matricule+".png' width='100%' height='80%'></img>"+ 
    "</div>"+
    "<div class='course-info' style='text-align:center;justify-content:center;align-content:center;'>"+
    "<div  STYLE='MARGIN:5%;>"+    
    "<h6 style='margin:3%;'>NOM</h6>"+
    "<h4 style='margin:3%;'>"+prenom+" "+nom+"</h4>"+  
    "<h6 style='margin:3%;'>COURRIEL</h6>"+
    "<h4 style='margin:3%;'>"+courriel+"</h4>"+
    "<h6 style='margin:2%;'>TÉLÉPHONE</h6>"+
    "<h4 style='margin:2%;'>"+téléphone+"</h4>"+
    "<h6 style='margin:2%;'>PROGRAMME D'ÉTUDE</h6>"+
    "<h4 style='margin:2%;'>"+programme+"</h4>"+
  
    "<p class='horizontal' style='margin-left:17%'><span class='text'>Demande de tutorat</span></p>"+
    "</div>"+

    "</div>"+   
    "</div>"
    );
}


function profileAiderInfo(matricule,prenom,nom,courriel,téléphone,programme){
	$("#Info").append(
    "<div class='course'>"+
    "<div class='course-preview'>"+
    "<img  src='../RESSOURCE/Picture/"+matricule+".png' width='100%' height='80%'></img>"+ 
    "</div>"+
    "<div class='course-info' style='text-align:center;justify-content:center;align-content:center;'>"+
    "<div  STYLE='MARGIN:5%;>"+    
    "<h6 style='margin:3%;'>NOM</h6>"+
    "<h4 style='margin:3%;'>"+prenom+" "+nom+"</h4>"+  
    "<h6 style='margin:3%;'>COURRIEL</h6>"+
    "<h4 style='margin:3%;'>"+courriel+"</h4>"+
    "<h6 style='margin:2%;'>TÉLÉPHONE</h6>"+
    "<h4 style='margin:2%;'>"+téléphone+"</h4>"+
    "<h6 style='margin:2%;'>PROGRAMME D'ÉTUDE</h6>"+
    "<h4 style='margin:2%;'>"+programme+"</h4>"+
    "</div>"+

    "</div>"+   
    "</div>"
    );
}




function profileTutorClasses(listeCours){
  for (var i = 0; i < listeCours.length; i++) {
		$("#CoursEnseigner").append(
      "<div class='card'>"+
      "<p>"+ listeCours[i][0]+"</p>"+
      "<h2>"+listeCours[i][1]+"</h2>"+
      "</div>"
	  	);
	};
}


function profileTutorDispo(listeDispo){
  $("#TableDispo").empty();

  $("#TableDispo").append(
    "<ul class='responsive-table'>"+
    "<li class='table-header'>"+
      "<div class='col col-1'>Jour</div>"+
      "<div class='col col-2'>Heure</div>"+
    "</li>"
  );
  for (var i = 0; i < listeDispo.length; i++) {
   
      if($('#TableDispo').is(':empty') ) {
        $("#TableDispo").append(
          "<li class='table-header'>"+
            "<div class='col col-1'>Jour</div>"+
            "<div class='col col-2'>Heure</div>"+
          "</li>"+
          "<li class='table-row'>"+
          "<div class='col col-1'>"+listeDispo[i][0]+"</div>"+
          "<div class='col col-2'>"+listeDispo[i][3]+"</div>"+
          "</li>"
      );
      }
     else{
      $("#TableDispo").append(
        "<li class='table-row colorWhite'>"+
        "<div class='col col-1'>"+listeDispo[i][0]+"</div>"+
        "<div class='col col-2'>"+listeDispo[i][3]+"</div>"+
        "</li>");
     }
  }
  
}


function putInfoCour(list) {
	$("#InfoCour").append(
			"<div class='row' style='margin-left: 5%; margin-top: 3%'>"+
        "<div id='"+localStorage.getItem("style")+"' style='position: static; max-width: 100%; width: 40%; border-radius: 25px;'>"+	
				  "<h3>"+list[0][0]+"</h3>"+
				  "<h3>"+list[0][1]+"</h3>"+
        "</div>"+
				"<h5 style='margin-left:2%; margin-top: 1%'>Fichier disponible pour téléchargement</h5>"+
			"</div>"
	);
}


function demandeTutorat(liste){
  $("#TableDemandeTutorat").empty();
  $("#tableHeaderDeamndeTutorat").empty();
  $("#tableHeaderDeamndeTutorat").append(
    "<div class='table-header'>"+
      "<div class='header__item'><a id='name' class='filter__link' href='#'>Nom du tuteur</a></div>"+
      "<div class='header__item'><a id='name' class='filter__link' href='#'>Nom de l'aider</a></div>"+
      "<div class='header__item'><a id='name' class='filter__link' href='#'>Date de la demande</a></div>"+
      "<div class='header__item'><a id='name' class='filter__link' href='#'>Heure de la demande</a></div>"+
      "<div class='header__item'><a id='name' class='filter__link' href='#'>État de la demande</a></div>"+
    "</div>");

    for (var i = 0; i < liste.length; i++) {

      if(liste[i][4]==0){
        $("#TableDemandeTutorat").append(
          "<div class='table-row'>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileTutor("+liste[i][5]+")'>"+liste[i][7]+" "+liste[i][0]+"</div>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileAider("+liste[i][6]+")'>"+liste[i][8]+" "+liste[i][1]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][2]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][3]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][4]+"</div>"+
          "</div>");
      }

    }
  
}

function goProfileAider(matricule){
  setCookie("matriculeAider",matricule,200);
  location.replace("ProfileAider.html");
}


function fillInfoStudent(matricule,prenom,nom,courriel,téléphone,programme,password,isTuteur){
  $("#TableDemande").append(
  "<form id='formInfo' autocomplete='off'>"+
  "<div id='focus'></div>"+
    "<h1>Mes informations</h1>"+
    "<input id='inputPrenom' type='text' half placeholder='Prénom' autocomplete='no' value='"+prenom+"'>"+
    "<input id='inputNom' type='text' half placeholder='Nom' autocomplete='no' value='"+nom+"'>"+
    "<input id='inputMatricule' type='text' placeholder='Matricule' autocomplete='no' value='"+matricule+"' readonly>"+
    "<input id='inputCourriel' type='text' placeholder='Couriel' autocomplete='no' value='"+courriel+"'>"+
    "<input id='inputTelephone' type='text' half placeholder='Téléphone' autocomplete='no' value='"+téléphone+"'>"+
    "<input id='inputProgramme' type='text' half placeholder='Programme' autocomplete='no' value='"+programme+"'>"+
    "<input id='inputPassword' type='password' placeholder='Mot de passe' autocomplete='no' value='"+password+"'>"+
    "<input  type='submit' value='Supprimer' onclick='deleteStudentProfile("+isTuteur+")'>"+
    "<input  type='submit' value='Sauvegarder' onclick='updateStudentProfile("+isTuteur+")'>"+
  "</form>"
  );
  const FORM = $("form"); // set form or other element here
const TYPES = ["input[type=text], input[type=submit]"]; // set which elements get targeted by the focus
const FOCUS = $("#focus"); // focus element

// function for positioning the div
function position(e) {
  // get position
  var props = {
    top: e.offset().top,
    left: e.offset().left,
    width: e.outerWidth(),
    height: e.outerHeight(),
    radius: parseInt(e.css("border-radius"))
  };

  // set position
  FOCUS.css({
    top: props.top,
    left: props.left,
    width: props.width,
    height: props.height,
    "border-radius": props.radius
  });

  FOCUS.fadeIn(200);
}

FORM.find(TYPES.join()).each(function (i) {
  // when clicking an input defined in TYPES
  $(this).focus(function () {
    el = $(this);

    // adapt size/position when resizing browser
    $(window).resize(function () {
      position(el);
    });

    position(el);
  });
});

FORM.on("focusout", function (e) {
  setTimeout(function () {
    if (!e.delegateTarget.contains(document.activeElement)) {
      FOCUS.fadeOut(200);
    }
  }, 0);
});

}
function deleteStudentProfile(isTuteur){

  var matricule = $("#inputMatricule").val();

  $.ajax({
    url: "../PHP/DeleteStudent.php",
    type: "POST",
    data: {
    "matricule": matricule,
    "isTuteur": isTuteur
    },
    dataType: "json",
    success: function(result){
      location.replace("Login.html");
      document.cookie = "MatriculeLogged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "isLogged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "isTutor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    error: function (message, er) {
      console.log(message);
    }
  });
  location.replace("Login.html");
}

function updateStudentProfile(isTuteur){
var matricule = $("#inputMatricule").val();
var nom = $("#inputNom").val();
var courriel = $("#inputCourriel").val();
var téléphone = $("#inputTelephone").val();
var programme = $("#inputProgramme").val();
var password = $("#inputPassword").val();
var prenom = $("#inputPrenom").val();

if(isTuteur==1){
  $.ajax({
    url: "../PHP/UpdateTutor.php",
    type: "POST",
    data: {
    "matricule": matricule,
    "nom":nom,
    "courriel":courriel,
    "téléphone":téléphone,
    "programme":programme,
    "password":password,
    "prenom":prenom
    },
    dataType: "json",
    success: function(result){
      alert(result);
      
    },
    error: function (message, er) {
      alert("OUF");
    }
});
}
else{
  $.ajax({
    url: "../PHP/UpdateAider.php",
    type: "POST",
    data: {
      "matricule": matricule,
      "nom":nom,
      "courriel":courriel,
      "téléphone":téléphone,
      "programme":programme,
      "password":password
    },
    dataType: "json",
    success: function(result){
      alert("Les informations ont été mises à jour");
    },
    error: function (message, er) {
      console.log(message);
    }
});
}

}




function UpdateTutorDispo(listeDispo,dispo){
  $("#TableDispo").empty();
  var dispoSuivant=(dispo+4);
  var dispoPrecedent=(dispo-4);

  if(dispoSuivant>=listeDispo.length){
    dispoSuivant=listeDispo.length;
  }
  if(dispoPrecedent<0){
    dispoPrecedent=0;
  }

  $("#TableDispo").append(
    "<li class='table-header'>"+
      "<div class='col col-1'>Jour</div>"+
      "<div class='col col-2'>Heure</div>"+
      "<div class='col col-3'>Disponible</div>"+
    "</li>"
  );


    for (var i = dispo; i < dispoSuivant; i++) {
      console.log(listeDispo[i][4]+","+listeDispo[i][5]);
      if(listeDispo[i][7]>1){
        $("#TableDispo").append(
          "<li class='table-row colorWhite'>"+
          "<div class='col col-1'>"+listeDispo[i][0]+"</div>"+
          "<div class='col col-2'>"+listeDispo[i][3]+"</div>"+
          "<div class='col col-3'><input type='checkbox' id='"+listeDispo[i][4]+"' name='"+listeDispo[i][4]+"' value='"+listeDispo[i][4]+"' checked></input></div>"+
          "</li>");
      }
      else{
        $("#TableDispo").append(
          "<li class='table-row colorWhite'>"+
          "<div class='col col-1'>"+listeDispo[i][0]+"</div>"+
          "<div class='col col-2'>"+listeDispo[i][3]+"</div>"+
          "<div class='col col-3'><input type='checkbox' id='"+listeDispo[i][4]+"' name='"+listeDispo[i][4]+"' value='"+listeDispo[i][4]+"'></input></div>"+
          "</li>");
      }
  }
 

  $("#TableDispo").append(   
    "<div class='row'>"+ 
      "<div class='col'>"+  
        "<p id='dispoPrecedent' class='horizontal'><span class='text'>Précédent</span></p>"+
      "</div>"+
      "<div class='col'>"+  
        "<p id='dispoSuivant' class='horizontal' ><span class='text'>Suivant</span></p>"+ 
      "</div>"+
    "</div>"
  );

$("#dispoPrecedent").click(function() {
  $("#TableDispo").empty();
  UpdateTutorDispo(listeDispo,dispoPrecedent);
});


$("#dispoSuivant").click(function() {
  $("#TableDispo").empty();
  UpdateTutorDispo(listeDispo,dispoSuivant);
});

  $(document).ready(function(){
    var matricule = $("#inputMatricule").val();
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
          $.ajax({
            url: "../PHP/AddDispoTutor.php",
            type: "POST",
            data: {
                "matricule": matricule,
                "code":this.id
            },
            dataType: "json",
            success: function(result){
                console.log("Changement dispo fait");
            },
            error: function (message, er) {
                console.log("erreur: " + message);
            }
        });
        }
        else if($(this).prop("checked") == false){
          $.ajax({
            url: "../PHP/DeleteDispoTutor.php",
            type: "POST",
            data: {
                "matricule": matricule,
                "code":this.id
            },
            dataType: "json",
            success: function(result){
                console.log("Changement dispo fait");
            },
            error: function (message, er) {
                console.log("erreur: " + message);
            }
        });
        }
    });
  });
}




function addFilterDispo(){
  $("#filtreDispo").append(
    "<div style='font-size: 40px;'>Filtrer les disponibilités</div>"+
    "<div class='row  row-cols-4 row-cols-md-2 g-3 justify-content-evenly'>"+
            "<div class = 'col'>"+  
                "<p class='horizontal' onclick='disponibiliteFilter(\"Lundi\")'><span class='text'>Lundi</span></p>"+
            "</div>"+
            "<div class = 'col'>"+  
                "<p class='horizontal' onclick='disponibiliteFilter(\"Mardi\")'><span class='text'>Mardi</span></p>"+
            "</div>"+
            "<div class = 'col'>"+  
                "<p class='horizontal' onclick='disponibiliteFilter(\"Mercredi\")'><span class='text'>Mercredi</span></p>"+
            "</div>"+
            "<div class = 'col'>"+  
                "<p class='horizontal' onclick='disponibiliteFilter(\"Jeudi\")'><span class='text'>Jeudi</span></p>"+
            "</div>"+
            "<div class = 'col'>"+  
                "<p class='horizontal' onclick='disponibiliteFilter(\"Vendredi\")'><span class='text'>Vendredi</span></p>"+
            "</div>"+
            "<div class = 'col'>"+  
                "<p class='horizontal' onclick='disponibiliteFilter(\"Samedi\")'><span class='text'>Samedi</span></p>"+
            "</div>"+
            "<div class = 'col'>"+  
                "<p class='horizontal' onclick='disponibiliteFilter(\"Dimanche\")'><span class='text'>Dimanche</span></p></div>"+
            "</div>"+
            "<div class = 'col justify-content-evenly' style='display:flex;margin:5%;text-aling:center;align-content:center;justify-content:center'>"+ 
              "<label for='filtreHeureDebut'>Heure de début:</label>"+
              "<select id='filtreHeureDebut' name='filtreHeureDebut'>"+
              " </select>"+
            "</div>"+
            "<div class = 'col justify-content-evenly' ' style='display:flex;margin:5%;text-aling:center;align-content:center;justify-content:center'>"+  
              "<label for='filtreHeureFin'>Heure de fin:</label>"+
              "<select id='filtreHeureFin' name='filtreHeureFin'>"+
              " </select>"+
            "</div>"+
        "</div>"+   
    "</div>"+
"</div>"
  );

  $("#filtreHeureDebut").on('change', function() {
    if(this.value>= $("#filtreHeureFin").val()){
      alert("L'heure de debut ne peut pas etre plus grande ou egale a l'heure de fin");
      this.value = $("#filtreHeureFin").val()-1;
      changeDispo("",$("#filtreHeureDebut").val(),$("#filtreHeureFin").val());
    }
  });
  $("#filtreHeureFin").on('change', function() {
    if(this.value<= $("#filtreHeureDebut").val()){
      alert("L'heure de fin ne peut pas etre plus petite ou egale a l'heure de debut");
      this.value = $("#filtreHeureDebut").val()+1;
      changeDispo("",$("#filtreHeureDebut").val(),$("#filtreHeureFin").val());
    }
  });

  $("#filtreHeureDebut").click(function() {
    changeDispo("",$("#filtreHeureDebut").val(),$("#filtreHeureFin").val());
  });

  $("#filtreHeureFin").click(function() {
    changeDispo("",$("#filtreHeureDebut").val(),$("#filtreHeureFin").val());
  });
}


function disponibiliteFilter(nomJour){
  var matricule = getCookie("MatriculeLogged");
  changeDispo(nomJour,$("#filtreHeureDebut").val(),$("#filtreHeureFin").val());
};


function changeDispo(jour,debut,fin){
  var matricule = $("#inputMatricule").val();
  $.ajax({
    url: "../PHP/GetAllDispo.php",
    type: "POST",
    data: {
        "jour": jour,
        "debut":debut,
        "fin":fin,
        "matricule":matricule
    },
    dataType: "json",
    success: function(result){
        UpdateTutorDispo(result,0);
    },
    error: function (message, er) {
        console.log("login: " + message);
    }
});
}





