
var app = angular.module('app');

function controller($rootScope, $window, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;

    vm.back = function () {
        $rootScope.setPage('pages/nepi/view/index.html');
    };

    vm.save = function () {
        var forms = JSON.parse($window.localStorage.getItem('nepi'));

        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_NEPIId === vm.item.tcL_NEPIId) {
                form.barangay = vm.item.barangay;
                form.municipality = vm.item.municipality;
                form.province = vm.item.province;
                form.region = vm.item.region;

                $window.localStorage.setItem('nepi', JSON.stringify(forms));

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

app.controller('formNepiEditController', controller);