var stories = require('../data/stories.json')
var fs = require('fs');

var findIndexByAttr = function(array, attr, value) {
    for(var i = 0; i < array.length; i++) {
    	console.log("i:"+i+"    questions[i][index]:"+array[i][attr])
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

exports.update = function(req, res) {
	console.log("IN UPDATE VOTES!");
	var uniqueID = req.query.uniqueID;
	var index = parseInt(req.query.index);
	var vote = req.query.vote;
	console.log("UNIQUEID:"+uniqueID);
	console.log("INDEX:"+index.constructor.name);
	console.log("VOTE:"+vote);

	var storyID = findIndexByAttr(stories.stories, 'uniqueID', uniqueID);
	var story = stories.stories[storyID];

	var questionID = findIndexByAttr(story['questions'], 'index', index);
	var question = story['questions'][questionID];

	if(vote=="yes")
	{
		console.log("IN_YES!");
		question['yes'] = question['yes']+1;
	}
	else if(vote == "no")
	{
		console.log("IN_NO!");
		question['no'] = question['no']+1;	
	}

	fs.writeFileSync('data/stories.json', JSON.stringify(stories, null, 4));

	res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("abc");
}