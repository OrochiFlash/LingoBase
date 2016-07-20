Template.VocabSingle.onCreated( function() {
	var self = this;
	self.autorun(function () {
		var id = FlowRouter.getParam('id');
		self.subscribe('singleVocab', id);
	});
});

Template.VocabSingle.helpers({
	vocab: ()=> {
		var id = FlowRouter.getParam('id');
		return Vocabulary.findOne({_id: id});
	}
});