export const servicesData = [
  {
    id: 1,
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'I design intuitive user interfaces and experiences that engage users and make digital products easy and enjoyable to use.',
    color: 'from-blue-600 to-blue-500',
    icon: 'uiux',
    fullDescription: `
      <p>Great digital products are both beautiful and functional. I create user-centered designs that not only look stunning but also provide seamless, intuitive experiences that keep users coming back.</p>
      
      <p>My UI/UX design services include:</p>
    `,
    features: [
      {
        title: 'User Research',
        description: 'I conduct research to understand your users\' needs, behaviors, and pain points to inform design decisions.'
      },
      {
        title: 'Information Architecture',
        description: 'I organize content and functionality in a way that\'s logical and intuitive for users to navigate.'
      },
      {
        title: 'Wireframing & Prototyping',
        description: 'I create low and high-fidelity prototypes to visualize the user experience and test concepts before development.'
      },
      {
        title: 'Visual Design',
        description: 'I craft beautiful, on-brand interfaces with attention to typography, color, layout, and micro-interactions.'
      },
      {
        title: 'Usability Testing',
        description: 'I validate designs with real users to identify issues and opportunities for improvement.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Research',
        description: 'I begin by understanding your business goals and conducting user research to identify needs and opportunities.'
      },
      {
        step: 2,
        title: 'Information Architecture',
        description: 'I organize content and functionality in a logical structure, creating sitemaps and user flows.'
      },
      {
        step: 3,
        title: 'Wireframing',
        description: 'I create low-fidelity wireframes to establish layout and functionality without the distraction of visual design.'
      },
      {
        step: 4,
        title: 'Visual Design',
        description: 'I develop the visual language of your product, applying your brand to create beautiful, consistent interfaces.'
      },
      {
        step: 5,
        title: 'Prototyping & Testing',
        description: 'I create interactive prototypes and test with users to validate designs and identify improvements.'
      }
    ],
    testimonial: {
      quote: "Ritav redesigned our app interface, making it not only more visually appealing but significantly more intuitive. Our user engagement metrics have improved dramatically.",
      author: "Michael Chen",
      position: "Product Manager, Tech Innovations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    caseStudies: [2, 4],
    faq: [
      {
        question: "What's the difference between UI and UX design?",
        answer: "UX (User Experience) design focuses on the overall feel and functionality of a product, while UI (User Interface) design focuses on the visual elements users interact with. I provide both to create products that are both functional and beautiful."
      },
      {
        question: "Do you work with development teams?",
        answer: "Yes, I collaborate closely with developers to ensure designs are implemented accurately. I can provide detailed specifications, style guides, and assets to facilitate the development process."
      },
      {
        question: "How do you approach responsive design?",
        answer: "I design with a mobile-first approach, ensuring interfaces work seamlessly across all device sizes. I create responsive layouts that adapt to different screen dimensions while maintaining usability and visual integrity."
      }
    ]
  },
  {
    id: 2,
    title: 'WordPress Development',
    slug: 'wordpress-development',
    description: 'I build and customize WordPress websites that are user-friendly, responsive, and tailored to your business needs.',
    color: 'from-orange-600 to-orange-500',
    icon: 'wordpress',
    fullDescription: `
      <p>WordPress is a powerful platform for creating websites. I specialize in developing custom themes and plugins that enhance functionality and user experience.</p>
      
      <p>My WordPress development services include:</p>
    `,
    features: [
      {
        title: 'Custom Theme Development',
        description: 'I create unique WordPress themes that reflect your brand and provide a seamless user experience.'
      },
      {
        title: 'Plugin Development',
        description: 'I develop custom plugins to add specific features and functionalities to your website.'
      },
      {
        title: 'E-commerce Solutions',
        description: 'I build online stores using WooCommerce, ensuring a smooth shopping experience for your customers.'
      },
      {
        title: 'Website Maintenance',
        description: 'I offer ongoing support and maintenance services to keep your WordPress site secure and up-to-date.'
      },
      {
        title: 'SEO Optimization',
        description: 'I implement SEO best practices to improve your website’s visibility and search engine rankings.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'I start with a consultation to understand your requirements and goals for your WordPress site.'
      },
      {
        step: 2,
        title: 'Design & Development',
        description: 'I design and develop your WordPress site, ensuring it meets your specifications and is user-friendly.'
      },
      {
        step: 3,
        title: 'Testing',
        description: 'I conduct thorough testing to ensure your site functions correctly across all devices and browsers.'
      },
      {
        step: 4,
        title: 'Launch',
        description: 'I launch your website and provide training on how to manage and update your content.'
      },
      {
        step: 5,
        title: 'Ongoing Support',
        description: 'I offer ongoing support and maintenance to ensure your site remains secure and performs optimally.'
      }
    ],
    testimonial: {
      quote: "Ritav built our WordPress site from scratch, and we couldn't be happier. The site is beautiful, functional, and easy to manage.",
      author: "Laura Smith",
      position: "Owner, Creative Agency",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    caseStudies: [1, 3],
    faq: [
      {
        question: "Can you migrate my existing site to WordPress?",
        answer: "Yes, I can help migrate your existing website to WordPress, ensuring a smooth transition with minimal downtime."
      },
      {
        question: "How long does it take to develop a WordPress site?",
        answer: "The timeline varies based on the complexity of the project, but a standard WordPress site can take 4-6 weeks to complete."
      },
      {
        question: "Will my WordPress site be mobile-friendly?",
        answer: "Absolutely! I ensure that all WordPress sites are responsive and look great on all devices."
      }
    ]
  },
  {
    id: 3,
    title: 'Full Stack Web Development',
    slug: 'full-stack-web-development',
    description: 'I provide end-to-end web development services, from front-end design to back-end programming.',
    color: 'from-teal-600 to-teal-500',
    icon: 'fullstack',
    fullDescription: `
      <p>As a full stack developer, I handle both the client-side and server-side of web applications, ensuring a seamless integration of all components.</p>
      
      <p>My full stack web development services include:</p>
    `,
    features: [
      {
        title: 'Front-End Development',
        description: 'I create responsive and interactive user interfaces using modern frameworks like React and Vue.js.'
      },
      {
        title: 'Back-End Development',
        description: 'I build robust server-side applications using Node.js, Express, and databases like MongoDB and MySQL.'
      },
      {
        title: 'API Development',
        description: 'I develop RESTful APIs to enable communication between the front-end and back-end of your application.'
      },
      {
        title: 'Deployment & Hosting',
        description: 'I assist with deploying your application to cloud platforms like AWS, Heroku, or DigitalOcean.'
      },
      {
        title: 'Performance Optimization',
        description: 'I optimize your web applications for speed and efficiency, ensuring a smooth user experience.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Requirements Gathering',
        description: 'I start by understanding your project requirements and defining the scope of work.'
      },
      {
        step: 2,
        title: 'Design & Development',
        description: 'I design and develop the application, ensuring all components work together seamlessly.'
      },
      {
        step: 3,
        title: 'Testing',
        description: 'I conduct thorough testing to ensure the application is bug-free and performs well.'
      },
      {
        step: 4,
        title: 'Deployment',
        description: 'I deploy the application to your chosen hosting platform and ensure it is live and functional.'
      },
      {
        step: 5,
        title: 'Maintenance & Support',
        description: 'I provide ongoing maintenance and support to keep your application running smoothly.'
      }
    ],
    testimonial: {
      quote: "Ritav developed our web application from the ground up, and it has exceeded our expectations. The performance and user experience are top-notch.",
      author: "James Lee",
      position: "CTO, Tech Solutions",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    caseStudies: [2, 5],
    faq: [
      {
        question: "What technologies do you use for full stack development?",
        answer: "I use a variety of technologies including JavaScript, Node.js, React, and various databases depending on the project requirements."
      },
      {
        question: "Can you integrate third-party services into my application?",
        answer: "Yes, I can integrate various third-party services and APIs to enhance the functionality of your application."
      },
      {
        question: "How do you ensure the security of my web application?",
        answer: "I implement best practices for security, including data encryption, secure authentication, and regular security audits."
      }
    ]
  },
  {
    id: 4,
    title: 'App Development',
    slug: 'app-development',
    description: 'I create cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.',
    color: 'from-purple-700 to-purple-600',
    icon: 'app',
    fullDescription: `
      <p>Mobile applications are essential for engaging users and providing value. I specialize in developing apps that are not only visually appealing but also highly functional.</p>
      
      <p>My app development services include:</p>
    `,
    features: [
      {
        title: 'Cross-Platform Development',
        description: 'I build applications that work seamlessly on both iOS and Android using frameworks like React Native and Flutter.'
      },
      {
        title: 'User Experience Design',
        description: 'I design intuitive user interfaces that enhance user engagement and satisfaction.'
      },
      {
        title: 'Backend Integration',
        description: 'I integrate your app with backend services to ensure smooth data flow and functionality.'
      },
      {
        title: 'App Store Deployment',
        description: 'I assist with the submission process to the App Store and Google Play, ensuring compliance with all guidelines.'
      },
      {
        title: 'Post-Launch Support',
        description: 'I provide ongoing support and updates to keep your app running smoothly and to enhance its features.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'I start with a consultation to understand your app idea, target audience, and business goals.'
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description: 'I create wireframes and prototypes to visualize the app’s functionality and user experience.'
      },
      {
        step: 3,
        title: 'Development',
        description: 'I develop the app using best practices to ensure performance and scalability.'
      },
      {
        step: 4,
        title: 'Testing',
        description: 'I conduct thorough testing to identify and fix any issues before launch.'
      },
      {
        step: 5,
        title: 'Launch & Marketing',
        description: 'I help launch your app and provide marketing strategies to reach your target audience.'
      }
    ],
    testimonial: {
      quote: "Ritav developed our mobile app, and it has been a game-changer for our business. The user feedback has been overwhelmingly positive.",
      author: "Samantha Green",
      position: "CEO, App Innovations",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    caseStudies: [3, 4],
    faq: [
      {
        question: "Do you develop for both iOS and Android?",
        answer: "Yes, I create cross-platform applications that work seamlessly on both operating systems."
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer: "The timeline varies based on the complexity of the app, but typically it takes 8-12 weeks."
      },
      {
        question: "Can you help with app marketing?",
        answer: "Absolutely! I can provide strategies and support for marketing your app post-launch."
      }
    ]
  }
];
