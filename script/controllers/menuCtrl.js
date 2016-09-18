angular
    .module('angular1')
    .controller('menuCtrl',['$scope', function($scope) {
    console.log('$scope');
    $scope.visible = true;
}]);