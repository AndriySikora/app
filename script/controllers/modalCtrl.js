	angular
	.module('angular1')
	.controller('modalCtrl', function($scope, $mdDialog) {
  		$scope.status = '  ';
  		$scope.customFullscreen = false;
  			  $scope.showConfirm = function(ev) {
    			var confirm = $mdDialog.confirm()
          		.title('help modal')
          		.textContent('Would you like to have some help?')
          		.ariaLabel('Lucky day')
          		.targetEvent(ev)
          		.ok('yes')
          		.cancel('no');

    			$mdDialog.show(confirm).then(function() {
      				$scope.status = window.open('http://www.google.com', '_blank');
    				}, function() {
      						$scope.status = console.log('Help is not needed');
    					});
  			};
    });