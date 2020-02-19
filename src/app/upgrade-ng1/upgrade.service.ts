
export const $resourceProvider = {
  provide: '$resource',
  useFactory: i => i.get('$resource'),
  deps: ['$injector']
};

export const $routeParamsProvider = {
  provide: '$routeParams',
  useFactory: i => i.get('$routeParams'),
  deps: ['$injector']
};

export const phoneServiceProvider = {
  provide: 'Phone',
  useFactory: i => i.get('Phone'),
  deps: ['$injector']
};