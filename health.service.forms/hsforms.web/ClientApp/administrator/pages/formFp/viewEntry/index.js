import 'jquery';
import app from '../../../app';

function controller($http, $state, toastr) {
    const vm = this;
    vm.formId = $state.params.formId;
    vm.entryId = $state.params.entryId;

    vm.init = function () {
        $http.get(`api/administrator/forms/fps/${vm.formId}`)
            .then(function (resp) {
                vm.item = resp.data;
                for (var i = 0; i < vm.item.entries.length; i++) {
                    var entry = vm.item.entries[i];

                    if (entry.tcL_FP_EntryId === vm.entryId) {
                        vm.entry = entry;

                        
                        vm.entry.dateOfRegistration = new Date(vm.entry.dateOfRegistration);

                        vm.entry.birthDate = new Date(vm.entry.birthDate);

                        //if (vm.entry.dateNextService1 !== null)
                        //    vm.entry.dateNextService1 = new Date(vm.entry.dateNextService1);
                        //if (vm.entry.dateAccomplishedService1 !== null)
                        //vm.entry.dateAccomplishedService1 = new Date(vm.entry.dateAccomplishedService1);

                        ////vm.entry.dateNextService2 = new Date(vm.entry.dateNextService2);
                        ////vm.entry.dateAccomplishedService2 = new Date(vm.entry.dateAccomplishedService2);
                        //vm.entry.dateNextService3 = new Date(vm.entry.dateNextService3);
                        //vm.entry.dateAccomplishedService3 = new Date(vm.entry.dateAccomplishedService3);
                        //vm.entry.dateNextService4 = new Date(vm.entry.dateNextService4);
                        //vm.entry.dateAccomplishedService4 = new Date(vm.entry.dateAccomplishedService4);
                        //vm.entry.dateNextService5 = new Date(vm.entry.dateNextService5);
                        //vm.entry.dateAccomplishedService5 = new Date(vm.entry.dateAccomplishedService5);

                        //vm.entry.dateNextService6 = new Date(vm.entry.dateNextService6);
                        //vm.entry.dateAccomplishedService6 = new Date(vm.entry.dateAccomplishedService6);
                        //vm.entry.dateNextService7 = new Date(vm.entry.dateNextService7);
                        //vm.entry.dateAccomplishedService7 = new Date(vm.entry.dateAccomplishedService7);

                        //vm.entry.dateNextService8 = new Date(vm.entry.dateNextService8);
                        //vm.entry.dateAccomplishedService8 = new Date(vm.entry.dateAccomplishedService8);

                        //vm.entry.dateNextService9 = new Date(vm.entry.dateNextService9);
                        //vm.entry.dateAccomplishedService9 = new Date(vm.entry.dateAccomplishedService9);

                        //vm.entry.dateNextService10 = new Date(vm.entry.dateNextService10);
                        //vm.entry.dateAccomplishedService10 = new Date(vm.entry.dateAccomplishedService10);

                        //vm.entry.dateNextService11 = new Date(vm.entry.dateNextService11);
                        //vm.entry.dateAccomplishedService11 = new Date(vm.entry.dateAccomplishedService11);

                        //vm.entry.dateNextService12 = new Date(vm.entry.dateNextService12);
                        //vm.entry.dateAccomplishedService12 = new Date(vm.entry.dateAccomplishedService12);

                        //vm.entry.dropoutDate = new Date(vm.entry.dropoutDate);

                        return;
                    }
                }
            });
    };

    vm.init();
}

controller.$inject = ['$http', '$state', 'toastr'];

app.component('formFpViewEntryComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formFp/viewEntry/index.html',
    controller: controller
});