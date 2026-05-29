# Women in AI & Analytics Mentoring Website

Modern, accessible nonprofit website for Women in AI & Analytics Mentoring community.

## Technology Stack

- **Static Site Generator:** Jekyll 4.3+
- **Theme:** Jekyll Serif Theme (Zero Static)
- **Hosting:** GitHub Pages
- **Content Management:** Markdown files

## Getting Started

### Prerequisites
- Ruby 3.0+
- Bundler
- Git

### Installation

1. Clone the repository
2. Install dependencies: `bundle install`
3. Start local server: `bundle exec jekyll serve`
4. Open browser to `http://localhost:4000`

## Project Structure

- `_config.yml` - Site configuration
- `index.md` - Home page content
- `_includes/` - Reusable components
- `_layouts/` - Page layouts
- `_sass/` - Custom styles
- `assets/` - Images and static files
- `docs/` - Documentation

## Content Management

All page content is managed through Markdown files. See [docs/content-guide.md](docs/content-guide.md) for detailed instructions.

## Development

### Test locally:
```bash
bundle exec jekyll serve
```

### Build for production:
```bash
bundle exec jekyll build
```

## Deployment

Site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Accessibility

This site follows WCAG AA standards and is optimized for screen readers, keyboard navigation, and mobile devices.

## Support

For questions or issues, please contact the development team or open an issue in the repository.