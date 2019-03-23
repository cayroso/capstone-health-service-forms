import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.id = $state.params.formId;


    vm.save = function (id) {
        var payload = {
            formId: vm.item.tcL_PNCId,
            barangay: vm.item.barangay,
            municipality: vm.item.municipality,
            province: vm.item.province,
            region: vm.item.region
        };
        
        $http.post(`api/pnc/edit`, payload)
            .then(function (resp) {
                toastr.success('Form Updated');
                $state.go('formPncView', { formId: payload.formId});
            }, function (err) {
                toastr.error('error occured');
            });
    };

    vm.init = function () {
        $http.get(`api/administrator/forms/pncs/${vm.id}`)
            .then(function (resp) {
                vm.item = resp.data;
            });
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formPncEditComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formPnc/edit/index.html',
    controller: controller
});