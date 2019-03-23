import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.id = $state.params.formId;


    vm.save = function (id) {
        $http.post(`api/pnc/add`, vm.item)
            .then(function (resp) {
                toastr.success('Form Added');
                $state.go('formPncView', { formId: resp.data});
            }, function (err) {
                toastr.error('error occured');
            });
    };

    vm.init = function () {
        vm.item = {
            barangay: '', municipality: '', province: '', region: ''
        };
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formPncAddComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formPnc/add/index.html',
    controller: controller
});