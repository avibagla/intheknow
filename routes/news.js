var stories = require('../data/stories.json')

var findIndexByAttr = function(array, attr, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}

var sortQuestions = function(a, b){
	var aTotal = a.yes + a.no;
	var bTotal = b.yes + b.no;
	return bTotal - aTotal;
}


exports.viewNewsItem = function(req, res){
	var newsId = req.params.id;
	storyID = findIndexByAttr(stories.stories, 'uniqueID', newsId);
	story = stories.stories[storyID];
	console.log(story);
	story.questions.sort(sortQuestions);
	console.log(story);
	res.render('newsItem', story);
}

exports.viewAllData = function(req, res){
	res.json(stories);
}