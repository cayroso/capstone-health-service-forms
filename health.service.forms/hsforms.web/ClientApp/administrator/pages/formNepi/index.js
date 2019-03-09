import 'jquery';
import app from '../../app';

function controller($http, toastr) {
    const vm = this;



    vm.init = function () {
        $http.get('api/administrator/forms/nepis')
            .then(function (resp) {
                vm.items = resp.data;
            });
    };

    vm.init();
}

controller.$inject = ['$http', 'toastr'];

app.component('formNepiComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formNepi/index.html',
    controller: controller
});