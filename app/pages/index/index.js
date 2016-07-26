'use strict';

var APP = window.APP = window.APP || {};

APP.index = (function(){

    var bindEventsToUI = function() {
        // ...
    };

    var init = function() {
        var $element = $(arguments[0]);
        console.log('APP.index');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
