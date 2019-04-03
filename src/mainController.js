(function(angular) {
    var app = angular.module('myApp', []);
    
    var MainController = function ($scope, $http) {
        
        var onUserComplete = function(response) {
            $scope.user = response.data;
            $http.get($scope.user.timestamps)
                .then(onWords, onError);
        };
        
        var onWords = function(response) {
            $scope.words = response.data;
        }

        var onError = function(reason) {
            $scope.error = "Could not read";
        };
        
//        $scope.search = function() {
//            $http.get('mock.json')
//            .then(onUserComplete, onError)
//        }

        $scope.message = "Teacher Front End";
        
        $http.get('mock.json')
        .then(function(data){
            $scope.info = data;
        });
        
//        $scope.words = $scope.info.timestamps;
        
    };
    
    app.controller("MainController", MainController)
    
}());