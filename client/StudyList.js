Template.StudyList.onCreated( function() {
	var self = this;
	self.autorun(function () {
		self.subscribe('vocabulary');
	});
});

Template.StudyList.helpers({
	studyList: ()=> {
		return Vocabulary.find({inStudyList: true});
	}
});