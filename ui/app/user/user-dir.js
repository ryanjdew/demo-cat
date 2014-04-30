(function () {

  'use strict';

  var module = angular.module('demoCat.user');

  module.directive('mlUser', ['User', function (user) {
    return {
      restrict: 'A',
      replace: true,
      scope: {
        username: '=username',
        password: '=password',
        authenticated: '=authenticated',
        login: '&login',
        logout: '&logout',
        loginerror: '=loginerror'
      },
      templateUrl: '/user/user-dir.html',
      link: function($scope) {

      }
    };
  }]);
}());
