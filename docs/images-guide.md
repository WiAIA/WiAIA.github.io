# Image Management Guide

This guide provides comprehensive instructions for volunteers working with images on the Women in AI & Analytics Mentoring website. Proper image management is essential for maintaining fast load times, accessibility, and a professional appearance across our nonprofit platform.

## Image Organization

Images are organized in the `assets/images/` directory with the following subdirectories:

```
assets/images/
├── hero/          # Hero section images (1920x1080px)
├── team/          # Team member photos (400x400px)
├── testimonials/   # Testimonial profile photos (200x200px)
├── events/        # Event documentation (800x600px)
├── partners/      # Partner organization logos (variable)
└── general/       # Various site images (as needed)
```

## Image Specifications

### Hero Images
- **Dimensions**: 1920x1080px (16:9 aspect ratio)
- **Format**: WebP primary + JPEG fallback
- **Maximum Size**: 500KB

### Team Photos
- **Dimensions**: 400x400px (will be cropped to circular)
- **Format**: WebP primary + JPEG fallback
- **Maximum Size**: 100KB
- **Style**: Professional headshot, neutral background
- **Face Position**: Centered for circular cropping

### Testimonial Photos
- **Dimensions**: 200x200px (1:1 aspect ratio)
- **Format**: WebP primary + JPEG fallback
- **Maximum Size**: 50KB
- **Style**: Professional, approachable
- **Border**: 4px rounded corners

### Event Images
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Format**: WebP primary + JPEG fallback
- **Maximum Size**: 300KB
- **Content**: Event highlights, activities, and interactions
- **Quality**: High resolution for detail preservation

## Image Optimization

### Converting to WebP

#### Online Tools
1. **Squoosh** (squoosh.app)
   - Go to squoosh.app
   - Upload your image
   - Select WebP format
   - Adjust quality to 80-90%
   - Download optimized version

2. **Cloudinary**
   - Upload image
   - Apply WebP conversion
   - Set quality parameters
   - Get optimized URL

#### Command Line with cwebp

Install cwebp:
```bash
# Ubuntu/Debian
sudo apt-get install webp

# macOS with Homebrew
brew install webp
```

Convert images:
```bash
# Basic conversion (80% quality)
cwebp -q 80 input.jpg -o output.webp

# Advanced conversion with metadata
cwebp -q 80 -metadata none -mt input.jpg -o output.webp

# Batch conversion
for file in *.jpg; do
    cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

### Resizing Images

#### Using ImageMagick
```bash
# Resize to specific dimensions
magick input.jpg -resize 1920x1080 output.jpg

# Resize with aspect ratio preservation
magick input.jpg -resize 800x^ -gravity center -extent 800x600 output.jpg

# Batch resize
for file in *.jpg; do
    magick "$file" -resize 400x400 "${file%.jpg}_resized.jpg"
done
```

#### Using ffmpeg
```bash
# Resize with high quality
ffmpeg -i input.jpg -vf "scale=1920:1080" -q:v 2 output.jpg

# Maintain aspect ratio with padding
ffmpeg -i input.jpg -vf "scale=800:600:force_original_aspect_ratio=1,pad=800:600:(ow-iw)/2:(oh-ih)/2" output.jpg
```

### Creating JPEG Fallbacks

Use the HTML picture element for progressive enhancement:

```html
<picture>
  <source srcset="/assets/images/hero/hero-image.webp" type="image/webp">
  <img src="/assets/images/hero/hero-image.jpg"
       alt="Women in AI & Analytics team mentoring session"
       width="1920" height="1080"
       loading="lazy">
</picture>
```

## Adding Images to Pages

### Standard Image Markdown

In Markdown files (.md):

```markdown
![Team members collaborating](/assets/images/team/collaboration.webp)
```

### Team Photo HTML with Lazy Loading

For team member profiles:

```html
<div class="team-member">
  <img src="/assets/images/team/sarah-johnson.webp"
       srcset="/assets/images/team/sarah-johnson.webp 1x, /assets/images/team/sarah-johnson@2x.webp 2x"
       alt="Sarah Johnson - AI Research Lead"
       width="400" height="400"
       loading="lazy"
       class="team-photo">
  <h3>Sarah Johnson</h3>
  <p class="team-role">AI Research Lead</p>
</div>
```

### Testimonial Photo Using Liquid Include

Create `_includes/testimonial.html`:

```html
<div class="testimonial">
  <div class="testimonial-photo">
    {% if include.photo %}
      <img src="/assets/images/testimonials/{{ include.photo }}.webp"
           alt="{{ include.name }}"
           width="200" height="200"
           loading="lazy">
    {% endif %}
  </div>
  <blockquote>{{ include.quote }}</blockquote>
  <cite>{{ include.name }}</cite>
  <span class="testimonial-role">{{ include.role }}</span>
</div>
```

Use in pages:
```html
{% include testimonial.html
  photo="maria-garcia"
  name="Maria Garcia"
  role="Data Science Manager"
  quote="The mentoring program transformed my career trajectory..." %}
