'use strict';

describe('Directive: cartoDB', function () {

  // load the directive's module
  beforeEach(module('dataPortalApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<carto-d-b></carto-d-b>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cartoDB directive');
  }));
});
