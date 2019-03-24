
var app = angular.module('app');

function controller($rootScope, $window, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;
    vm.entry = $rootScope.selectedForm1Entry;

    vm.back = function () {
        $rootScope.selectedForm1Entry = null;
        $rootScope.setPage('pages/fp/view/index.html');
    };

    vm.save = function () {
        if (vm.entry.dateOfBirth === null) {
            toastr.warning('Please enter valid birth date');
            return;
        }

        var forms = JSON.parse($window.localStorage.getItem('fp'));
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_FPId === vm.item.tcL_FPId) {

                for (var n = 0; n < form.entries.length; n++) {
                    var entry = form.entries[n];

                    if (entry.tcL_FP_EntryId === vm.entry.tcL_FP_EntryId) {
                        //  overwrite
                        form.entries[n] = vm.entry;

                        $window.localStorage.setItem('fp', JSON.stringify(forms));

                        toastr.success('Entry updated');
                        $rootScope.selectedForm1Entry = null;
                        $rootScope.setPage('pages/fp/view/index.html');
                        return;
                    }
                }
            }
        }

        toast.warning('Record not found, please try again', 'Record Not Found');
    };

    vm.init = function () {
        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);
        vm.entry.birthDate = new Date(vm.entry.birthDate);

        if (vm.entry.dateNextService1 !== null)
            vm.entry.dateNextService1 = new Date(vm.entry.dateNextService1);
        if (vm.entry.dateAccomplishedService1 !== null)
            vm.entry.dateAccomplishedService1 = new Date(vm.entry.dateAccomplishedService1);
        if (vm.entry.dateNextService2 !== null)
            vm.entry.dateNextService2 = new Date(vm.entry.dateNextService2);
        if (vm.entry.dateAccomplishedService2 !== null)
            vm.entry.dateAccomplishedService2 = new Date(vm.entry.dateAccomplishedService2);
        if (vm.entry.dateNextService3 !== null)
            vm.entry.dateNextService3 = new Date(vm.entry.dateNextService3);
        if (vm.entry.dateAccomplishedService3 !== null)
            vm.entry.dateAccomplishedService3 = new Date(vm.entry.dateAccomplishedService3);

        if (vm.entry.dateNextService4 !== null)
            vm.entry.dateNextService4 = new Date(vm.entry.dateNextService4);
        if (vm.entry.dateAccomplishedService4 !== null)
            vm.entry.dateAccomplishedService4 = new Date(vm.entry.dateAccomplishedService4);
        if (vm.entry.dateNextService5 !== null)
            vm.entry.dateNextService5 = new Date(vm.entry.dateNextService5);
        if (vm.entry.dateAccomplishedService5 !== null)
            vm.entry.dateAccomplishedService5 = new Date(vm.entry.dateAccomplishedService5);
        if (vm.entry.dateNextService6 !== null)
            vm.entry.dateNextService6 = new Date(vm.entry.dateNextService6);
        if (vm.entry.dateAccomplishedService6 !== null)
            vm.entry.dateAccomplishedService6 = new Date(vm.entry.dateAccomplishedService6);
        if (vm.entry.dateNextService7 !== null)
            vm.entry.dateNextService7 = new Date(vm.entry.dateNextService7);
        if (vm.entry.dateAccomplishedService7 !== null)
            vm.entry.dateAccomplishedService7 = new Date(vm.entry.dateAccomplishedService7);
        if (vm.entry.dateNextService8 !== null)
            vm.entry.dateNextService8 = new Date(vm.entry.dateNextService8);
        if (vm.entry.dateAccomplishedService8 !== null)
            vm.entry.dateAccomplishedService8 = new Date(vm.entry.dateAccomplishedService8);
        if (vm.entry.dateNextService9 !== null)
            vm.entry.dateNextService9 = new Date(vm.entry.dateNextService9);
        if (vm.entry.dateAccomplishedService9 !== null)
            vm.entry.dateAccomplishedService9 = new Date(vm.entry.dateAccomplishedService9);
        if (vm.entry.dateNextService10 !== null)
            vm.entry.dateNextService10 = new Date(vm.entry.dateNextService10);
        if (vm.entry.dateAccomplishedService10 !== null)
            vm.entry.dateAccomplishedService10 = new Date(vm.entry.dateAccomplishedService10);
        if (vm.entry.dateNextService11 !== null)
            vm.entry.dateNextService11 = new Date(vm.entry.dateNextService11);
        if (vm.entry.dateAccomplishedService11 !== null)
            vm.entry.dateAccomplishedService11 = new Date(vm.entry.dateAccomplishedService11);
        if (vm.entry.dateNextService12 !== null)
            vm.entry.dateNextService12 = new Date(vm.entry.dateNextService12);
        if (vm.entry.dateAccomplishedService12 !== null)
            vm.entry.dateAccomplishedService12 = new Date(vm.entry.dateAccomplishedService12);
        if (vm.entry.dropoutDate !== null)
            vm.entry.dropoutDate = new Date(vm.entry.dropoutDate);
    };

    vm.init();
}

//controller.$inject = ['$http', '$state', 'toastr'];

app.controller('formFpEditEntryController', controller);