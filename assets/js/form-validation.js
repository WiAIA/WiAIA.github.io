document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = form.querySelector('.btn.btn-primary');

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

    // Validate form
    if (validateForm()) {
      // Submit form - Formspree will handle AJAX events
      submitBtn.disabled = true;
    }
  });

  // Formspree AJAX event handlers
  form.addEventListener('ajax:complete', function(e) {
    if (e.detail.success) {
      // Success
      formStatus.className = 'form-status success';
      formStatus.textContent = 'Thank you for your message! We\'ll get back to you soon.';
      formStatus.style.display = 'block';
    } else {
      // Error
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Oops! There was an error sending your message. Please try again.';
      formStatus.style.display = 'block';
    }
  });

  form.addEventListener('ajax:error', function(e) {
    // Error
    formStatus.className = 'form-status error';
    formStatus.textContent = 'Oops! There was an error sending your message. Please try again.';
    formStatus.style.display = 'block';
  });

  // Form validation function
  function validateForm() {
    let isValid = true;

  
    // Validate name
    const name = document.getElementById('name');
    if (!name.value.trim()) {
      isValid = false;
    }

    // Validate email
    const email = document.getElementById('email');
    if (!email.value.trim()) {
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      isValid = false;
    }

    // Validate subject
    const subject = document.getElementById('subject');
    if (!subject.value) {
      isValid = false;
    }

    // Validate message
    const message = document.getElementById('message');
    if (!message.value.trim()) {
      isValid = false;
    }

    return isValid;
  }


  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

});