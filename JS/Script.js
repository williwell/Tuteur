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
							    "<h6>"+list[i][0]+"</h6>"+
							    "<h2>"+list[i][1]+"</h2>"+
							    "<button id='btn2' onclick='btn2()' class="+list[i][0]+">Voir exercice</button>"+
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
								  "<h6>"+list[i][0]+"</h6>"+
								  "<h2>"+list[i][1]+"</h2>"+
								  "<button id='btn' onclick='btn()' class="+list[i][0]+">Voir exercice</button>"+
						  "</div>"+
					  "</div>"+
				  "</div>"
        );
		  }
    
	};

	console.log("téléchargement des cours: success");

  if(list.length < 1)
  {
    $("#Cours").append(
      "<div>"+
        "<p>Il n'y a pas de cours qui convient a cette recherche</p>"+
      "</div>"
    );
  }
}

function putDocCours(list) {
	if (list.length > 0)
	{
		for(var i = 0; i < list.length; i++) {
			$("#DocCour").append(
        "<div id='telechargerDoc' class='row'>"+
            "<div class='col-md-1'>"+
              "<a href='../Cours/"+list[i][1]+"/"+list[i][0]+"' download>"+
                "<img src='../RESSOURCE/logo_download.png' alt='Logo download' style='width: 30px; height; 30px;'></img>"+
              "</a>"+  
            "</div>"+
            "<div class='col-md-11'>"+
              "<div class='row'>"+
                "<h5>"+list[i][2]+"</h5>"+
                "<p>"+list[i][3]+"</p>"+
              "</div>"+  
            "</div>"+ 
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
  
    "<p class='horizontal' onclick='sendDemand("+matricule+")' style='margin-left:17%'><span class='text'>Demande de tutorat</span></p>"+
    "</div>"+

    "</div>"+   
    "</div>"
    );
}

function sendDemand(matricule){
  var now = new Date();

  var MatriculeLogged = getCookie("MatriculeLogged");
  var isTuteur= getCookie("isTutor");
  var date = now.getFullYear()+"-"+now.getMonth() + 1+"-"+now.getDate();
  var heure = now.getHours()+":"+now.getMinutes();

  if (MatriculeLogged == null) {
    location.replace("Login.html");
  }
  else if(isTuteur==1) {
    alert("Vous devez être connecter sur un profil aider pour pouvoir faire une demande de tutorat");
  }
  else{
    $.ajax({
      url: "../PHP/AddDemandTutor.php",
      type: "POST",
      data: {
      "matriculeAider": MatriculeLogged,
      "matriculeTuteur": matricule,
      "date": date,
      "heure": heure
      },
      dataType: "json",
      success: function(result){
        alert("La demande à bien été envoyé, le tuteur vous contactera sous peu");
      },
      error: function (message, er) {
        console.log(message);
      }
    });
  }
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

function ajouterCommentaire(liste){
  for(var i = 0; i < liste.length; i++) {
    $("#noteTuteur").append(
      "<div class='col' style='border: 1px solid black;margin:2%;padding:2%'>"+
      "<h5>"+liste[i][0]+"</h5>"+
      "</div>");
  };
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
			"<div class='row' style='margin-left: 5%; margin-top: 3%; margin-bottom: 3%;'>"+
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
      var mystudent = liste[i];
      if(liste[i][4]==0){
        $("#TableDemandeTutorat").append(
          "<div class='table-row'>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileTutor("+liste[i][5]+")'>"+liste[i][7]+" "+liste[i][0]+"</div>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileAider("+liste[i][6]+")'>"+liste[i][8]+" "+liste[i][1]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][2]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][3]+"</div>"+
          "<div style='cursor: pointer;' class='table-data' onclick='updateDemande("+liste[i][9]+")'>En attente d'acceptation</div>"+
          "</div>");
      } 
      else if(liste[i][4]==1){
        $("#TableDemandeTutorat").append(
          "<div class='table-row'>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileTutor("+liste[i][5]+")'>"+liste[i][7]+" "+liste[i][0]+"</div>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileAider("+liste[i][6]+")'>"+liste[i][8]+" "+liste[i][1]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][2]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][3]+"</div>"+
          "<div style='cursor: pointer;' class='table-data' onclick='updateDemande("+liste[i][9]+")'>En attente du rapport du tuteur</div>"+
          "</div>");
      }
      else if(liste[i][4]==2){
        $("#TableDemandeTutorat").append(
          "<div class='table-row'>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileTutor("+liste[i][5]+")'>"+liste[i][7]+" "+liste[i][0]+"</div>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileAider("+liste[i][6]+")'>"+liste[i][8]+" "+liste[i][1]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][2]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][3]+"</div>"+
          "<div style='cursor: pointer;' class='table-data' onclick='updateDemande("+liste[i][9]+")'>En attente du rapport de l'aider</div>"+
          "</div>");
      }
      else if(liste[i][4]==3){
        $("#TableDemandeTutorat").append(
          "<div class='table-row'>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileTutor("+liste[i][5]+")'>"+liste[i][7]+" "+liste[i][0]+"</div>"+
          "<div  style='cursor: pointer;' class='table-data' onclick='goProfileAider("+liste[i][6]+")'>"+liste[i][8]+" "+liste[i][1]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][2]+"</div>"+
          "<div style='cursor: default;' class='table-data'>"+liste[i][3]+"</div>"+
          "<div style='cursor: pointer;' class='table-data' onclick='updateDemande("+liste[i][9]+")'>Terminer</div>"+
          "</div>");
      }



    }
  
}


