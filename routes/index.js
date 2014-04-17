function randSort(){
	return(Math.round(Math.random()) - 0.5);
}

exports.view = function(req, res){
	res.render('index');
}
