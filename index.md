---
title: "Home"
description: "Empowering the Next Generation of Women in AI & Analytics through mentorship, collaboration, and community"
layout: home
permalink: /
---

{% include hero.html
  title="Empowering the Next Generation of Women in AI & Analytics"
  subtitle="We foster a supportive network where aspiring and established professionals connect, grow, and thrive in their AI and analytics careers through mentorship, collaboration, and knowledge sharing."
  primary_text="Find a Mentor"
  primary_link="/mentorship/"
  secondary_text="Become a Mentor"
  secondary_link="/mentorship/"
%}

<section class="section" aria-labelledby="mission-title">
  <div class="container">
    <div class="text-center">
      <h2 id="mission-title" class="section__title">Our Mission</h2>
      <p class="section__text">
        Elevating women in AI, Data Science, and Analytics through mentorship, collaboration, and knowledge sharing. We create opportunities for skill development, career growth, and leadership in tech and data-driven industries.
      </p>
    </div>

    <div class="values-grid">
      <div class="value-card">
        <div class="value-icon" role="img" aria-label="Inclusion">🤝</div>
        <h3 class="value-title">Inclusion</h3>
        <p class="value-description">Creating welcoming spaces for all women in tech</p>
      </div>
      <div class="value-card">
        <div class="value-icon" role="img" aria-label="Innovation">💡</div>
        <h3 class="value-title">Innovation</h3>
        <p class="value-description">Embracing cutting-edge developments in AI</p>
      </div>
      <div class="value-card">
        <div class="value-icon" role="img" aria-label="Mentorship">🎯</div>
        <h3 class="value-title">Mentorship</h3>
        <p class="value-description">Power of guidance and professional support</p>
      </div>
      <div class="value-card">
        <div class="value-icon" role="img" aria-label="Leadership">👑</div>
        <h3 class="value-title">Leadership</h3>
        <p class="value-description">Empowering the next generation of leaders</p>
      </div>
      <div class="value-card">
        <div class="value-icon" role="img" aria-label="Community">🌟</div>
        <h3 class="value-title">Community</h3>
        <p class="value-description">Building lasting professional connections</p>
      </div>
    </div>
  </div>
</section>

<section class="impact-stats" aria-labelledby="impact-title">
  <div class="container">
    <h2 id="impact-title" class="visually-hidden">Our Impact</h2>
    <div class="impact-stats__grid">
      {% include impact-stat.html number="500+" label="Community Members" icon="👥" %}
      {% include impact-stat.html number="150+" label="Mentor-Mentee Matches" icon="🤝" %}
      {% include impact-stat.html number="50+" label="Events Hosted" icon="🎉" %}
      {% include impact-stat.html number="20+" label="Partner Organizations" icon="🏢" %}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="program-preview-title">
  <div class="container">
    <div class="text-center">
      <h2 id="program-preview-title" class="section__title">Mentorship Program</h2>
      <p class="section__text">
        Our mentorship program connects aspiring professionals with experienced mentors in AI, data science, and analytics. Through structured matching and ongoing support, we help you achieve your career goals.
      </p>
      <a href="/mentorship/" class="btn btn-primary">Learn More About Our Program</a>
    </div>
  </div>
</section>

<section class="testimonials" aria-labelledby="testimonials-title">
  <div class="container">
    <h2 id="testimonials-title" class="section__title text-center">Success Stories</h2>
    <p class="section__text text-center">Hear from women who have transformed their careers through mentorship</p>

    <div class="testimonials__grid">
      {% include testimonial-card.html
        name="Sarah Chen"
        role="Data Scientist"
        company="Tech Innovations Inc"
        image="/assets/images/testimonials/sarah-chen.webp"
        quote="My mentor helped me land my dream job in AI. The guidance and support I received were invaluable. I'm now paying it forward by mentoring others."
      %}

      {% include testimonial-card.html
        name="Dr. Maya Rodriguez"
        role="AI Research Lead"
        company="Data Dynamics"
        image="/assets/images/testimonials/maya-rodriguez.webp"
        quote="Being a mentor has been incredibly rewarding. I've helped three women transition into AI careers, and I've learned so much from each of them."
      %}

      {% include testimonial-card.html
        name="Aisha Patel"
        role="Machine Learning Engineer"
        company="Cloud Systems"
        image="/assets/images/testimonials/aisha-patel.webp"
        quote="The community events and workshops helped me build confidence and expand my network. I found my current role through a connection I made here."
      %}
    </div>
  </div>
</section>

{% include cta-section.html
  title="Ready to Start Your Journey?"
  description="Join our community of women in AI and analytics. Whether you're looking for a mentor or ready to share your experience, we'd love to have you."
  primary_text="Find a Mentor"
  primary_link="/mentorship/"
  secondary_text="Become a Mentor"
  secondary_link="/mentorship/"
%}

<section class="newsletter-section" aria-labelledby="newsletter-title">
  <div class="container">
    <div class="newsletter-card">
      <h2 id="newsletter-title" class="newsletter__title">Stay Connected</h2>
      <p class="newsletter__text">Get the latest news, events, and opportunities delivered to your inbox</p>
      <form class="newsletter__form" action="#" method="POST">
        <label for="newsletter-email" class="visually-hidden">Email address</label>
        <input
          type="email"
          id="newsletter-email"
          name="email"
          placeholder="Enter your email"
          required
          class="newsletter__input"
        >
        <button type="submit" class="btn btn-primary">Subscribe</button>
      </form>
    </div>
  </div>
</section>

<style>
  .section {
    padding: 4rem 0;
  }

  .text-center {
    text-align: center;
  }

  .section__title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #0F172A;
  }

  .section__text {
    font-size: 1.125rem;
    color: #64748b;
    max-width: 700px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }

  .values-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .values-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .values-grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .value-card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
  }

  .value-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .value-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .value-title {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
    color: #0F172A;
  }

  .value-description {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.4;
  }

  .newsletter-section {
    background: #F8FAFC;
    padding: 3rem 0;
  }

  .newsletter-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .newsletter__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #0F172A;
  }

  .newsletter__text {
    margin-bottom: 1.5rem;
    color: #64748b;
  }

  .newsletter__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 640px) {
    .newsletter__form {
      flex-direction: row;
    }
  }

  .newsletter__input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid #E2E8F0;
    border-radius: 4px;
    font-size: 1rem;
  }

  .newsletter__input:focus {
    outline: 2px solid #7C3AED;
    outline-offset: 2px;
  }
</style>