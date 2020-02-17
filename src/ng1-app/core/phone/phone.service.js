'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$resource',
    PhoneFactory
  ]);

export function PhoneFactory($resource) {
      return $resource('/assets/phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }