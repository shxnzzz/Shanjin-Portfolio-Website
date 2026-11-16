// Project content comes from js/projects-data.js (PROJECTS, FEATURED_PROJECTS, OTHER_PROJECTS).

function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function projectImages(project) {
  return (project.images || []).map(img => (typeof img === 'string' ? { src: img, caption: '' } : img));
}

function projectPageURL(projectId) {
  return `project.html?p=${encodeURIComponent(projectId)}`;
}

function projectLinksHTML(projectId, linkClass) {
  const links = (PROJECTS[projectId] && PROJECTS[projectId].links) || {};
  let out = '';
  if (links.github) {
    out += `<a href="${links.github}" class="${linkClass}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Code</a>`;
  }
  if (links.demo) {
    out += `<a href="${links.demo}" class="${linkClass}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live demo</a>`;
  }
  return out;
}

function projectCoverHTML(project) {
  const cover = project.cover;
  if (cover && cover.layout === 'phone') {
    return `<div class="project-cover project-cover-phone"><img src="${cover.src}" alt="" loading="lazy"></div>`;
  }
  if (cover && cover.layout === 'phone-stack') {
    return `<div class="project-cover project-cover-phone-stack">
      <img class="phone-stack-main" src="${cover.main}" alt="" loading="lazy">
      <div class="phone-stack-side">${cover.stack.map(src => `<img src="${src}" alt="" loading="lazy">`).join('')}</div>
    </div>`;
  }
  if (Array.isArray(cover)) {
    return `<div class="project-cover project-cover-phones">${cover.map(src => `<img src="${src}" alt="" loading="lazy">`).join('')}</div>`;
  }
  if (cover) {
    return `<div class="project-cover"><img src="${cover}" alt="" loading="lazy"></div>`;
  }
  return `<div class="project-cover project-cover-tile"><i class="fas ${project.coverIcon || 'fa-code'}"></i></div>`;
}

function renderFeaturedProjects() {
  const container = document.getElementById('featuredProjects');
  if (!container) return;
  container.innerHTML = FEATURED_PROJECTS.map(id => {
    const p = PROJECTS[id];
    const url = projectPageURL(id);
    return `
      <article class="featured-card" data-url="${url}">
        <a href="${url}" class="featured-media" aria-label="${escapeHTML(p.title)}">${projectCoverHTML(p)}</a>
        <div class="featured-body">
          <p class="featured-context">${escapeHTML(p.context)}</p>
          <h3><a href="${url}">${escapeHTML(p.title)}</a></h3>
          <div class="featured-text">
            <p class="featured-label">The problem</p>
            <p>${escapeHTML(p.problem)}</p>
            <p class="featured-label">What I built</p>
            <p>${escapeHTML(p.built)}</p>
          </div>
          <div class="featured-tech">${p.cardTech.map(t => `<span>${escapeHTML(t)}</span>`).join('')}</div>
          <div class="featured-actions">
            <a href="${url}" class="btn btn-primary">View project <i class="fas fa-arrow-right"></i></a>
            ${projectLinksHTML(id, 'btn btn-outline')}
          </div>
        </div>
      </article>`;
  }).join('');

  container.querySelectorAll('.featured-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('a') || window.getSelection().toString()) return;
      window.location.href = card.dataset.url;
    });
  });
}

function renderOtherProjects() {
  const container = document.getElementById('otherProjects');
  if (!container) return;
  container.innerHTML = OTHER_PROJECTS.map(id => {
    const p = PROJECTS[id];
    const links = projectLinksHTML(id, 'project-live-link');
    return `
      <div class="project-card" data-project="${id}" onclick="openProjectModal('${id}')">
        <div class="project-header">
          <div class="project-basic-info">
            <h3>${escapeHTML(p.title)}</h3>
            <div class="project-tech">${p.cardTech.map(t => `<span>${escapeHTML(t)}</span>`).join('')}</div>
            ${links ? `<div class="project-card-links" onclick="event.stopPropagation()">${links}</div>` : ''}
          </div>
        </div>
      </div>`;
  }).join('');
}

