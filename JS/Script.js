function putTutor(list) {
	console.log("téléchargement de la card des tuteurs: success");
	
    for (var i = 0; i < list.length; i++) {
      var idDivCourse="#"+list[i][0]+"Class";
					$("#Tuteur").append( 
            "<div class='outer-div'  onclick='goProfileTutor("+list[i][0]+")'>"+
              "<div class='inner-div'>"+
                "<div class='front'>"+
                  "<div class='front__bkg-photo'></div>"+
                  "<div class='front__face-photo' style='background:url(../RESSOURCE/Picture_Tuteur/"+list[i][0]+".png);background-size: cover;'></div>"+
                  "<div class='front__text'>"+
                    "<h3 class='front__text-header'>"+list[i][1]+"</h3>"+
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



function profileTutorInfo(matricule,nom,courriel,téléphone,programme){
	$("#Info").append(
    "<div class='course'>"+
    "<div class='course-preview'>"+
    "<img  src='../RESSOURCE/Picture_Tuteur/"+matricule+".png' width='100%' height='80%'></img>"+ 
    "</div>"+
    "<div class='course-info'>"+
    "<div  STYLE='MARGIN:5%;>"+    
    "<h6 style='margin:3%;'>NOM</h6>"+
    "<h4 style='margin:3%;'>"+nom+"</h4>"+  
    "<h6 style='margin:3%;'>COURRIEL</h6>"+
    "<h4 style='margin:3%;'>"+courriel+"</h4>"+
    "<h6 style='margin:2%;'>TÉLÉPHONE</h6>"+
    "<h4 style='margin:2%;'>"+téléphone+"</h4>"+
    "<h6 style='margin:2%;'>PROGRAMME D'ÉTUDE</h6>"+
    "<h4 style='margin:2%;'>"+programme+"</h4>"+
    "</div>"+
    "<p class='horizontal'><span class='text'>Demande de tutorat</span></p>"+

    "</div>"+   
    "</div>"
    );
}


function profileAiderInfo(matricule,nom,courriel,téléphone,programme){
	$("#Info").append(
    "<div class='course'>"+
    "<div class='course-preview'>"+
    "<img  src='../RESSOURCE/Picture_Aider/"+matricule+".png' width='100%' height='80%'></img>"+ 
    "</div>"+
    "<div class='course-info'>"+
    "<div  STYLE='MARGIN:5%;>"+    
    "<h6 style='margin:3%;'>NOM</h6>"+
    "<h4 style='margin:3%;'>"+nom+"</h4>"+  
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
  $("#TableDemande").empty();
  $("#tableHeaderDeamnde").empty();
  $("#tableHeaderDeamnde").append(
    "<div class='table-header'>"+
      "<div class='header__item'><a id='name' class='filter__link' href='#'>Nom du tuteur</a></div>"+
      "<div class='header__item'><a id='name' class='filter__link' href='#'>Nom de l'aider</a></div>"+
      "<div class='header__item'><a id='name' class='filter__link' href='#'>Date de la demande</a></div>"+
      "<div class='header__item'><a id='name' class='filter__link' href='#'>Heure de la demande</a></div>"+
      "<div class='header__item'><a id='name' class='filter__link' href='#'>État de la demande</a></div>"+
    "</div>");

    for (var i = 0; i < liste.length; i++) {

      if(liste[i][4]==0){
        $("#TableDemande").append(
          "<div class='table-row'>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileTutor("+liste[i][5]+")'>"+liste[i][0]+"</div>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileAider("+liste[i][6]+")'>"+liste[i][1]+"</div>"+
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


function fillInfoStudent(matricule,nom,courriel,téléphone,programme,password,isTuteur){
  $("#TableDemande").append(
  "<form id='formInfo' autocomplete='off'>"+
  "<div id='focus'></div>"+
    "<h1>Mes informations</h1>"+
    "<input id='inputMatricule' type='text' half placeholder='Matricule' autocomplete='no' value='"+matricule+"' readonly>"+
    "<input id='inputNom' type='text' half placeholder='Nom' autocomplete='no' value='"+nom+"'>"+
    "<input id='inputCourriel' type='text' placeholder='Couriel' autocomplete='no' value='"+courriel+"'>"+
    "<input id='inputTelephone' type='text' half placeholder='Téléphone' autocomplete='no' value='"+téléphone+"'>"+
    "<input id='inputProgramme' type='text' half placeholder='Programme' autocomplete='no' value='"+programme+"'>"+
    "<input id='inputPassword' type='password' placeholder='Mot de passe' autocomplete='no' value='"+password+"'>"+
    "<input  type='submit' value='Effacer mon profil' onclick='deleteStudentProfile("+isTuteur+")'>"+
    "<input  type='submit' value='Sauvegarder les changement' onclick='updateStudentProfile("+isTuteur+")'>"+
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
      alert(result);
      document.cookie = "MatriculeLogged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "isLogged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "isTutor=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      location.replace("Login.html");
    },
    error: function (message, er) {
      alert("OUF");
    }
  });
}

function updateStudentProfile(isTuteur){
var matricule = $("#inputMatricule").val();
var nom = $("#inputNom").val();
var courriel = $("#inputCourriel").val();
var téléphone = $("#inputTelephone").val();
var programme = $("#inputProgramme").val();
var password = $("#inputPassword").val();


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
    "password":password
    },
    dataType: "json",
    success: function(result){
      alert(result);
      alert(matricule);
      alert(nom);
      alert(téléphone);
      alert(programme);

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

    }
});
}

}





