import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.id = $state.params.formId;


    vm.save = function (id) {
        $http.post(`api/fp/add`, vm.item)
            .then(function (resp) {
                toastr.success('Form Added');
                $state.go('formFpView', { formId: resp.data});
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

app.component('formFpAddComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formFp/add/index.html',
    controller: controller
});