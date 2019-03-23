import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.formId = $state.params.formId;
    vm.entryId = $state.params.entryId;

    vm.init = function () {
        $http.get(`api/administrator/forms/pncs/${vm.formId}`)
            .then(function (resp) {
                vm.item = resp.data;
                for (var i = 0; i < vm.item.entries.length; i++) {
                    var entry = vm.item.entries[i];

                    if (entry.tcL_PNC_EntryId === vm.entryId) {
                        vm.entry = entry;
                        
                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);
                        
                        return;
                    }
                }
            });
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formPncViewEntryComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formPnc/viewEntry/index.html',
    controller: controller
});