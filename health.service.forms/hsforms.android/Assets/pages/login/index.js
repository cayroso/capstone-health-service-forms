
var app = angular.module('app');

app.controller('loginController', function ($rootScope, $http, $window, toastr) {    
    const vm = this;
    vm.message = '';
    vm.user = {
        username: '',
        password: ''
    };

    if ($rootScope.baseApiUrl === '') {
        $rootScope.setPage('server');
    }

    vm.save = function () {
        //  check if user/pass exists
        //  then save the user/pass
        $http.get(`${$rootScope.baseApiUrl}api/account/exists/username/${vm.user.username}/password/${vm.user.password}`)
            .then(function (resp) {
                toastr.success('Login Successful');
                $window.localStorage.setItem('user', JSON.stringify(resp.data));
                $rootScope.isAuthenticated = true;
                $rootScope.setPage('');
            }, function (err) {
                toastr.error('Error Occured');
                $rootScope.isAuthenticated = false;
                vm.message = JSON.stringify(err);
            });

    };
});