/**
 * @file Unit Testing using QUnit 1.x
 */
(function($) {
  module('demo-qunit.js');
  test('$.demoQunit', 3, function () {
    ok($.demoQunit(9) === false, '9 is false');
    ok($.demoQunit(10) === false, '10 is false');
    ok($.demoQunit(11) === true, '11 is true');
  });
}(jQuery));
