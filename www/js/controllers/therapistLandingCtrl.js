angular.module('starterCtrl')
  .controller('therapistLandingCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
  '$http', 'bookingRest', '$filter','UsersREST', 'loadSessions',
    function($scope, $window, $state, $ionicHistory, $rootScope, $http, bookingRest, $filter, UsersREST, loadSessions) {

//get's user info of logged in user AN
$scope.userInfo = {};
            bookingRest.getName().then(function(response) {
                if (response.status === 200) {
                    $scope.user = response.data;
                    console.log($scope.user);
                }
            });
          
        //get's today's date for the landing AN
        $scope.date = new Date();
        $scope.results =  $filter('date')($scope.date, "yyyy-MM-dd");
        
        $scope.appointments = loadSessions;
        
        //  $scope.appointments = {};
        //     bookingRest.getApptsToday($scope.results).then(function(response) {
        //         if (response.status === 200) {
        //             $scope.appointments = response.data;
        //             console.log($scope.appointments);
        //         }
        //     });
        
        $scope.logOut = function() {
                UsersREST.logOut();
                delete $window.localStorage.token;
                delete $window.localStorage.userId;
                $state.go('login');
            };
        
      }   
  ]);
