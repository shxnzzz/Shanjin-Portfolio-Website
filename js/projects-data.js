// All project content lives here. index.html, project.html and other-projects.html read from it.
// links: leave github or demo as '' to hide that button.
// images: a path, or { src, caption } to show a caption on the project page.
// cover: one image, or a list of images shown side by side (good for phone screenshots). Leave out for a plain tile.

const FEATURED_PROJECTS = ['smart-study-space', 'ai-job', 'ippt', 'psa-automation'];

const OTHER_PROJECTS = ['agent-cfo', 'inventory', 'inventory-web', 'healthy-hero', 'easyvpn', 'honestystay', 'smartwatch', 'shoe-inventory'];

const PROJECTS = {
  'smart-study-space': {
    title: 'Smart Study Space (Edge AI Seat & Noise Monitor)',
    context: 'Team of 5 · Edge computing · 2026',
    problem: 'Students walk from room to room looking for a free seat, and bags left on chairs make seats look taken when nobody is there.',
    built: 'A three-Raspberry-Pi edge system that spots people with YOLO, senses belongings with ultrasonic sensors, and shows live seat and noise status on a React dashboard. I built the dashboard.',
    cardTech: ['Raspberry Pi', 'YOLOv11', 'MQTT', 'AWS', 'React'],
    cover: 'images/projects/smart-study-space/smartstudy-0-concept.png',
    description: 'A real-time edge computing system that shows students which study areas have free seats and how noisy they are. Built by a team of five, it runs on-device AI inference and sensor fusion across three Raspberry Pis, with a serverless AWS dashboard.',
    tech: ['Raspberry Pi', 'YOLOv11-Nano (ONNX)', 'OpenCV', 'MQTT', 'AWS Lambda, API Gateway, DynamoDB, S3', 'React', 'WebSockets'],
    features: [
      'Three-node Raspberry Pi system: YOLOv11-Nano people detection with mic-based noise measurement, ultrasonic seat sensing, and an MQTT gateway that combines both data sources',
      'Solves the "chope" problem (a bag or laptop left on a seat to hold it) by fusing camera and sensor data, so each seat is labelled occupied, reserved or vacant',
      'Designed for graceful degradation: if a node goes silent for over 60 seconds, the gateway switches to whichever data source is still working. A circuit breaker pauses cloud uploads when Wi-Fi drops, and a local dashboard keeps working offline',
      'Data goes to the cloud through API Gateway, Lambda and DynamoDB, and a responsive React dashboard on S3 shows it',
      'Found that uncapped inference made the Pi overheat and slow down within 10 minutes, and fixed it by capping the frame rate. Profiling also showed the sensor node was overpowered for its job, so a cheaper ESP32 board would do'
    ],
    role: 'Redesigned the React dashboard: connected it to the AWS API, built the ambient noise meter, and made the mobile layout with compact room cards.',
    achievement: 'End-to-end latency of about 1.6 seconds, within the 2-second target.',
    links: { github: 'https://github.com/shxnzzz/smart-study-space', demo: '' },
    images: [
      { src: 'images/projects/smart-study-space/smartstudy-0-concept.png', caption: 'Concept illustration of how the system works (not a real deployment)' },
      { src: 'images/projects/smart-study-space/smartstudy-1-dashboard.png', caption: 'The real dashboard on desktop' },
      { src: 'images/projects/smart-study-space/smartstudy-2-mobile.png', caption: 'Mobile view: all rooms' },
      { src: 'images/projects/smart-study-space/smartstudy-3-mobile-room.png', caption: 'Mobile view: one room in detail' },
      { src: 'images/projects/smart-study-space/smartstudy-4-architecture.png', caption: 'System architecture: device, edge and cloud layers' }
    ]
  },

  'ai-job': {
    title: 'JobCupid: AI Job Matching Platform',
    context: 'NUS Guru AI Innovation Hackathon · rebuilt and deployed',
    problem: 'Job hunting means hours of searching job boards and checking each listing against your resume by hand.',
    built: 'A full-stack app that reads one resume upload, finds live openings in Singapore and ranks them by fit, with one-click AI cover letters. Results come back in about 6 seconds.',
    cardTech: ['Next.js', 'React', 'Node.js', 'Python', 'OpenAI API'],
    cover: 'images/projects/ai-job-matching/jobcupid-6-results.png',
    description: 'A full-stack job-matching app that turns a single resume upload into a ranked list of live job openings, replacing hours of manual searching.',
    tech: ['Next.js', 'React', 'Node.js / Express', 'Python', 'OpenAI API'],
    features: [
      'LLM extraction of skills, seniority and suitable job titles from PDF resumes, using structured JSON outputs with server-side validation and prompt-injection safeguards',
      'Ranking that combines OpenAI embedding similarity (70%) with whole-word skill matching (30%), plus de-duplication',
      'Cut job-board requests per upload from up to 29 to 5, with results back in about 6 seconds',
      'Production hardening: strict PDF validation, temporary file cleanup, per-IP rate limiting, CORS restrictions and secrets kept in environment variables',
      'Accessible, mobile-first interface with editable AI results, pagination, loading and error states, and one-click AI cover letters'
    ],
    role: 'Built the full-stack app, from resume parsing and the ranking pipeline through to the production backend and the interface.',
    achievement: 'Awarded a Certificate of Excellence at the NUS Guru AI Innovation Hackathon 2025.',
    links: { github: 'https://github.com/shxnzzz/JobCupid-', demo: 'https://job-cupid-one.vercel.app/' },
    images: [
      { src: 'images/projects/ai-job-matching/jobcupid-1-home.png', caption: 'Home page' },
      { src: 'images/projects/ai-job-matching/jobcupid-2-upload.png', caption: 'Upload a PDF resume' },
      { src: 'images/projects/ai-job-matching/jobcupid-3-file.png', caption: 'Resume selected' },
      { src: 'images/projects/ai-job-matching/jobcupid-4-analysing.png', caption: 'The AI reads the resume' },
      { src: 'images/projects/ai-job-matching/jobcupid-5-profile.png', caption: 'Editable profile: job titles and skills picked up by the AI' },
      { src: 'images/projects/ai-job-matching/jobcupid-6-results.png', caption: 'Ranked job matches, with how the score is worked out' },
      { src: 'images/projects/ai-job-matching/jobcupid-7-cover-letter.png', caption: 'One-click AI cover letter' }
    ]
  },

  'ippt': {
    title: 'Interactive Physical Proficiency Trainer (IPPT Fitness App)',
    context: 'Team project · Android · 2025',
    problem: 'Training for the IPPT fitness test on your own gives no feedback on whether your push-ups and sit-ups would count, or how your 2.4 km pace is going.',
    built: 'An Android app that counts push-up and sit-up reps and checks form in real time with on-device pose detection, shows AR form tutorials, and tracks 2.4 km runs by GPS.',
    cardTech: ['Android', 'Kotlin', 'MediaPipe', 'ARCore', 'Google Maps'],
    cover: 'images/projects/ippt/ippt-cover.jpg',
    description: 'An AI-powered Android app that helps users improve their IPPT performance. It uses camera-based pose detection to check form and count push-ups and sit-ups in real time, tracks runs by GPS, and shows AR tutorials for correct form. Users get a summary of each workout, so training is measurable.',
    tech: ['Android Development: Kotlin, Jetpack Compose', 'AI & Pose Detection: MediaPipe, TensorFlow Lite', 'Augmented Reality: ARCore', 'Location Services: Google Maps SDK, GPS tracking', 'Data Storage & State Management: Room DB, ViewModel, LiveData', 'UI/UX: Material Design, custom animations', 'Testing & Debugging: Android Emulator, Espresso'],
    features: [
      'Real-time push-up & sit-up tracking using Google ML Kit Pose Detection',
      'AR tutorials for correct form via Google Scene Viewer',
      'GPS-based 2.4km run tracking with live pace, distance & route via Google Maps',
      'Offline workout summary storage using Room database'
    ],
    role: 'Developed the full running tracker module, integrating GPS, live tracking, pace calculation, and route visualization.',
    hideRole: true,
    achievement: 'Over 90% detection accuracy and high user satisfaction in usability tests.',
    links: { github: 'https://github.com/shxnzzz/ippt-fitness-tracker', demo: '' },
    images: [
      { src: 'images/projects/ippt/ippt-home.jpg', caption: 'Home screen' },
      { src: 'images/projects/ippt/ippt-pushup.jpg', caption: 'Push-up tracking with pose detection' },
      { src: 'images/projects/ippt/ippt-situp.jpg', caption: 'Sit-up tracking with pose detection' },
      { src: 'images/projects/ippt/ippt-run.jpg', caption: '2.4 km run tracking' },
      { src: 'images/projects/ippt/ippt-summary.jpg', caption: 'Workout summary' }
    ]
  },

  'psa-automation': {
    title: 'Port Systems E2E Test Automation (PSA International)',
    context: 'Internship · PSA International · 2026',
    problem: 'After Global PORTNET\'s cargo and vessel modules moved from UAT to production, the team needed a repeatable way to prove they still worked against the real systems.',
    built: 'Playwright and TypeScript test suites that drive the live portal through SSO and check each result three ways: on screen, in the database and in the audit events, with automatic evidence reports.',
    cardTech: ['Playwright', 'TypeScript', 'Page Object Model', 'SQL', 'Kafka'],
    coverIcon: 'fa-vials',
    description: 'End-to-end test automation built during my internship at PSA International for Global PORTNET, the platform that handles cargo and vessel operations at the port. The suites drive the real portal through SSO and check every result beyond what is shown on screen.',
    tech: ['Playwright', 'TypeScript', 'Page Object Model', 'SQL', 'Kafka', 'Azure DevOps'],
    features: [
      'Playwright and TypeScript suites using the Page Object Model, covering port-side cargo import/export and vessel-side operations modules',
      'Three-layer verification for each test: UI behaviour, read-only SQL checks against the database, and audit-event assertions',
      'Runs against real SSO and backends rather than mocks, with automatic test-data cleanup and generated evidence reports',
      'Kafka message injection to drive event-based flows, with tests tagged into smoke, regression and end-to-end runs',
      'Found defects through automation, including date parsing errors, timezone off-by-one bugs, wrong-row updates and duplicate-key clashes'
    ],
    role: 'Designed and built the suites end to end: page objects, database and audit checks, test-data cleanup and reporting.',
    achievement: 'Gives the team repeatable automated checks with evidence reports for each module, and surfaced defects that were then fixed.',
    links: { github: '', demo: '' },
    images: []
  },

  'agent-cfo': {
    title: 'Agent CFO – RAG Financial Agent',
    cardTech: ['Python', 'RAG', 'BM25', 'Vector Search', 'LLMs'],
    description: 'A retrieval-augmented generation (RAG) agent built for a DBS challenge. It answers questions by retrieving relevant passages with a hybrid approach that combines BM25 keyword search with vector embeddings before passing them to a large language model.',
    tech: ['Python', 'RAG', 'BM25', 'Vector Search', 'Embeddings', 'LLMs'],
    features: [
      'Hybrid retrieval combining BM25 keyword search with vector embeddings',
      'LLM-generated answers grounded in retrieved passages',
      'Retrieval quality evaluated with Recall@K and MRR',
      'Side-by-side comparison and tuning of retrieval strategies'
    ],
    role: 'Built the RAG agent and its hybrid retrieval pipeline, and evaluated retrieval strategies with Recall@K and MRR.',
    achievement: 'Delivered a working hybrid-retrieval agent for the DBS challenge, with measurable retrieval quality.',
    links: { github: '', demo: '' },
    images: []
  },

  'inventory': {
    title: 'Inventory Management Mobile App',
    cardTech: ['React Native', 'Barcode Scanning', 'Push Notifications'],
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
    links: { github: '', demo: '' },
    images: []
  },

  'inventory-web': {
    title: 'Inventory Management Website',
    cardTech: ['Web Development', 'Inventory Tracking', 'Analytics'],
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
    links: { github: '', demo: '' },
    images: ['images/projects/inventory-web/inventoryweb1.jpg', 'images/projects/inventory-web/inventoryweb2.jpg', 'images/projects/inventory-web/inventoryweb3.jpg', 'images/projects/inventory-web/inventoryweb4.jpg']
  },

  'healthy-hero': {
    title: 'Healthy Hero - Object-Oriented 2D Game Engine',
    cardTech: ['Java', 'LibGDX', 'LWJGL', 'OOP', 'SOLID'],
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
    links: { github: '', demo: '' },
    images: ['images/projects/healthy-hero/healthy-hero-home.jpg', 'images/projects/healthy-hero/healthy-hero-menu1.jpg', 'images/projects/healthy-hero/healthy-hero-menu2.jpg', 'images/projects/healthy-hero/healthy-hero-game.jpg']
  },

  'easyvpn': {
    title: 'EasyVPN: Secure Web Access Platform',
    cardTech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'AJAX'],
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
    links: { github: '', demo: '' },
    images: ['images/projects/easyvpn/VPNWeb1.jpg', 'images/projects/easyvpn/VPNWeb2.jpg', 'images/projects/easyvpn/VPNWeb3.jpg', 'images/projects/easyvpn/VPNWeb4.jpg']
  },

  'honestystay': {
    title: 'HonestStay – AI-Powered Hotel Review Credibility Platform',
    cardTech: ['Python', 'Flask', 'NLP', 'AI', 'CSS3'],
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
    links: { github: '', demo: '' },
    images: ['images/projects/honestystay/honestystay1.jpg', 'images/projects/honestystay/honestystay2.jpg', 'images/projects/honestystay/honestystay3.jpg', 'images/projects/honestystay/honestystay4.jpg', 'images/projects/honestystay/honestystay5.jpg', 'images/projects/honestystay/honestystay6.jpg', 'images/projects/honestystay/honestystay7.jpg']
  },

  'smartwatch': {
    title: 'Smartwatch Step-Tracker',
    cardTech: ['C++', 'Arduino', 'Android', 'Java', 'TinyDuino'],
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
    links: { github: '', demo: '' },
    images: ['images/projects/smartwatch/smartwatch1.jpg', 'images/projects/smartwatch/smartwatch2.jpg']
  },

  'shoe-inventory': {
    title: 'Shoe Inventory Management System',
    cardTech: ['MongoDB', 'PHP', 'JavaScript', 'Bootstrap', 'NoSQL'],
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
    links: { github: '', demo: '' },
    images: ['images/projects/shoe-inventory/ShoeInventory1.jpg', 'images/projects/shoe-inventory/ShoeInventory2.jpg', 'images/projects/shoe-inventory/ShoeInventory3.jpg', 'images/projects/shoe-inventory/ShoeInventory4.jpg', 'images/projects/shoe-inventory/ShoeInventory5.jpg', 'images/projects/shoe-inventory/ShoeInventory6.jpg']
  }
};
