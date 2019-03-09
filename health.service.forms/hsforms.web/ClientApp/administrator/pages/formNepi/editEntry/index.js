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
                        vm.entry.dateNewbornScreeningReferral = new Date(vm.entry.dateNewbornScreeningReferral);
                        vm.entry.dateNewbornScreeningDone = new Date(vm.entry.dateNewbornScreeningDone);
                        vm.entry.cpabttAssessed = new Date(vm.entry.cpabttAssessed);
                        vm.entry.childExclusiveBreastFeed6 = new Date(vm.entry.childExclusiveBreastFeed6);
                        vm.entry.bcg = new Date(vm.entry.bcg);

                        vm.entry.hepaB1Within24hrs = new Date(vm.entry.hepaB1Within24hrs);
                        vm.entry.hepaB1MoreThan24hrs = new Date(vm.entry.hepaB1MoreThan24hrs);
                        vm.entry.pentavalent1 = new Date(vm.entry.pentavalent1);
                        vm.entry.pentavalent2 = new Date(vm.entry.pentavalent2);
                        vm.entry.pentavalent3 = new Date(vm.entry.pentavalent3);
                        vm.entry.opV1 = new Date(vm.entry.opV1);
                        vm.entry.opV2 = new Date(vm.entry.opV2);
                        vm.entry.opV3 = new Date(vm.entry.opV3);

                        vm.entry.ipv = new Date(vm.entry.ipv);
                        vm.entry.mcV1 = new Date(vm.entry.mcV1);
                        vm.entry.mcV2 = new Date(vm.entry.mcV2);

                        vm.entry.dateFullyImmunizedChild = new Date(vm.entry.dateFullyImmunizedChild);
                        vm.entry.rotaVirusVaccine1 = new Date(vm.entry.rotaVirusVaccine1);
                        vm.entry.rotaVirusVaccine2 = new Date(vm.entry.rotaVirusVaccine2);

                        vm.entry.pcV1 = new Date(vm.entry.pcV1);
                        vm.entry.pcV2 = new Date(vm.entry.pcV2);
                        vm.entry.pcV3 = new Date(vm.entry.pcV3);
                        
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