
var app = angular.module('app');

function controller($rootScope, $window, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;

    vm.back = function () {
        $rootScope.setPage('pages/pnc/view/index.html');
    };

    vm.save = function () {
        var forms = JSON.parse($window.localStorage.getItem('pnc'));

        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_PNCId === vm.item.tcL_PNCId) {
                form.barangay = vm.item.barangay;
                form.municipality = vm.item.municipality;
                form.province = vm.item.province;
                form.region = vm.item.region;

                $window.localStorage.setItem('pnc', JSON.stringify(forms));

                vm.back();
                return;
            }
        }
        toastr.warning('Please try again', 'Record not found');
    };

    vm.init = function () {
    };

    vm.init();
}

//controller.$inject = ['$http', '$state', 'toastr'];

app.controller('formPncEditController', controller);