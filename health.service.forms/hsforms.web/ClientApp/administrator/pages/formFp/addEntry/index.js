import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.id = $state.params.formId;

    vm.saveEntry = function () {

        if (vm.entry.birthDate === null) {
            toastr.warning('Please enter valid birth date');
            return;
        }
        
        $http.post('api/fp/entry/add', vm.entry)
            .then(function (resp) {
                toastr.success('Entry added');
                $state.go('formFpViewEntry', { formId: vm.id, entryId: resp.data });
            }, function (err) {
                toastr.error('error');
            });
    };

    vm.init = function () {
        $http.get(`api/administrator/forms/fps/${vm.id}`)
            .then(function (resp) {
                vm.item = resp.data;
                var now = new Date();

                vm.entry = {
                    tcL_FPId: vm.id,

                    dateOfRegistration: now,
                    familySerialNumber: '',                    
                    name: '',
                    address: '',

                    birthDate: null,
                    typeOfClient: '',
                    
                    presentMethod: '',
                    previousMethod: '',

                    
                    dateNextService1: null,
                    dateAccomplishedService1: null,

                    dateNextService2: null,
                    dateAccomplishedService2: null,

                    dateNextService3: null,
                    dateAccomplishedService3: null,

                    dateNextService4: null,
                    dateAccomplishedService4: null,

                    dateNextService5: null,
                    dateAccomplishedService5: null,

                    dateNextService6: null,
                    dateAccomplishedService6: null,

                    dateNextService7: null,
                    dateAccomplishedService7: null,

                    dateNextService8: null,
                    dateAccomplishedService8: null,

                    dateNextService9: null,
                    dateAccomplishedService9: null,

                    dateNextService10: null,
                    dateAccomplishedService10: null,

                    dateNextService11: null,
                    dateAccomplishedService11: null,

                    dateNextService12: null,
                    dateAccomplishedService12: null,

                    dropoutDate: null,
                    dropoutReason: '',
                    
                    remarks: ''
                };
            });
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formFpAddEntryComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formFp/addEntry/index.html',
    controller: controller
});