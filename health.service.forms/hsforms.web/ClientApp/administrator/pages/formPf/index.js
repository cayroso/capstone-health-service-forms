import 'jquery';
import app from '../../app';

function controller(toastr) {

    toastr.success('formPf');
}

controller.$inject = ['toastr'];

app.component('formPfComponent', {
    templateUrl: 'app/clientapp/administrator/pages/formPf/index.html',
    controller: controller
});