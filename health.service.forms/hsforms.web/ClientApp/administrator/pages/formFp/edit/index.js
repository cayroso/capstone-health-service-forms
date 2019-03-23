import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.id = $state.params.formId;


    vm.save = function (id) {
        var payload = {
            formId: vm.item.tcL_FPId,
            barangay: vm.item.barangay,
            municipality: vm.item.municipality,
            province: vm.item.province,
            region: vm.item.region
        };
        
        $http.post(`api/fp/edit`, payload)
            .then(function (resp) {
                toastr.success('Form Updated');
                $state.go('formFpView', { formId: payload.formId});
            }, function (err) {
                toastr.error('error occured');
            });
    };

    vm.init = function () {
        $http.get(`api/administrator/forms/fps/${vm.id}`)
            .then(function (resp) {
                vm.item = resp.data;
            });
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formFpEditComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formFp/edit/index.html',
    controller: controller
});