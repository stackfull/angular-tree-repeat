(function(){
  'use strict';

  angular.module('treeRepeatApp').controller('ZippyCtrl', function ZippyCtrl($scope) {
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

