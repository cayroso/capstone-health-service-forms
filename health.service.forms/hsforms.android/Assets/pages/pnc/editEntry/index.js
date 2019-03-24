
var app = angular.module('app');

function controller($rootScope, $window, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;
    vm.entry = $rootScope.selectedForm1Entry;

    vm.back = function () {
        $rootScope.selectedForm1Entry = null;
        $rootScope.setPage('pages/pnc/view/index.html');
    };

    vm.save = function () {
        if (vm.entry.dateOfBirth === null) {
            toastr.warning('Please enter valid birth date');
            return;
        }

        var forms = JSON.parse($window.localStorage.getItem('pnc'));
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_PNCId === vm.item.tcL_PNCId) {

                for (var n = 0; n < form.entries.length; n++) {
                    var entry = form.entries[n];

                    if (entry.tcL_PNC_EntryId === vm.entry.tcL_PNC_EntryId) {
                        //  overwrite
                        form.entries[n] = vm.entry;

                        $window.localStorage.setItem('pnc', JSON.stringify(forms));
                        
                        toastr.success('Entry updated');
                        $rootScope.selectedForm1Entry = null;
                        $rootScope.setPage('pages/pnc/view/index.html');
                        return;
                    }
                }
            }
        }

        toast.warning('Record not found, please try again', 'Record Not Found');
    };

    vm.init = function () {
        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);

        if (vm.entry.lmpDate !== null)
            vm.entry.lmpDate = new Date(vm.entry.lmpDate);
        if (vm.entry.edc !== null)
            vm.entry.edc = new Date(vm.entry.edc);

        if (vm.entry.prenatalVisitTrimester1 !== null)
            vm.entry.prenatalVisitTrimester1 = new Date(vm.entry.prenatalVisitTrimester1);
        if (vm.entry.prenatalVisitTrimester2 !== null)
            vm.entry.prenatalVisitTrimester2 = new Date(vm.entry.prenatalVisitTrimester2);
        if (vm.entry.prenatalVisitTrimester3 !== null)
            vm.entry.prenatalVisitTrimester3 = new Date(vm.entry.prenatalVisitTrimester3);
        if (vm.entry.dateTetanusToxiodVaccine1 !== null)
            vm.entry.dateTetanusToxiodVaccine1 = new Date(vm.entry.dateTetanusToxiodVaccine1);
        if (vm.entry.dateTetanusToxiodVaccine2 !== null)
            vm.entry.dateTetanusToxiodVaccine2 = new Date(vm.entry.dateTetanusToxiodVaccine2);
        if (vm.entry.dateTetanusToxiodVaccine3 !== null)
            vm.entry.dateTetanusToxiodVaccine3 = new Date(vm.entry.dateTetanusToxiodVaccine3);
        if (vm.entry.dateTetanusToxiodVaccine4 !== null)
            vm.entry.dateTetanusToxiodVaccine4 = new Date(vm.entry.dateTetanusToxiodVaccine4);
        if (vm.entry.dateTetanusToxiodVaccine5 !== null)
            vm.entry.dateTetanusToxiodVaccine5 = new Date(vm.entry.dateTetanusToxiodVaccine5);

        if (vm.entry.ironWithFolicDateGiven1 !== null)
            vm.entry.ironWithFolicDateGiven1 = new Date(vm.entry.ironWithFolicDateGiven1);
        if (vm.entry.ironWithFolicDateGiven2 !== null)
            vm.entry.ironWithFolicDateGiven2 = new Date(vm.entry.ironWithFolicDateGiven2);
        if (vm.entry.ironWithFolicDateGiven3 !== null)
            vm.entry.ironWithFolicDateGiven3 = new Date(vm.entry.ironWithFolicDateGiven3);
        if (vm.entry.ironWithFolicDateGiven4 !== null)
            vm.entry.ironWithFolicDateGiven4 = new Date(vm.entry.ironWithFolicDateGiven4);
        if (vm.entry.ironWithFolicDateGiven5 !== null)
            vm.entry.ironWithFolicDateGiven5 = new Date(vm.entry.ironWithFolicDateGiven5);
        if (vm.entry.ironWithFolicDateGiven6 !== null)
            vm.entry.ironWithFolicDateGiven6 = new Date(vm.entry.ironWithFolicDateGiven6);

        if (vm.entry.dateSTITested !== null)
            vm.entry.dateSTITested = new Date(vm.entry.dateSTITested);
        if (vm.entry.dateSTIResult !== null)
            vm.entry.dateSTIResult = new Date(vm.entry.dateSTIResult);
        if (vm.entry.dateSTIPenicillin !== null)
            vm.entry.dateSTIPenicillin = new Date(vm.entry.dateSTIPenicillin);

        if (vm.entry.pregnancyDateTerminated !== null)
            vm.entry.pregnancyDateTerminated = new Date(vm.entry.pregnancyDateTerminated);
       
    };

    vm.init();
}

//controller.$inject = ['$http', '$state', 'toastr'];

app.controller('formPncEditEntryController', controller);