(function($) {

  var canSetCookies = false;
  $.cookie('test', 'true');
  if ($.cookie('test'))
    canSetCookies = true;

  jQuery.fn.persistedtoggle = function(keyCombo, options) {

    if (! keyCombo) {
      $.error("You must specify a key combination to bind the toggle to");
    }

    var settings = {
      'onShow'       : null,
      'onHide'       : null,
      'initialState' : "hidden"
    };
    if (options) {
      $.extend(settings, options);
    }
      
    var elements = this;
    var showIt = function() {
      $.cookie(keyCombo, "shown");
      if (settings['onShow'])
        settings['onShow'](elements);
      elements.show();
    }
    var hideIt = function() {
      $.cookie(keyCombo, "hidden");
      if (settings['onHide'])
        settings['onHide'](elements);
      elements.hide();
    }
    var toggleIt = function() {
      if ((!canSetCookies && elements.is(':visible')) || $.cookie(keyCombo) == "shown")
        hideIt();
      else
        showIt();
    }
    var bootstrap = function() {
      $(document.documentElement).jkey(keyCombo, toggleIt);
      if ($.cookie(keyCombo) == "shown" || (!$.cookie(keyCombo) && settings['initialState'] == "shown") )
        showIt();
      else
        hideIt();
    }

    bootstrap();

    // to maintain chainability
    return this;
  };
})(jQuery);
