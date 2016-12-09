angular.module('starterCtrl')

.controller('bookOfficeCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
    '$http', 'officeBookingService', 'bookingRest', '$filter',
    function($scope, $window, $state, $ionicHistory, $rootScope,
        $http, officeBookingService, bookingRest, $filter) {

        //pulls building info from the backend to display-jp
        $scope.buildingInfo = {};
        bookingRest.getBuildingInfo().then(function(response) {
            if (response.status === 200) {
                $scope.building = response.data;
                console.log($scope.building);
            }
        });

        //   // Testing custom api-jp
        // $scope.officesArray=[];
        // $scope.searchButton=function(dateSelected){
        //  console.log(dateSelected);
        //   bookingRest.getSessions2(2,dateSelected)
        //   .then(function(response){
        //      if(response.status === 200){
        //          $scope.officesArray=response.data; 
        //          console.log($scope.officesArray);
        //       }

        //   });

        // };


        $scope.searchButton = function(dateSelected) {
            bookingRest.getSessions2(1, dateSelected).then(function(response) {
                if (response.status == 200) {
                    $scope.officesArray = response.data;
                    console.log(response.data);
                }
            });
        };





        // $scope.offices = {};
        // bookingRest.getOffice().then(function(response) {
        //     if (response.status === 200) {
        //         $scope.offices = response.data;
        //         console.log($scope.offices);
        //     }
        // });

        //Function for search button to query for all available times-jp
        // $scope.sessionsArray=[];
        // $scope.searchButton=function(dateSelected){
        //   console.log(dateSelected)
        //   bookingRest.getSessions(dateSelected)
        //   .then(function(response){
        //      if(response.status === 200){
        //          $scope.sessionsArray=response.data; 
        //          console.log($scope.sessionsArray);
        //       }

        //   });

        // };

        // Function called to reserve office from button-jp
        //need to post an entire object
        $scope.bookOffice = function (session,sessionID) {  
          session.userID=$window.localStorage.userId;
              bookingRest.bookSession(session,sessionID)
                 .then(function(response){
                 //  $window.localStorage.userId=session.userID;
                 if (response.status === 200) {
                 //  response.data.userID=$window.localStorage.userId
                 alert("successful!");
                 }
              });
        }; 




    }
]);
