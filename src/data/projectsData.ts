export const projectsData = [
  {
    id: 1,
    title: 'Buoyancy Surveillance Platform',
    slug: 'buoyancy-surveillance-platform',
    category: 'hardware',
    image: 'https://images.unsplash.com/photo-1511174944925-a99f10911d45?ixlib=rb-4.0.3',
    client: 'Smart India Hackathon',
    year: '2023',
    description: 'A portable buoyancy platform designed for area-specific surveillance, showcased at the Smart India Hackathon.',
    challenge: 'The project aimed to create an efficient and portable surveillance solution for water bodies, requiring a balance between buoyancy, stability, and surveillance capabilities.',
    solution: 'Developed a comprehensive platform using Unity for simulation, SolidWorks for mechanical design, and custom electronics for control systems. The solution focused on portability and efficiency in surveillance operations.',
    features: [
      'Portable and easy to deploy design',
      'Enhanced surveillance efficiency by 30%',
      'Real-time monitoring capabilities',
      'Integrated electronic control systems',
      'Unity-based simulation interface'
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/ritavkashyap123/SIH_Blimp',
        icon: 'FaGithub'
      },
      {
        name: 'Video',
        url: 'https://drive.google.com/file/d/18oNEfwFear7uTOpfWm8a9HiXl8LXSxDS/view?usp=sharing',
        icon: 'FaYoutube'
      },
      {
        name: 'Certificate',
        url: 'https://drive.google.com/file/d/11R_9wu7gi5xh7EKJ6wlAkTB8TL3xXssF/view?usp=sharing',
        icon: 'FaCertificate'
      },
      {
        name: 'Photo',
        url: 'https://drive.google.com/file/d/1vcqKe4OjRbGyftZmqYrA-9TrvUsKisK9/view?usp=sharing',
        icon: 'FaImage'
      }
    ],
    technologies: ['Unity', 'SolidWorks', 'Electronics', 'Control Systems'],
    results: 'The platform was successfully showcased at the Smart India Hackathon, organized by MHRD and GOI, standing out among 100+ participants. The project demonstrated significant improvements in surveillance efficiency.',
    testimonial: {
      quote: "The buoyancy platform showcased innovative thinking and practical application in surveillance technology.",
      author: "Smart India Hackathon Judge",
      position: "Technical Evaluator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1511174944925-a99f10911d45?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1511174944925-a99f10911d45?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 2,
    title: 'Precision Soil Moisture Sensor',
    slug: 'precision-soil-moisture-sensor',
    category: 'hardware',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3',
    client: 'Research Project',
    year: '2023',
    description: 'A custom-made capacitive soil moisture sensor with 98.4% accuracy, developed through comprehensive material testing and calibration.',
    challenge: 'Creating a highly accurate soil moisture sensor required extensive material testing, pattern optimization, and precise calibration for different soil types.',
    solution: 'Implemented a two-phase development approach: first using COMSOL Multiphysics for material and pattern testing, followed by in-house fabrication and microcontroller integration.',
    features: [
      '98.4% measurement accuracy',
      'Calibrated for multiple soil types (Clay, Silt, Sandy)',
      'OLED display integration',
      'Custom fabrication process',
      'Research paper publication'
    ],
    technologies: ['COMSOL Multiphysics', 'Python', 'Microcontroller', 'Electronics'],
    results: 'Successfully developed and validated a high-precision soil moisture sensor with comprehensive research documentation and practical applications in agriculture.',
    testimonial: {
      quote: "The research demonstrates significant advancement in soil moisture sensing technology with impressive accuracy.",
      author: "Research Supervisor",
      position: "Project Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 3,
    title: 'Krishi Vikash',
    slug: 'krishi-vikash',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1592982537447-6c24a3bdddb6?ixlib=rb-4.0.3',
    client: 'Agriculture Tech',
    year: '2023',
    description: 'A precision agriculture mobile application providing AI-driven crop recommendations and e-commerce capabilities for small-scale farmers.',
    challenge: 'Small-scale farmers needed access to modern agricultural practices and market opportunities, requiring a comprehensive mobile solution.',
    solution: 'Developed a Flutter-based application integrating AI-driven recommendations, real-time climate data, and an e-commerce platform to support farmers.',
    features: [
      'AI-powered crop recommendations',
      'Real-time climate monitoring',
      'Soil analytics integration',
      'E-commerce platform for farmers',
      'Automated farming practices'
    ],
    technologies: ['Flutter', 'MongoDB', 'AI/ML', 'Climate APIs'],
    results: 'Successfully deployed a comprehensive agricultural solution that helps small-scale farmers implement modern farming practices and access market opportunities.',
    testimonial: {
      quote: "Krishi Vikash has revolutionized how we approach farming with its smart recommendations and market access.",
      author: "Local Farmer",
      position: "Early Adopter",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1592982537447-6c24a3bdddb6?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1592982537447-6c24a3bdddb6?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 4,
    title: 'Prestoclean',
    slug: 'prestoclean',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3',
    client: 'Cleaning Services',
    year: '2023',
    description: 'A comprehensive MERN stack e-commerce platform for cleaning services, featuring an animated landing page and admin dashboard.',
    challenge: 'The cleaning service industry needed a modern, efficient platform to manage multiple services and improve service accessibility.',
    solution: 'Built a full-stack solution using MERN stack with GSAP animations and Chakra UI, deployed on Hostinger for optimal performance.',
    features: [
      'Integration of 6 distinct cleaning services',
      'Animated landing page with GSAP',
      'Chakra UI admin dashboard',
      'Full e-commerce functionality',
      'Service accessibility improved by 40%'
    ],
    technologies: ['React', 'Express.js', 'MongoDB', 'Node.js', 'GSAP', 'Chakra UI'],
    results: 'Successfully launched a modern e-commerce platform that streamlined service delivery and improved user experience significantly.',
    testimonial: {
      quote: "Prestoclean has transformed our service delivery and customer engagement.",
      author: "Service Manager",
      position: "Operations Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 5,
    title: 'High-Speed Line Following Robot',
    slug: 'line-following-robot',
    category: 'hardware',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3',
    client: 'Robotics Project',
    year: '2023',
    description: "India's leading high-speed line following robot with advanced maze-solving capabilities.",
    challenge: 'Creating a robot capable of high-speed line following while maintaining accuracy and solving complex mazes required sophisticated control systems.',
    solution: 'Engineered a robot using Arduino and advanced sensors, implementing real-time algorithms for precise control and navigation.',
    features: [
      'High-speed line following capability',
      'Complex maze solving algorithms',
      'Real-time sensor processing',
      'Precision control systems',
      'Advanced navigation features'
    ],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/username/buoyancy-platform',
        icon: 'FaGithub'
      },
      {
        name: 'Documentation',
        url: 'https://docs.buoyancy-platform.com',
        icon: 'FaBook'
      },
      {
        name: 'Demo Video',
        url: 'https://youtube.com/watch?v=demo',
        icon: 'FaYoutube'
      }
    ],
    technologies: ['Arduino', 'Electronics', 'Sensors', 'Control Systems'],
    results: 'Developed one of India\'s leading line following robots, demonstrating superior performance in speed and maze-solving capabilities.',
    testimonial: {
      quote: "The robot's performance in both speed and accuracy is truly remarkable.",
      author: "Robotics Competition Judge",
      position: "Technical Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 6,
    title: 'Robo Pup',
    slug: 'robo-pup',
    category: 'hardware',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3',
    client: 'Research Project',
    year: '2023',
    description: 'A clone of Boston Dynamics\' Spot robot dog, featuring ROS integration and future ML capabilities.',
    challenge: 'Replicating the complex mechanics and control systems of an advanced quadruped robot while preparing for future AI integration.',
    solution: 'Developed a robotic platform using ROS and Python, with architecture supporting future machine learning implementation.',
    features: [
      'Quadruped locomotion system',
      'ROS-based control architecture',
      'Python implementation',
      'Prepared for ML integration',
      'Object detection capabilities'
    ],
    technologies: ['ROS', 'Python', 'Robotics', 'Machine Learning'],
    results: 'Successfully created a functional quadruped robot with the foundation for advanced AI capabilities.',
    testimonial: {
      quote: "An impressive implementation of quadruped robotics with great potential for AI integration.",
      author: "Robotics Researcher",
      position: "Project Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 7,
    title: 'Interactive Dashboard',
    slug: 'interactive-dashboard',
    category: "website",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
    client: 'Personal Project',
    year: '2023',
    description: 'A responsive and interactive dashboard with advanced filtering capabilities and data visualization features.',
    challenge: 'Creating an intuitive and efficient dashboard interface that could handle multiple data types and provide comprehensive filtering options.',
    solution: 'Developed a React-based dashboard with custom components for sidebar navigation, dropdown menus, and advanced filtering system.',
    features: [
      'Custom-built sidebar navigation',
      'Advanced filtering system',
      'Interactive data visualization',
      '20+ dummy data entries for testing',
      'Responsive design across devices'
    ],
    technologies: ['React', 'Vercel', 'TypeScript', 'Data Visualization Libraries'],
    results: 'Successfully deployed a fully functional dashboard that enhances user interaction and data visualization capabilities.',
    testimonial: {
      quote: "The dashboard's intuitive design and powerful filtering capabilities make data analysis a breeze.",
      author: "Project Reviewer",
      position: "Senior Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 8,
    title: 'Micromouse Simulator',
    slug: 'micromouse-simulator',
    category: "software",
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3',
    client: 'Educational Project',
    year: '2023',
    description: 'A simulation environment for testing and developing micromouse maze-solving algorithms.',
    challenge: 'Creating an accurate simulation platform for testing maze-solving algorithms before implementing them on physical micromouse robots.',
    solution: 'Developed a comprehensive simulator that allows testing of different maze-solving algorithms and robot behaviors in a virtual environment.',
    features: [
      'Virtual maze generation',
      'Algorithm visualization',
      'Performance metrics tracking',
      'Multiple algorithm support',
      'Real-time simulation controls'
    ],
    technologies: ['Python', 'Simulation Libraries', 'Path Planning Algorithms'],
    results: 'Created a valuable tool for testing and optimizing micromouse algorithms before physical implementation.',
    testimonial: {
      quote: "This simulator has become an essential tool for our robotics team's algorithm development.",
      author: "Robotics Team Lead",
      position: "Education Institution",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 9,
    title: 'Xarothi - Posture Correction Platform',
    slug: 'xarothi',
    category: "website",
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3',
    client: 'Health Tech',
    year: '2023',
    description: 'A web platform for real-time posture correction during yoga, exercise, and gym activities.',
    challenge: 'Developing an accessible solution for users to improve their posture during physical activities without professional supervision.',
    solution: 'Created a web-based platform that uses computer vision to analyze and provide real-time feedback on user posture during exercises.',
    features: [
      'Real-time posture analysis',
      'Exercise form guidance',
      'Yoga pose correction',
      'Progress tracking',
      'Personalized recommendations'
    ],
    technologies: ['React', 'TensorFlow.js', 'Computer Vision', 'WebRTC'],
    results: 'Successfully launched a platform that helps users maintain proper form during physical activities, reducing the risk of injury.',
    testimonial: {
      quote: "Xarothi has significantly improved how our members maintain proper form during workouts.",
      author: "Fitness Instructor",
      position: "Wellness Center",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 10,
    title: 'AEC Cabin',
    slug: 'aec-cabin',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3',
    client: 'app',
    year: '2023',
    description: 'A comprehensive mobile application for food delivery and attendance management in college canteens.',
    challenge: 'Streamlining food ordering and attendance tracking in college canteens to reduce wait times and improve service efficiency.',
    solution: 'Developed a React Native application that combines food delivery services with an attendance management system.',
    features: [
      'Mobile food ordering system',
      'Real-time order tracking',
      'Digital attendance management',
      'Queue management',
      'Payment integration'
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'Payment Gateway'],
    results: 'Successfully implemented in college canteens, reducing wait times and improving service efficiency.',
    testimonial: {
      quote: "AEC Cabin has revolutionized how our canteen handles orders and attendance.",
      author: "Canteen Manager",
      position: "College Administration",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 11,
    title: 'Special Valentine Wish',
    slug: 'special-valentine-wish',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3',
    client: 'Personal Project',
    year: '2023',
    description: 'A creative web application designed to deliver a unique and interactive Valentine\'s Day message.',
    challenge: 'Creating an engaging and personalized digital experience for expressing Valentine\'s Day wishes.',
    solution: 'Developed an interactive web application with animations and personalized content delivery.',
    features: [
      'Interactive animations',
      'Personalized message display',
      'Custom visual effects',
      'Mobile responsive design',
      'Social sharing capabilities'
    ],
    technologies: ['JavaScript', 'CSS Animations', 'HTML5', 'Web Animations API'],
    results: 'Created a memorable digital experience that successfully delivered a personal message in a unique way.',
    testimonial: {
      quote: "A truly creative way to express feelings through technology.",
      author: "Project Recipient",
      position: "Valentine's Day",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 12,
    title: 'Portfolio Collection',
    slug: 'portfolio-collection',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
    client: 'Personal Projects',
    year: '2023',
    description: 'A series of portfolio websites showcasing different design approaches and technical implementations.',
    challenge: 'Creating multiple unique portfolio presentations while maintaining professional standards and optimal performance.',
    solution: 'Developed various portfolio websites using different technologies and design approaches to showcase versatility.',
    features: [
      'Multiple design variations',
      'Interactive user interfaces',
      'Responsive layouts',
      'Performance optimization',
      'Modern web technologies'
    ],
    technologies: ['React', 'Next.js', 'Three.js', 'Tailwind CSS', 'GSAP'],
    results: 'Successfully created a diverse collection of portfolio websites demonstrating various technical and design capabilities.',
    testimonial: {
      quote: "Each portfolio design shows unique creativity while maintaining professional standards.",
      author: "Design Reviewer",
      position: "Web Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 13,
    title: '3D Design Portfolio',
    slug: '3d-design-portfolio',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1631544114506-c920f0c6e03a?ixlib=rb-4.0.3',
    client: 'Various Projects',
    year: '2023',
    description: 'A comprehensive collection of 3D design projects created using AutoCAD and SolidWorks.',
    challenge: 'Creating diverse 3D designs for various applications while maintaining precision and professional standards.',
    solution: 'Utilized advanced CAD tools to create detailed 3D models and technical drawings for different applications.',
    features: [
      'Mechanical component designs',
      'Assembly models',
      'Technical drawings',
      'Parametric modeling',
      'Design optimization'
    ],
    technologies: ['AutoCAD', 'SolidWorks', '3D Modeling', 'Technical Drawing'],
    results: 'Successfully completed multiple 3D design projects demonstrating proficiency in professional CAD tools.',
    testimonial: {
      quote: "The 3D designs show excellent attention to detail and technical accuracy.",
      author: "Design Engineer",
      position: "Manufacturing Industry",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1631544114506-c920f0c6e03a?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1631544114506-c920f0c6e03a?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 14,
    title: 'Engineering Simulation Projects',
    slug: 'engineering-simulation-projects',
    category: 'hardware',
    image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3',
    client: 'College Projects',
    year: '2023',
    description: 'A collection of engineering projects utilizing MATLAB, Multisim, and Proteus for various simulations and analyses.',
    challenge: 'Conducting complex engineering simulations and analyses for various academic and research projects.',
    solution: 'Implemented multiple simulation projects using professional engineering software tools for circuit design and system analysis.',
    features: [
      'Circuit simulations',
      'System modeling',
      'Data analysis',
      'Performance optimization',
      'Technical documentation'
    ],
    technologies: ['MATLAB', 'Multisim', 'Proteus', 'Circuit Design'],
    results: 'Successfully completed various engineering simulations and analyses, contributing to academic research and learning.',
    testimonial: {
      quote: "The simulation projects demonstrate strong technical understanding and analytical skills.",
      author: "Professor",
      position: "Engineering Department",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    gallery: [
      'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3'
    ]
  }
];
