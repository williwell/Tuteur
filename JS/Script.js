function putTutor(list) {
	console.log("téléchargement de la card des tuteurs: success");
	
    for (var i = 0; i < list.length; i++) {
      var idDivCourse="#"+list[i][0]+"Class";
					$("#Tuteur").append( 
            "<div class='outer-div'>"+
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
	$("div").remove("#courInfo");
	console.log("téléchargement des cours: success");
    for (var i = 0; i < list.length; i++) {
		$("#Cours").append("<div id='courInfo' class='row' style='margin-bottom: 2%;'>"+
		"<h5 style='cursor: pointer;'># cours: "+list[i][0]+"</h5>"+
		"<h5 style='cursor: pointer;'>Nom du cours: "+list[i][1]+"</h5>"+
		"<h5 style='cursor: pointer;'># programme: "+list[i][2]+"</h5>"+
		"</div>"
	  	);
	};
}

function putDocCours(list) {
	console.log("téléchargement des documents: success");
	for(var i = 0; i < list.length; i++) {
		$("DocCour").append("<div class='row' style='margin-bottom: 2%;'>"+
		"");
	}
}