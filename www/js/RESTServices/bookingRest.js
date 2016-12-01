angular.module("RESTServices",[])
 .service('bookingRest', [ '$http',"$window",
  function($http,$window) {
    
     
//Service for making office reservations--jp
 var bookingRest = this;
 var URL= "https://anysession-etdebruin10story.c9users.io:8080/api/";
 
 //post office reservations-jp
   bookingRest.post = function(data){
        return $http ({
            url: URL+"sessions",
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
    
    bookingRest.getTimeSlots = function(){
        return $http ({
            url: URL+"Offices?filter[fields][timesAvailable]=true&filter[fields][officeName]=true",
            method: 'GET'
            });
        
    };
    
    
    
     //post office reservations-jp

    //   bookingRest.getBuildingInfo = function(){
    //     return $http ({
    //         url: URL+"buildings?filter[where][id]=581d0c2a146ddb0ea4263a6c",
    //         method: 'GET'
    //     });
    // };
    
    //gets reserved sessions 
    bookingRest.getSessions = function(date){
        return $http ({
            url: URL+"sessions?filter[where][sessionDate]="+ date,
            method: 'GET'
        });
    };
                  
             




  }
 ]);