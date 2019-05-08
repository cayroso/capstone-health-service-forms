
var app = angular.module('app');

function controller($rootScope, $scope, $window, $http, toastr) {
    const vm = this;
    
    vm.back = function () {
        $rootScope.setPage('');
    };

    vm.save = function () {
        var forms = JSON.parse($window.localStorage.getItem('pnc'));

        if (forms === null) {
            forms = [];
        }

        forms.push(angular.copy(vm.item));

        //replace
        $window.localStorage.setItem('pnc', JSON.stringify(forms));

        toastr.success('Form successfully added', 'Add Form', {
            timeOut: 0,
            onHidden: vm.back
        });

    };

    vm.$onInit = function () {
        var user = JSON.parse($window.localStorage.getItem('user'));

        vm.item = {
            tcL_PNCId: uuidv4(),
            barangay: '',
            municipality: '',
            province: '',
            region: '',
            userId: user.userId,
            entries: []
        };
        
    };

    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
}

controller.$inject = ['$rootScope', '$scope', '$window', '$http', 'toastr'];

app.controller('formPncAddController', controller);