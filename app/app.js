'use strict';

/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('angularfireSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/login.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/register.html'
      });

    $urlRouterProvider.otherwise('/');

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA5Bs3AmONkh0QFLbBqImK8cI1CV3Fya4M",
      authDomain: "slacker-c4fc8.firebaseapp.com",
      databaseURL: "https://slacker-c4fc8.firebaseio.com",
      storageBucket: "slacker-c4fc8.appspot.com",
      messagingSenderId: "465641563860"
    };
    firebase.initializeApp(config);
  })
  .constant('FirebaseUrl', 'https://slack.firebaseio.com/');
