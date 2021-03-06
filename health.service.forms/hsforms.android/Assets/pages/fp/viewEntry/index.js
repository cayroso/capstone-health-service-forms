﻿
var app = angular.module('app');

function controller($rootScope, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;
    vm.entry = $rootScope.selectedForm1Entry;

    vm.back = function () {
        $rootScope.selectedForm1Entry = null;
        $rootScope.setPage('pages/fp/view/index.html');
    };

    vm.editEntry = function () {
        $rootScope.setPage('pages/fp/editEntry/index.html');
    };

    vm.init = function () {
    };

    vm.init();
}

//controller.$inject = ['$http', '$state', 'toastr'];

app.controller('formFpViewEntryComponent', controller);