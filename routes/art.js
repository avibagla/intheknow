var images = require('../data/sequenceImages.json');

function randSort(){
	return(Math.round(Math.random()) - 0.5);
}

exports.sequences = function(req, res){

	for(var i = 0; i < 100; i++) images.images.sort(randSort);
	res.render('sequences', images);
}

exports.altsequences = function(req, res){

	for(var i = 0; i < 100; i++) images.images.sort(randSort);
	res.render('altsequences', images);
}
