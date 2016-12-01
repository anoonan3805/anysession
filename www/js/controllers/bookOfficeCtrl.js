angular.module('starterCtrl')
    .controller('bookOfficeCtrl', ["$scope", "$window", "$state", "$ionicHistory", "$rootScope", '$http',
        'officeBookingService', 'bookingRest',
        function($scope, $window, $state, $ionicHistory, $rootScope,
            $http, officeBookingService,bookingRest) {
                
            //pulls building info from the backend to display-jp
            // $scope.buildingInfo = {};
            // bookingRest.getBuildingInfo().then(function(response) {
            //     if (response.status === 200) {
            //         $scope.building = response.data;
            //         console.log($scope.building);
            //     }
            // });
            
            //Save the selected date from the datepicker into a variable-jp
             $scope.myDate = new Date();
            
            
            
            
            //push all the hours selected in an array to push to the backend
            $scope.hours = [];
            $scope.pushTimes = function(time) {
                $scope.hours.push(time);

            };
            
        }

    ]);