'use strict';

var app = angular.module('app', ['toastr']);


app.controller('mainController', function (toastr) {
    const vm = this;

    vm.selectedPage = 'form1';
    vm.includePage = 'pages/form1/index.html';

    vm.setPage = function (page) {
        vm.selectedPage = page;

        vm.includePage = `pages/${page}/index.html`;
    };
});