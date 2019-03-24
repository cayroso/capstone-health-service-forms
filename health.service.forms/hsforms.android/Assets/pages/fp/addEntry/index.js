
var app = angular.module('app');

function controller($rootScope, $window, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;

    vm.back = function () {
        $rootScope.setPage('pages/fp/view/index.html');
    };

    vm.save = function () {

        if (vm.entry.birthDate === null) {
            toastr.warning('Please enter valid birth date');
            return;
        }

        //  get and update
        var forms = JSON.parse($window.localStorage.getItem('fp'));

        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_FPId === vm.item.tcL_FPId) {
                toastr.success('found form');
                form.entries.push(vm.entry);

                //replace
                $window.localStorage.setItem('fp', JSON.stringify(forms));

                $rootScope.selectedForm1 = form;
                vm.back();
                return;
            }
        }

        //$http.post(`${apiUrl}api/nepi/entry/add`, vm.entry)
        //    .then(function (resp) {
        //        toastr.success('Entry added');
        //        $state.go('formNepiViewEntry', { formId: vm.id, entryId: resp.data });
        //    }, function (err) {
        //        toastr.error('error');
        //    });
    };

    vm.init = function () {
        
        var now = new Date();

        vm.entry = {
            tcL_FPId: vm.item.tcL_FPId,
            tcL_FP_EntryId: uuidv4(),

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

    };

    vm.init();

    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

}

//controller.$inject = ['$http', '$state', 'toastr'];

app.controller('formFpAddEntryComponent', controller);