
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
        name: 'formFp',
        url: '/formFp',
        component: 'formFpComponent'
    });
    $stateProvider.state({
        name: 'formFpAdd',
        url: '/formFp/add',
        component: 'formFpAddComponent'
    });
    $stateProvider.state({
        name: 'formFpEdit',
        url: '/formFp/{formId}/edit',
        component: 'formFpEditComponent'
    });
    $stateProvider.state({
        name: 'formFpView',
        url: '/formFp/{formId}',
        component: 'formFpViewComponent'
    });
    $stateProvider.state({
        name: 'formFpAddEntry',
        url: '/formFp/{formId}/entry',
        component: 'formFpAddEntryComponent'
    });
    $stateProvider.state({
        name: 'formFpEditEntry',
        url: '/formFp/{formId}/entry/{entryId}/edit',
        component: 'formFpEditEntryComponent'
    });
    $stateProvider.state({
        name: 'formFpViewEntry',
        url: '/formFp/{formId}/entry/{entryId}',
        component: 'formFpViewEntryComponent'
    });

    $stateProvider.state({
        name: 'formPnc',
        url: '/formPnc',
        component: 'formPncComponent'
    });
    $stateProvider.state({
        name: 'formPncAdd',
        url: '/formPnc/add',
        component: 'formPncAddComponent'
    });
    $stateProvider.state({
        name: 'formPncEdit',
        url: '/formPnc/{formId}/edit',
        component: 'formPncEditComponent'
    });
    $stateProvider.state({
        name: 'formPncView',
        url: '/formPnc/{formId}',
        component: 'formPncViewComponent'
    });
    $stateProvider.state({
        name: 'formPncAddEntry',
        url: '/formPnc/{formId}/entry',
        component: 'formPncAddEntryComponent'
    });
    $stateProvider.state({
        name: 'formPncEditEntry',
        url: '/formPnc/{formId}/entry/{entryId}/edit',
        component: 'formPncEditEntryComponent'
    });
    $stateProvider.state({
        name: 'formPncViewEntry',
        url: '/formPnc/{formId}/entry/{entryId}',
        component: 'formPncViewEntryComponent'
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