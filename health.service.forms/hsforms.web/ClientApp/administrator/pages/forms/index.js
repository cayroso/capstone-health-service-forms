import 'jquery';
import app from '../../app';

function controller(toastr) {

    toastr.success('oyexxxxxxxxxx');
}

controller.$inject = ['toastr'];

app.component('formsComponent', {
    templateUrl: 'app/clientapp/administrator/pages/forms/index.html',
    controller: controller
});