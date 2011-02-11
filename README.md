# jquery.persistedtoggle.js

Toggle the visibility of elements in a page using keyboard shortcuts, persisting the visibility state across requests.

## Examples

### Set elements to toggle on 'ctrl+a', default state hidden

    $(".admin_controls").jtoggle('ctrl+a', 'hidden');

## Set elements to toggle on 't', default state shown

    $(".search_results).jtoggle('t', 'shown');

## Using the onShow and onHide callbacks

    $(".form_error, .field_error").jtoggle('ctrl+e', 'hidden',
      function() {
        $('.field_error').next("input").addClass("error");
      },
      function() {
        $('.field_error').next("input").removeClass("error");
      }
    );

Dependencies
============

* [jQuery](http://jquery.com/)
* [jquery.cookie.js](http://plugins.jquery.com/project/Cookie)
* [jquery.jkey.js](http://oscargodson.com/labs/jkey/)

Author
======

* Jason Porritt (jason.porritt@atomicobject.com)
* © 2011 [Atomic Object](http://www.atomicobject.com/)
* More Atomic Object [open source](http://www.atomicobject.com/pages/Software+Commons) projects
