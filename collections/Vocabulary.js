Vocabulary = new Mongo.Collection('vocabulary');

Vocabulary.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

Examples = new SimpleSchema({
	langA: {
		type: String,
	},
	langB: {
		type: String,
	}
})

var VocabularySchema = new SimpleSchema({
	langA: {
		type: String,
		label: 'Language A'
	},
	langB: {
		type: String,
		label: 'Language B'
	},
	examples: {
		type: [Examples]
	},
	inStudyList: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: 'hidden'
		}
	},
	author: {
		type: String,
		label: 'Author',
		autoValue: function() {
			return this.userId
		},
		autoform:{
			type: 'hidden'
		}
	},
	createdAt: {
		type: Date,
		label: 'Created At',
		autoValue: function() {
			return new Date()
		},
		autoform:{
			type: 'hidden'
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState){
		Vocabulary.update(id, {
			$set: {
				inStudyList: !currentState
			}
		});
	},
	deleteVocab: function (id){
		Vocabulary.remove(id);
	}
});

Vocabulary.attachSchema(VocabularySchema);