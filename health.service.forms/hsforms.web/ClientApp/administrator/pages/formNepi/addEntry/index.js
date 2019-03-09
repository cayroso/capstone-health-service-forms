import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.id = $state.params.formId;

    vm.saveEntry = function () {

        if (vm.entry.dateOfBirth === null) {
            toastr.warning('Please enter valid birth date');
            return;
        }

        $http.post('api/nepi/entry/add', vm.entry)
            .then(function (resp) {
                toastr.success('Entry added');
                $state.go('formNepiViewEntry', { formId: vm.id, entryId: resp.data });
            }, function (err) {
                toastr.error('error');
            });
    };

    vm.init = function () {
        $http.get(`api/administrator/forms/nepis/${vm.id}`)
            .then(function (resp) {
                vm.item = resp.data;
                var now = new Date();

                vm.entry = {
                    tcL_NEPIId: vm.id,

                    dateOfRegistration: now,
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
            });
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formNepiAddEntryComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formNepi/addEntry/index.html',
    controller: controller
});