angular
	.module('angular1')
	.controller('contactCtrl', ['$scope', function(a) {
		a.title = 'Contacts';
		a.email = 'Enter email';
		a.message = 'Enter message';
}]);