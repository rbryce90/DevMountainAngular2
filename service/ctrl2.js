angular.module("app")
  .controller("ctrl2", function($scope, service) {
    $scope.getStuff = function() {
      $scope.name = service.check();
    }
  })
