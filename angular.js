//var app = angular.module('myApp', []);
//
//app.controller('MainController', function($scope, $http) {
//    var onUserComplete = function(response) {
//        $scope.user = response.data;
//    };
//
//    var onError = function(reason) {
//        $scope.error = "Could not read";
//    };
//    
//    $http.get("https://api.github.com/users/alexewu")
//        .then(onUserComplete, onError)
//    
//    
//    $scope.message = "Working with Github API";
//});



(function() {
    var app = angular.module('myApp', []);
    
    var MainController = function ($scope, $http) {
            
        var onUserComplete = function(response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };
        
        var onRepos = function(response) {
            $scope.repos = response.data;
        }
        
        var onError = function(reason) {
            $scope.error = "Could not read";
        };
        
        $http({
            method: 'GET',
            url: 'api/{bookid}/timestamp',
            params: {teacher: teacher, kid: kid}
        }).then(onUserComplete, onError);
        
        
//        $scope.search = function(teacher_name, kid_name) {
//            $http(.get("api/{bookid}/timestamp")
//            .then(onUserComplete, onError))
//        }

        $scope.username = "HELLO MY LAZ FRIENDS";
        $scope.message = "Working with Github API";
        $scope.repoSortOrder = "-stargazers_count";
    };
    
    app.controller("MainController", MainController)
    
}());