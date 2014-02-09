// © Copyright 2014 Thinkster.
// Shamelessly stolen from
//   http://www.thinkster.io/pick/JCDDOCEwVX/angularjs-building-zippy
//
angular.module("support", []).directive("zippy", function(){
  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@"
    },
    template: '<div>' +
      '<header ng-click="toggleContent()" '+
      'ng-class="'+ "{ open: isContentVisible }" + '">{{title}}</header>' +
      '<div ng-show="isContentVisible" ng-transclude></div>' +
      '</div>',
    link: function(scope){
      scope.isContentVisible = false;
      scope.toggleContent = function(){
        scope.isContentVisible = !scope.isContentVisible;
      };
    }
  };
});
