
var app = angular.module('app');

function controller($rootScope, $window, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;

    vm.back = function () {
        $rootScope.setPage('pages/nepi/view/index.html');
    };

    vm.save = function () {

        if (vm.entry.dateOfBirth === null) {
            toastr.warning('Please enter valid birth date');
            return;
        }

        //  get and update
        var forms = JSON.parse($window.localStorage.getItem('nepi'));

        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_NEPIId === vm.item.tcL_NEPIId) {
                toastr.success('found form');
                form.entries.push(vm.entry);

                //replace
                $window.localStorage.setItem('nepi', JSON.stringify(forms));

                $rootScope.selectedForm1 = form;
                vm.back();
                return;
            }
        }
        
    };

    vm.init = function () {
        
        var now = new Date();

        vm.entry = {
            tcL_NEPIId: vm.item.tcL_NEPIId,
            tcL_NEPI_EntryId: uuidv4(),

            dateOfRegistration: null,
            dateOfBirth: null,
            familySerialNumber: '',
            nhts: '',
            nameOfChild: '',
            weight: 0,
            height: 0,
            gender: '',
            nameOfMother: '',
            address: '',

            dateNewbornScreeningReferral: null,
            dateNewbornScreeningDone: null,

            cpabttStatus: '',
            cpabttAssessed: null,

            childExclusiveBreastFeed1: false,
            childExclusiveBreastFeed2: false,
            childExclusiveBreastFeed3: false,
            childExclusiveBreastFeed4: false,
            childExclusiveBreastFeed5: false,
            childExclusiveBreastFeed6: null,

            complimentaryFeeding6: false,
            complimentaryFeeding7: false,
            complimentaryFeeding8: false,


            bcg: null,

            hepaB1Within24hrs: null,
            hepaB1MoreThan24hrs: null,

            pentavalent1: null,
            pentavalent2: null,
            pentavalent3: null,

            opV1: null,
            opV2: null,
            opV3: null,

            ipv: null,

            mcV1: null,
            mcV2: null,

            dateFullyImmunizedChild: null,

            rotaVirusVaccine1: null,
            rotaVirusVaccine2: null,


            pcV1: null,
            pcV2: null,
            pcV3: null,

            vitaminA1: false,
            vitaminA2: false,
            vitaminA3: false,

            ironA1: false,
            ironA2: false,
            mnP1: false,
            mnP2: false,

            deworming: null,

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

app.controller('formNepiAddEntryComponent', controller);