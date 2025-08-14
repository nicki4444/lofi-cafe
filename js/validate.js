// Run code when DOM is ready
$(function () {

  // Initialize jQuery validation plugin with ID 'requestForm'
  $('#requestForm').validate({

    // Validation rules for each input field
    rules: {
      name: { 
        required: true,   // Field must be filled out
        minlength: 2      // Must be at least 2 characters long
      },
      email: { 
        required: true,   // Field must be filled out
        email: true       // Must match email format
      },
      mood: { 
        required: true    // A mood must be selected from the dropdown
      },
      message: { 
        required: true,   // Field must be filled out
        minlength: 5      // Must be at least 5 characters long
      }
    },

    // Custom error messages for each field
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email",
      mood: "Please select a mood",
      message: "Tell us a bit more about your request"
    }

  });

});
