function putCours(list) {
	//document.getElementById("#Cours").empty();
	$("div").remove("#test");
	console.log("downloading book review: success");
    for (var i = 0; i < list.length; i++) {
					$("#Cours").append("<div id='test' class='row' style='margin-bottom: 2%;'>"+
					"<h5 style='cursor: pointer;'># cours: "+list[i][0]+"</h5>"+
					"<h5 style='cursor: pointer;'>Nom du cours: "+list[i][1]+"</h5>"+
					"<h5 style='cursor: pointer;'># programme: "+list[i][2]+"</h5>"+
				  "</div>"
	  			);
	};
}