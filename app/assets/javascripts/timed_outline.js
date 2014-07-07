function timedOutline() {
}

timedOutline.prototype = {
  start: function start() {
    this.transitionStep(this.orderedSteps()[0]);
    return this;
  },

  transitionStep: function transitionStep(step) {
    if(typeof step === 'undefined') return;
    var timeSpan = parseInt($(step).find('.time .length').text()) * 60;
    var start = Date.now() / 1000;
    var end = start + timeSpan;
    var updateInterval = setInterval(this.setNewGradient, 100, step, start, end);
    setTimeout(function() {
      clearInterval(updateInterval);
      var currentStep = parseInt($(step).find('.number').text());
      var nextStep = $('.step .number:contains(' + (currentStep + 1) + ')')[0];
      this.transitionStep($(nextStep).parent('.step'));
    }, timeSpan * 1000);
  },

  setNewGradient: function setNewGradient(step, start, end) {
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
  },

  orderedSteps: function orderedSteps() {
    return $('.step').sort(
      function(a, b) {
        var num1 = $(a).find('.number').text();
        var num2 = $(b).find('.number').text();
        return num1 - num2;
      });
  }
};
