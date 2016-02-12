angular.module("factoryApp")
  .factory("factory", function() {
    var data = "foo";
    return {
      check: function() {
        return data;
      },
      set: function(x) {
        data = x;
      }

    }
  })
