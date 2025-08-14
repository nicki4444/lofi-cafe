// Wait until the DOM has loaded before running
document.addEventListener('DOMContentLoaded', function () {
  
  // Initialize AOS library
  AOS.init({
    duration: 1500,   // Animation lasts 1.5 seconds (smooth but still snappy)
    easing: 'ease-out', // Decelerates at the end for natural feel
    once: true,       // Animation only runs the first time an element enters the viewport
    offset: 60        // Trigger animation 60px before the element enters the viewport
  });

});
