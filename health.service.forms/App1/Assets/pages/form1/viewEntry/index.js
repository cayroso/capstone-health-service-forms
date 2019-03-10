
var app = angular.module('app');

function controller($rootScope, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;
    vm.entry = $rootScope.selectedForm1Entry;

    vm.back = function () {
        $rootScope.selectedForm1Entry = null;
        $rootScope.setPage('pages/form1/view/index.html');
    };

    vm.editEntry = function () {
        $rootScope.setPage('pages/form1/editEntry/index.html');
    };

    vm.init = function () {
        //$http.get(`api/administrator/forms/nepis/${vm.formId}`)
        //    .then(function (resp) {
        //        vm.item = resp.data;
        //        for (var i = 0; i < vm.item.entries.length; i++) {
        //            var entry = vm.item.entries[i];

        //            if (entry.tcL_NEPI_EntryId === vm.entryId) {
        //                vm.entry = entry;
        //                vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);
        //                //debugger;
        //                return;
        //            }
        //        }
        //    });
    };

    vm.init();
}

//controller.$inject = ['$http', '$state', 'toastr'];

app.controller('formNepiViewEntryComponent', controller);