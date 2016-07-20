Template.NewVocabulary.events({
	'click .fa-close' : function() {
		Session.set('newVocabulary', false);
	}
});