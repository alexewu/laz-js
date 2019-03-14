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

        var mainInfo = $http({method: 'GET', url: 'http://mdp.learninga-z.com/api/students'})
            .then(function(data) { 
                console.log(json.loads(data));
            });

        $scope.username = "HELLO MY LAZ FRIENDS";
        $scope.message = "Teacher Front End";
        $scope.repoSortOrder = "-stargazers_count";
    };
    
    app.controller("MainController", MainController)
    
}());