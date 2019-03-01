
import $ from 'jquery';
import app from '../app';

app.controller('mainController', function () {
    const vm = this;
    const pagePrefix = 'app/clientapp/administrator/templates/';
    vm.page = `${pagePrefix}/packages.html`;

    vm.setPage = function (page, event) {
        //debugger;
        var ar = arguments;
        vm.page = `${pagePrefix}/${page}`;

        event.preventDefault();
    };

});