//Custome directive:

app.directive('empinfo', function() {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "employeeInfo.html";
    directive.scope = {
        user : "=user"
    }
    return directive;
});

