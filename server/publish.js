Meteor.publish('vocabulary', function(){
	return Vocabulary.find({author: this.userId});
});

Meteor.publish('singleVocab', function(id){
	check(id, String);
	return Vocabulary.find({_id: id});
});