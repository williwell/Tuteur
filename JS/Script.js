function putTutor(list) {
	console.log("téléchargement de la card des tuteurs: success");
	
    for (var i = 0; i < list.length; i++) {
      var idDivCourse="#"+list[i][0]+"Class";
					$("#Tuteur").append( 
            "<div class='outer-div'  onclick='goProfileTutor("+list[i][0]+")'>"+
              "<div class='inner-div'>"+
                "<div class='front'>"+
                  "<div class='front__bkg-photo'></div>"+
                  "<div class='front__face-photo' style='background:url(../RESSOURCE/Picture_Tuteur/"+list[i][0]+".png);'></div>"+
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
							    "<h6>"+list[i][0]+"</h6>"+
							    "<h2>"+list[i][1]+"</h2>"+
							    "<button id='btn2' class='"+list[i][0]+"'>Voir exercice</button>"+
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
								  "<h6 id='test'>"+list[i][0]+"</h6>"+
								  "<h2>"+list[i][1]+"</h2>"+
								  "<button id='btn' class='"+list[i][0]+"'>Voir exercice</button>"+
						  "</div>"+
					  "</div>"+
				  "</div>"
        );
		  }
    
	};

	console.log("téléchargement des cours: success");

	document.getElementById("btn").onclick = function() {
		console.log();
		alert(document.getElementById("btn")[0].className);
		localStorage.setItem("noCour",event.target.class);
		window.location = "http://localhost/Tuteur/HTML/Matière";
	};

	document.getElementById("btn2").onclick = function() {
		localStorage.setItem("noCour",event.target.class);
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
    "<div class = 'col'>"+
    "<img  style='margin:5%;' src='../RESSOURCE/Picture_Tuteur/"+matricule+".png'></img>"+ 
    "</div>"+
    "<div class = 'col'>"+
    "<h4 style='margin:5%;'>Nom: "+nom+"</h4>"+
    "<h4 style='margin:5%;'>Courriel: "+courriel+"</h4>"+
    "<h4 style='margin:5%;'>Téléphone: "+téléphone+"</h4>"+
    "<h4 style='margin:5%;'>Programme: "+programme+"</h4>"+
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
		"<div class='row'>"+
			"<div class='row' style='margin-left: 5%; margin-top: 3%'>"+	
				"<h3>"+list[0][0]+"</h3>"+
				"<h3>"+list[0][1]+"</h3>"+
				"<h5 style='margin-left:2%; margin-top: 1%'>Fichier disponible pour téléchargement</h5>"+
			"</div>"+
		"</div>"
	);
}