// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starterCtrl', 'officeBookingService', 'RESTServices', '720kb.datepicker', 'RESTservicesuser'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('login');
      $stateProvider

        .state('login', {
        url: '/login',
        controller: 'loginCtrl',
        templateUrl: 'templates/login.html'
      })

      .state('register', {
        url: '/register',
        controller: 'registerCtrl',
        templateUrl: 'templates/register.html'
      })


      //Therapist
      .state('tabs', {
        // abstract:true,
        url: '/tabs',
        templateUrl: 'templates/tabs.html'
      })

      .state('tabs.therapistLanding', {
        url: '/therapistLanding',
        cache: false,
        views: {
          'therapistLanding': {
            templateUrl: 'templates/therapistLanding.html',
            controller: 'therapistLandingCtrl'
          },
        },
        resolve: {
          loadSessions: ['bookingRest',
            function(bookingRest) {
              return getSessions();
              function getSessions() {
                var date = new Date();
                return bookingRest.getApptsToday(date);
              }
            }
          ]
        }
      })

      .state('tabs.bookOffice', {
        url: '/bookOffice',
        cache: false,
        views: {
          'therapistLanding': {
            templateUrl: 'templates/bookOffice.html',
            controller: 'bookOfficeCtrl'
          }
        }
      })

      .state('tabs.confirmation', {
        url: '/confirmation',
        cache: false,
        views: {
          'therapistLanding': {
            templateUrl: 'templates/confirmation.html',
            controller: 'confirmationCtrl'
          }
        }
      });
    }
  ]);
