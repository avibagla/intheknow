$(document).ready(function(){
	initializePage();
});


function initializePage(){

	$('.slider').slider();

	$('.yes').click(function(){
		var qsNumber = this.getAttribute("qsNumber");
		var uniqueID = $('#uniqueID').attr("v")
		//http://api.jquery.com/attribute-equals-selector/
		$.ajax({
			url: "/updateVotes",
			data: {"uniqueID": uniqueID,"index": qsNumber, "vote": "yes"},
			type: "GET",
			dataType: "text",
			success: function(text) {
				console.log("SUCCESS");
			},
			error: function(xhr, status, errorThrown) {
				console.log("ERROR!");
			},
			complete: function(xhr, status) {
				console.log("COMPLETE!");
			}
		});
	});

	$('.no').click(function(){
		var qsNumber = this.getAttribute("qsNumber");
		var uniqueID = $('#uniqueID').attr("v")
		//http://api.jquery.com/attribute-equals-selector/
		$.ajax({
			url: "/updateVotes",
			data: {"uniqueID": uniqueID,"index": qsNumber, "vote": "no"},
			type: "GET",
			dataType: "text",
			success: function(text) {
				console.log("SUCCESS");
			},
			error: function(xhr, status, errorThrown) {
				console.log("ERROR!");
			},
			complete: function(xhr, status) {
				console.log("COMPLETE!");
			}
		});
	});
}