
var app = angular.module('app');

function controller($rootScope, $window, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;

    vm.back = function () {
        $rootScope.setPage('pages/pnc/view/index.html');
    };

    vm.save = function () {

        if (vm.entry.dateOfBirth === null) {
            toastr.warning('Please enter valid birth date');
            return;
        }

        //  get and update
        var forms = JSON.parse($window.localStorage.getItem('pnc'));

        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_PNCId === vm.item.tcL_PNCId) {
                toastr.success('found form');
                form.entries.push(vm.entry);

                //replace
                $window.localStorage.setItem('pnc', JSON.stringify(forms));

                $rootScope.selectedForm1 = form;
                vm.back();
                return;
            }
        }
        
    };

    vm.init = function () {
        
        var now = new Date();

        vm.entry = {
            tcL_PNCId: vm.item.tcL_PNCId,
            tcL_PNC_EntryId: uuidv4(),

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

            birthWeight: 0,
            placeOfHealthFacility: '',
            placeOfNIO: '',
            attendedBy: '',

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

app.controller('formPncAddEntryComponent', controller);