angular.module('myapp', []);

angular.module('myapp').directive('userProfile', function () {
    var directiveDefinitionObject = {
        scope: {},
        restrict: 'E',
        require: ['queryUser'],
        template: '<div>Hello, {{ name }}</div>',
        link: function (scope, element, attrs) {
            attrs.$observe('queryUser', function (newVal) {
                scope.name = JSON.parse(newVal).name;
            });
        }
    };

    return directiveDefinitionObject;
});

angular.module('myapp').directive('queryUser', function () {
    var directiveDefinitionObject = {
        restrict: 'A',
        controller: function ($scope, UserService, $timeout) {
            $scope.user = { name: '---' };

            $timeout(function () {
                $scope.user = UserService;
            }, 1000);
        }
    };

    return directiveDefinitionObject;
});

angular.module('myapp').service('UserService', function ($rootScope) {

    return {
        name: 'Louis',
        age: 15,
        address: '123 Fake Street',
        email: 'louis@fakedomain.com'
    }
});
