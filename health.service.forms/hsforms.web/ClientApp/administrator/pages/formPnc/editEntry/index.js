import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.formId = $state.params.formId;
    vm.entryId = $state.params.entryId;

    vm.saveEntry = function () {
        if (vm.entry.birthDate === null) {
            toastr.warning('Please enter valid birth date');
            return;
        }

        $http.post('api/pnc/entry/edit', vm.entry)
            .then(function (resp) {
                toastr.success('Entry Updated');

                $state.go('formPncViewEntry', { formId: vm.formId, entryId: vm.entryId });
            }, function (err) {
                toastr.error('error');
            });
    };

    vm.init = function () {
        $http.get(`api/administrator/forms/pncs/${vm.formId}`)
            .then(function (resp) {
                vm.item = resp.data;
                for (var i = 0; i < vm.item.entries.length; i++) {
                    var entry = vm.item.entries[i];

                    if (entry.tcL_PNC_EntryId === vm.entryId) {
                        vm.entry = entry;
                        //debugger;
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

                        return;
                    }
                }
            });
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formPncEditEntryComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formPnc/editEntry/index.html',
    controller: controller
});