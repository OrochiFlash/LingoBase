Template.Vocab.onCreated(function() {
	this.editMode = new ReactiveVar(false);
	this.hideSecondLang = new ReactiveVar(true);
	this.languageSwitch = new ReactiveVar(false);
});

Template.Vocab.helpers({
	updateVocabId: function () {
		return this._id;
	},
	editMode : function () {
		return Template.instance().editMode.get();
	},
	hideSecondLang : function () {
		return Template.instance().hideSecondLang.get();
	},
	languageSwitch : function () {
		return Template.instance().languageSwitch.get();
	}
});

Template.Vocab.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleMenuItem', this._id, this.inStudyList)
	},
	'click .fa-trash' : function() {
		Meteor.call('deleteVocab', this._id);
	},
	'click .fa-pencil' : function(event, template) {
		template.editMode.set(!template.editMode.get());
	},
	'click .show-langB' : function(event, template) {
		template.hideSecondLang.set(!template.hideSecondLang.get());
	},
	'click .switch-lang' : function(event, template) {
		template.languageSwitch.set(!template.languageSwitch.get());
	}
});