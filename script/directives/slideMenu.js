angular
	.module('angular1.directives.slideMenu', [])
	.directive('slideMenu', function() {
    return {
        restrict: 'E',
        //template: "<div ng-class='{ show: visible, left: alignment === \"left\", right: alignment === \"right\" }' ng-transclude>home made</div>",
        // transclude: true,
        // $scope: {
        //     // visible: "=",
        //     // alignment: "@"
        // },
        controller: 'menuCtrl',
        templateUrl: 'templates/menuSlide.html'
    };
})