function updateDemande(id_session){
  $("#infoDemand").empty();
  var matricule = getCookie("MatriculeLogged");
  $.ajax({
    url: "../PHP/GetOneDemand.php",
    type: "POST",
    data: {
    "id_session": id_session
    },
    dataType: "json",
    success: function(result){
     var matriculeTuteur = result[0][4];
     var matriculeAider = result[0][5];
     var nomTuteur = result[0][0];
     var nomAider = result[0][1];
     var commentaire = result[0][2];
     var noteTuteur = result[0][3];
     var date = result[0][6];
     var heure = result[0][7];
     var etatDemande =result[0][8];
     
     if(matricule==matriculeTuteur){
       if(commentaire==null){
        $("#infoDemand").append(
          "<form id='formInfo' autocomplete='off' style='margin:15%;margin-top:0%'>"+
            "<div id='focus'></div>"+
            "<h1>Demande de tutorat</h1>"+
            "<div class='row'>"+
                "<div class='row'>"+
                  "<h5>Nom du tuteur</h5>"+
                  "<input id='inputNomTuteur' readonly type='text' half placeholder='Nom du tuteur' autocomplete='no' value='"+nomTuteur+"'>"+
                "</div>"+
                "<div class='row'>"+
                  "<h5>Nom de l'aider</h5>"+
                  "<input id='inputNomAider' readonly type='text' half placeholder='Nom de l'aider' autocomplete='no' value='"+nomAider+"'>"+
                "</div>"+
            "</div>"+
            "<div class='row'>"+
              "<h5>Date de la demande</h5>"+
              "<input id='inputDate' readonly type='text' half placeholder='Date de la demande' autocomplete='no' value='"+date+"'>"+
              "<input id='inputHeure' readonly type='text' half placeholder='Heure' autocomplete='no' value='"+heure+"'>"+
            "</div>"+
            "<div class='row'>"+
              "<h5>Commentaire sur la session</h5>"+
              "<textarea id='zoneCommentaire' name='w3review' rows='4' cols='50'></textarea>"+
            "</div>"+
            "<p id='btnEffacer' class='horizontal' style='margin-left:25%; max-width:300px;max-height:75px;'><span class='text'>Refuser la demande</span></p>"+
            "<input id='btnSauvegarderTuteur' type='submit' value='Sauvegarder'>"+
            "<input id='btnAnnuler' type='submit' value='Annuler'>"+
          "</form>"
        );
       }
       else{
        $("#infoDemand").append(
          "<form id='formInfo' autocomplete='off' style='margin:15%;margin-top:0%'>"+
            "<div id='focus'></div>"+
            "<h1>Demande de tutorat</h1>"+
            "<div class='row'>"+
                "<div class='row'>"+
                  "<h5>Nom du tuteur</h5>"+
                  "<input id='inputNomTuteur' readonly type='text' half placeholder='Nom du tuteur' autocomplete='no' value='"+nomTuteur+"'>"+
                "</div>"+
                "<div class='row'>"+
                  "<h5>Nom de l'aider</h5>"+
                  "<input id='inputNomAider' readonly type='text' half placeholder='Nom de l'aider' autocomplete='no' value='"+nomAider+"'>"+
                "</div>"+
            "</div>"+
            "<div class='row'>"+
              "<h5>Date de la demande</h5>"+
              "<input id='inputDate' readonly type='text' half placeholder='Date de la demande' autocomplete='no' value='"+date+"'>"+
              "<input id='inputHeure' readonly type='text' half placeholder='Heure' autocomplete='no' value='"+heure+"'>"+
            "</div>"+
            "<div class='row'>"+
              "<h5>Commentaire sur la session</h5>"+
              "<textarea id='zoneCommentaire' name='w3review' rows='4' cols='50'>"+commentaire+"</textarea>"+
            "</div>"+
            "<p id='btnEffacer' class='horizontal' style='margin-left:25%; max-width:300px;max-height:75px;'><span class='text'>Refuser la demande</span></p>"+
            "<input id='btnSauvegarderTuteur' type='submit' value='Sauvegarder'>"+
            "<input id='btnAnnuler' type='submit' value='Annuler'>"+
          "</form>"
        );
       }
     }
     else{
      $("#infoDemand").append(
        "<form id='formInfo' autocomplete='off' style='margin:15%;margin-top:0%'>"+
          "<div id='focus'></div>"+
          "<h1>Demande de tutorat</h1>"+
          "<div class='row'>"+
              "<div class='row'>"+
                "<h5>Nom du tuteur</h5>"+
                "<input id='inputNomTuteur' readonly type='text' half placeholder='Nom du tuteur' autocomplete='no' value='"+nomTuteur+"'>"+
              "</div>"+
              "<div class='row'>"+
                "<h5>Nom de l'aider</h5>"+
                "<input id='inputNomAider' readonly type='text' half placeholder='Nom de l'aider' autocomplete='no' value='"+nomAider+"'>"+
              "</div>"+
          "</div>"+
          "<div class='row'>"+
            "<h5>Date de la demande</h5>"+
            "<input id='inputDate' readonly type='text' half placeholder='Date de la demande' autocomplete='no' value='"+date+"'>"+
            "<input id='inputHeure' readonly type='text' half placeholder='Heure' autocomplete='no' value='"+heure+"'>"+
          "</div>"+
          "<div class='row'>"+
            "<h5>Note du tuteur</h5>"+
            "<input id='inputNote' type='number' half placeholder='Note' min='1' max='5' autocomplete='no' value='"+noteTuteur+"'>"+
          "</div>"+
          "<p id='btnEffacer' class='horizontal' style='margin-left:25%; max-width:300px;max-height:75px;'><span class='text'>Refuser la demande</span></p>"+
          "<input id='btnSauvegarderAider' type='submit' value='Sauvegarder'>"+
          "<input id='btnAnnuler' type='submit' value='Annuler'>"+
        "</form>"
      );
     }
    

      $("#btnAnnuler").click(function() {
        $("#infoDemand").empty();
      });

      $("#btnSauvegarderTuteur").click(function() {
        
        var updateCommentaire = $("#zoneCommentaire").val();
        
        if(updateCommentaire==null||updateCommentaire==""){
          etatDemande=1;
        }
        else if(noteTuteur==null||noteTuteur==0){
          etatDemande=2;
        }
        else{
          etatDemande=3;
        }
        $.ajax({
          url: "../PHP/updateDemande.php",
          type: "POST",
          data: {
          "id_session": id_session,
          "commentaire": updateCommentaire,
          "note": noteTuteur,
          "etatDemande": etatDemande
          },
          dataType: "json",
          success: function(result){

            $("#infoDemand").empty();
            location.replace("Login.html");
          },
          error: function (message, er) {
            console.log(message);
          }
        });
        $("#infoDemand").empty();
      });

      $("#btnSauvegarderAider").click(function() {

        var updateNote = $("#inputNote").val();
        if(commentaire==null || commentaire==""){
          etatDemande=1;
        }
        else if(updateNote==null || updateNote==0){
          etatDemande=2;
        }
        else{
          etatDemande=3;
        }
        $.ajax({
          url: "../PHP/updateDemande.php",
          type: "POST",
          data: {
          "id_session": id_session,
          "commentaire": commentaire,
          "note": updateNote,
          "etatDemande": etatDemande
          },
          dataType: "json",
          success: function(result){
            alert(result);
            $("#infoDemand").empty();
            location.replace("Login.html");
          },
          error: function (message, er) {
            console.log(message);
          }
        });

      });

      $("#btnEffacer").click(function() {
        $.ajax({
          url: "../PHP/DeleteDemandTutorat.php",
          type: "POST",
          data: {
          "id_session": id_session
          },
          dataType: "json",
          success: function(result){
            $("#infoDemand").empty();
            location.replace("Login.html");
          },
          error: function (message, er) {
            console.log(message);
          }
        });
      });


    },
    error: function (message, er) {
      console.log(message);
    }
  });

  

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
function listNoCours(list) {
  for(var i = 0; i < list.length; i++) {
    $("#noCours").append(
      "<option value='"+list[i][0]+"'>"
    );
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





