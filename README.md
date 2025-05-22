# Global Orchards Stack Ltd. - Marketing Website

This is a fully static marketing website for Global Orchards Stack Ltd., showcasing their premium produce distribution services across Canada.

## Features

- Fully responsive design for mobile, tablet, and desktop
- Interactive elements using vanilla JavaScript
- Animated sections with Intersection Observer
- Pure CSS carousel with scroll-snap
- Sticky header with blur effect
- Accessibility features
- Optimized for performance

## Tech Stack

- HTML5 with semantic markup
- CSS3 (variables, Flexbox, Grid)
- Vanilla JavaScript (ES6)
- Font Awesome 6 (via CDN)
- Google Fonts "Inter" (via CDN)

## File Structure

```
/
├─ index.html     # Main HTML document with all content sections
├─ styles.css     # Complete stylesheet with responsive design
├─ script.js      # JavaScript for interactive elements
└─ images/        # Contains logo and any additional images
   └─ go_logotransparent.png
```

## Launch Instructions

1. This is a static website that requires no build steps or preprocessing
2. Simply upload all files to your web server or GitHub Pages
3. Ensure the directory structure is maintained
4. The site should be immediately viewable

## Customization

### Changing Colors

The color scheme can be easily updated by modifying the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
  --go-green: #006442;
  --go-lime: #98c93c;
  --go-cream: #faf7f0;
  --go-char: #222;
}
```

### Adding Products

To add new products to the carousel, duplicate one of the existing product cards in the HTML and update the content and icon as needed.

### Updating Content

All website content is contained in the HTML file with clear section comments to help you locate specific areas for content updates.

## Browser Support

This website is compatible with:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- iOS Safari and Chrome for iOS
- Android Chrome and Firefox

## Accessibility

The website includes the following accessibility features:
- Semantic HTML structure
- ARIA attributes for interactive elements
- AA color contrast compliance
- Keyboard navigation support
- Reduced motion option via CSS media query

## Performance

The website has been optimized for fast loading:
- No external JavaScript libraries
- Minimal CSS (no frameworks)
- Font Awesome loaded via CDN
- SVG graphics instead of bitmap images
- Total size under 200KB (excluding fonts and Font Awesome)

## Copyright

© 2025 Global Orchards Stack Ltd. All rights reserved.