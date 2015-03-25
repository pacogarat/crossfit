angular.module('crossfit',[]).config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});
// access_token = CAALVwhvNsL8BANTGQQrOPyNRrKAqH9yQgJfxqI60deMX37M4i55rjDzglukdfZCUjfoFGXLzVUqAIZC2dFpYJmgttXczOviBJpCdZBvRbIX0bySiEZCIwFXt5pjgxkPqZC3RZASdLhYOf64UeNZCaBgOXJTvRfZAoymLQjRd5aO58o0r42vE7TF2OPjQB7ZCEfDdI8ApLOgDQ0MVbNujYBVLG
;
angular.module('crossfit').controller('MainCtrl', ['$scope','$log', '$http', function ($scope, $log, $http) {
    $scope.getPosts = function() {
        $http.get('https://graph.facebook.com/v2.2/crossfitA6/posts',{
            params: {
                locale: 'es_ES',
                access_token: 'CAALVwhvNsL8BANTGQQrOPyNRrKAqH9yQgJfxqI60deMX37M4i55rjDzglukdfZCUjfoFGXLzVUqAIZC2dFpYJmgttXczOviBJpCdZBvRbIX0bySiEZCIwFXt5pjgxkPqZC3RZASdLhYOf64UeNZCaBgOXJTvRfZAoymLQjRd5aO58o0r42vE7TF2OPjQB7ZCEfDdI8ApLOgDQ0MVbNujYBVLG'
            }
        }).
            success(function(data, status, headers, config) {
                $log.info(data);
                $scope.fb_posts = data.data;
            }).
            error(function(data, status, headers, config) {
                $log.info(data);
            });
    };
    $scope.getPosts();
}]);