;(function () {

	'use strict'

	angular.module ('Beer411')

	.factory('UserFactory', ['$http', 'SERVER', '$cookieStore', '$location',

		function ($http, SERVER, $cookieStore, $location) {

              

              // Register a User
      			   var registerUser = function (userObj) {
                  $http.post(SERVER.URL + 'users', {user: userObj})
                    .success( function (res) { 
                        console.log*(res); 
                     }
        			     );
      			     };

      		    //login
                var loginUser = function (userObj) {
                  //console.log(userObj);
                  $http.post(SERVER.URL + 'users/sign_in', {user: userObj})
                    .success( function (res) {

                    $cookieStore.put('currentUser', res.user.authentication_token);

                 }
               );               
             };

              // Logout Method
                var logoutUser = function () {
                  $cookieStore.remove('currentUser');
                  $location.path('/login');
              }

              var currentUser = function () {
                return '';
              }

      

          	

          	     return {
          		      register : registerUser, 
                    login : loginUser,
                    logout : logoutUser,
                    user: currentUser
          
          		};

          	}

         ]);

}());