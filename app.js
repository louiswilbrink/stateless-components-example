angular.module('myapp', []);

angular.module('myapp').directive('userProfile', function () {
    var directiveDefinitionObject = {
        scope: {},
        restrict: 'E',
        template: '<div>Hello, {{ name }}</div>',
        controller: function ($scope, $rootScope) {
            console.log('userProfile - $id', $scope.$id);
            $scope.name = 'Louis';
        },
        link: function (scope, element, attrs) {
            console.log(attrs.queryUserProfile);
        }
    };

    return directiveDefinitionObject;
});

angular.module('myapp').directive('queryUserProfile', function () {
    var directiveDefinitionObject = {
        restrict: 'A',
        controller: function ($scope, UserService) {
            console.log('queryUserProfile - $id', $scope.$id);
            $scope.age = UserService;
        }
    };

    return directiveDefinitionObject;
});

angular.module('myapp').service('UserService', function ($rootScope) {
    console.log('$rootScope Id', $rootScope.$id);

    return {
        name: 'Louis',
        age: 15,
        address: '123 Fake Street',
        email: 'louis@louiswilbrink.com'
    }
});
