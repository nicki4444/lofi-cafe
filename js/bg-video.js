// Wait until the DOM has fully loaded before running
$(document).ready(function () {

  // Target any element with the class "bg-video" and initialize bgVideo plugin
  $(".bg-video").bgVideo({
    fadeIn: 500,         // Video fades in over 0.5 seconds
    pauseAfter: 0,       // Dont pause automatically
    showPausePlay: false // Hide the pause/play control overlay on the video
  });

});
