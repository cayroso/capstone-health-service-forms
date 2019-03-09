import 'jquery';
import app from '../../app';

function controller(toastr) {

    toastr.success('formPnc');
}

controller.$inject = ['toastr'];

app.component('formPncComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formPnc/index.html',
    controller: controller
});