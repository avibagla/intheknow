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
	story['questions'].push({"text": qs});
	fs.writeFileSync('data/stories.json', JSON.stringify(stories));

	var news = require('./news')
	news.viewNewsItem(req, res);

}