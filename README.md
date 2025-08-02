# Portfolio Template

A modern, responsive portfolio website template that's easy to customize and maintain.

## How to Customize

1. **Basic Configuration**
   - Open `js/config.js`
   - Update the configuration object with your content:
     - SEO settings (title, description, meta tags)
     - Header content (logo, menu items)
     - Hero section content
     - Vision & Mission statements
     - About section content

2. **Images**
   - Replace the following images in `assets/img/`:
     - `logo.png` - Your website logo
     - `favicon.png` - Browser tab icon
     - `apple-touch-icon.png` - iOS home screen icon
     - `hero-bg.jpg` - Hero section background
     - `about.jpg` - About section image
     - `opengraph.png` - Social media preview image

3. **Colors and Styling**
   - Main styles are in `assets/css/main.css`
   - Bootstrap classes are used for layout and components
   - Custom CSS variables can be modified in the `:root` selector

4. **Navigation**
   - Menu items can be modified in the `config.js` file
   - Each item needs:
     - `text`: Display text
     - `link`: Target section ID or URL
     - `active`: Boolean for active state

5. **Call-to-Action Buttons**
   - Update CTA button text and links in `config.js`
   - Both header and hero section buttons can be customized

## File Structure

```
portfolio-template/
├── assets/
│   ├── css/
│   ├── img/
│   ├── js/
│   └── vendor/
├── js/
│   ├── config.js        # Content configuration
│   └── content-loader.js # Dynamic content loading
└── index.html           # Main HTML template
```

## Dependencies

- Bootstrap 5.3.3
- AOS (Animate On Scroll)
- GLightbox
- Swiper
- Font families: Roboto, Raleway, Inter

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This template is licensed under the MIT License - see the LICENSE file for details.