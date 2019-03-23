import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.id = $state.params.formId;

    

    vm.save = function () {
        var payload = {
            formId: vm.id,
            barangay: vm.item.barangay,
            municipality: vm.item.municipality,
            province: vm.item.province,
            region: vm.item.region
        };

        $http.post(`api/nepi/edit`, payload)
            .then(function (resp) {
                toastr.success('Form Updated');
                $state.go('formNepiView', { formId: vm.id});
            }, function (err) {
                toastr.error('error occured');
            });
    };

    vm.init = function () {
        $http.get(`api/administrator/forms/nepis/${vm.id}`)
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

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formNepiEditComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formNepi/edit/index.html',
    controller: controller
});