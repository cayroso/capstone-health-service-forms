'use strict';

var app = angular.module('app', ['toastr']);

app.controller('mainController', function ($rootScope, $window) {
    const vm = this;
    $rootScope.isAuthenticated = false;
    $rootScope.baseApiUrl = '';

    $rootScope.setPage = vm.setPage = function (page) {
        //vm.selectedPage = page;
        //vm.includePage = `pages/${page}/index.html`;

        vm.selectedPage = page;
    };
    
    vm.setPage('');

    var user = $window.localStorage.getItem('user') || null;
    if (user === '' || user === null) {
        vm.setPage('pages/login/index.html');
    }
    else {
        $rootScope.user = JSON.parse(user);
        $rootScope.isAuthenticated = true;
    }

    var baseApiUrl = $window.localStorage.getItem('baseApiUrl') || null;    
    if (baseApiUrl === '' || baseApiUrl === null) {
        vm.setPage('pages/server/index.html');
    }
    else {
        $rootScope.baseApiUrl = baseApiUrl;
    }

    vm.resetSettings = function () {
        $window.localStorage.removeItem('baseApiUrl');
        $window.localStorage.removeItem('user');
        $window.localStorage.removeItem('fp');
        $window.localStorage.removeItem('nepi');
        $window.localStorage.removeItem('pnc');

        vm.setPage('pages/server/index.html');
    };
});