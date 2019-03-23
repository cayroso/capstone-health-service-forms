import 'jquery';
import app from '../../app';

function controller($http, toastr) {
    const vm = this;

    vm.init = function () {
        $http.get('api/administrator/forms/fps')
            .then(function (resp) {
                vm.items = resp.data;
            });
    };

    vm.init();
}

controller.$inject = ['$http', 'toastr'];

app.component('formFpComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formFp/index.html',
    controller: controller
});