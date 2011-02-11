(function($) {

  jQuery.fn.persistedtoggle = function(keyCombo, initialState, onShow, onHide) {

    var elements = this;
    var showIt = function() {
      $.cookie(keyCombo, "shown");
      if (onShow)
        onShow();
      elements.show();
    }
    var hideIt = function() {
      $.cookie(keyCombo, "hidden");
      if (onHide)
        onHide();
      elements.hide();
    }
    var toggleIt = function() {
      if ($.cookie(keyCombo) == "shown")
        hideIt();
      else
        showIt();
    }
    var bootstrap = function() {
      if (! initialState)
        initialState = "hidden";

      if ($.cookie(keyCombo) == "shown" || (!$.cookie(keyCombo) && initialState == "shown") )
        showIt();
      else
        hideIt();
    }

    $(document.documentElement).jkey(keyCombo, toggleIt);
    bootstrap();

    // to maintain chainability
    return this;
  };
})(jQuery);
