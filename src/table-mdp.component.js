(function() {

    var app = angular.module("myApp");
    console.log("hi from table component");
    app.component('tableMdp', {
       templateUrl: 'table-mdp.html',
       controller: 'tableController'
    });

    app.controller('tableController', tableController);

    tableController.$inject = ["lazmdpService"];

    function tableController(lazmdpService) {
        console.log("you have reached the table component");
        lazmdpService.getTimestamps()
            .then(function(data) {
                console.log("you successfully called the getTimestamps func");
                console.log(data);
            });
    }
})();