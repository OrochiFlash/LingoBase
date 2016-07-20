Template.Vocabulary.onCreated( function() {
	var self = this;
	self.autorun(function () {
		self.subscribe('vocabulary');
	});
});

Template.Vocabulary.helpers({
	vocabulary: ()=> {
		return Vocabulary.find({});
	}
});

Template.Vocabulary.events({
	'click .new-vocab': () => {
		Session.set('newVocabulary', true);
	}
});