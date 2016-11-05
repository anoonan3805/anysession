angular.module('starterCtrl')
    .controller('bookOfficeCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope", '$http', 'officeBookingService', 'bookingRest',
        function($scope, $window, $state, $ionicHistory, $rootScope,
            $http, officeBookingService, bookingRest) {




            $scope.buildingInfo = {};

            bookingRest.getBuildingInfo().then(function(response) {
                if (response.status === 200) {
                    $scope.building = response.data;
                    console.log($scope.building);
                }
            });

            $scope.time = [];
            $scope.timeOffice = [];
            $scope.timeDisplay = [];





            $scope.getTimeSlots = {};

            $scope.testData = {};

            $scope.searchbutton = function() {
                alert("Let the search begin!");
                $scope.testData = {
                    sessionDate: "11/05/2016"
                };

                bookingRest.getSessions($scope.testData.sessionDate).then(function(response) {
                    console.log($scope.testData.sessionDate);

                    if (response.status === 200) {
                        //////This is the scope with the booked sessions
                        $scope.bookedSessions = response.data;
                        console.log(response.data);


                        ///////////////

                        bookingRest.getTimeSlots().then(function(resp) {
                            if (resp.status === 200) {
                                $scope.Office = resp.data;

                                // $scope.Office.timesAvailable = response.data;
                                console.log($scope.Office);

                                console.log($scope.Office[0].timesAvailable);
                                console.log($scope.bookedSessions[0].sessionsRequested);

                                $scope.time.push($scope.bookedSessions[0].sessionsRequested);
                                console.log($scope.time);

                                $scope.timeOffice.push($scope.Office[0].timesAvailable);
                                console.log($scope.timeOffice);




                            }
                        });
                        //////////////////        
                        for (var i = 0; i <= $scope.timeOffice.length; i++) {
                            if ($scope.time == $scope.timeOffice) {
                                alert("Yes!");
                            }
                        }


                    }
                    else {
                        alert("It didnt work!");
                    }



                });


            };



            // officeBookingService.setbookingInfo($scope.bookingInfo);


            // $scope.bookingInfo = {

            // };
            // $scope.bookingInfo.reservedby = "Jadon Parker";
            // $scope.bookingInfo.officeId;
            // $scope.bookingInfo.reservedfromDate;
            // $scope.bookingInfo.hour;
            // $scope.bookingInfo.officeName;




            //mock data needed for testing purposes -jp  
            // $scope.officesArray = [{
            //     officeName: "Room A",
            //     buildingId: "4566",
            //     timesAvailable: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            //     id: "8974"
            // }, {
            //     officeName: "Room B",
            //     buildingId: "4545",
            //     timesAvailable: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            //     id: "4454"
            // }];

            // $scope.building = [{
            //     name:"Any Session Headquarters",
            //     address:{
            //         street:"2851 Camino del Rio South",
            //         city:"San Diego",
            //         state:"CA",
            //         zipcode:"92108"
            //     }
            // }];


            // $scope.sessionBooked = {
            //     "officeID": 8974,
            //     "dateBooked": Date.now,
            //     "sessionsRequested": "8",
            //     "userID": 1234
            // // };
            // $scope.testData.sessionDate;
            // $scope.testData.sessionsRequested;

            $scope.buttonTest = function() {

                // bookingRest.post($scope.sessionBooked).then(function(response) {
                // if (response.status === 200) {

                alert("yes! sent data check consolelog");
                // console.log(response.data);
                // }else {
                //     alert("It didnt work!");
                // }


                // });
            };



            // $scope.retrieve = function() {
            //     $scope.TestretRieveInfo = bookingRest.retrieveInfo();
            //     console.log($scope.TestretRieveInfo);
            // };
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
