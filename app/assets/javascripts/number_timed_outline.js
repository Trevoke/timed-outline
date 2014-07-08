function numberTimedOutline() {
}

numberTimedOutline.prototype = {
  start: function start() {
    this.countdownStep(this.orderedSteps()[0]);
    return this;
  },

  countdownStep: function coutdownStep(step) {
    if(typeof step === 'undefined') return;
    var timeInMinutes = parseInt($(step).find('.time .length').text());
    var timeSpan = timeInMinutes * 60;
    var start = Date.now() / 1000;
    var end = start + timeSpan;
    var updateInterval = setInterval(this.displayTimeRemaining.bind(this), 100, step, end);
    setTimeout(function() {
                 clearInterval(updateInterval);
                 var currentStep = parseInt($(step).data('order'));
                 var nextStep = $('.step[data-order="' + (currentStep + 1) + '"]')[0]
                 this.countdownStep($(nextStep));
               }.bind(this), timeSpan * 1000);
  },

  displayTimeRemaining: function displayTimeRemaining(step, end) {
    var now = Date.now() / 1000;
    var timeLeft = end - now;
    var minutes = Math.floor(timeLeft / 60);
    var seconds = Math.floor(timeLeft % 60);
    if(seconds < 10) seconds = "0" + seconds;
    var displayTime = "" + minutes + ":" + seconds;
    $(step).find('.time-countdown').html(displayTime);
  },

  orderedSteps: function orderedSteps() {
    return $('.step').sort(
      function(step1, step2) {
        var num1 = parseInt($(step1).data('order'));
        var num2 = parseInt($(step2).data('order'));
        return num1 - num2;
      });
  }
};