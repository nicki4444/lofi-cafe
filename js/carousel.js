// Wait for the DOM to load before running Flickity
document.addEventListener('DOMContentLoaded', function () {
  
  // Initialize Flickity on the mini carousel
  var carousel = document.querySelector('.mini-carousel');
  
  if (carousel) {
    var flkty = new Flickity(carousel, {
      cellAlign: 'center',        // Center cells in the carousel
      contain: true,              // Keep cells within the container
      groupCells: true,            // Group smaller cells together
      wrapAround: true,            // Infinite loop scrolling
      pageDots: false,             // No pagination dots
      prevNextButtons: true,       // Show prev/next arrows
      draggable: true,             // Enable dragging/swiping
      imagesLoaded: true,          // Wait for <img> tags to load
      autoPlay: 2300,               // Autoplay every 2.3s
      pauseAutoPlayOnHover: false   // Keep autoplay running even on hover
    });
  }

});
