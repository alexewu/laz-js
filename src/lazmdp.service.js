(function() {

    var app = angular.module("myApp");


    lazmdpService.$inject = ['$http'];
    app.service("lazmdpService", lazmdpService);

    function lazmdpService($http) {

        function getTimestamps(uri, type){

            var req = {
                url: "http://mdp.learninga-z.com/api/timestamps/",
                type: "GET",
                dataType: "json",
            };

            return $http(req);
        }

        return {
            getTimestamps: getTimestamps
        }
    }
})();