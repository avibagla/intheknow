var stories = require('../data/stories.json')

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