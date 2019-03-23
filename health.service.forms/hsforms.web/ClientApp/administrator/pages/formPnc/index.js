import 'jquery';
import app from '../../app';

function controller($http, toastr) {
    const vm = this;

    vm.init = function () {
        $http.get('api/administrator/forms/pncs')
            .then(function (resp) {
                vm.items = resp.data;
            });
    };

    vm.init();
}

controller.$inject = ['$http', 'toastr'];

app.component('formPncComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formPnc/index.html',
    controller: controller
});

