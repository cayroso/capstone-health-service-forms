
var app = angular.module('app');

app.controller('form1Controller', function ($rootScope, $scope, $window, $http, toastr) {
    const vm = this;
    const apiUrl = $rootScope.baseApiUrl;
    vm.selectedPage = '';

    vm.back = function () {
        $rootScope.setPage('');
    };

    vm.download = function () {

        $http.get(`${apiUrl}api/nepi/forms`)
            .then(function (resp) {
                $window.localStorage.setItem('form1', JSON.stringify(resp.data));
                vm.init();
                toastr.success('Forms downloaded successfully', 'Success');
            }, function (err) {
                toastr.error('Check your internet connection', 'Download Failed');
            });
    };

    vm.upload = function () {
        var payload = {
            items: JSON.parse($window.localStorage.getItem('form1'))
        };

        $http.post(`${apiUrl}api/nepi/upload`, payload)
            .then(function (resp) {
                toastr.success('Forms successfully uploaded to server', 'Success');
            }, function (err) {
                toastr.error('Uploaded failed', 'Failed');
            });
    };

    vm.view = function (form) {
        $rootScope.selectedForm1 = form;
        $rootScope.setPage('pages/form1/view/index.html');
    };

    vm.edit = function (form) {
        $rootScope.selectedForm1 = form;
        $rootScope.setPage('pages/form1/edit/index.html');
    };

    vm.removeItem = function (form) {
        var forms = JSON.parse($window.localStorage.getItem('form1'));

        for (var i = 0; i < forms.length; i++) {
            var foo = forms[i];

            if (foo.tcL_NEPIId === form.tcL_NEPIId) {

                //  remove the item
                forms.splice(i, 1);

                //  save back
                $window.localStorage.setItem('form1', JSON.stringify(forms));

                vm.init();

                toastr.success('Form was removed', 'Success');
                return;
            }
        }

        toastr.warning('Form was not removed', 'Failed');
    };

    vm.init = function () {

        var cache = $window.localStorage.getItem('form1');

        var items = JSON.parse(cache);

        vm.items = items;
    };

    vm.init();
});