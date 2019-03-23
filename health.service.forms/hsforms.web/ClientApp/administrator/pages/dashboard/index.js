
import $ from 'jquery';
import app from '../../app';


function controller($http, toastr) {
    const vm = this;


    vm.init = function () {
        
        $http.get('api/administrator/dashboard')
            .then(function (resp) {
                vm.data = resp.data;
                
            }, function (err) {
                toastr.error('error occured');
            });
    };

    vm.init();

}

controller.$inject = ['$http', 'toastr'];

app.component('dashboardComponent', {
    templateUrl: 'app/clientapp/administrator/pages/dashboard/index.html',
    controller: controller
});