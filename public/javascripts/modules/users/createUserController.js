angular.module("users")
       .controller("createUserController", CreateUserController);

function CreateUserController($scope, $location, usersService) {
  $scope.createUser = createUser;
    this.user = {};

    function createUser() {
        console.info("createUser()");
        var newUser = angular.copy($scope.cuc.user);
        console.info(newUser);
        usersService.saveUser(newUser).success(function() {
          $location.path("/users");
          return;
        });
    }

}
