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
  
  let projectData = {};
  
  switch(projectId) {
    case 'ippt':
      projectData = {
        title: 'Interactive Physical Proficiency Trainer (IPPT Fitness App)',
        description: 'An AI integrated android application designed to help users enhance their ippt performance. The app features real-time posture detection and correction for push ups and sit up using camera based ai, run tracking via gps and ar guided fitness tutorials to ensure proper form. User can view detailed summarised of their workout performance, making training measurable and engaging.',
        tech: ['Android Development: Kotlin, Jetpack Compose', 'AI & Pose Detection: MediaPipe, TensorFlow Lite', 'Augmented Reality: ARCore', 'Location Services: Google Maps SDK, GPS tracking', 'Data Storage & State Management: Room DB, ViewModel, LiveData', 'UI/UX: Material Design, custom animations', 'Testing & Debugging: Android Emulator, Espresso'],
        features: [
          'Real-time push-up & sit-up tracking using Google ML Kit Pose Detection',
          'AR tutorials for correct form via Google Scene Viewer',
          'GPS-based 2.4km run tracking with live pace, distance & route via Google Maps',
          'Offline workout summary storage using Room database'
        ],
        role: 'Developed the full running tracker module, integrating GPS, live tracking, pace calculation, and route visualization.',
        achievement: 'Over 90% detection accuracy and high user satisfaction in usability tests.',
        images: ['ippt-home.jpg','ippt-pushup.jpg', 'ippt-situp.jpg', 'ippt-run.jpg', 'ippt-summary.jpg']
      };
      break;
    case 'inventory':
      projectData = {
        title: 'Inventory Management Mobile App',
        description: 'Developed a mobile application for real-time inventory tracking at NEC Asia Pacific Pte Ltd. Features include barcode scanning, push notifications, and user-friendly interface design.',
        tech: ['React Native', 'Barcode Scanning', 'Push Notifications', 'Real-time Tracking'],
        features: [
          'Real-time inventory tracking',
          'Barcode scanning capabilities',
          'Push notifications for updates',
          'User-friendly interface design'
        ],
        role: 'Enhanced company\'s inventory management system by developing a mobile app for real-time inventory tracking.',
        achievement: 'Streamlined inventory processes and improved operational efficiency.',
        images: []
      };
      break;
    case 'inventory-web':
      projectData = {
        title: 'Inventory Management Website',
        description: 'Designed and developed a comprehensive inventory management website for NEC Asia Pacific Pte Ltd. Implemented features like inventory tracking, automated notifications, and usage analytics.',
        tech: ['Web Development', 'Inventory Tracking', 'Analytics', 'Automated Notifications'],
        features: [
          'Comprehensive inventory tracking',
          'Automated notifications system',
          'Usage analytics and reporting',
          'User-friendly digital solutions'
        ],
        role: 'Designed and developed an inventory management website focusing on seamless tracking of inventory movement.',
        achievement: 'Optimized operations through key features like inventory tracking, automated notifications, and usage analytics.',
        images: ['inventoryweb1.jpg', 'inventoryweb2.jpg', 'inventoryweb3.jpg', 'inventoryweb4.jpg']
      };
      break;
    case 'ai-job':
      projectData = {
        title: 'AI Job Matching Platform',
        description: 'Developed an AI-driven platform that intelligently matches job seekers to suitable job openings using resume parsing and natural language processing. Features include skill extraction, semantic analysis, and personalized cover letter generation.',
        tech: ['NLP', 'Machine Learning', 'Python', 'AI/ML', 'Resume Parsing'],
        features: [
          'NLP-powered resume and job description analysis',
          'Skill and experience extraction using custom pipelines',
          'Matching algorithm with scoring logic based on embeddings',
          'ATS optimization suggestions',
          'AI-generated personalized cover letters',
          'Clean UI with integrated job search and one-click apply functionality'
        ],
        role: 'Designed and developed an AI-driven job matching platform featuring comprehensive NLP capabilities.',
        achievement: 'Successfully participated in NUS-Guru Network Innovation AI 2025 competition.',
        images: ['JobMatching1.jpg', 'JobMatching2.jpg', 'JobMatching3.jpg', 'JobMatching4.jpg', 'JobMatching5.jpg', 'JobMatching6.jpg']
      };
      break;
    case 'healthy-hero':
      projectData = {
        title: 'Healthy Hero - Object-Oriented 2D Game Engine',
        description: 'A 2D arcade-style game developed using the LibGDX framework, focusing on promoting healthy eating through engaging gameplay. The game features multiple levels, boss fights, food-based entities (e.g., apple, banana, hamburger), and educational menu content. The architecture is designed with a clear separation between a reusable game engine layer and a game-specific logic layer, demonstrating clean modular design and adherence to SOLID principles.',
        tech: ['Language & Engine: Java, LibGDX, LWJGL', 'Architecture: Layered architecture with Game Layer and Engine Layer', 'Design Patterns: Singleton, Factory, Abstract Class Inheritance', 'OOP Principles: SOLID (SRP, OCP, LSP, ISP, DIP), Encapsulation, Polymorphism', 'Game Engine Components: Custom collision manager and AI movement manager', 'Entity and scene lifecycle management', 'Audio handling via a centralized audio manager', 'Rendering & UI: SpriteBatch, ShapeRenderer, screen transitions', 'Other Skills: UML Design, technical documentation, group collaboration'],
        features: [
          'Multiple levels with increasing difficulty and boss fights',
          'Food-based entities (apple, banana, hamburger) with unique behaviors',
          'Educational menu content promoting healthy eating habits',
          'Laser beam shooting mechanics and AI boss pursuit',
          'Screen transitions and dynamic health-based scoring system',
          'Robust systems for input/output, movement, collision detection, AI behavior, audio playback, and scene management',
          'Clean modular design with clear separation between game engine and game-specific logic layers'
        ],
        role: 'Developed a comprehensive 2D game engine with layered architecture, implementing SOLID principles and design patterns.',
        achievement: 'Successfully created an engaging educational game that promotes healthy eating while demonstrating advanced software engineering principles.',
        images: ['healthy-hero-home.jpg', 'healthy-hero-menu1.jpg', 'healthy-hero-menu2.jpg', 'healthy-hero-game.jpg']
      };
      break;
    case 'easyvpn':
      projectData = {
        title: 'EasyVPN: Secure Web Access Platform',
        description: 'EasyVPN is a responsive, feature-rich web application that simulates a VPN service provider. Users can register, choose from various VPN plans, manage services like email routing and VPN server selection, and handle payments securely. Admins can perform full CRUD operations on users and plans via a dedicated dashboard, including bulk uploads. The project emphasizes usability, security, and scalability.',
        tech: ['Frontend: HTML5, CSS3, JavaScript, Bootstrap, SweetAlert2, Chart.js', 'Backend: PHP, AJAX, jQuery', 'Database: MySQL', 'Authentication & Security: Session Management, Password Hashing, Input Sanitization, SQL Injection Prevention', 'Other Tools: GitHub (Version Control), Google Cloud Platform (VM Deployment)'],
        features: [
          'User Authentication: Secure login, registration, and persistent session handling',
          'Plan Management: Browse, purchase, and manage VPN subscription plans',
          'Payment System: Card info handling with validation and future-use option',
          'User Dashboard: VPN country selection, email management, and account info',
          'Admin Dashboard: CRUD operations for users and plans, CSV bulk upload',
          'Responsive Design: Mobile-friendly UI using Bootstrap',
          'Security: Proper sanitization, hashed credentials, and secure form submission'
        ],
        role: 'Developed a comprehensive VPN service platform with full-stack implementation including user authentication, payment processing, and admin dashboard.',
        achievement: 'Successfully created a scalable web application with robust security features and responsive design.',
                    images: ['VPNWeb1.jpg', 'VPNWeb2.jpg', 'VPNWeb3.jpg', 'VPNWeb4.jpg']
          };
          break;
        case 'honestystay':
          projectData = {
            title: 'HonestStay – AI-Powered Hotel Review Credibility Platform',
            description: 'HonestStay is a web-based platform that identifies and filters out AI-generated fake hotel reviews to help users make more trustworthy booking decisions. The app uses sentiment analysis and natural language processing (NLP) models to distinguish between genuine human-generated content (HGC) and AI-generated content (AIGC), assigning each hotel a credibility rating (A+ to B-) based on verified review data.',
            tech: ['Frontend: HTML5, CSS3, JavaScript, Jinja (Flask templating)', 'Backend: Python, Flask', 'AI/NLP: Transformer models, NLTK Lexicon Algorithm', 'Data Scraping: BeautifulSoup (for hotel review data)', 'Visualization: Star-based review metrics and letter-grade ratings'],
            features: [
              'AI-generated review detection via NLP transformers',
              'HonestStay hotel rating system',
              'Detailed review insights and sentiment metrics',
              'Real-time search and data filtering',
              'Modern, user-friendly web interface'
            ],
            role: 'Developed an AI-powered platform for detecting fake hotel reviews using NLP and sentiment analysis.',
            achievement: 'Successfully created a tool that helps users make more informed booking decisions by filtering out AI-generated content.',
            images: ['honestystay1.jpg', 'honestystay2.jpg', 'honestystay3.jpg', 'honestystay4.jpg', 'honestystay5.jpg', 'honestystay6.jpg', 'honestystay7.jpg']
          };
          break;
        case 'smartwatch':
          projectData = {
            title: 'Smartwatch Step-Tracker',
            description: 'Developed a wearable smartwatch using the TinyDuino platform that tracks the number of steps taken, calories burnt, and distance travelled by the user. An accompanying Android application was built to visualize the data in real-time. This project combined both hardware and software development, bridging embedded systems with mobile app integration.',
            tech: ['Hardware: TinyDuino Platform', 'Embedded Programming: C++, Arduino IDE', 'Mobile Development: Android Studio, Java', 'Integration: Communication between smartwatch and mobile app', 'Real-time Data Sync: Live fitness metrics visualization'],
            features: [
              'Hardware Development: Built a functional smartwatch using TinyDuino modules',
              'Embedded Programming: Implemented step detection and tracking using C++ on Arduino IDE',
              'Mobile App: Designed an Android application to display live fitness metrics',
              'Integration: Enabled communication between smartwatch and mobile app for real-time data sync'
            ],
            role: 'Developed a complete wearable fitness tracking system combining hardware and software components.',
            achievement: 'Successfully created a functional smartwatch with real-time data visualization through mobile app integration.',
            images: ['smartwatch1.jpg', 'smartwatch2.jpg']
                      };
            break;
          case 'shoe-inventory':
            projectData = {
              title: 'Shoe Inventory Management System',
              description: 'A web-based NoSQL inventory management system built for shoe retailers to track stock levels, sales, and user data across multiple store locations. Designed to address challenges like overstocking, stockouts, and inconsistent inventory data, the system provides real-time analytics and streamlined CRUD operations.',
              tech: ['Backend: PHP', 'Frontend: HTML, CSS, JavaScript, Bootstrap', 'Database: MongoDB Atlas (NoSQL)', 'Tools: Git, Data Analytics', 'Concepts: NoSQL schema design, indexing, concurrency handling, performance optimization, cloud deployment'],
              features: [
                'Backend Development: Built using PHP to manage CRUD operations for inventory, users, and sales records',
                'Frontend Development: Implemented using HTML, CSS, JavaScript, and Bootstrap to provide a responsive and intuitive UI',
                'Database: Used MongoDB Atlas, a fully managed cloud NoSQL database, with five key collections (Products, Stocks, Stores, Orders, Users)',
                'Analytics & Reporting: Designed dashboards with features like revenue comparison, stock-to-sales ratio, and product performance',
                'Advanced Features: Indexing for query performance, optimistic concurrency control for simultaneous edits, pagination for scalable data retrieval',
                'Dataset: Populated using Kaggle\'s Shein footwear dataset and custom-generated data with Python scripts'
              ],
              role: 'Developed a comprehensive NoSQL inventory management system with real-time analytics and CRUD operations.',
              achievement: 'Successfully created a scalable solution for inventory tracking with advanced features like concurrency control and performance optimization.',
              images: ['ShoeInventory1.jpg', 'ShoeInventory2.jpg', 'ShoeInventory3.jpg', 'ShoeInventory4.jpg', 'ShoeInventory5.jpg', 'ShoeInventory6.jpg']
            };
            break;
        }
  
  // Populate modal content
  modalContent.innerHTML = `
    <h2 class="modal-project-title">${projectData.title}</h2>
    <p class="modal-project-description">${projectData.description}</p>
    
    <div class="modal-project-tech">
      ${projectData.tech.map(tech => `<span>${tech}</span>`).join('')}
    </div>
    
    <div class="modal-project-features">
      <h4>Key Features:</h4>
      <ul>
        ${projectData.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    </div>
    
    ${projectId !== 'ippt' ? `
      <div class="modal-project-role">
        <h4>My Role:</h4>
        <p>${projectData.role}</p>
      </div>
    ` : ''}
    
    <div class="modal-project-achievement">
      <p><strong>Achievement:</strong> ${projectData.achievement}</p>
    </div>
    
    ${projectData.images.length > 0 ? `
      <div class="modal-project-gallery">
        ${projectData.images.map(img => `
          <img src="${img}" alt="Project Screenshot" class="modal-gallery-img" onclick="openImageModal('${img}')" onerror="this.style.display='none';">
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
