import 'jquery';
import app from '../../../app';

function controller($rootScope, $http, $state, toastr) {
    const vm = this;
    vm.id = $state.params.formId;

    vm.hasPermission = function (frm) {
        //debugger;
        if ($rootScope.info.isAdmin)
            return true;
        if ($rootScope.info.user.userId === frm.userId)
            return true;
        return false;
    };

    vm.deleteEntry = function (id) {
        $http.post(`api/pnc/entry/${id}/delete`)
            .then(function (resp) {
                toastr.success('Entry removed');
                vm.init();
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

controller.$inject = ['$rootScope', '$http', '$state', 'toastr'];

app.component('formPncViewComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formPnc/view/index.html',
    controller: controller
});