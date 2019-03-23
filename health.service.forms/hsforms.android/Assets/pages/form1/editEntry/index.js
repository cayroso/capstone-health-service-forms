
var app = angular.module('app');

function controller($rootScope, $window, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;
    vm.entry = $rootScope.selectedForm1Entry;

    vm.back = function () {
        $rootScope.selectedForm1Entry = null;
        $rootScope.setPage('pages/form1/view/index.html');
    };

    vm.save = function () {
        if (vm.entry.dateOfBirth === null) {
            toastr.warning('Please enter valid birth date');
            return;
        }

        var forms = JSON.parse($window.localStorage.getItem('form1'));
        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_NEPIId === vm.item.tcL_NEPIId) {

                for (var n = 0; n < form.entries.length; n++) {
                    var entry = form.entries[n];

                    if (entry.tcL_NEPI_EntryId === vm.entry.tcL_NEPI_EntryId) {
                        //  overwrite
                        form.entries[n] = vm.entry;

                        $window.localStorage.setItem('form1', JSON.stringify(forms));
                        
                        toastr.success('Entry updated');
                        $rootScope.selectedForm1Entry = null;
                        $rootScope.setPage('pages/form1/view/index.html');
                        return;
                    }
                }
            }
        }

        toast.warning('Record not found, please try again', 'Record Not Found');
    };

    vm.init = function () {
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
    };

    vm.init();
}

//controller.$inject = ['$http', '$state', 'toastr'];

app.controller('formNepiEditEntryController', controller);