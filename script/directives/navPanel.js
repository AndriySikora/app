angular.module('angular1.directives.navPanel', [])
 .directive('navPanel', function(){
 	return{
 		restrict: 'E',
 		templateUrl: 'templates/navbar-panels.html'
 	};
 })