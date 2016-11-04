angular.module("RESTServices",[])
 .service('bookingRest', [ '$http',
  function($http) {


//Service for making office reservations--jp
 var bookingRest = this;
 var URL= "https://anysession-etdebruin10story.c9users.io:8080/api/sessions";
 
 //post office reservations-jp
   bookingRest.post = function(data){
        return $http ({
            url: URL,
            method: 'POST',
            data:data
           
        });
        
    };
    
    bookingRest.retrieveInfo = function(){
        return $http ({
            url: URL,
            method: 'GET'
            });
        
    };
    
    
    
     //post office reservations-jp

      bookingRest.get = function(){
        return $http ({
            url: URL,
            method: 'GET'
        });
    };
                  
             




  }
 ]);