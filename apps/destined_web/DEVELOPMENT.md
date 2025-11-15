# 🚀 Development Guide - Destined Web

## Quick Start

```bash
# Navigate to project directory
cd apps/destined_web

# Start development server
python -m http.server 8000

# Open in browser
open http://localhost:8000
```

## Project Structure

```
destinated_web/
├── index.html                      # Main entry point
├── public/                         # Static assets
│   ├── css/                        # Stylesheets
│   │   ├── base/                   # Base styles (variables, reset, typography)
│   │   ├── layout/                 # Layout styles (header, footer, grid)
│   │   ├── components/             # Component styles (buttons, cards, navigation)
│   │   ├── sections/               # Section styles (hero, features, etc.)
│   │   ├── utils/                  # Utility styles (helpers, animations, responsive)
│   │   └── main.css                # Main stylesheet (imports all others)
│   ├── js/                         # JavaScript files
│   │   ├── i18n/                   # Internationalization
│   │   │   ├── i18n.js             # i18n handler
│   │   │   └── translations.js     # Translation strings
│   │   ├── carousel.js             # Carousel functionality
│   │   └── main.js                 # Main JavaScript
│   ├── images/                     # Images and icons
│   └── fonts/                      # Typography files
└── src/                            # Source code (Clean Architecture)
    ├── domain/                     # Business logic
    ├── infrastructure/             # External dependencies
    ├── interfaces/                 # Adapters
    └── presentation/               # UI layer
        ├── app.js                  # App initialization
        ├── components/             # Reusable components
        ├── views/                  # View components
        └── html/                   # HTML pages

## Color Palette

### Primary Colors
- **Cosmic Purple**: `#9d4edd` - Main brand color
- **Deep Purple**: `#7209b7` - Secondary brand color
- **Mystic Blue**: `#560bad` - Accent color

### Accent Colors
- **Star Gold**: `#ffd60a` - Highlights and CTAs
- **Moon Silver**: `#e0e1dd` - Subtle accents
- **Cosmic Pink**: `#ff006e` - Special highlights

### Neutral Colors
- **Night Sky**: `#0d1b2a` - Dark backgrounds
- **Twilight**: `#1b263b` - Medium dark
- **Gray Light**: `#f8f9fa` - Light backgrounds

## Typography

### Font Family
- Primary: ClashDisplay (with system font fallbacks)
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Key Features to Implement

### 1. Cosmic Compatibility
- Birth chart analysis
- Astrological matching algorithm
- Compatibility scores

### 2. Manifestation Journal
- Daily entries
- Intention setting
- Synchronicity tracking

### 3. Birth Chart Matching
- Natal chart generation
- Planetary position analysis
- Rising sign and moon sign matching

## Development Workflow

### Adding a New Section

1. **Create HTML** in `src/presentation/html/`
2. **Add styles** in `public/css/sections/`
3. **Import styles** in `public/css/main.css`
4. **Add translations** in `public/js/i18n/translations.js`
5. **Test responsiveness** on multiple devices

### Adding a New Component

1. **Create component** in `src/presentation/components/`
2. **Add styles** in `public/css/components/`
3. **Import in main.css**
4. **Document usage** in code comments

### Adding Translations

1. Open `public/js/i18n/translations.js`
2. Add key-value pairs for both `en` and `es`
3. Use `data-i18n` attribute in HTML
4. Test language switching

## Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works on all pages
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] All images load (or show placeholders)
- [ ] Language switching works
- [ ] Forms validate properly
- [ ] Links work correctly
- [ ] CSS animations are smooth
- [ ] No console errors
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

## Performance Optimization

### Images
- Use WebP format where possible
- Compress images (TinyPNG, ImageOptim)
- Implement lazy loading
- Provide multiple sizes for responsive images

### CSS
- Minimize CSS files for production
- Remove unused styles
- Use CSS custom properties for theming
- Optimize animations for 60fps

### JavaScript
- Minimize JS files for production
- Use async/defer for script loading
- Implement code splitting
- Cache static assets

## Deployment

### Build Steps
1. Optimize images
2. Minify CSS and JavaScript
3. Test all functionality
4. Check responsive design
5. Validate HTML/CSS
6. Test cross-browser compatibility

### Hosting Options
- Netlify (recommended)
- Vercel
- GitHub Pages
- Firebase Hosting

## Common Issues & Solutions

### Issue: Images not loading
**Solution**: Check file paths are relative to index.html

### Issue: CSS not applying
**Solution**: Verify import order in main.css

### Issue: Translations not working
**Solution**: Ensure data-i18n attributes match translation keys

### Issue: Mobile menu not working
**Solution**: Check JavaScript is loaded and mobile-menu-toggle exists

## Resources

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN Web Docs](https://developer.mozilla.org/)

## Next Steps

1. **Replace placeholder images** with actual app screenshots
2. **Add real testimonials** from beta users
3. **Implement contact form** functionality
4. **Add analytics** (Google Analytics, Mixpanel)
5. **Set up A/B testing** for CTAs
6. **Optimize SEO** (meta tags, structured data)
7. **Add social media integration**

## Support

For questions or issues:
- Email: thegameapp00@gmail.com
- Check main README: `../../README.md`
- Review CONTRIBUTING: `../../CONTRIBUTING.md`
