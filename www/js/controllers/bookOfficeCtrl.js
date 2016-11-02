angular.module('starterCtrl')
  .controller('bookOfficeCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope",
    '$http', 'officeBookingService',
    function($scope, $window, $state, $ionicHistory, $rootScope, 
    $http, officeBookingService) {

// $scope.bookingInfo={
//         somedata:"hey there"
//     };
 
      
      officeBookingService.setbookingInfo($scope.bookingInfo);
       
 
    $scope.bookingInfo={
        
    };
  $scope.bookingInfo.reservedby="Jadon Parker";
  $scope.bookingInfo.officeId;
$scope.bookingInfo.reservedfromDate;
  $scope.bookingInfo.hour;
$scope.bookingInfo.officeName;
  
  
  
  $scope.hours = [
    {"hour": "8:00AM"},
    {"hour": "9:00AM"},
    {"hour": "10:00AM"},
    {"hour": "11:00AM"},
    {"hour": "12:00PM"},
    {"hour": "1:00PM"},
    {"hour": "2:00PM"},
    {"hour": "3:00PM"},
    {"hour": "4:00PM"},
    {"hour": "5:00PM"}
  ];
   
  //mock data needed for testing purposes -jp  
      $scope.officesArray = [{
        officeName: "Room A",
        buildingId: "4566",
        openTime: "2016-10-25",
        closeTime: "2016-10-25",
        id: "8974"
      }, {
        officeName: "Room B",
        buildingId: "4545",
        openTime: "2016-10-25",
        closeTime: "2016-10-25",
        id: "4454"
      }];
 
  $scope.setBooking=function() {
    
        officeBookingService.setbookingInfo($scope.bookingInfo);
   
        $state.go('tabs.confirmation');
  };

officeBookingService.setbookingInfo($scope.bookingInfo);
      $scope.test = officeBookingService.getbookingInfo();

}
]);



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
