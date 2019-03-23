﻿import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.id = $state.params.formId;


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

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formPncViewComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formPnc/view/index.html',
    controller: controller
});