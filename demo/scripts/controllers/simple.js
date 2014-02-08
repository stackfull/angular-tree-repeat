(function(){
  'use strict';

  angular.module('treeRepeatApp').controller('SimpleCtrl', function SimpleCtrl($scope) {
    $scope.treeData = {
      name: "Root",
      children: [{
        name: "First Child",
        children: [{
          name: "First Grandchild"
        },{
          name: "Second Grandchild"
        }]
      },{
        name: "Second Child"
      }]
    };
  });
}());

