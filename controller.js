//Controllers for different pages
app.controller('mainController', function($scope) {
  $scope.message = "mainController";
});
app.controller('homeController', function($scope, employeeData) {
  //$scope.list = employeeData.list;
});
app.controller('empInfoController', function($scope, employeeData) {
  $scope.list = employeeData.list;
});
app.controller('empListController', function($scope, employeeData) {
  $scope.list = employeeData.list;
  $scope.deleteEmp = function(employeeID) {
    if (confirm("Press Ok to delete " + employeeID + " employee record") === true) {
      employeeData.deleteEmp(employeeID);
      alert('You are deteleting ' + employeeID + ' record');
    } else {
      alert('You have not deleted any employee record');
    }
  };
});
app.controller('resultController', function($scope) {
  $scope.message = "resultController";
});
app.controller('empDetailsController', function($scope, employeeData, $routeParams, singleEmployeeDetail) {
  var empID = $scope.empID = $routeParams.empID;
  $scope.singleEmpDetail = singleEmployeeDetail.singleEmpDetail(empID);
  $scope.list = singleEmployeeDetail.list;
});
app.controller('EmployeeController', function($scope, employeeData) {
  $scope.company = {
    empName: "",
    empID: "",
    empAdd: ""
  };
  var companyEmp = angular.copy($scope.company);
  $scope.addEmp = function() {
    employeeData.addEmp($scope.company);
    $scope.company = {};
  }
  $scope.reset = function() {
    $scope.company = angular.copy(companyEmp);
    $scope.userForm.$setPristine();
  };
  $scope.list = employeeData.list;
});