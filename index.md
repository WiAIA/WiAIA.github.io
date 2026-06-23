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
  primary_link="#"
  primary_data="open-mentor-form"
  secondary_text="Become a Mentor"
  secondary_link="#"
  secondary_data="open-mentor-application-form"
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
      <div class="value-card card">
        <div class="value-icon">
          <i class="fas fa-users"></i>
        </div>
        <h3 class="value-title">Inclusion</h3>
        <p class="value-description">Creating welcoming spaces for all women in tech</p>
      </div>
      <div class="value-card card">
        <div class="value-icon">
          <i class="fas fa-lightbulb"></i>
        </div>
        <h3 class="value-title">Innovation</h3>
        <p class="value-description">Embracing cutting-edge developments in AI</p>
      </div>
      <div class="value-card card">
        <div class="value-icon">
          <i class="fas fa-hand-holding-heart"></i>
        </div>
        <h3 class="value-title">Mentorship</h3>
        <p class="value-description">Power of guidance and professional support</p>
      </div>
      <div class="value-card card">
        <div class="value-icon">
          <i class="fas fa-crown"></i>
        </div>
        <h3 class="value-title">Leadership</h3>
        <p class="value-description">Empowering the next generation of leaders</p>
      </div>
      <div class="value-card card">
        <div class="value-icon">
          <i class="fas fa-network-wired"></i>
        </div>
        <h3 class="value-title">Community</h3>
        <p class="value-description">Building lasting professional connections</p>
      </div>
    </div>
  </div>
</section>

<!-- <section class="impact-stats" aria-labelledby="impact-title">
  <div class="container">
    <h2 id="impact-title" class="visually-hidden">Our Impact</h2>
    <div class="impact-stats__grid">
      {% include impact-stat.html number="500+" label="Community Members" icon="fa-users" %}
      {% include impact-stat.html number="150+" label="Mentor-Mentee Matches" icon="fa-handshake" %}
      {% include impact-stat.html number="50+" label="Events Hosted" icon="fa-calendar-alt" %}
      {% include impact-stat.html number="20+" label="Partner Organizations" icon="fa-building" %}
    </div>
  </div>
</section> -->

