# Content Editing Guide

Welcome to the Women in AI & Analytics Mentoring website content editing guide! This document is designed to help volunteers maintain and update our nonprofit website with confidence. Whether you're a technical expert or just getting started with web content, this guide will walk you through everything you need to know to keep our site fresh and engaging.

## Prerequisites

Before you start editing content, make sure you have:

### Required
- **GitHub Account**: A free GitHub account is required to make contributions
- **Access Permissions**: Ask an admin to add you as a collaborator to the WIAIA repository
- **Basic Computer Skills**: Comfort with text editing and following instructions

### Recommended
- **Web Browser**: Modern browser (Chrome, Firefox, Safari, or Edge)
- **Email Access**: For receiving GitHub notifications
- **Basic Understanding**: Familiarity with how websites work (optional)

## Table of Contents

1. [Understanding the Structure](#understanding-the-structure)
2. [Markdown Basics](#markdown-basics)
3. [Editing Pages](#editing-pages)
4. [Working with Images](#working-with-images)
5. [Using Components](#using-components)
6. [Git Workflow](#git-workflow)
7. [Testing Changes](#testing-changes)
8. [Common Tasks](#common-tasks)
9. [Best Practices](#best-practices)
10. [Getting Help](#getting-help)
11. [Quick Reference](#quick-reference)

---

## Understanding the Structure

### File Organization

The Women in AI & Analytics Mentoring website is built using Jekyll, a static site generator. Here's how the key files and folders are organized:

```
wiaia/
├── _config.yml          # Main configuration file
├── _data/               # Site data (stats, team members, FAQs)
├── _includes/           # Reusable components (navigation, footer, etc.)
├── _layouts/            # Page templates
├── assets/              # Images, CSS, and JavaScript
│   ├── images/          # Website images
│   └── css/             # Custom stylesheets
├── _pages/              # Individual pages (markdown files)
│   ├── about.md
│   ├── programs.md
│   ├── resources.md
│   └── contact.md
└── index.md             # Homepage
```

### Front Matter

Every page in our site uses YAML front matter at the very top. This is crucial for Jekyll to understand the page structure.

**Example Front Matter:**
```yaml
---
layout: default
title: "About Us"
description: "Learn more about Women in AI & Analytics Mentoring and our mission to support women in tech."
permalink: /about/
---

# Your page content starts here...
```

**⚠️ Important Warning:** Never remove the `---` lines that wrap the front matter. Doing so will break the page!

---

## Markdown Basics

### Text Formatting

| Feature | Syntax | Example | Output |
|---------|--------|---------|--------|
| Headings | `#` (1-6 levels) | `# Main Title` | # Main Title |
| Bold | `**text**` | `**Important**` | **Important** |
| Italic | `*text*` | `*Emphasis*` | *Emphasis* |
| Links | `[text](url)` | `[Visit Google](https://google.com)` | [Visit Google](https://google.com) |
| Images | `![alt](path)` | `![Logo](/assets/images/logo.png)` | ![Logo](/assets/images/logo.png) |

### Lists

**Bullet Lists:**
```markdown
- First item
- Second item
  - Sub-item
  - Another sub-item
- Third item
```

**Numbered Lists:**
```markdown
1. First step
2. Second step
3. Third step
```

### Code Blocks

**Inline Code:** Surround text with backticks like `this`

**Code Blocks:**
```markdown
```python
def hello_world():
    print("Hello, World!")
```
```

---

## Editing Pages

Follow this 5-step process for safely editing any page on the website:

### Step 1: Choose Your Editor

**For Non-Technical Users:**
- **GitHub.com**: Easiest option - edit directly in your browser
- **TextEdit** (Mac): Simple text editor
- **Notepad** (Windows): Basic text editor

**For Technical Users:**
- **VS Code**: Highly recommended with Markdown preview
- **Sublime Text**: Lightweight and fast
- **Vim**: For command-line enthusiasts

### Step 2: Open the File

Find the file you want to edit in the file structure:
- Homepage: `index.md`
- About page: `_pages/about.md`
- Programs: `_pages/programs.md`
- Resources: `_pages/resources.md`
- Contact: `_pages/contact.md`

### Step 3: Make Your Changes

1. Edit the text content
2. Keep formatting consistent with existing content
3. Check that headings use the proper `#` syntax
4. Ensure links work correctly
5. Update any dates or statistics

### Step 4: Save the File

- **GitHub.com**: Click "Commit changes" button
- **Text Editors**: Save/Ctrl+S (Cmd+S on Mac)
- **Remember:** Always save with a `.md` extension

### Step 5: Test Your Changes

**Option A: GitHub Preview (Easiest)**
- GitHub automatically shows a preview of your changes in the editor
- No technical setup required
- Scroll down to see "Preview" tab when editing files

**Option B: Local Testing (For Technical Users)**

Before making changes live, test them locally using Jekyll:

---

## Working with Images

### Adding Images

**Step 1: Place the Image**
- Save your image in the `assets/images/` folder
- Use descriptive, lowercase filenames with hyphens
- Example: `team-photo-2024.jpg`

**Step 2: Add to Page**
```markdown
![Team photo from 2024](/assets/images/team-photo-2024.jpg)
```

### Image Guidelines

- **Format**: Use JPG, PNG, or SVG
- **Size**: Keep under 1MB for faster loading
- **Alt Text**: Always provide descriptive alt text
- **Naming**: Use lowercase, hyphenated names
- **Dimensions**: Aim for consistent sizes across similar images

---

## Using Components

Our site uses reusable components for consistency. Here are the most common ones:

### Hero Section Example

```markdown
{% include hero.html
  title="Welcome to Our Program"
  subtitle="Join us on our journey to empower women in AI and analytics"
  image="/assets/images/hero-image.jpg"
  button_text="Learn More"
  button_url="/programs/"
%}
```

### CTA Section Example

```markdown
{% include cta.html
  title="Ready to Get Started?"
  description="Join our community of mentors and mentees today."
  button_text="Join Us"
  button_url="/contact/"
%}
```

### Testimonial Card Example

```markdown
{% include testimonial.html
  quote="This program changed my career path completely!"
  author="Jane Smith"
  role="Data Scientist"
  company="Tech Corp"
%}
```

---

## Git Workflow

### For Non-Technical Users (Using GitHub.com)

1. **Go to GitHub.com** and log in
2. **Navigate** to the WIAIA repository: [https://github.com/thewiaia/wiaia](https://github.com/thewiaia/wiaia)
3. **Click** on the file you want to edit
4. **Click** the pencil icon to edit
5. **Make your changes** in the editor
6. **Write a commit message** describing your changes
7. **Click** "Commit changes" button
8. **Click** "Open pull request" to submit your changes

### For Technical Users (Using Command Line)

```bash
# Clone the repository (if not already done)
git clone https://github.com/thewiaia/wiaia.git

# Navigate to the project directory
cd wiaia

# Create a new branch for your changes
git checkout -b feature/update-content

# Make your changes to files
# Edit the markdown files as needed

# Stage your changes
git add docs/content-guide.md

# Commit your changes
git commit -m "docs: update content with new information"

# Push to GitHub
git push origin feature/update-content

# Create a pull request on GitHub
```

---

## Testing Changes

### Local Testing

1. **Install Jekyll** (if not already installed):
   ```bash
   gem install jekyll bundler
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Serve the site locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View in browser**: Go to `http://localhost:4000`

5. **Stop the server**: Press `Ctrl+C` in the terminal

### What to Check

- [ ] All text appears correctly
- [ ] Images load properly
- [ ] Links work as expected
- [ ] Mobile responsive layout
- [ ] No broken images or missing files
- [ ] Formatting is consistent

---

## Common Tasks

### Update Impact Statistics

**Location**: `_data/stats.yml`

**Example Update:**
```yaml
alumni: 125
mentors: 45
partners: 12
countries: 8
```

### Add Testimonial

**Location**: `_data/testimonials.yml`

**Example Addition:**
```yaml
- name: "Sarah Johnson"
  role: "AI Engineer"
  company: "Future Tech"
  quote: "The mentorship I received here was invaluable to my career growth."
```

### Update Team Member

**Location**: `_data/team.yml`

**Example Update:**
```yaml
- name: "Dr. Emily Chen"
  role: "Lead Mentor"
  bio: "PhD in Machine Learning with 10+ years industry experience"
  image: "/assets/images/team/emily.jpg"
```

### Add FAQ Item

**Location**: `_data/faqs.yml`

**Example Addition:**
```yaml
- question: "How long is the mentorship program?"
  answer: "Our programs typically run for 6 months, with flexible options available."
```

---

## Best Practices

### Content Guidelines

- **Be consistent** with existing tone and style
- **Keep paragraphs short** (2-4 sentences) for web readability
- **Use clear headings** to help users scan content
- **Include relevant keywords** for SEO
- **Update dates** regularly for time-sensitive information

### SEO Tips

- Use descriptive page titles and meta descriptions
- Include relevant keywords naturally in content
- Use alt text for all images
- Create descriptive URL slugs
- Ensure mobile-friendly formatting

### Accessibility

- Use descriptive alt text for all images
- Ensure sufficient color contrast
- Use semantic HTML structure
- Make content keyboard navigable
- Provide transcripts for video content

---

## Getting Help

### Common Issues

**Problem: Page shows 404 error**
- **Solution**: Check that the file is in the correct location with the right name
- **Solution**: Verify the permalink in the front matter matches the URL

**Problem: Images not loading**
- **Solution**: Ensure image is in `/assets/images/` folder
- **Solution**: Check image path in markdown starts with `/assets/images/`

**Problem: Formatting looks wrong**
- **Solution**: Verify markdown syntax is correct
- **Solution**: Check for unclosed code blocks or lists

### Support Channels

1. **GitHub Issues**: Report bugs or request help through GitHub
   - Create an issue in the WIAIA repository with clear descriptions
   - Screenshots help us understand your issue quickly

2. **Email**: wiaia@proton.me for general questions
   - Include "Content Editing Question" in the subject line
   - Allow 24-48 hours for response

3. **Discord**: Join our community Discord for real-time help
   - To join: Contact an admin for an invite link
   - We have dedicated channels for content editing questions

---

## Quick Reference

### Markdown Cheatsheet

| Feature | Syntax | Example |
|---------|--------|---------|
| Heading | `# Text` | `# Hello` |
| Bold | `**text**` | `**bold**` |
| Italic | `*text*` | `*italic*` |
| Link | `[text](url)` | `[link](https://example.com)` |
| Image | `![alt](path)` | `![logo](/img/logo.png)` |
| List | `- item` | `- Item 1` |
| Code | ` ```code` | ` ```python` |

### Component Quick Reference

| Component | Usage | Example |
|-----------|-------|---------|
| Hero | Main page banner | `{% include hero.html %}` |
| CTA | Call-to-action section | `{% include cta.html %}` |
| Testimonial | Feature quotes | `{% include testimonial.html %}` |
| Stats | Impact statistics | `{% include stats.html %}` |

---

*Last Updated: May 29, 2026*
*For questions about this guide, email wiaia@proton.me*