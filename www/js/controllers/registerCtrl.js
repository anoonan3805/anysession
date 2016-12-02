/*global angular*/
angular.module('starterCtrl')
    .controller('registerCtrl', ['$scope', '$state', '$window', 'UsersREST', function($scope, $state, $window, UsersREST) {


        $scope.user = {};
        $scope.signupForm = function(form) {
            if (form.$invalid) return alert("Please complete the form before proceeding.");

            UsersREST.post($scope.user)
                .then(function(response) {
                    if (response.status == 200) {
                        console.log(response);
                        $window.localStorage.token = response.data.token;
                        $window.localStorage.userID = response.data.id;
                        $state.go("tabs.therapistLanding");

                    }
                    // handle different responses and decide what happens next
                }, function(error) {
                    // inform the user of any known problems that arose, otherwise give a generic
                    // failed message
                    if (error.status == 404) {
                        alert("The server has not found anything matching the Request-URI.");
                    }
                    else if (error.status == 422) {
                        alert("That email is already taken. Please enter a different email or login if you are already registered.");
                    }
                    else if (error.status == 500) {
                        alert("Internal Server Error");
                    }
                    return error;
                });

        };
    }]);