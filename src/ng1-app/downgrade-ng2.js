/* Angular 9 */
import { downgradeComponent } from '@angular/upgrade/static';
import { HelloComponent } from '../app/hello.component';

angular.module('phonecatApp')
       .directive('hello', downgradeComponent({ component: HelloComponent }));
