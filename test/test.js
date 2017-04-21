(function($) {
  module('demo-qunit.js');
  test('$.demoQunit', function () {
    ok($.demoQunit(9) === false, '9 is false');
    ok($.demoQunit(10) === false, '10 is false');
    ok($.demoQunit(11) === true, '10 is true');
  });
}(jQuery));
