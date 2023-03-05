$(document).ready(function () {
  $("js--section-features").waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addclass("sticky");
    } else {
      $("nav").removeclass("sticky");
    }
  }, 

  /*
  var waypoint = new Waypoint({
  element: document.getElementById('direction-waypoint'),
  handler: function(direction) {
    notify('Direction: ' + direction)
  }
})
  */
});
