angular.module("angularfireSlackApp")
  .controller("AuthCtrl", function (Auth, $state) {
    var AuthCtrl = this;

    AuthCtrl.user = {
      email: '',
      password: ''
    };
  });
