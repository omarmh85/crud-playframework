angular.module("users", [])
       .factory("usersService", UsersService)
       .controller("userController", UserController)
       .constant("usersServiceUrl", "https://crud-lab.herokuapp.com/api/users");

function UsersService($http, usersServiceUrl) {
  function get(param) {
    return request("GET", param);
  }

  function request(verb, param, data) {
    var req = {
      method: verb,
      url: url(param),
      data: data
    }
    return $http(req);
  }

  function url(param) {
    if(param == null || !angular.isDefined(param)) {
      param = "";
    }
    return usersServiceUrl + param;
  }

  return {
    getUsers: function() {
      return get();
    }
  }
}

function UserController($scope, $location, usersService) {
    var rings = [];

    $scope.redirectCreateUser = redirectCreateUser;
    $scope.isBusy = isBusy;
    $scope.isLoading = isLoading;
    $scope.errorMessage = "";
    $scope.cancel = reset;

    $scope.users = [];
    getAllUsers();

    function isBusy(id) {
      if(angular.isDefined(id)) {
        return rings.indexOf(id) >= 0;
      } else {
        return rings.length > 0;
      }
    }

    function busy(id) {
      if(isBusy(id)) {
        return;
      }
      rings.push(id);
    }

    function isLoading() {
      return isBusy(-2);
    }

    function complete(id) {
      var idx = rings.indexOf(id);
      if(idx < 0) {
        return;
      } else {
        rings.splice(idx, 1);
      }
    }

    function reset() {
      selectedId = -1;
      addFlag = false;
      editFlad = false;
      removeFlad = false;
      $scope.errorMessage = "";
    }

    function getAllUsers() {
        console.info("getAllUsers()");
        busy(-2);
        usersService.getUsers().success(function(users) {
          $scope.users = users;
          complete(-2);
        }).error(function(errorInfo, status) {
          console.error(errorInfo);
        });
        reset();
    }

    function redirectCreateUser() {
        $location.path("/users/create");
        return;
    }

}
