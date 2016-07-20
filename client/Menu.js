Template.Menu.onCreated( function() {
	var self = this;
	self.autorun(function () {
		self.subscribe('vocabulary');
	});
});

Template.Menu.helpers({
	vocabulary: ()=> {
		return Vocabulary.find({inStudyList: true});
	}
});