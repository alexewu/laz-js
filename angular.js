(function() {
    var app = angular.module('myApp', []);
    
    var MainController = function ($scope, $http) {
            
        var onUserComplete = function(response) {
            $scope.user = response.data;
            //TO-DO: change $scope.user.repos_url to correct field of laz api
            $http.get($scope.user.repos_url)
                .then(onWords, onError);
        };
        
        //funtion that fetches each word in the high frequency list
        var onWords = function(response) {
            $scope.words = response.data;
        }
        
        var onError = function(reason) {
            $scope.error = "Could not read";
        };
        
        //now can use the student variable in the api get call
        $scope.search = function(student){
            var mainInfo = $http({method: 'GET', url: 'http://mdp.learninga-z.com/api/students'})
            .then(function(data) { 
                console.log(json.loads(data));
            });
        }

        $scope.username = "HELLO MY LAZ FRIENDS";
        $scope.message = "Teacher Front End";
        $scope.repoSortOrder = "-stargazers_count";
    };
    
    app.controller("MainController", MainController)
    
}());