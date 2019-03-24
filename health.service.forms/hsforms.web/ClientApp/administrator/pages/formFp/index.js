import 'jquery';
import app from '../../app';

function controller($rootScope, $http, toastr) {
    const vm = this;

    vm.canCreate = function () {
        return $rootScope.info.isAdmin || $rootScope.info.isMidWife;
    };

    vm.hasPermission = function (frm) {
        //debugger;
        if ($rootScope.info.isAdmin)
            return true;
        if ($rootScope.info.user.userId === frm.userId)
            return true;
        return false;
    };

    vm.remove = function (formId) {
        $http.post(`api/fp/remove/?id=${formId}`)
            .then(function (resp) {
                toastr.success('Form deleted');
                vm.init();
            }, function (err) {
                toastr.error('error');
            });
    };

    vm.init = function () {
        $http.get('api/administrator/forms/fps')
            .then(function (resp) {
                vm.items = resp.data;
            });

    };

    vm.init();
}

controller.$inject = ['$rootScope', '$http', 'toastr'];

app.component('formFpComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formFp/index.html',
    controller: controller
});