```

## Image Naming Conventions

### Guidelines

1. Use lowercase letters only
2. Separate words with hyphens (-)
3. Be descriptive but concise
4. Include dates for time-sensitive content
5. Use .webp extension for primary files
6. Add @2x suffix for high-resolution versions

### Examples

**Good naming:**
- `hero-welcome-program.webp`
- `team-sarah-johnson.webp`
- `event-2024-ai-workshop.webp`
- `testimonial-maria-garcia.webp`
- `partner-tech-institute.webp`

**Bad naming:**
- `IMG_1234.JPG`
- `photo.jpg`
- `team_member_1.png`
- `event_photo_march.png`
- `final_image_v2.webp`

## Accessibility

### Alt Text Guidelines

Good alt text is:
- **Descriptive**: Clearly explains what's in the image
- **Concise**: Brief but informative (typically 125 characters or less)
- **Context-aware**: Relevant to the surrounding content
- **Functional**: Provides the same meaning as the visual content

### Examples

**Good alt text:**
- `alt="Diverse group of women collaborating on AI project"`
- `alt="Sarah Johnson presenting machine learning concepts"`
- `alt="AI workshop participants working together"`

**Bad alt text:**
- `alt="Image"` (not descriptive)
- `alt="Photo"` (too generic)
- `alt="team photo"` (lacks context)
- `alt="Click here"` (describes function, not content)

### Decorative Images

For purely decorative images, use empty alt text:

```html
<img src="/assets/images/pattern.webp" alt="" class="decorative">
```

## Stock Photo Resources

### Free Stock Photo Sites

1. **Unsplash** (unsplash.com)
   - High-quality professional photos
   - Search terms: "women tech", "AI", "data science", "mentoring"
   - No attribution required

2. **Pexels** (pexels.com)
   - Free stock photos and videos
   - Strong collection of technology and workplace imagery
   - No attribution required

3. **Pixabay** (pixabay.com)
   - Large free image and video library
   - Filter by "safe search" for appropriate content
   - No attribution required

4. **Women in Tech Collections**
   - **Women Who Code** (specific image collections)
   - **Girls in Tech** (portfolio sections)
   - **Women Who Tech** (professional imagery)

### Search Tips

- Use specific terms: "women coding", "AI research", "data analysis"
- Include diversity keywords: "diverse team", "inclusion", "multicultural"
- Search for actions: "mentoring", "collaborating", "presenting"
- Filter by orientation and color scheme

## Copyright and Usage

### Safe Image Sources

1. **Free and Royalty-Free**
   - Public domain images
   - Creative Commons Zero (CC0) licensed images
   - Explicitly stated "free for commercial use" images

2. **Verify Licensing**
   - Always check license terms before using
   - Look for attribution requirements
   - Avoid images with watermarks unless explicitly allowed

### Attribution Requirements

When attribution is required:

```markdown
Photo by [Photographer Name] from [Source]
License: [License Type]
Link: [Source URL]
```

Example:
```markdown
Photo by Jane Smith from Unsplash
License: Free to use commercially
Link: https://unsplash.com/@janesmith
```

## Performance

### Lazy Loading Example

```html
<!-- For images below the fold -->
<img src="/assets/images/event/large-event.webp"
     alt="Event participants"
     width="800"
     height="600"
     loading="lazy">
```

```html
<!-- For critical images above the fold -->
<img src="/assets/images/hero/main-hero.webp"
     alt="Welcome to Women in AI & Analytics"
     width="1920"
     height="1080"
     loading="eager">
```

### Image Size Best Practices

1. **Compress images to under 500KB** for hero images
2. **Use WebP format** for modern browsers (70-80% smaller than JPEG)
3. **Provide responsive images** with srcset for different screen sizes
4. **Implement lazy loading** for non-critical images
5. **Use appropriate dimensions** - don't serve large images for small displays

## Troubleshooting

### Images Not Displaying

1. **Check file path**: Verify the image path is correct and relative to the root
2. **Verify file exists**: Confirm the image file is in the expected location
3. **Check permissions**: Ensure the web server can read the image file
4. **Clear cache**: Browser cache may show old or missing images
5. **Test URL**: Direct browser access to image URL should work

### Images Loading Slowly

1. **Check file size**: Large images load slowly - optimize and compress
2. **Verify format**: WebP loads faster than JPEG/PNG for similar quality
3. **Test different networks**: Check speed on various connections
4. **Enable CDN**: Use content delivery network for global access
5. **Lazy load**: Implement lazy loading for non-critical images

### Format Not Supported

1. **Check browser support**: Modern browsers support WebP, JPEG, PNG, GIF
2. **Provide fallback**: Use picture element with JPEG fallback
3. **Check MIME type**: Ensure server serves correct content-type
4. **Update plugins**: Some CMS systems need format plugins

## Quick Checklist

Before adding images to the website:

1. [ ] Image is in the correct directory (`assets/images/`)
2. [ ] Image follows naming conventions (lowercase, hyphens)
3. [ ] Image meets size requirements (<500KB for hero, <100KB for team)
4. [ ] Image is in WebP format with appropriate quality settings
5. [ ] Alt text is descriptive and contextually appropriate
6. [ ] Proper image dimensions for intended use case
7. [ ] Copyright verified and attribution if required
8. [ ] Tested across different browsers and devices

---

Last Updated: 2026-05-29