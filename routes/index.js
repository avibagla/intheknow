var testData = require('../data/stories.json');


function randSort(){
	return(Math.round(Math.random()) - 0.5);
}

exports.view = function(req, res){
	res.render('index', testData);
}



/*{ 
			"title": "",
			"details": [
				{"text": ""},
				{"text": ""},
				{"text": ""}
			],
			"questions":[
				{"text": ""},
				{"text": ""},
				{"text": ""}
			]
		},

*/