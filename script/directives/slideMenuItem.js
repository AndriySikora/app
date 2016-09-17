angular
    .module('angular1.directives.slideMenu', [])
    .directive('slideMenuItem', function() {
     return {
         restrict: 'E',
         // template: '<div ng-click='navigate()' ng-transclude></div>',
         transclude: true,
         scope: {
             hash: '@'
         },
         link: function($scope) {
             $scope.navigate = function() {
                 window.location.hash = $scope.hash;
             }
         }
     }
});