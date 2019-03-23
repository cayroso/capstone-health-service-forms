
var app = angular.module('app');

function controller($rootScope, $window, toastr) {
    const vm = this;
    vm.item = $rootScope.selectedForm1;

    vm.back = function () {
        $rootScope.setPage('pages/form1/view/index.html');
    };

    vm.save = function () {
        var forms = JSON.parse($window.localStorage.getItem('form1'));

        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_NEPIId === vm.item.tcL_NEPIId) {
                form.barangay = vm.item.barangay;
                form.municipality = vm.item.municipality;
                form.province = vm.item.province;
                form.region = vm.item.region;

                $window.localStorage.setItem('form1', JSON.stringify(forms));

                vm.back();
                return;
            }
        }
        toastr.warning('Please try again', 'Record not found');
    };

    vm.init = function () {
        //$http.get(`api/administrator/forms/nepis/${vm.formId}`)
        //    .then(function (resp) {
        //        vm.item = resp.data;
        //        vm.item.formId = vm.formId;
        //    });
    };

    vm.init();
}

//controller.$inject = ['$http', '$state', 'toastr'];

app.controller('formNepiEditController', controller);