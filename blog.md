---
title: "Blog"
layout: page
description: "Insights and stories from women in AI and analytics"
permalink: /blog/
---

<section class="blog-header section-large" aria-labelledby="blog-title">
  <div class="container">
    <div class="text-center">
      <h1 id="blog-title" class="blog__title">Insights & Stories</h1>
      <p class="blog__subtitle">
        Perspectives from women shaping the future of AI, analytics, and data science.
        Explore ideas, experiences, and innovations from our community.
      </p>
    </div>
  </div>
</section>

<section class="blog-posts section-large">
  <div class="container">
    <div class="blog__grid">
      {% for post in site.posts %}
        <article class="blog-card card">
          <div class="blog-card__image">
            {% if post.image %}
              <img src="{{ post.image }}" alt="{{ post.title }}" class="blog-card__img" loading="lazy">
            {% else %}
              <div class="blog-card__placeholder">
                <span class="blog-card__placeholder-text">{{ post.date | date: "%b %d" }}</span>
              </div>
            {% endif %}
          </div>
          <div class="blog-card__content">
            <div class="blog-card__meta">
              <time datetime="{{ post.date }}" class="small-caps">{{ post.date | date: "%B %d, %Y" }}</time>
              {% if post.category %}
                <span class="blog-card__category">{{ post.category }}</span>
              {% endif %}
            </div>
            <h2 class="blog-card__title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h2>
            <p class="blog-card__excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
            <div class="blog-card__author">
              {% if post.author %}
                <span class="blog-card__author-name">{{ post.author }}</span>
              {% endif %}
            </div>
          </div>
        </article>
      {% endfor %}
    </div>
  </div>
</section>

<style>
  .blog-header {
    background: var(--background);
    text-align: center;
  }

  .blog__title {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 400;
    color: var(--foreground);
    margin-bottom: 1.5rem;
    letter-spacing: -0.01em;
  }

  .blog__subtitle {
    font-family: var(--font-body);
    font-size: 1.25rem;
    color: var(--muted-foreground);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.75;
  }

  .blog-posts {
    background: var(--background);
  }

  .blog__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .blog__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .blog__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .blog-card {
    display: flex;
    flex-direction: column;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: var(--transition-base);
  }

  .blog-card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--border-hover);
    transform: translateY(-2px);
  }

  .blog-card__image {
    aspect-ratio: 16/9;
    overflow: hidden;
    background: var(--muted);
    position: relative;
  }

  .blog-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-base);
  }

  .blog-card:hover .blog-card__img {
    transform: scale(1.05);
  }

  .blog-card__placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%);
  }

  .blog-card__placeholder-text {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 400;
    color: var(--card);
    opacity: 0.9;
  }

  .blog-card__content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .blog-card__meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.75rem;
  }

  .blog-card__category {
    color: var(--accent);
    font-weight: 500;
    font-family: var(--font-body);
  }

  .blog-card__title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .blog-card__title a {
    color: var(--foreground);
    text-decoration: none;
    transition: var(--transition-base);
  }

  .blog-card__title a:hover {
    color: var(--accent);
  }

  .blog-card__excerpt {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--muted-foreground);
    line-height: 1.6;
    margin-bottom: 1rem;
    flex: 1;
  }

  .blog-card__author {
    padding-top: 1rem;
    border-top: 1px solid var(--border);
    font-size: 0.875rem;
  }

  .blog-card__author-name {
    color: var(--foreground);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .blog__title {
      font-size: 2rem;
    }
  }
</style>
