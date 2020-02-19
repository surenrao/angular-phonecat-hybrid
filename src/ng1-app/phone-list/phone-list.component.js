'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: './phone-list.template.html',
    controller: ['PhoneService',
      function PhoneListController(PhoneService) {
        PhoneService.query().subscribe(o => {
          console.log('Calling ng9 service from ng1');
          this.phones = o;
        });
        this.orderProp = 'age';
      }
    ]
  });
