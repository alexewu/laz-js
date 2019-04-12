(function() {
    var app = angular.module('myApp', []);
    
    var MainController = function ($scope, $http) {
        
        console.log("hi");
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
        console.log("BLAH");
        $scope.message = "Teacher Front End";
        $scope.Math = window.Math;

        // $http.get('mock.json')
        // .then(function(data){
        //     $scope.info = data;
        // });
        
        // $http.get("http://mdp.learninga-z.com/api/timestamps/")
        // .then(function(data){
        //     console.log(data);
        //     $scope.info = data;
        // });

        $http({
            method: 'GET',
            url: 'http://mdp.learninga-z.com/api/timestamps/',
            credentials: 'Access-Control-Allow-Origin'
        }).then(function(data){
            console.log(data);
            $scope.info = data;
        });

    };
    
    app.controller("MainController", MainController)
    
}());