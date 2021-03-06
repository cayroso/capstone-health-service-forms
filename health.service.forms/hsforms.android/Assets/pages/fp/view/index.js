﻿
var app = angular.module('app');

function controller($rootScope, $scope, $window, $http, toastr) {
    const vm = this;
    const apiUrl = $rootScope.baseApiUrl;

    vm.item = $rootScope.selectedForm1;

    vm.back = function () {
        $rootScope.selectedForm1 = null;
        $rootScope.setPage('pages/fp/index.html');
    };

    vm.edit = function (entry) {
        $rootScope.selectedForm1Entry = entry;
        $rootScope.setPage('pages/fp/edit/index.html');
    };

    vm.addEntry = function () {
        $rootScope.setPage('pages/fp/addEntry/index.html');
    };

    vm.editEntry = function (entry) {
        $rootScope.selectedForm1Entry = entry;
        $rootScope.setPage('pages/fp/editEntry/index.html');
    };

    vm.viewEntry = function (entry) {
        $rootScope.selectedForm1Entry = entry;
        $rootScope.setPage('pages/fp/viewEntry/index.html');
    };

    vm.deleteEntry = function (entryId) {
        var forms = JSON.parse($window.localStorage.getItem('fp'));

        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_FPId === vm.item.tcL_FPId) {
                for (var n = 0; n < form.entries.length; n++) {
                    var entry = form.entries[n];

                    if (entry.tcL_FP_EntryId === entryId) {
                        form.entries.splice(n, 1);

                        $window.localStorage.setItem('fp', JSON.stringify(forms));

                        toastr.success('Entry deleted', 'Success');
                        $rootScope.selectedForm1 = vm.item = form;

                        return;
                    }
                }
            }
        }

        toastr.warning('Entry not deleted', 'Failed');
    };

    vm.pull = function () {

        $http.get(`${apiUrl}api/fp/forms/${vm.item.tcL_FPId}`)
            .then(function (resp) {

                //  update cache
                var forms = JSON.parse($window.localStorage.getItem('fp'));
                for (var i = 0; i < forms.length; i++) {
                    var form = forms[i];

                    if (form.tcL_FPId === vm.item.tcL_FPId) {
                        forms[i] = resp.data;
                        $window.localStorage.setItem('fp', JSON.stringify(forms));
                        $rootScope.selectedForm1 = vm.item = resp.data;
                        toastr.success('Form successfully downloaded from server', 'Success');
                        return;
                    }
                }
                toastr.warning('Saving local copy failed', 'Failed');
            }, function (err) {
                toastr.error('Download failed', 'Failed');
            });

    };

    vm.push = function () {
        vm.item.lastUploaded = new Date();

        $http.post(`${apiUrl}api/fp/upload`, vm.item)
            .then(function (resp) {
                toastr.success('Form successfully uploaded to server', 'Success');
            }, function (err) {
                toastr.error(JSON.stringify(err), 'Failed');
            });
    };
}

app.controller('formFpViewController', controller);