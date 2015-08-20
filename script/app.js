/*ar angularApp = angular.module("dailyApp", []);
*/
var activeGoals = [
    {
        title: "Test!",
        description: "testing",
        completed: false
    },
    {
        title: "Buy stuff",
        description: "buy, milk, sugar, eggs",
        completed: false
    },
    {
        title: "Exercise",
        description: "Bröst/Rygg träningspass!",
        completed: false
    }
];
/*
var url = "http://football-api.com/api/?Action=standings&APIKey=0a28f175-95a5-b585-da56705c66b6&comp_id=1204";

$.getJSON(url, test);

function test(data){
    console.log(data);
}
*/

   
     $.ajax({
        headers: { 'X-Auth-Token': 'ac5aa8af28474842ab6e5132b4824b8a' },
        url: 'http://api.football-data.org/alpha/soccerseasons/354/leagueTable',
        dataType: 'json',
        type: 'GET',
        }).done(getLeague);
    
  
    
    
    function getLeague(data) {
        console.log(data.standing);
        
          }

   


var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('amazingPaletteName', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });
  $mdThemingProvider.theme('default')
    .primaryPalette('amazingPaletteName')
  
});
app.config(function($mdIconProvider){
   $mdIconProvider.defaultIconSet("assets/svg/avatars.svg", 128); 
});

app.config(function($routeProvider){
   $routeProvider
   .when('/', {
       templateUrl: 'pages/home.html',
       controller: 'homeCtrl'
   })
   
   .when('/daily', {
       templateUrl: 'pages/daily.html',
       controller: 'dailyController'
   })
   
   .when('/profile', {
       templateUrl: 'pages/profile.html',
       controller: 'profileController'
   })
   
   .otherwise({
       redirectTo: '/'
   });
});

// CONTROLLERS //////////////////////////////////

app.controller('homeCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function() {
    $mdSidenav('left').toggle();
  };
    
    $scope.onSwipeRight = function(ev) {
      $mdSidenav('left').toggle();
    };
    
    $scope.title = "Welcome";
    
    $scope.dailyGoals = activeGoals;
 
}]);

app.controller('dailyController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function() {
    $mdSidenav('left').toggle();
  };
    
    $scope.title = "Daily goals";
    
    $scope.dailyGoals = activeGoals;
 
}]);

app.controller('profileController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function() {
    $mdSidenav('left').toggle();
  };
    
    $scope.title = "Profile";
    
    $scope.dailyGoals = activeGoals;
          
    
    
 
}]);







