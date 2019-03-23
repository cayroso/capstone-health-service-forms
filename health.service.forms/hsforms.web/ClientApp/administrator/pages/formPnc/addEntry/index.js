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

        $http.post('api/pnc/entry/add', vm.entry)
            .then(function (resp) {
                toastr.success('Entry added');
                $state.go('formPncViewEntry', { formId: vm.id, entryId: resp.data });
            }, function (err) {
                toastr.error('error');
            });
    };

    vm.init = function () {
        $http.get(`api/administrator/forms/pncs/${vm.id}`)
            .then(function (resp) {
                vm.item = resp.data;
                var now = new Date();

                vm.entry = {
                    tcL_PNCId: vm.id,

                    dateOfRegistration: now,
                    familySerialNumber: '',
                    name: '',
                    address: '',
                    age: 0,
                    lmpDate: null,
                    lmpgp: '',
                    edc: null,

                    prenatalVisitTrimester1: null,
                    prenatalVisitTrimester2: null,
                    prenatalVisitTrimester3: null,

                    //  PART II

                    tetanusStatus: '',

                    dateTetanusToxiodVaccine1: null,
                    dateTetanusToxiodVaccine2: null,
                    dateTetanusToxiodVaccine3: null,
                    dateTetanusToxiodVaccine4: null,
                    dateTetanusToxiodVaccine5: null,

                    ironWithFolicDateGiven1: null,
                    ironWithFolicNumberGiven1: 0,

                    ironWithFolicDateGiven2: null,
                    ironWithFolicNumberGiven2: 0,

                    ironWithFolicDateGiven3: null,
                    ironWithFolicNumberGiven3: 0,

                    ironWithFolicDateGiven4: null,
                    ironWithFolicNumberGiven4: 0,

                    ironWithFolicDateGiven5: null,
                    ironWithFolicNumberGiven5: 0,

                    ironWithFolicDateGiven6: null,
                    ironWithFolicNumberGiven6: 0,

                    dateSTITested: null,
                    dateSTIResult: null,
                    dateSTIPenicillin: null,

                    pregnancyDateTerminated: null,
                    pregnancyOutcome: '',
                    pregnancyGender: '',

                    birthWeight : 0,
                    placeOfHealthFacility: '',
                    placeOfNIO: '',
                    attendedBy: '',

                    remarks: ''
                };
            });
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formPncAddEntryComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formPnc/addEntry/index.html',
    controller: controller
});