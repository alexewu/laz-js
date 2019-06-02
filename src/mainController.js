(function() {
    var app = angular.module('myApp', []);
    
    app.controller('mainController', function($scope, $http) {
        console.log("you are inside mainController function``");
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
        
        $scope.message = "Teacher Front End";
        $scope.Math = window.Math;

        // $http.get('mock.json')
        // .then(function(data){
        //     $scope.info = data;
        // });
        
        try{
            $http.get("http://mdp.learninga-z.com/api/timestamps/")
            .then(function(data){
                console.log("you have reached our wanted api call");
                console.log(data);
                $scope.info = data;
            });
        }
        catch (err){
            console.log("u failed" + err);
        }
    });
    
}());