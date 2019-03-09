import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.formId = $state.params.formId;


    vm.save = function () {
        $http.post(`api/nepi/edit`, vm.item)
            .then(function (resp) {
                toastr.success('Form Updated');
                $state.go('formNepiView', { formId: vm.formId });
            }, function (err) {
                toastr.error('error occured');
            });
    };

    vm.init = function () {
        $http.get(`api/administrator/forms/nepis/${vm.formId}`)
            .then(function (resp) {
                vm.item = resp.data;
                vm.item.formId = vm.formId;
            });
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formNepiEditComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formNepi/edit/index.html',
    controller: controller
});