function renderProjectPage() {
  const container = document.getElementById('projectPage');
  if (!container) return;
  const id = new URLSearchParams(window.location.search).get('p');
  const p = PROJECTS[id];

  if (!p || !FEATURED_PROJECTS.includes(id)) {
    container.innerHTML = `
      <div class="project-missing">
        <h1>Project not found</h1>
        <p>That project doesn't exist or has moved.</p>
        <a href="index.html#projects" class="btn btn-primary">Back to projects</a>
      </div>`;
    return;
  }

  document.title = `${p.title} | Kok Shanjin`;
  const images = projectImages(p);
  const index = FEATURED_PROJECTS.indexOf(id);
  const nextId = FEATURED_PROJECTS[(index + 1) % FEATURED_PROJECTS.length];
  const links = projectLinksHTML(id, 'btn btn-outline');

  container.innerHTML = `
    <a href="index.html#projects" class="project-back"><i class="fas fa-arrow-left"></i> All projects</a>

    <header class="project-hero">
      <p class="featured-context">${escapeHTML(p.context)}</p>
      <h1>${escapeHTML(p.title)}</h1>
      <p class="project-lede">${escapeHTML(p.description)}</p>
      ${links ? `<div class="modal-links">${links}</div>` : ''}
    </header>

    ${p.cover ? `<div class="project-hero-media">${projectCoverHTML(p)}</div>` : ''}

    <div class="project-layout">
      <div class="project-main">
        <section class="project-section">
          <h2>The problem</h2>
          <p>${escapeHTML(p.problem)}</p>
        </section>

        <section class="project-section">
          <h2>What I built</h2>
          <p>${escapeHTML(p.built)}</p>
          <ul class="project-features">${p.features.map(f => `<li>${escapeHTML(f)}</li>`).join('')}</ul>
        </section>

        ${images.length ? `
          <section class="project-section">
            <h2>Screenshots</h2>
            <div class="project-gallery">
              ${images.map(img => `
                <figure>
                  <img src="${img.src}" alt="${escapeHTML(img.caption || p.title)}" loading="lazy" onclick="openImageModal('${img.src}')">
                  ${img.caption ? `<figcaption>${escapeHTML(img.caption)}</figcaption>` : ''}
                </figure>`).join('')}
            </div>
          </section>` : ''}
      </div>

      <aside class="project-sidebar">
        ${p.hideRole ? '' : `
          <div class="modal-project-role">
            <h4>My role</h4>
            <p>${escapeHTML(p.role)}</p>
          </div>`}
        <div class="modal-project-achievement">
          <p><strong>Outcome:</strong> ${escapeHTML(p.achievement)}</p>
        </div>
        <div class="project-sidebar-block">
          <h4>Tech stack</h4>
          <div class="modal-project-tech">${p.tech.map(t => `<span>${escapeHTML(t)}</span>`).join('')}</div>
        </div>
      </aside>
    </div>

    <nav class="project-next">
      <a href="other-projects.html">See my other projects</a>
      <a href="${projectPageURL(nextId)}">Next: ${escapeHTML(PROJECTS[nextId].title)} <i class="fas fa-arrow-right"></i></a>
    </nav>`;
}

renderFeaturedProjects();
renderOtherProjects();
renderProjectPage();

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  
  // Prevent body scroll when menu is open
  if (navMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.style.overflow = 'auto';
}));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat, .contact-method, .experience-item, .education-item');
  animateElements.forEach(el => observer.observe(el));
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    // Simulate form submission (replace with actual form handling)
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    this.reset();
  });
}

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Close button functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  });
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 50);
    }, 500);
  }
});

// Project card interactions (hover for desktop, touch for mobile)
document.querySelectorAll('.project-card').forEach(card => {
  // Desktop hover effects
  card.addEventListener('mouseenter', function() {
    if (window.innerWidth > 768) {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    }
  });
  
  card.addEventListener('mouseleave', function() {
    if (window.innerWidth > 768) {
      this.style.transform = 'translateY(0) scale(1)';
    }
  });

  // Mobile touch effects
  card.addEventListener('touchstart', function() {
    if (window.innerWidth <= 768) {
      this.style.transform = 'scale(0.98)';
      this.style.transition = 'transform 0.1s ease';
    }
  });

  card.addEventListener('touchend', function() {
    if (window.innerWidth <= 768) {
      this.style.transform = 'scale(1)';
      this.style.transition = 'transform 0.2s ease';
    }
  });
});

// Skill item hover effects
document.querySelectorAll('.skill-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) rotate(2deg)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Mobile performance optimizations
if (window.innerWidth <= 768) {
  // Reduce animations on mobile for better performance
  document.documentElement.style.setProperty('--animation-duration', '0.2s');
  
  // Optimize scroll performance
  let ticking = false;
  function updateScrollEffects() {
    // Your scroll effects here
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  });
}

