angular.module("app")
  .controller("ctrl", function($scope, service) {

    console.log(service.check());
    
    $scope.send = function(x) {
      service.set(x);
    }

  });
