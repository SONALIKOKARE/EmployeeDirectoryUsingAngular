// factory service to have two way data binding between two controllers:

app.factory('employeeData', function($location) {
  var empDataObj = [];
  var empDataService = {};
  var dummyData = [{
    empName: 'sayali',
    empID: '12047',
    empAdd: 'pune'
  }, {
    empName: 'shradhha',
    empID: '12468',
    empAdd: 'mumbai'
  }, {
    empName: 'naeem',
    empID: '14046',
    empAdd: 'Gujrat'
  }, {
    empName: 'pavan',
    empID: '1246',
    empAdd: 'rajsthan'
  }, {
    empName: 'anuja',
    empID: '12046',
    empAdd: 'solapur'
  }, {
    empName: 'suman',
    empID: '722920',
    empAdd: 'pune'
  }];
  empDataObj = dummyData;

  empDataService.addEmp = function(employee) {
    console.log(employee);
    empDataObj.push({
      empName: employee.empName,
      empID: employee.empID,
      empAdd: employee.empAdd
    });
    empDataService.submit();
  };
empDataService.deleteEmp = function(employee) {
    	angular.forEach(empDataService.list(), function (index,data) {
			if(parseInt(index.empID) === parseInt(employee))
			{
				empDataObj.splice(data,1);
			}
        });
    };
  empDataService.submit = function() {
    $location.path('/addEmployee');
    alert('Check your Added employment by click on "Employee List button"');
  };

  empDataService.list = function() {
    return empDataObj;
  };

  return empDataService;
});

app.factory('singleEmployeeDetail', function(employeeData) {
  console.log(employeeData.list())
  var singleEmp = [];
  var empFinderService = {};

  empFinderService.singleEmpDetail = function(empID) {
    angular.forEach(employeeData.list(), function(index, data) {
      if (parseInt(index.empID) === parseInt(empID)) {
        singleEmp = [{
          empName: index.empName,
          empID: index.empID,
          empAdd: index.empAdd
        }]
      }
    });
  };

  empFinderService.list = function() {
    return singleEmp;
  };

  return empFinderService;
});