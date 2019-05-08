
var app = angular.module('app');

function controller($rootScope, $scope, $window, $http, toastr) {
    const vm = this;
    const apiUrl = $rootScope.baseApiUrl;
    vm.selectedPage = '';

    vm.back = function () {
        $rootScope.setPage('');
    };

    vm.download = function () {

        $http.get(`${apiUrl}api/fp/forms`)
            .then(function (resp) {
                $window.localStorage.setItem('fp', JSON.stringify(resp.data));
                vm.init();
                toastr.success('Forms downloaded successfully', 'Success');
            }, function (err) {
                toastr.error('Check your internet connection', 'Download Failed');
            });
    };

    vm.upload = function () {
        var payload = {
            items: JSON.parse($window.localStorage.getItem('fp'))
        };

        $http.post(`${apiUrl}api/fp/upload`, payload)
            .then(function (resp) {
                toastr.success('Forms successfully uploaded to server', 'Success');
            }, function (err) {
                toastr.error('Uploaded failed', 'Failed');
            });
    };

    vm.add = function () {
        $rootScope.selectedForm1 = null;
        $rootScope.setPage('pages/fp/add/index.html');
    };

    vm.view = function (form) {
        $rootScope.selectedForm1 = form;
        $rootScope.setPage('pages/fp/view/index.html');
    };

    vm.edit = function (form) {
        $rootScope.selectedForm1 = form;
        $rootScope.setPage('pages/fp/edit/index.html');
    };

    vm.removeItem = function (form) {
        var forms = JSON.parse($window.localStorage.getItem('fp'));

        for (var i = 0; i < forms.length; i++) {
            var foo = forms[i];

            if (foo.tcL_FPId === form.tcL_FPId) {

                //  remove the item
                forms.splice(i, 1);

                //  save back
                $window.localStorage.setItem('fp', JSON.stringify(forms));

                vm.init();

                toastr.success('Form was removed', 'Success');
                return;
            }
        }

        toastr.warning('Form was not removed', 'Failed');
    };

    vm.init = function () {

        var cache = $window.localStorage.getItem('fp');

        var items = JSON.parse(cache);

        vm.items = items;
    };

    vm.init();
}

app.controller('formFpController', controller);