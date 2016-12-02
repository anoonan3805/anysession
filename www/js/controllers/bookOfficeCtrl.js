angular.module('starterCtrl')
    .controller('bookOfficeCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope", '$http',
        'officeBookingService', 'bookingRest','$filter',
        function($scope, $window, $state, $ionicHistory, $rootScope,
            $http, officeBookingService,bookingRest, $filter) {
                
            //pulls building info from the backend to display-jp
            // $scope.buildingInfo = {};
            // bookingRest.getBuildingInfo().then(function(response) {
            //     if (response.status === 200) {
            //         $scope.building = response.data;
            //         console.log($scope.building);
            //     }
            // });
            
            //Save the selected date from the datepicker into a variable-jp
            //  $scope.dateSelected;
            //  var date = $scope.dateSelected;
          
         
            // $scope.selectTime = function(){
            //     $scope.dateSelected;
            //     console.log($scope.dateSelected);
            // };

   
            //pulling office info from the backend
            $scope.offices = {};
            bookingRest.getOffice().then(function(response) {
                if (response.status === 200) {
                    $scope.offices = response.data;
                    console.log($scope.office);
                }
            });
          
            //Function for search button to query for all available times-jp
            $scope.sessionsArray=[];
            $scope.searchButton=function(){
               bookingRest.getSessions()
              .then(function(response){
                 if(response.status === 200){
                     $scope.sessionsArray=response.data; 
                     console.log($scope.sessionsArray);
                   }
                   
               });
                
            };

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