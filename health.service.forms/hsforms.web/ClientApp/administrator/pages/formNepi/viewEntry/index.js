﻿import 'jquery';
import app from '../../../app';

function controller($rootScope, $http, $state, toastr) {
    const vm = this;
    vm.formId = $state.params.formId;
    vm.entryId = $state.params.entryId;

    vm.hasPermission = function (frm) {
        //debugger;
        if ($rootScope.info.isAdmin)
            return true;
        if ($rootScope.info.user.userId === frm.userId)
            return true;
        return false;
    };

    vm.init = function () {
        $http.get(`api/administrator/forms/nepis/${vm.formId}`)
            .then(function (resp) {
                vm.item = resp.data;
                for (var i = 0; i < vm.item.entries.length; i++) {
                    var entry = vm.item.entries[i];

                    if (entry.tcL_NEPI_EntryId === vm.entryId) {
                        vm.entry = entry;
                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);
                        //debugger;
                        return;
                    }
                }
            });
    };

    vm.init();
}

controller.$inject = ['$rootScope', '$http', '$state', 'toastr'];

app.component('formNepiViewEntryComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formNepi/viewEntry/index.html',
    controller: controller
});