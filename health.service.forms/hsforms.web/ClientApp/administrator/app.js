
import angular from 'angular';
import '@uirouter/angularjs/release/angular-ui-router';

import 'angular-ui-bootstrap/dist/ui-bootstrap-tpls';

const app = angular.module('app', [require('angular-animate'), require('angular-toastr'), 'ui.bootstrap', 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
        name: 'dashboard',
        url: '/dashboard',
        component: 'dashboardComponent'
    });

    $stateProvider.state({
        name: 'formNepi',
        url: '/formNepi',
        component: 'formNepiComponent'
    });
    $stateProvider.state({
        name: 'formNepiAdd',
        url: '/formNepi/add',
        component: 'formNepiAddComponent'
    });
    $stateProvider.state({
        name: 'formNepiEdit',
        url: '/formNepi/{formId}/edit',
        component: 'formNepiEditComponent'
    });
    $stateProvider.state({
        name: 'formNepiView',
        url: '/formNepi/{formId}',
        component: 'formNepiViewComponent'
    });   
    $stateProvider.state({
        name: 'formNepiAddEntry',
        url: '/formNepi/{formId}/entry',
        component: 'formNepiAddEntryComponent'
    });
    $stateProvider.state({
        name: 'formNepiEditEntry',
        url: '/formNepi/{formId}/entry/{entryId}/edit',
        component: 'formNepiEditEntryComponent'
    });
    $stateProvider.state({
        name: 'formNepiViewEntry',
        url: '/formNepi/{formId}/entry/{entryId}',
        component: 'formNepiViewEntryComponent'
    });

    $stateProvider.state({
        name: 'formPf',
        url: '/formPf',
        component: 'formPfComponent'
    });

    $stateProvider.state({
        name: 'formPnc',
        url: '/formPnc',
        component: 'formPncComponent'
    });
    

    $stateProvider.state({
        name: 'users',
        url: '/users',
        component: 'usersComponent'
    });
    
    $urlRouterProvider.otherwise('/dashboard');
});

app.controller('mainController', function ($http) {
    const vm = this;
    const pagePrefix = 'app/clientapp/administrator/templates/';
    vm.page = `${pagePrefix}/users.html`;

    vm.setPage = function (page, event) {
        //debugger;
        var ar = arguments;
        vm.page = `${pagePrefix}/${page}`;

        event.preventDefault();
    };

    //var payload = {
    //    items: [
    //        {
    //            barangay: 'gg'
    //        }]
    //};

    //$http.post('https://localhost:44348/hsforms/api/nepi/upload', payload)
    //    .then(function (resp) {
    //        alert('oye1');
    //    }, function (err) {
    //        alert('oye2');
    //    });
    

});

export default app;