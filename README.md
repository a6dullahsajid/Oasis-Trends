# Oasis Trends - Gatsby Website

A modern, responsive website for Oasis Trends, built with Gatsby and featuring improved class naming for better responsiveness editing.

## Features

- **Modern React Architecture**: Built with Gatsby v5 and React 18
- **Responsive Design**: Mobile-first approach with comprehensive breakpoints
- **Improved Class Naming**: Uses BEM methodology for better CSS organization and responsiveness editing
- **Component-Based Structure**: Modular components for easy maintenance
- **Dark/Light Mode Support**: Automatic theme switching with CSS variables
- **Performance Optimized**: Static site generation with Gatsby
- **SEO Ready**: Built-in SEO optimization
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## Class Naming Convention

The website uses **BEM (Block Element Modifier)** methodology for CSS class naming:

- **Block**: Main component (e.g., `hero-section`, `products-section`)
- **Element**: Part of the block (e.g., `hero-section__title`, `hero-section__cta-button`)
- **Modifier**: State or variation (e.g., `products-section__filter-button--active`)

This makes it easy to:
- Edit responsiveness for specific components
- Maintain consistent styling patterns
- Avoid CSS conflicts
- Understand component structure

## Responsive Breakpoints

The website includes comprehensive responsive breakpoints:

- **Desktop**: 1280px and above
- **Large Tablet**: 1024px - 1279px
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## Project Structure

```
src/
├── components/          # React components
│   ├── layout.js       # Main layout wrapper
│   ├── header.js       # Navigation header
│   ├── hero.js         # Hero section
│   ├── categories.js   # Product categories
│   ├── products.js     # Products grid
│   ├── about.js        # About section
│   ├── footer.js       # Site footer
│   ├── product-modal.js # Product detail modal
│   └── *.css          # Component-specific styles
├── data/               # Static data
│   └── app-data.js    # Products and categories data
├── pages/              # Gatsby pages
│   └── index.js       # Home page
├── styles/             # Global styles
│   └── global.css     # Design system and base styles
└── images/             # Static images
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run develop
   ```

3. **Open your browser**:
   Navigate to `http://localhost:8000`

### Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build production site
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache

## Customization

### Editing Responsiveness

Each component has its own CSS file with responsive breakpoints. To modify responsiveness:

1. **Find the component CSS file** (e.g., `src/components/hero.css`)
2. **Locate the responsive section** (marked with `/* Responsive Design */`)
3. **Edit the media queries** for your desired breakpoints

Example:
```css
@media (max-width: 768px) {
  .hero-section__title {
    font-size: 20px; /* Adjust font size for mobile */
  }
}
```

### Adding New Components

1. **Create the component file** (e.g., `src/components/new-component.js`)
2. **Create the CSS file** (e.g., `src/components/new-component.css`)
3. **Follow BEM naming convention** for classes
4. **Import and use** in your pages

### Modifying Colors and Themes

The design system uses CSS variables defined in `src/styles/global.css`:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* ... more variables */
}
```

## Building for Production

```bash
npm run build
```

The built site will be in the `public/` directory, ready for deployment.

## Deployment

The site can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `public/` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use the `gh-pages` branch
- **AWS S3**: Upload the `public/` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Static Generation**: Pre-built HTML for fast loading
- **Image Optimization**: Automatic image optimization with Gatsby
- **Code Splitting**: Automatic code splitting for better performance
- **Lazy Loading**: Images and components load as needed
- **Minification**: CSS and JavaScript are automatically minified

## Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color combinations

## Contributing

1. Follow the existing code structure
2. Use BEM methodology for CSS classes
3. Maintain responsive design principles
4. Test across different screen sizes
5. Ensure accessibility compliance

## License

MIT License - see LICENSE file for details.

## Support

For questions or support, please contact the development team.
