angular.module('crossfit', []).config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});

angular.module('crossfit').controller('baseCtrl', function ($log, $scope, $http) {
    $scope.test = 'hola';
});