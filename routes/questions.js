var stories = require('../data/stories.json')
var fs = require('fs');

var findIndexByAttr = function(array, attr, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

exports.createQuestion = function(req, res){
	var newsId = req.params.id;
	console.log(newsId);
	storyID = findIndexByAttr(stories.stories, 'uniqueID', newsId);
	story = stories.stories[storyID];
	console.log(story);
	//temp
	var a = story['questions'][0]['yes'] + story['questions'][0]['no'] + 3
	console.log("YES:"+story['questions'][0]['yes']);
	console.log("NO:"+story['questions'][0]['no']);
	console.log("a="+a);
	//endTemp
	res.render('createQuestions', story);
}

exports.submitQuestion = function(req, res){
	var newsId = req.params.id;
	var qs = req.query.questionText;
	
	console.log("IN SUBMIT QUESTION!!!");
	console.log("ID:"+newsId);
	console.log("QS:"+qs);
	
	storyID = findIndexByAttr(stories.stories, 'uniqueID', newsId);
	story = stories.stories[storyID];
	maxIndex = 0;
	length = story['questions'].length;
	for(i=0; i<length; i++)
	{
		if(story['questions'][i]['index'] > maxIndex)
			maxIndex = story['questions'][i]['index'];
	}
	story['questions'].push({"index": maxIndex+1, "text": qs, "yes": 1, "no": 1}); //using a LaPlace to force a probability
	fs.writeFileSync('data/stories.json', JSON.stringify(stories, null, 4));

	res.redirect('/news/' + newsId);
}