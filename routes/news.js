var stories = require('../data/stories.json')

var findIndexByAttr = function(array, attr, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}


exports.viewNewsItem = function(req, res){
	var newsId = req.params.id;
	console.log(newsId);
	console.log(stories);
	storyID = findIndexByAttr(stories.stories, 'uniqueID', newsId);
	story = stories.stories[storyID];
	res.render('newsItem', story);
}

exports.viewAllData = function(req, res){
	res.render('dataDump', stories);
}