
import app from '../../app';

function usersController($http, toastr, $uibModal) {
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
            templateUrl: 'app/clientapp/administrator/pages/users/addUser.html',
            controller: 'addUserModalInstanceCtrl',
            size: 'lg',
            backdrop: 'static',
            keyboard: false
        });

        modalInst.result.then(function (resp) {
            init();
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
            templateUrl: 'app/clientapp/administrator/pages/users/editUser.html',
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
}
usersController.$inject = ['$http', 'toastr', '$uibModal'];

app.component('usersComponent', {
    templateUrl: 'app/clientapp/administrator/pages/users/index.html',
    controller: usersController
});


function addUserModalInstanceCtrl($scope, $uibModalInstance, $http, toastr) {

    $scope.item = {
        userName: '',
        password: '',
        confirmPassword: '',

        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        mobile: '',
        roleId: ''
    };

    $scope.ok = function () {
        var user = $scope.item;
        
        if (user.password === '') {
            toastr.warning('Please enter pasword', 'Form Invalid');
            return;
        }
        if (user.confirmPassword==='') {
            toastr.warning('Please confirm pasword', 'Form Invalid');
            return;
        }
        if (user.password !== user.confirmPassword) {
            toastr.warning('Please confirm pasword', 'Form Invalid');
            return;
        }
        if (user.firstName === '') {
            toastr.warning('Please enter firstName', 'Form Invalid');
            return;
        }
        if (user.middleName === '') {
            toastr.warning('Please enter middleName', 'Form Invalid');
            return;
        }
        if (user.lastName === '') {
            toastr.warning('Please enter lastName', 'Form Invalid');
            return;
        }
        if (user.email === '') {
            toastr.warning('Please enter email', 'Form Invalid');
            return;
        }
        if (user.phone === '') {
            toastr.warning('Please enter phone', 'Form Invalid');
            return;
        }
        if (user.mobile === '') {
            toastr.warning('Please enter mobile', 'Form Invalid');
            return;
        }
        if (user.roleId === '') {
            toastr.warning('Select Role', 'Form Invalid');
            return;
        }

        $http.get(`api/account/checkUser/?userName=${user.userName}&email=${user.email}`)
            .then(function (resp) {
                var data = resp.data;

                if (!data.userNameOk) {
                    toastr.warning('UserName not available', 'Validation Error');
                    return;
                }
                if (!data.emailOk) {
                    toastr.warning('Email not available', 'Validation Error');
                    return;
                }
                
                $http.post('api/account/addUser', user)
                    .then(function (err2) {
                        toastr.success('User Added');
                        $uibModalInstance.close();
                    }, function (err2) {
                        toastr.error('Error occured');
                    });

            }, function (err) {
                toastr.error('Error occured');
            });

        //debugger;
        //$uibModalInstance.close($scope.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

addUserModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', '$http', 'toastr'];

app.controller('addUserModalInstanceCtrl', addUserModalInstanceCtrl);


function editUserModalInstanceCtrl($scope, $uibModalInstance, toastr, item) {

    $scope.item = angular.copy(item);
    $scope.item.roleId = $scope.item.userRoles[0].roleId;

    $scope.ok = function () {
        $uibModalInstance.close($scope.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

editUserModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'toastr', 'item'];

app.controller('editUserModalInstanceCtrl', editUserModalInstanceCtrl);