// Add mobile-specific touch improvements
document.addEventListener('DOMContentLoaded', () => {
  // Improve touch targets for mobile
  if (window.innerWidth <= 768) {
    const touchElements = document.querySelectorAll('.btn, .nav-link, .project-card, .skill-item, .contact-method');
    touchElements.forEach(element => {
      element.style.minHeight = '44px';
      element.style.touchAction = 'manipulation';
    });
  }
});

// Copy email to clipboard functionality
document.querySelectorAll('.contact-method').forEach(method => {
  const text = method.querySelector('p');
  if (text && text.textContent.includes('@')) {
    method.style.cursor = 'pointer';
    method.addEventListener('click', () => {
      navigator.clipboard.writeText(text.textContent).then(() => {
        showNotification('Email copied to clipboard!', 'success');
      }).catch(() => {
        showNotification('Failed to copy email', 'error');
      });
    });
  }
});

// Check if CSS is loaded properly
function checkCSSLoaded() {
  const testElement = document.createElement('div');
  testElement.style.position = 'absolute';
  testElement.style.left = '-9999px';
  testElement.style.top = '-9999px';
  document.body.appendChild(testElement);
  
  const computedStyle = window.getComputedStyle(testElement);
  const isCSSLoaded = computedStyle.position === 'absolute';
  
  document.body.removeChild(testElement);
  
  if (!isCSSLoaded) {
    console.warn('CSS may not be loading properly on GitHub Pages');
    // Add additional fallback styles if needed
    const fallbackStyle = document.createElement('style');
    fallbackStyle.textContent = `
      body { font-size: 16px !important; }
      .hero-title { font-size: 3.5rem !important; }
      .container { max-width: 1200px !important; margin: 0 auto !important; padding: 0 2rem !important; }
    `;
    document.head.appendChild(fallbackStyle);
  }
}

// Project modal functionality
function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
  
  const projectData = PROJECTS[projectId];
  if (!projectData) return;
  const images = projectImages(projectData);

  // Populate modal content
  modalContent.innerHTML = `
    <h2 class="modal-project-title">${projectData.title}</h2>
    <p class="modal-project-description">${projectData.description}</p>

    ${projectLinksHTML(projectId, 'btn btn-outline') ? `
      <div class="modal-links">${projectLinksHTML(projectId, 'btn btn-outline')}</div>
    ` : ''}
    
    <div class="modal-project-tech">
      ${projectData.tech.map(tech => `<span>${tech}</span>`).join('')}
    </div>
    
    <div class="modal-project-features">
      <h4>Key Features:</h4>
      <ul>
        ${projectData.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>
    
    ${!projectData.hideRole ? `
      <div class="modal-project-role">
        <h4>My Role:</h4>
        <p>${projectData.role}</p>
      </div>
    ` : ''}
    
    <div class="modal-project-achievement">
      <p><strong>Achievement:</strong> ${projectData.achievement}</p>
    </div>
    
    ${images.length > 0 ? `
      <div class="modal-project-gallery">
        ${images.map(img => `
          <img src="${img.src}" alt="${escapeHTML(img.caption || 'Project screenshot')}" class="modal-gallery-img" onclick="openImageModal('${img.src}')" onerror="this.style.display='none';">
        `).join('')}
      </div>
    ` : ''}
  `;
  
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Full size image modal functions
function openImageModal(imageSrc) {
  const imageModal = document.getElementById('imageModal');
  const fullSizeImage = document.getElementById('fullSizeImage');
  
  fullSizeImage.src = imageSrc;
  imageModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  const imageModal = document.getElementById('imageModal');
  imageModal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  const projectModal = document.getElementById('projectModal');
  const imageModal = document.getElementById('imageModal');
  
  if (event.target === projectModal) {
    closeProjectModal();
  }
  
  if (event.target === imageModal) {
    closeImageModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeProjectModal();
    closeImageModal();
  }
});

// Run CSS check after page loads
window.addEventListener('load', checkCSSLoaded);

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
  .nav-link.active {
    color: #2563eb !important;
  }
  
  .nav-link.active::after {
    width: 100% !important;
  }
  
  .loaded {
    opacity: 1;
  }
  
  body {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
`;
document.head.appendChild(style);
