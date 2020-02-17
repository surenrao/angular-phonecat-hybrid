/* Angular 9 */
import { downgradeComponent } from '@angular/upgrade/static';
import { HelloComponent } from '../app/hello.component';
import { TestFormComponent } from '../app/test-form/test-form.component';
import { PhoneDetailComponent } from '../app/phone-detail/phone-detail.component';

angular.module('phonecatApp')
       .directive('hello', downgradeComponent({ component: HelloComponent }))
       .directive('phoneDetail', downgradeComponent({ component: PhoneDetailComponent }))
       .directive('testForm', downgradeComponent({ component: TestFormComponent }));
