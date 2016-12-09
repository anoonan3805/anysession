angular.module("RESTServices", [])

.service('bookingRest', ['$http', "$window",
	function($http, $window) {

		//Service for making office reservations--jp
		var bookingRest = this;
		var URL = "https://anysession-etdebruin10story.c9users.io:8080/api/";
		var sessionURL = "https://anysession-etdebruin10story.c9users.io:8080/api/Sessions/";
		var officeURL = "https://anysession-etdebruin10story.c9users.io:8080/api/Buildings/findOffices";
		//post office reservations-jp
		bookingRest.post = function(data) {
			return $http({
				url: URL + "sessions",
				method: 'POST',
				data: data

			});

		};

		bookingRest.retrieveInfo = function() {
			return $http({
				url: URL,
				method: 'GET'
			});
		};

		bookingRest.getTimeSlots = function() {
			return $http({
				url: URL + "Offices?filter[fields][timesAvailable]=true&filter[fields][officeName]=true",
				method: 'GET'
			});

		};

		//gets offices from backend AN
		bookingRest.getOffice = function() {
			return $http({
				url: URL + "Offices?filter[fields][officeName]=true",
				method: 'GET'
			});
		};

		//gets user's name
		bookingRest.getName = function(userId) {
			return $http({
				url: URL + "Doctors?filter[where][id]=" + $window.localStorage.userId,
				method: 'GET'
			});
		};

		//post office reservations-jp

		bookingRest.getBuildingInfo = function() {
			return $http({
				url: URL + "buildings",
				method: 'GET'
			});
		};

		// gets reserved sessions 
		// bookingRest.getSessions = function(dateSelected){
		//     return $http ({
		//         url: URL+"sessions?filter[where][sessionDate]="+ dateSelected,
		//         method: 'GET'
		//     });
		// };

		bookingRest.getSessions2 = function(id, date) {
			return $http({
				url: officeURL,
				method: 'Post',
				data: {
					buildingID: id,
					date: date
				}
			});
		};





		//gets sessions for therapist landing AN
		bookingRest.getApptsToday = function(date) {
			return $http({
				url: sessionURL + "?filter[where][userID]=" + $window.localStorage.userId + "&filter[where][sessionDate]=" + date,
				method: 'GET'
			});
		};

		//Puts the usersID to reserve the office-jp
		bookingRest.bookSession = function(data, sessionID) {
			return $http({
				url: sessionURL + "?filter[where][id]=" + sessionID,
				method: 'PUT',
				data: data
			});



		};
	}
]);