<style>
  .impact-stats {
    padding: 4rem 0;
    background: var(--color-bg);
    position: relative;
  }

  .impact-stats::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(var(--color-muted) 1px, transparent 1px);
    background-size: 24px 24px;
    opacity: 0.3;
    pointer-events: none;
  }

  .impact-stats__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    position: relative;
    z-index: 1;
  }

  @media (min-width: 768px) {
    .impact-stats__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .impact-stats__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .impact-stats__item {
    text-align: center;
    background: var(--color-white);
    border: 3px solid var(--color-border);
    border-radius: var(--wobbly-md);
    padding: 2rem;
    box-shadow: 3px 3px 0px 0px var(--color-border);
    transition: all 0.2s ease;
    transform: rotate(-0.5deg);
  }

  .impact-stats__item:hover {
    box-shadow: 5px 5px 0px 0px var(--color-border);
    transform: rotate(-0.3deg) translateY(-2px);
  }

  .impact-stats__icon {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: var(--wobbly-sm);
    margin: 0 auto 1rem;
    display: block;
    border: 2px solid var(--color-border);
  }

  .impact-stats__number {
    font-family: 'Kalam', cursive;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 0.5rem;
  }

  .impact-stats__label {
    font-family: 'Patrick Hand', cursive;
    font-size: 1.125rem;
    color: var(--color-fg);
  }
</style>

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

<!--<section  class="testimonials" aria-labelledby="testimonials-title">
  <div class="container">
    <h2 id="testimonials-title" class="section__title text-center">Success Stories</h2>
    <p class="section__text text-center">Hear from women who have transformed their careers through mentorship</p>

    <div class="testimonials__grid">
      {% include testimonial-card.html
        name="Sarah Chen"
        role="Data Scientist"
        company="Tech Innovations Inc"
        icon="fa-brain"
        quote="My mentor helped me land my dream job in AI. The guidance and support I received were invaluable. I'm now paying it forward by mentoring others."
      %}

      {% include testimonial-card.html
        name="Dr. Maya Rodriguez"
        role="AI Research Lead"
        company="Data Dynamics"
        icon="fa-microscope"
        quote="Being a mentor has been incredibly rewarding. I've helped three women transition into AI careers, and I've learned so much from each of them."
      %}

      {% include testimonial-card.html
        name="Aisha Patel"
        role="Machine Learning Engineer"
        company="Cloud Systems"
        icon="fa-code"
        quote="The community events and workshops helped me build confidence and expand my network. I found my current role through a connection I made here."
      %}
    </div>
  </div>
</section> -->

{% include cta-section.html
  title="Ready to Start Your Journey?"
  description="Join our community of women in AI and analytics. Whether you're looking for a mentor or ready to share your experience, we'd love to have you."
  primary_text="Find a Mentor"
  primary_link="#"
  primary_data="open-mentor-form"
  secondary_text="Become a Mentor"
  secondary_link="#"
  secondary_data="open-mentor-application-form"
%}

<!-- <section class="newsletter-section" aria-labelledby="newsletter-title">
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
</section> -->

<style>
  .section {
    padding: var(--section-padding) 0;
  }

  .text-center {
    text-align: center;
  }

  .section__title {
    font-family: var(--font-display);
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--foreground);
    font-weight: 400;
  }

  .section__text {
    font-family: var(--font-body);
    font-size: 1.125rem;
    color: var(--muted-foreground);
    max-width: 700px;
    margin: 0 auto 2rem;
    line-height: 1.75;
  }

  .values-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
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
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    text-align: center;
    box-shadow: var(--shadow-sm);
    transition: var(--transition-base);
  }

  .value-card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--border-hover);
  }

  .value-icon {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid var(--border);
    background: var(--muted);
  }

  .value-icon i {
    font-size: 2rem;
    color: #cc0000; /* Red color for icons */
  }

  .value-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--foreground);
    font-weight: 500;
  }

  .value-description {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--muted-foreground);
    line-height: 1.6;
  }

  .impact-stats {
    padding: var(--section-padding) 0;
    background: var(--background);
    position: relative;
  }

  .impact-stats__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    position: relative;
    z-index: 2;
  }

  @media (min-width: 768px) {
    .impact-stats__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .impact-stats__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .impact-stats__item {
    text-align: center;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow-sm);
    transition: var(--transition-base);
  }

  .impact-stats__item:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--border-hover);
  }

  .impact-stats__icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    margin: 0 auto 1rem;
    border: 1px solid var(--border);
    background: var(--muted);
  }

  .impact-stats__icon i {
    font-size: 1.75rem;
    color: #cc0000; /* Red color for icons */
  }

  .impact-stats__number {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--accent);
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }

  .impact-stats__label {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--muted-foreground);
  }

  .testimonials {
    padding: var(--section-padding) 0;
    background: var(--background);
    position: relative;
  }

  .testimonials__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    position: relative;
    z-index: 2;
  }

  @media (min-width: 768px) {
    .testimonials__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .testimonials__card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2rem;
    text-align: center;
    box-shadow: var(--shadow-sm);
    transition: var(--transition-base);
  }

  .testimonials__card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--border-hover);
  }

  .testimonials__photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border: 1px solid var(--border);
    background: var(--muted);
  }

  .testimonials__photo i {
    font-size: 2.5rem;
    color: #cc0000; /* Red color for icons */
  }

  .testimonials__quote {
    font-family: var(--font-display);
    font-style: italic;
    color: var(--foreground);
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 1rem;
  }

  .testimonials__author {
    font-family: var(--font-display);
    font-weight: 500;
    color: var(--foreground);
  }

  .testimonials__role {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--muted-foreground);
  }

  .newsletter-section {
    background: var(--background);
    padding: var(--section-padding) 0;
    position: relative;
  }

  .newsletter-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    box-shadow: var(--shadow-md);
    position: relative;
    z-index: 2;
  }

  .newsletter__title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--foreground);
    font-weight: 400;
  }

  .newsletter__text {
    font-family: var(--font-body);
    margin-bottom: 1.5rem;
    color: var(--muted-foreground);
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
    border: 1px solid var(--input);
    border-radius: var(--radius-md);
    font-family: var(--font-body);
    font-size: 1rem;
  }

  .newsletter__input:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px var(--ring);
  }
</style>

{% include mentor-form-modal.html %}
{% include mentor-application-modal.html %}