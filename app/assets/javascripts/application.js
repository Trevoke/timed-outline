// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function setNewGradient(step, start, end) {
    var now = Date.now() / 1000;
    var percentage = ((now - start) / (end - start)) * 100;
    var gradient = "-webkit-linear-gradient(top, #199dff " + percentage + "%, #151515 " + percentage + "%)";

    $(step).find('.transitionable').css(
        {
            'background': gradient,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
        }
    );
    return percentage;
}

function transitionStep(step) {
    if(typeof step === undefined) return;
    var step = $(step);
    var timeSpan = parseInt($(step).find('.time .number').text()) * 60;
    var start = Date.now() / 1000;
    var end = start + timeSpan;
    var updateInterval = setInterval(setNewGradient, 100, step, start, end);
    return updateInterval;
}
