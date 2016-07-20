Accounts.onLogin(function(){
		FlowRouter.go('vocabulary-book')
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home')
	});	

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('vocabulary-book')
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout')
	}
});

FlowRouter.route('/vocabulary-book', {
	name: 'vocabulary-book',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:'Vocabulary'})
	}
});

FlowRouter.route('/vocab/:id', {
	name: 'vocab',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:'VocabSingle'})
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:'Menu'})
	}
});

FlowRouter.route('/study-list', {
	name: 'study-list',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main:'StudyList'})
	}
});