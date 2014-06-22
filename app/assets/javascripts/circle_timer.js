function circleTimer() {
  this.angle = this.degToRad(-90);
  this.totalTime = this.findTotalTime() * 60 * 1000;
}

circleTimer.prototype = {
  degToRad: function degToRad(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
  },

  findTotalTime: function findTotalTime() {
    var time = 0;
    $('.time .length').each(function(idx, el) {
      time += parseInt(el.innerHTML);
    });
    return time;
  },

  start: function start() {
    var endTime = Date.now() + this.totalTime;
    this.transitionCircleTimer(endTime, this.angle);
  },

  transitionCircleTimer: function transitionCircleTimer(endTime, angle) {
    this.fillCircleSlice();
    var updateInterval = setInterval(this.fillCircleSlice.bind(this), this.totalTime / 180);
    setTimeout(function() { clearInterval(updateInterval) }, this.totalTime);
  },

  fillCircleSlice: function fillCircleSlice() {
    var increment = 2;
    var center = 50;
    var radius = 35;
    this.angle = this.angle - this.degToRad(increment);
    var newX = center + radius * Math.cos(this.angle);
    var newY = center + radius * Math.sin(this.angle);
    var path = "<path d='M50, 50 L" + newX + "," + newY + "z'";
    path = path + ' stroke="#0091ff" fill="#0091ff"';
    path = path + " />";
    $('.clock svg').append(path);
    $('.clock').html($('.clock').html());
  }

};