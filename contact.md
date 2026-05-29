---
title: "Contact Us"
description: "Get in touch with Women in AI & Analytics Mentoring for mentorship inquiries, partnerships, and general questions"
layout: page
permalink: /contact/
---

## Get in Touch

Welcome to Women in AI & Analytics Mentoring! We're passionate about connecting women with mentors in the AI and analytics fields. Whether you're looking for guidance, want to share your expertise, or interested in partnership opportunities, we'd love to hear from you.

<div class="contact-grid">
  <div class="contact-form">
    <!-- Replace YOUR_FORM_ID with actual Formspree form ID before deployment -->
    <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <div class="form-group">
        <label for="name">Name *</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-group">
        <label for="subject">Subject *</label>
        <select id="subject" name="subject" required>
          <option value="">Select a subject</option>
          <option value="Mentor Application">Mentor Application</option>
          <option value="Mentee Application">Mentee Application</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Partnership">Partnership</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Event">Event</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">Message *</label>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>

      <div class="form-group">
        <label class="checkbox-label">
          <input type="checkbox" id="newsletter" name="newsletter">
          <span>Subscribe to our newsletter for updates and resources</span>
        </label>
      </div>

      <button type="submit" class="btn btn-primary">Send Message</button>
      <div class="form-status" id="form-status" role="alert" aria-live="polite"></div>
    </form>
  </div>

  <div class="contact-info-section">
    <div class="contact-info-card">
      <h3>Email Us</h3>
      <p>hello@wiaia.org</p>
      <p>We typically respond within 24-48 business hours</p>
    </div>

    <div class="contact-info-card">
      <h3>Connect With Us</h3>
      <div class="social-links">
        <a href="https://linkedin.com/company/women-in-ai-analytics-mentoring" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://twitter.com/womeninaianalytics" target="_blank" rel="noopener">Twitter</a>
        <a href="https://instagram.com/womeninaianalytics" target="_blank" rel="noopener">Instagram</a>
        <a href="https://github.com/womeninaianalytics" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>

    <div class="contact-info-card">
      <h3>Volunteer With Us</h3>
      <p>Share your expertise and make a difference! Join our network of mentors who are helping advance women in AI and analytics.</p>
      <a href="/mentorship/">Learn About Volunteering</a>
    </div>

    <div class="contact-info-card">
      <h3>Partner With Us</h3>
      <p>Partner with us to create opportunities for women in AI and analytics. We welcome collaborations with organizations, universities, and industry leaders.</p>
      <a href="/about/partnerships">Partnership Opportunities</a>
    </div>
  </div>
</div>

<script src="/assets/js/form-validation.js"></script>

<style>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.contact-form {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-info-card {
  background: var(--bg-card);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.contact-info-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  margin-top: 0.25rem;
}

.btn.btn-primary {
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn.btn-primary:hover {
  background-color: #c0392b;
}

.btn.btn-primary:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.form-status {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 4px;
  display: none;
}

.form-status.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  display: block;
}

.form-status.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  display: block;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-links a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #c0392b;
}

</style>