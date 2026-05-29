document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = form.querySelector('.submit-btn');

  // Auto-populate subject from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const subjectParam = urlParams.get('subject');
  if (subjectParam) {
    const subjectSelect = document.getElementById('subject');
    subjectSelect.value = subjectParam;
  }

  // Form submission handler
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous status
    formStatus.className = 'form-status';
    formStatus.style.display = 'none';

    // Validate form
    if (validateForm()) {
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Submit form
      const formData = new FormData(form);

      // Send form using fetch
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        // Success
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you for your message! We\'ll get back to you soon.';
        formStatus.style.display = 'block';

        // Reset form
        form.reset();

        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';

        // Scroll to success message
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      })
      .catch(error => {
        // Error
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Oops! There was an error sending your message. Please try again.';
        formStatus.style.display = 'block';

        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';

        // Scroll to error message
        formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  });

  // Form validation function
  function validateForm() {
    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Validate name
    const name = document.getElementById('name');
    if (!name.value.trim()) {
      showError(name, 'Name is required');
      isValid = false;
    }

    // Validate email
    const email = document.getElementById('email');
    if (!email.value.trim()) {
      showError(email, 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError(email, 'Please enter a valid email address');
      isValid = false;
    }

    // Validate subject
    const subject = document.getElementById('subject');
    if (!subject.value) {
      showError(subject, 'Please select a subject');
      isValid = false;
    }

    // Validate message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
      showError(message, 'Message is required');
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, 'Message must be at least 10 characters long');
      isValid = false;
    }

    return isValid;
  }

  // Show error for a field
  function showError(field, message) {
    const formGroup = field.closest('.form-group');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#721c24';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;

    formGroup.appendChild(errorDiv);
    field.style.borderColor = '#dc3545';
    field.focus();
  }

  // Clear all error messages
  function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());

    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
      const input = group.querySelector('input, select, textarea');
      if (input) {
        input.style.borderColor = '#ddd';
      }
    });
  }

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Real-time validation on input
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.hasAttribute('required') || this.value) {
        if (this.type === 'email' && this.value) {
          if (!isValidEmail(this.value)) {
            showError(this, 'Please enter a valid email address');
          }
        } else if (this.id === 'message' && this.value && this.value.trim().length < 10) {
          showError(this, 'Message must be at least 10 characters long');
        }
      }
    });

    input.addEventListener('input', function() {
      if (this.style.borderColor === 'rgb(220, 53, 69)') {
        const formGroup = this.closest('.form-group');
        const error = formGroup.querySelector('.error-message');
        if (error) {
          error.remove();
        }
        this.style.borderColor = '#ddd';
      }
    });
  });
});