 /*global angular*/
 angular.module("RESTservicesuser",[])
  .service("UsersREST", ['$http', '$window', function($http, $window) {
    var UsersRest = this;
    var apiUrl = "https://anysession-etdebruin10story.c9users.io/api/Doctors";
 
     UsersRest.post = function(newUserData) {
     return $http({
      url: apiUrl,
      method: "POST",
      data: newUserData
 
     });
   };
   
    UsersRest.login = function(user){
    return $http({
     url: apiUrl + '/login',
     method: "POST",
     data: user
    });
   };
     UsersRest.logOut=function(){
     return $http({
      url: apiUrl+"/logout",
      method: 'POST',
      headers: {
       'Authorization':$window.localStorage.token
      }
      });
     
   };
  }]);