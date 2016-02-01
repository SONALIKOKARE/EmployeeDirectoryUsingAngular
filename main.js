var app = angular.module('employeeDetails', ['ngRoute', 'ngMessages']);

//routing Configurations:

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'homeController'
    })
    .when('/addEmployee', {
      templateUrl: 'addEmployee.html'
    })
    .when('/employeeID::empID', {
      templateUrl: 'details.html',
      controller: 'empDetailsController'
    })
    .when('/employeeList', {
      templateUrl: 'empList.html',
      controller: 'empListController'
    })
    .when('/addEmployeeForm', {
      templateUrl: 'addEmpForm.html',
      controller: 'EmployeeController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});