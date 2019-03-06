
import app from '../app';

app.controller('usersController', function ($http, toastr, $uibModal) {
    const vm = this;
    vm.selectedItem = null;

    vm.setSelectedItem = function (item) {
        if (item === vm.selectedItem) {
            vm.selectedItem = null;
            return;
        }

        vm.selectedItem = item;
    };

    vm.dlgAddUser = function () {
        var modalInst = $uibModal.open({
            animation: true,
            templateUrl: 'app/clientapp/administrator/templates/addUser.html',
            controller: 'addUserModalInstanceCtrl',
            size: 'lg'            
        });

        modalInst.result.then(function (resp) {

            //var payload = {
            //    id: vm.selectedItem.reservationId,
            //    amountPaid: resp.amountPaid,
            //    referenceNumber: resp.referenceNumber
            //};

            //$http.post(`api/customer/reservation/pay`, payload)
            //    .then(function (resp) {
            //        toastr.success('Reservation paid', 'Payment Success');
            //        getReservations();
            //    }, function (err) {
            //        toastr.danger('An error occured while updating reservation', 'Payment Failed');
            //    });
        });
    };

    vm.dlgEditUser = function () {
        var modalInst = $uibModal.open({
            animation: true,
            templateUrl: 'app/clientapp/administrator/templates/editUser.html',
            controller: 'editUserModalInstanceCtrl',
            size: 'lg',
            resolve: {
                item: function () {
                    return vm.selectedItem;
                }
            }
        });

        modalInst.result.then(function (resp) {            
            $http.post(`api/administrator/users/edit`, resp)
                .then(function (resp) {
                    toastr.success('User updated', 'Update Success');
                    init();
                }, function (err) {
                    toastr.error('An error occured while updating user', 'Update Failed');
                });
        });
    };

    function init() {
        $http.get('api/administrator/users')
            .then(function (resp) {
                vm.items = resp.data;
            }, function (err) {
                toastr.error('error occured');
            });
    }

    init();
});


app.controller('addUserModalInstanceCtrl', function ($scope, $uibModalInstance) {

    $scope.item = {};

    $scope.ok = function () {
        $uibModalInstance.close($scope.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

app.controller('editUserModalInstanceCtrl', function ($scope, $uibModalInstance, toastr, item) {

    $scope.item = angular.copy(item);

    $scope.ok = function () {        
        $uibModalInstance.close($scope.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});