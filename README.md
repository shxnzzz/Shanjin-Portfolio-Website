# Shanjin Kok - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This website showcases your skills, projects, and professional information in an elegant and interactive way.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized for performance

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── style.css           # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Download or clone this repository
2. Open `index.html` in your web browser
3. Your portfolio is ready to view!

### Local Development
To run the website locally:
1. Navigate to the project directory
2. Open `index.html` in your browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 🎨 Customization Guide

### Personal Information
Update the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Your Title | Your Interests</p>
<p class="hero-description">Your personal description</p>
```

#### About Section
```html
<p>Your personal story and background</p>
<div class="about-stats">
  <div class="stat">
    <h3>Your Number</h3>
    <p>Years Experience</p>
  </div>
  <!-- Add more stats as needed -->
</div>
```

#### Skills Section
Update the skills in each category:
```html
<div class="skill-items">
  <span class="skill-item">Your Skill 1</span>
  <span class="skill-item">Your Skill 2</span>
  <!-- Add more skills -->
</div>
```

#### Projects Section
Replace the sample projects with your own:
```html
<div class="project-card">
  <div class="project-image">
    <!-- Add your project image here -->
  </div>
  <div class="project-content">
    <h3>Your Project Name</h3>
    <p>Project description</p>
    <div class="project-tech">
      <span>Technology 1</span>
      <span>Technology 2</span>
    </div>
    <div class="project-links">
      <a href="your-github-link" class="project-link">
        <i class="fab fa-github"></i> Code
      </a>
      <a href="your-live-link" class="project-link">
        <i class="fas fa-external-link-alt"></i> Live
      </a>
    </div>
  </div>
</div>
```

#### Contact Information
Update your contact details:
```html
<div class="contact-method">
  <i class="fas fa-envelope"></i>
  <div>
    <h4>Email</h4>
    <p>your.email@example.com</p>
  </div>
</div>
```

### Styling Customization

#### Colors
The main color scheme is defined in `style.css`. You can customize:

- Primary Blue: `#2563eb`
- Secondary Purple: `#764ba2`
- Accent Yellow: `#fbbf24`
- Text Colors: `#1f2937`, `#6b7280`

#### Fonts
The website uses Inter font from Google Fonts. You can change it by:
1. Updating the Google Fonts link in `index.html`
2. Changing the font-family in `style.css`

### Adding Your Profile Picture

1. Add your image to the project directory
2. Replace the placeholder in the hero section:
```html
<div class="hero-image">
  <img src="your-image.jpg" alt="Your Name" class="profile-image">
</div>
```

3. Add CSS for the image:
```css
.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
}
```

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts
- Touch-friendly navigation

## 🔧 Advanced Customization

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Add corresponding CSS in `style.css`
3. Add any JavaScript functionality in `script.js`

### Custom Animations
The website includes several animations:
- Fade-in effects on scroll
- Hover animations
- Typing effect for the hero title
- Parallax scrolling

### Form Functionality
The contact form currently shows a success message. To make it functional:
1. Set up a form handling service (Formspree, Netlify Forms, etc.)
2. Update the form action and method in `index.html`
3. Modify the JavaScript form handling in `script.js`

## 🌐 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and save

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Your site will be live instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### Custom Domain
1. Purchase a domain from a registrar
2. Update your DNS settings
3. Configure your hosting platform

## 📊 Performance Optimization

- Images are optimized and compressed
- CSS and JavaScript are minified
- Fonts are loaded efficiently
- Smooth scrolling and animations are optimized

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you need help customizing your portfolio or have questions about the code, feel free to reach out!

---

**Happy coding! 🚀** 