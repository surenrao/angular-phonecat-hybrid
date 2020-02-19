/* Angular 9 */
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { HelloComponent } from '../app/hello.component';
import { TestFormComponent } from '../app/test-form/test-form.component';
import { PhoneDetailComponent } from '../app/phone-detail/phone-detail.component';
import { PhoneService } from '../app/services/phone.service';

angular.module('phonecatApp')
       .factory('PhoneService', downgradeInjectable(PhoneService))
       .directive('hello', downgradeComponent({ component: HelloComponent }))
       .directive('phoneDetail', downgradeComponent({ component: PhoneDetailComponent }))
       .directive('testForm', downgradeComponent({ component: TestFormComponent }));
