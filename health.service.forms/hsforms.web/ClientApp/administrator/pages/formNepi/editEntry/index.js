import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.formId = $state.params.formId;
    vm.entryId = $state.params.entryId;

    vm.saveEntry = function () {
        if (vm.entry.dateOfBirth === null) {
            toastr.warning('Please enter valid birth date');
            return;
        }

        $http.post('api/nepi/entry/edit', vm.entry)
            .then(function (resp) {
                toastr.success('Entry Updated');

                $state.go('formNepiViewEntry', { formId: vm.formId, entryId: vm.entryId });
            }, function (err) {
                toastr.error('error');
            });
    };

    vm.init = function () {
        $http.get(`api/administrator/forms/nepis/${vm.formId}`)
            .then(function (resp) {
                vm.item = resp.data;
                for (var i = 0; i < vm.item.entries.length; i++) {
                    var entry = vm.item.entries[i];

                    if (entry.tcL_NEPI_EntryId === vm.entryId) {
                        vm.entry = entry;
                        //debugger;
                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);
                        vm.entry.dateOfBirth = new Date(vm.entry.dateOfBirth);

                        if (vm.entry.dateNewbornScreeningReferral !== null)
                            vm.entry.dateNewbornScreeningReferral = new Date(vm.entry.dateNewbornScreeningReferral);
                        if (vm.entry.dateNewbornScreeningDone !== null)
                            vm.entry.dateNewbornScreeningDone = new Date(vm.entry.dateNewbornScreeningDone);
                        if (vm.entry.cpabttAssessed !== null)
                            vm.entry.cpabttAssessed = new Date(vm.entry.cpabttAssessed);
                        if (vm.entry.childExclusiveBreastFeed6 !== null)
                            vm.entry.childExclusiveBreastFeed6 = new Date(vm.entry.childExclusiveBreastFeed6);
                        if (vm.entry.bcg !== null)
                            vm.entry.bcg = new Date(vm.entry.bcg);
                        if (vm.entry.hepaB1Within24hrs !== null)
                            vm.entry.hepaB1Within24hrs = new Date(vm.entry.hepaB1Within24hrs);
                        if (vm.entry.hepaB1MoreThan24hrs !== null)
                            vm.entry.hepaB1MoreThan24hrs = new Date(vm.entry.hepaB1MoreThan24hrs);
                        if (vm.entry.pentavalent1 !== null)
                            vm.entry.pentavalent1 = new Date(vm.entry.pentavalent1);
                        if (vm.entry.pentavalent2 !== null)
                            vm.entry.pentavalent2 = new Date(vm.entry.pentavalent2);
                        if (vm.entry.pentavalent3 !== null)
                            vm.entry.pentavalent3 = new Date(vm.entry.pentavalent3);
                        if (vm.entry.opV1 !== null)
                            vm.entry.opV1 = new Date(vm.entry.opV1);
                        if (vm.entry.opV2 !== null)
                            vm.entry.opV2 = new Date(vm.entry.opV2);
                        if (vm.entry.opV3 !== null)
                            vm.entry.opV3 = new Date(vm.entry.opV3);
                        if (vm.entry.ipv !== null)

                            vm.entry.ipv = new Date(vm.entry.ipv);
                        if (vm.entry.mcV1 !== null)
                            vm.entry.mcV1 = new Date(vm.entry.mcV1);
                        if (vm.entry.mcV2 !== null)
                            vm.entry.mcV2 = new Date(vm.entry.mcV2);
                        if (vm.entry.dateFullyImmunizedChild !== null)

                            vm.entry.dateFullyImmunizedChild = new Date(vm.entry.dateFullyImmunizedChild);
                        if (vm.entry.rotaVirusVaccine1 !== null)
                            vm.entry.rotaVirusVaccine1 = new Date(vm.entry.rotaVirusVaccine1);
                        if (vm.entry.rotaVirusVaccine2 !== null)
                            vm.entry.rotaVirusVaccine2 = new Date(vm.entry.rotaVirusVaccine2);
                        if (vm.entry.pcV1 !== null)
                            vm.entry.pcV1 = new Date(vm.entry.pcV1);
                        if (vm.entry.pcV2 !== null)
                            vm.entry.pcV2 = new Date(vm.entry.pcV2);
                        if (vm.entry.pcV3 !== null)
                            vm.entry.pcV3 = new Date(vm.entry.pcV3);
                        if (vm.entry.deworming !== null)
                            vm.entry.deworming = new Date(vm.entry.deworming);

                        return;
                    }
                }
            });
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formNepiEditEntryComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formNepi/editEntry/index.html',
    controller: controller
});