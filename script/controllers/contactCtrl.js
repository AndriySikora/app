angular
	.module('angular1')
	.controller('contactCtrl', ['$scope', function($scope) {

		$scope.checkEmail = (function(contact) {
			var regexp = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]/;
				return {
					test: function(value) {
						return	regexp.test(value);
					}
				};
		})();
		$scope.sendMsg = function(){
			var form = $scope.contactForm;
			if(!form.$invalid && form.$dirty){ 
				alert('Successful sent');
				$scope.letter = {
					'email':$scope.contact.email,
					'message':$scope.contact.message
				}
			};
		}
	}]);