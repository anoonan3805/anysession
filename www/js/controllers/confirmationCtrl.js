angular.module('starterCtrl')
  .controller('confirmationCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope", 
  '$http','officeBookingService',
    function($scope, $window, $state, $ionicHistory, $rootScope, $http, officeBookingService) {
  
console.log(officeBookingService.getbookingInfo());
      
      $scope.test =officeBookingService.getbookingInfo().reservedby;
      console.log($scope.test);
      
      $scope.room =officeBookingService.getbookingInfo().officeName;
      console.log($scope.room);
      
      $scope.date =officeBookingService.getbookingInfo().sessionInfo.date;
      console.log($scope.date);
      
      $scope.time =officeBookingService.getbookingInfo().sessionInfo.reservationInfo.hour;
      console.log($scope.time);
       

    
    }
  ]);
