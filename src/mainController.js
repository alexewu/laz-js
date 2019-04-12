(function() {
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
        $scope.Math = window.Math;

        $http.get('mock.json')
        .then(function(data){
            $scope.info = data;
        });
        
        //find the difference between timestamps to get length
        $scope.calcDiff = function(){
            var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
            var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
            
            return "00:39:34";
        }


        $scope.update = function() {
            var result = 0;
            result = $scope.info.data.word_count - $scope.info.data.incorrect_count;
            $scope.accuracy = result;
        };
    };
    
    app.controller("MainController", MainController)
    
}());