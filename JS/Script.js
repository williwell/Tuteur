function putCours(list) {
	console.log("downloading book review: success");
    for (var i = 0; i < list.length; i++) {
					$("#Cours").append("<div id='EventClick' class='col-md-3'>"+
					"<h5 style='cursor: pointer;'>"+list[i][1]+"</h5>"+
					"<h5 style='cursor: pointer;'>"+list[i][2]+"</h5>"+
				  "</div>"
	  			);
	};
}