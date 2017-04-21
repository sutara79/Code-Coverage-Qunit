/**
 * @file demo-qunit
 * @version 0.0.1
 */
(function($) {
  $.demoQunit = function(arg) {
    if (arg > 10) {
      return true;
    } else {
      return false;
    }
  };
})(jQuery);