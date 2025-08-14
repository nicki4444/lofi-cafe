// Wait until DOM is ready
$(function () {

    // Custom form submission handling after validation passes
    $('#requestForm').on('submit', function (event) {
  
      // If the form is not valid, stop here
      if (!$(this).valid()) return;
  
      event.preventDefault();            // Prevent reloading on submit
      $('#thankyou-modal').modal();      // Open the Thank You modal
      this.reset();                      // Reset the form fields
  
    });
  
  });
  