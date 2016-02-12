//SERVICE SERVICE SERVICESERVICE SERVICE SERVICESERVICE SERVICE SERVICESERVICE SERVICE SERVICE//
//SERVICE SERVICE SERVICESERVICE SERVICE SERVICESERVICE SERVICE SERVICESERVICE SERVICE SERVICE//
angular.module("app")

  .service("service", function() {

      var data = "foo";

      this.check = function() {
        return data;
      }

      this.set = function(x) {
        console.log("service", x);
        data = x;
      }
  });
