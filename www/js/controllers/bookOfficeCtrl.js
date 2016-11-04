angular.module('starterCtrl')
    .controller('bookOfficeCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope", '$http', 'officeBookingService', 'bookingRest',
        function($scope, $window, $state, $ionicHistory, $rootScope,
            $http, officeBookingService, bookingRest) {

            


            officeBookingService.setbookingInfo($scope.bookingInfo);


            $scope.bookingInfo = {

            };
            $scope.bookingInfo.reservedby = "Jadon Parker";
            $scope.bookingInfo.officeId;
            $scope.bookingInfo.reservedfromDate;
            $scope.bookingInfo.hour;
            $scope.bookingInfo.officeName;




            //mock data needed for testing purposes -jp  
            $scope.officesArray = [{
                officeName: "Room A",
                buildingId: "4566",
                timesAvailable: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                id: "8974"
            }, {
                officeName: "Room B",
                buildingId: "4545",
                timesAvailable: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                id: "4454"
            }];




            $scope.testData = {
                "officeID": 8974,
                "dateBooked": Date.now,
                "sessionsRequested": "8",
                "userID": 1234
            };
            $scope.testData.sessionDate;
            $scope.testData.sessionsRequested;

            $scope.buttonTest = function() {
                // bookingRest.post().then(function(res) {
                //     if (res.status === 200) {
                //         alert("yes!");
                //     }
                // });
                bookingRest.post($scope.testData).then(function(response) {
                    if (response.status === 200) {
                        
                        alert("yes! sent data check consolelog");
                        console.log(response.data);
                    }else {
                        alert("It didnt work!");
                    }
                    
                    
                });
            };



            $scope.retrieve = function() {
                $scope.TestretRieveInfo = bookingRest.retrieveInfo();
                console.log($scope.TestretRieveInfo);
            };
        }

    ]);

















//////OLD INFO FOR REST/////

// $scope.setBooking=function() {

//       officeBookingService.setbookingInfo($scope.bookingInfo);

//       $state.go('tabs.confirmation');
// };

// officeBookingService.setbookingInfo($scope.bookingInfo);
//       $scope.test = officeBookingService.getbookingInfo();
/////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////
// $scope.bookingInfo.officeId;
// $scope.bookingInfo.reservedfromDate;
// $scope.bookingInfo.hour;






//we need to put all the bookingInfo into an object that we can send to backend and and also call in our service.
//       $scope.bookingInfo={


//       };
//       $scope.bookingInfo.officeName;
//       $scope.bookingInfo.officeId;
//       console.log($scope.bookingInfo);

// $scope.setBooking=function() {

//         officeBookingService.setbookingInfo($scope.bookingInfo);

//         $state.go('tabs.confirmation');
//   };

// Call the setbooking service in order to view data on the following page
//$scope.setBooking = function(form) {

// console.log($scope.bookingInfo);

//Post booking information to the backend from the bookingInfo object
// bookOfficeRest.post($scope.bookingInfo).then(function(response) {
//   console.log($scope.bookingInfo);


//if (response.status === 200) {
//officeBookingService.setbookingInfo($scope.bookingInfo);

// console.log("Form is Below");
//console.log(form);
//alert("Yes it has been sent to the backend!");
//};
//};


//$state.go('tabs.confirmation');


// officeBookingservice.setbookingInfo($scope.bookingInfo);
// $scope.test = officeBookingservice.getbookingInfo();





//   }
// ]);
