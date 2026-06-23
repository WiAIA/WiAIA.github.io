# Women in AI & Analytics Mentoring Website

Modern, accessible nonprofit website for Women in AI & Analytics Mentoring community.

## 🌟 About

This website serves as the digital home for Women in AI & Analytics Mentoring, a nonprofit community dedicated to empowering women in Artificial Intelligence, Data Science, Machine Learning, and Analytics through mentorship, collaboration, and knowledge sharing.

## ✨ Features

- **Modern Design:** Clean, professional aesthetic with AI-inspired visual elements
- **Fully Responsive:** Mobile-first design that works on all devices
- **Accessible:** WCAG AA compliant with screen reader support
- **Fast:** Optimized performance with <3s load times
- **Easy Updates:** Markdown-based content management for volunteers
- **SEO Friendly:** Proper meta tags and semantic HTML structure

## 🛠️ Technology Stack

- **Static Site Generator:** Jekyll 4.3+
- **Theme:** Custom design with Jekyll Serif Theme components
- **Hosting:** GitHub Pages
- **Styling:** SCSS with custom design system
- **JavaScript:** Minimal, focused on form validation
- **Fonts:** Google Fonts (Inter, Merriweather)

## 📁 Project Structure

```
wiaia/
├── _config.yml          # Site configuration
├── index.md             # Home page
├── about.md             # About page
├── mentorship.md        # Mentorship page
├── contact.md           # Contact page
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _sass/               # Custom styles
├── assets/              # Images and static files
├── docs/                # Documentation
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Ruby 3.0+
- Bundler
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/wiaia/wiaia.github.io.git
cd wiaia.github.io
```

2. **Install dependencies**
```bash
bundle install
```

3. **Start local server**
```bash
bundle exec jekyll serve
```

4. **Open in browser**
Navigate to `http://localhost:4000`

## 📝 Content Management

All page content is managed through Markdown files for easy editing by non-technical volunteers.

### Editing Pages
1. Open the `.md` file for the page you want to edit
2. Edit content below the front matter
3. Save the file
4. Test locally: `bundle exec jekyll serve`
5. Commit and push changes

For detailed instructions, see [docs/content-guide.md](docs/content-guide.md)

### Adding Images
Place images in `assets/images/` organized by category:
- `hero/` - Full-width page headers
- `team/` - Team member photos
- `testimonials/` - Success story photos
- `events/` - Event and workshop images

See [docs/images-guide.md](docs/images-guide.md) for detailed image management.

## 🔧 Development

### Build for Production
```bash
bundle exec jekyll build
```

### Watch for Changes
```bash
bundle exec jekyll serve --watch
```

### Draft Posts
```bash
bundle exec jekyll serve --drafts
```

## 🚢 Deployment

This site uses GitHub Pages for automated deployment:

1. **Push to main branch**
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. **Automatic deployment**
GitHub Actions will automatically build and deploy the site

3. **View live site**
Visit `https://wiaia.github.io` or your custom domain

## 📚 Documentation

- **[Content Guide](docs/content-guide.md)** - How to edit website content
- **[Images Guide](docs/images-guide.md)** - Image management and optimization
- **[Post-Launch](docs/post-launch.md)** - Setup tasks after launch
- **[Design Spec](docs/superpowers/specs/2026-05-29-wiaia-website-design.md)** - Complete design documentation
- **[Implementation Plan](docs/superpowers/plans/2026-05-29-wiaia-website-implementation.md)** - Development roadmap

## 🎨 Design System

### Colors
- **Navy:** #0F172A (Primary dark)
- **Purple:** #7C3AED (Accent)
- **Teal:** #14B8A6 (Secondary accent)
- **White:** #FFFFFF (Background)
- **Gray Light:** #F8FAFC (Section backgrounds)

### Typography
- **Headings:** Inter (sans-serif)
- **Body:** Merriweather (serif)
- **Code:** Fira Code (monospace)

## ♿ Accessibility

This website follows WCAG AA standards:
- Semantic HTML structure
- ARIA labels for interactive elements
- Alt text for all images
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast compliance
- Screen reader testing

## 📈 Performance

Performance targets:
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Time to Interactive:** <3.5s
- **Cumulative Layout Shift:** <0.1

## 🔒 Security

- No database or backend system
- Static files only
- HTTPS via GitHub Pages
- Formspree for secure form submissions
- No user data storage

## 🤝 Contributing

We welcome contributions from the community!

### For Volunteers
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

### Content Updates
See [docs/content-guide.md](docs/content-guide.md) for detailed instructions on editing content.

### Bug Reports
Open an issue with:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information

## 📞 Support

### Technical Support
- **GitHub Issues:** For bugs and technical problems
- **Email:** wiaia@proton.me
- **Documentation:** See docs/ folder

### Content Support
- **Email:** wiaia@proton.me
- **Subject:** Website Content Question

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Jekyll:** Static site generator
- **Zero Static:** Jekyll Serif Theme
- **Google:** Fonts and analytics
- **Formspree:** Form handling
- **Our Community:** All mentors, mentees, and volunteers

## 🔗 Links

- **Website:** https://wiaia.github.io
- **GitHub:** https://github.com/wiaia/wiaia.github.io
- **LinkedIn:** https://linkedin.com/company/wiaia
- **Twitter:** https://twitter.com/wiaia_org

---

**Built with ❤️ by the Women in AI & Analytics Mentoring community**

**Last Updated:** May 29, 2026
