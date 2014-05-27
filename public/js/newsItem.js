$(document).ready(function(){
	initializePage();
});

var beenClicked = false;

function initializePage(){

	$('.slider').slider();

	$('.yes').click(function(){
		var qsNumber = this.getAttribute("qsNumber");
		var uniqueID = $('#uniqueID').attr("v");
		//http://api.jquery.com/attribute-equals-selector/
		//console.log("OuterThis"+this.innerHTML);
		if(!beenClicked){	
			$.ajax({
				url: "/updateVotes",
				data: {"uniqueID": uniqueID,"index": qsNumber, "vote": "yes"},
				type: "GET",
				dataType: "json",
				success: function(json) {
					console.log("SUCCESS");
					var yesVotes = json['yes'];
					var noVotes = json['no'];
					console.log("Yes:"+yesVotes+"   No:"+noVotes);
					var yesRelativeWidth = 98*yesVotes/(yesVotes+noVotes);
					var noRelativeWidth = 98*noVotes/(yesVotes+noVotes);
					console.log("YesWidth:"+yesRelativeWidth+"   NoWidth:"+noRelativeWidth);
				//	console.log("This:"+this);
					$(".yes[qsNumber='"+qsNumber+"']").width((yesRelativeWidth-1)+"%");
					$(".yes[qsNumber='"+qsNumber+"']").removeClass('yes').addClass('yesClicked');
					$(".no[qsNumber='"+qsNumber+"']").width((noRelativeWidth-1)+"%");
					$(".no[qsNumber='"+qsNumber+"']").removeClass('no').addClass('noClicked');
				},
				error: function(xhr, status, errorThrown) {
					console.log("ERROR!");
				},
				complete: function(xhr, status) {
					console.log("COMPLETE!");
					beenClicked = true;
				}
			});
		}
	});

	$('.no').click(function(){
		var qsNumber = this.getAttribute("qsNumber");
		var uniqueID = $('#uniqueID').attr("v")
		//http://api.jquery.com/attribute-equals-selector/
		if(!beenClicked){	
			$.ajax({
				url: "/updateVotes",
				data: {"uniqueID": uniqueID,"index": qsNumber, "vote": "no"},
				type: "GET",
				dataType: "json",
				success: function(json) {
					console.log("SUCCESS");
					var yesVotes = json['yes'];
					var noVotes = json['no'];
					console.log("Yes:"+yesVotes+"   No:"+noVotes);
					var yesRelativeWidth = 98*yesVotes/(yesVotes+noVotes);
					var noRelativeWidth = 98*noVotes/(yesVotes+noVotes);
					console.log("YesWidth:"+yesRelativeWidth+"   NoWidth:"+noRelativeWidth);
				//	console.log("This:"+this);
					$(".yes[qsNumber='"+qsNumber+"']").width((yesRelativeWidth-1)+"%");
					$(".yes[qsNumber='"+qsNumber+"']").removeClass('yes').addClass('yesClicked');
					$(".no[qsNumber='"+qsNumber+"']").width((noRelativeWidth-1)+"%");
					$(".no[qsNumber='"+qsNumber+"']").removeClass('no').addClass('noClicked');
				},
				error: function(xhr, status, errorThrown) {
					console.log("ERROR!");
				},
				complete: function(xhr, status) {
					console.log("COMPLETE!");
					beenClicked = true;
				}
			});
		}
	});
}