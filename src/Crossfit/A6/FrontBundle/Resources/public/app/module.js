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

angular.module('crossfit').controller('GalleryCtrl', ['$scope','$log', '$http', function ($scope, $log, $http) {
    $scope.selected_album = null;
    $scope.getAlbums = function() {
        $http.get('https://graph.facebook.com/v2.2/crossfitA6/albums',{
            params: {
                locale: 'es_ES',
                access_token: 'CAALVwhvNsL8BANTGQQrOPyNRrKAqH9yQgJfxqI60deMX37M4i55rjDzglukdfZCUjfoFGXLzVUqAIZC2dFpYJmgttXczOviBJpCdZBvRbIX0bySiEZCIwFXt5pjgxkPqZC3RZASdLhYOf64UeNZCaBgOXJTvRfZAoymLQjRd5aO58o0r42vE7TF2OPjQB7ZCEfDdI8ApLOgDQ0MVbNujYBVLG'
            }
        }).
            success(function(data, status, headers, config) {
                $scope.albums = data.data;
            }).
            error(function(data, status, headers, config) {
                $log.info(data);
            });
    };
    $scope.getPhotosFromAlbum = function(album) {
        $http.get('https://graph.facebook.com/v2.2/'+album.id+'/photos',{
            params: {
                locale: 'es_ES',
                access_token: 'CAALVwhvNsL8BANTGQQrOPyNRrKAqH9yQgJfxqI60deMX37M4i55rjDzglukdfZCUjfoFGXLzVUqAIZC2dFpYJmgttXczOviBJpCdZBvRbIX0bySiEZCIwFXt5pjgxkPqZC3RZASdLhYOf64UeNZCaBgOXJTvRfZAoymLQjRd5aO58o0r42vE7TF2OPjQB7ZCEfDdI8ApLOgDQ0MVbNujYBVLG'
            }
        }).
            success(function(data, status, headers, config) {
                $log.info(data);
                $scope.selected_album = data.data;
            }).
            error(function(data, status, headers, config) {
                $log.info(data);
            });
    };
    $scope.goToAlbum = function() {

    };
    $scope.getAlbums();
}]);

angular.module('crossfit').filter('fb_date', function() {
    return function(item) {
        return new Date(item);
    }
});
angular.module('crossfit').filter('album_cover', function() {
    return function(item) {
        return "https://graph.facebook.com/v2.2/"+item.id+"/picture?access_token=CAALVwhvNsL8BANTGQQrOPyNRrKAqH9yQgJfxqI60deMX37M4i55rjDzglukdfZCUjfoFGXLzVUqAIZC2dFpYJmgttXczOviBJpCdZBvRbIX0bySiEZCIwFXt5pjgxkPqZC3RZASdLhYOf64UeNZCaBgOXJTvRfZAoymLQjRd5aO58o0r42vE7TF2OPjQB7ZCEfDdI8ApLOgDQ0MVbNujYBVLG&locale=es_ES"
    }
});