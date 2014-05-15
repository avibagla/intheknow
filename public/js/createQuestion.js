$(document).ready(function(){
	initializePage();
});


function initializePage(){

	$('#showQuestions').click(function(){
		$('#currentQuestions').fadeToggle('slow', 'linear');
	});

}