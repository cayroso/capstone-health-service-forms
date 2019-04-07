
var app = angular.module('app');

app.controller('serverController', function ($rootScope, $http, $window, toastr) {
    const vm = this;
    //vm.baseApiUrl = 'http://192.168.0.30/hsforms/';
    vm.baseApiUrl = 'http://batangas.southeastasia.cloudapp.azure.com/hsforms/';

    vm.save = function () {
        var url = `${vm.baseApiUrl}api/account/ping`;

        //  ping the server
        $http.get(url)
            .then(function (resp) {
                //vm.message = JSON.stringify(resp);
                toastr.success('Server connection done, redirecting to login,', 'Server Connection');
                $window.localStorage.setItem('baseApiUrl', vm.baseApiUrl);
                $rootScope.baseApiUrl = vm.baseApiUrl;
                $rootScope.setPage('pages/login/index.html');
            }).then(function (err) {
                vm.message = JSON.stringify(err);
            });
    };
});