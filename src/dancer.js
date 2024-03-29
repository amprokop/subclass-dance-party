var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"> <img src="danny-glover.jpg" alt="Danny" height="400" width = "400"> </span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function () {
  var instance = this;
  setTimeout(function(){ instance.step(); }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};