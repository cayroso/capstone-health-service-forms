
var app = angular.module('app');

function controller($rootScope, $scope, $window, $http, toastr) {
    const vm = this;
    const apiUrl = $rootScope.baseApiUrl;

    vm.item = $rootScope.selectedForm1;

    vm.back = function () {
        $rootScope.selectedForm1 = null;
        $rootScope.setPage('pages/pnc/index.html');
    };

    vm.edit = function (entry) {
        $rootScope.selectedForm1Entry = entry;
        $rootScope.setPage('pages/pnc/edit/index.html');
    };

    vm.addEntry = function () {
        $rootScope.setPage('pages/pnc/addEntry/index.html');
    };

    vm.editEntry = function (entry) {
        $rootScope.selectedForm1Entry = entry;
        $rootScope.setPage('pages/pnc/editEntry/index.html');
    };

    vm.viewEntry = function (entry) {
        $rootScope.selectedForm1Entry = entry;
        $rootScope.setPage('pages/pnc/viewEntry/index.html');
    };

    vm.deleteEntry = function (entryId) {
        var forms = JSON.parse($window.localStorage.getItem('pnc'));

        for (var i = 0; i < forms.length; i++) {
            var form = forms[i];

            if (form.tcL_PNCId === vm.item.tcL_PNCId) {
                for (var n = 0; n < form.entries.length; n++) {
                    var entry = form.entries[n];

                    if (entry.tcL_PNC_EntryId === entryId) {
                        form.entries.splice(n, 1);

                        $window.localStorage.setItem('pnc', JSON.stringify(forms));

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

        $http.get(`${apiUrl}api/pnc/forms/${vm.item.tcL_PNCId}`)
            .then(function (resp) {

                //  update cache
                var forms = JSON.parse($window.localStorage.getItem('pnc'));
                for (var i = 0; i < forms.length; i++) {
                    var form = forms[i];

                    if (form.tcL_PNCId === vm.item.tcL_PNCId) {
                        forms[i] = resp.data;
                        $window.localStorage.setItem('pnc', JSON.stringify(forms));
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

        $http.post(`${apiUrl}api/pnc/upload`, vm.item)
            .then(function (resp) {
                toastr.success('Form successfully uploaded to server', 'Success');
            }, function (err) {
                toastr.error('Upload failed', 'Failed');
            });
    };
}

app.controller('formPncViewController', controller);