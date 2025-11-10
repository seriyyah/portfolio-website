import type { 
  PersonalInfo, 
  Skill, 
  WorkExperience, 
  Project,
  SocialLink 
} from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Serhii Puzikov',
  title: 'Senior Software Engineer, Architect',
  bio: 'Experienced Software Engineer with over 7 years of expertise in software design, development, and infrastructure management. Proficient in building scalable software solutions with a strong focus on microservices, DDD, and TDD principles. Experienced in DevOps practices including Docker, Kubernetes, CI/CD pipelines, and server management. Currently working as an Architect at Hedlyner, leading technical decisions and system design.',
  location: 'Prague, Czech Republic',
  email: 'puzikov.dev@gmail.com',
  phone: '+420 607 358 243',
  avatar: '/avatar.jpg',
  resumeUrl: '/Serhii-Puzikov-Resume.pdf',
  socialLinks: [
    {
      id: 'github',
      platform: 'GitHub',
      url: 'https://github.com/seriyyah',
      icon: 'Github',
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/serhii-puzikov-93b362208/',
      icon: 'Linkedin',
    },
    {
      id: 'email',
      platform: 'Email',
      url: 'mailto:puzikov.dev@gmail.com',
      icon: 'Mail',
    },
  ],
};

export const skills: Skill[] = [
  // Backend Development
  { id: 'python', name: 'Python', level: 50, category: 'backend', icon: '🐍' },
  { id: 'php', name: 'PHP', level: 95, category: 'backend', icon: '🐘' },
  { id: 'laravel', name: 'Laravel', level: 95, category: 'backend', icon: '⚡' },
  { id: 'django', name: 'Django', level: 55, category: 'backend', icon: '🎸' },
  
  // Frontend Development
  { id: 'javascript', name: 'JavaScript', level: 85, category: 'frontend', icon: '⚡' },
  { id: 'typescript', name: 'TypeScript', level: 80, category: 'frontend', icon: '📘' },
  { id: 'vue', name: 'Vue.js', level: 80, category: 'frontend', icon: '💚' },
  { id: 'html', name: 'HTML', level: 90, category: 'frontend', icon: '📄' },
  { id: 'css', name: 'CSS', level: 55, category: 'frontend', icon: '🎨' },
  { id: 'jquery', name: 'jQuery', level: 85, category: 'frontend', icon: '💙' },
  
  // Databases
  { id: 'mysql', name: 'MySQL', level: 90, category: 'database', icon: '🐬' },
  { id: 'postgresql', name: 'PostgreSQL', level: 85, category: 'database', icon: '🐘' },
  { id: 'mongodb', name: 'MongoDB', level: 80, category: 'database', icon: '🍃' },
  
  // DevOps & Infrastructure
  { id: 'docker', name: 'Docker', level: 90, category: 'devops', icon: '🐳' },
  { id: 'kubernetes', name: 'Kubernetes', level: 85, category: 'devops', icon: '⚓' },
  { id: 'helm', name: 'Helm Charts', level: 80, category: 'devops', icon: '⛵' },
  { id: 'aws', name: 'AWS', level: 85, category: 'devops', icon: '☁️' },
  { id: 'azure', name: 'Azure DevOps', level: 80, category: 'devops', icon: '🔷' },
  { id: 'elasticsearch', name: 'ElasticSearch', level: 75, category: 'devops', icon: '🔍' },
  { id: 'linux', name: 'Linux', level: 90, category: 'devops', icon: '🐧' },
  { id: 'cicd', name: 'CI/CD Pipelines', level: 85, category: 'devops', icon: '🔄' },
  { id: 'monitoring', name: 'Server Monitoring', level: 80, category: 'devops', icon: '📊' },
  
  // Tools & Methodologies
  { id: 'git', name: 'Git', level: 90, category: 'tools', icon: '📝' },
  { id: 'jira', name: 'Jira', level: 85, category: 'tools', icon: '📋' },
  { id: 'agile', name: 'Agile/SCRUM', level: 90, category: 'tools', icon: '🏃' },
  { id: 'rest', name: 'REST APIs', level: 95, category: 'tools', icon: '🔌' },
];

export const workExperience: WorkExperience[] = [
  {
    id: 'hedlyner',
    company: 'Hedlyner',
    position: 'Software Architect',
    startDate: new Date('2024-01-01'),
    description: 'Leading architectural decisions and system design for startup projects. Evolved from part-time Senior Backend Developer (2022) to Team Lead (2023) to Architect (2024). Designing scalable microservices architecture and establishing best development practices.',
    technologies: ['Python', 'PHP', 'Laravel', 'Microservices', 'DDD', 'TDD', 'Docker', 'AWS'],
    achievements: [
      'Designed and implemented microservices architecture for multiple projects',
      'Led technical team and established development best practices',
      'Evolved from part-time developer to architect role within 2 years',
      'Implemented Domain-Driven Design principles across all projects',
    ],
    location: 'Remote',
    companyUrl: 'https://hedlyner.com',
  },
  {
    id: 'defend-insurance',
    company: 'Defend Insurance',
    position: 'Software Development Lead',
    startDate: new Date('2025-05-01'),
    endDate: new Date('2025-09-01'),
    description: 'Spearheaded software development efforts, designed microservices architecture and applied best development practices. Managed Azure DevOps ecosystem and modernized application components.',
    technologies: ['PHP', 'Laravel', 'Azure DevOps', 'Microservices', 'TDD'],
    achievements: [
      'Designed and implemented microservices architecture',
      'Managed and maintained Azure DevOps ecosystem',
      'Integrated comprehensive test coverage',
      'Refactored legacy code for improved scalability',
      'Modernized outdated application components',
    ],
    location: 'Remote',
  },
  {
    id: 'confitech',
    company: 'Confitech GmbH',
    position: 'Software Engineer',
    startDate: new Date('2022-03-01'),
    endDate: new Date('2025-05-01'),
    description: 'Led back-end development for building scalable, efficient systems. Developed microservices architecture and implemented best practices following SOLID principles.',
    technologies: ['PHP', 'Laravel', 'Python', 'MySQL', 'PostgreSQL', 'Docker', 'Microservices'],
    achievements: [
      'Led back-end development for scalable systems',
      'Implemented microservices architecture',
      'Applied SOLID principles and clean code practices',
      'Collaborated remotely with cross-functional teams',
      'Delivered high-quality software solutions',
    ],
    location: 'Remote',
  },
  {
    id: 'metrabit',
    company: 'MetraBit',
    position: 'PHP Developer',
    startDate: new Date('2021-05-01'),
    endDate: new Date('2022-02-01'),
    description: 'Contributed to back-end development using PHP and Laravel. Collaborated with front-end developers and implemented REST API architecture.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'AWS EC2', 'Unit Testing'],
    achievements: [
      'Developed back-end features using PHP and Laravel',
      'Integrated user-facing elements with server-side logic',
      'Implemented comprehensive unit testing',
      'Worked with REST API architecture and contract-based approach',
      'Managed AWS EC2 instances',
    ],
    location: 'Remote',
  },
  {
    id: 'aweb-2',
    company: 'aweb',
    position: 'Back-end/Full-Stack Developer',
    startDate: new Date('2020-01-01'),
    endDate: new Date('2021-05-01'),
    description: 'Developed custom web applications and optimized database performance. Maintained existing applications with new features and bug fixes.',
    technologies: ['PHP', 'MySQL', 'HTML', 'Database Optimization'],
    achievements: [
      'Developed custom web applications using PHP and MySQL',
      'Optimized database queries for improved performance',
      'Maintained and enhanced existing applications',
      'Added new features and resolved critical bugs',
    ],
    location: 'Remote',
  },
  {
    id: 'aweb-1',
    company: 'aweb',
    position: 'Back-end/Full-Stack Developer',
    startDate: new Date('2019-04-01'),
    endDate: new Date('2020-01-01'),
    description: 'Created and maintained websites using PHP/Python frameworks. Implemented third-party API integrations and worked with MVC architecture.',
    technologies: ['PHP', 'Python', 'MVC', 'OOP', 'Third-party APIs'],
    achievements: [
      'Built websites using PHP/Python frameworks',
      'Integrated payment gateways and third-party services',
      'Implemented MVC architecture patterns',
      'Applied Object-Oriented Programming principles',
    ],
    location: 'Remote',
  },
];

export const projects: Project[] = [
  {
    id: 'microservices-architecture',
    title: 'Enterprise Microservices Platform',
    description: 'Designed and implemented a comprehensive microservices architecture for a startup ecosystem, enabling scalable and maintainable software solutions.',
    longDescription: 'Led the architectural design of a complex microservices platform that supports multiple business domains. Implemented Domain-Driven Design principles, event sourcing, and CQRS patterns. The system handles high-throughput operations with robust error handling and monitoring.',
    technologies: ['PHP', 'Laravel', 'Python', 'Docker', 'AWS', 'Microservices', 'DDD', 'Event Sourcing'],
    featured: true,
    startDate: new Date('2024-01-01'),
    status: 'in-progress',
    demoUrl: 'https://hedlyner.com',
  },
  {
    id: 'insurance-platform',
    title: 'Insurance Management System',
    description: 'Modernized legacy insurance platform with microservices architecture and comprehensive testing coverage.',
    longDescription: 'Refactored and modernized a legacy insurance management system, implementing modern development practices, comprehensive testing, and improved scalability through microservices architecture.',
    technologies: ['PHP', 'Laravel', 'Azure DevOps', 'Unit Testing', 'Microservices'],
    featured: true,
    startDate: new Date('2025-05-01'),
    endDate: new Date('2025-09-01'),
    status: 'completed',
  },
  {
    id: 'api-integration-platform',
    title: 'Third-Party API Integration Platform',
    description: 'Built a robust platform for integrating multiple third-party APIs including payment gateways and external services.',
    longDescription: 'Developed a comprehensive platform that seamlessly integrates various third-party APIs, providing a unified interface for payment processing, data synchronization, and external service communication.',
    technologies: ['PHP', 'Laravel', 'REST APIs', 'Payment Gateways', 'OAuth'],
    featured: false,
    startDate: new Date('2021-01-01'),
    endDate: new Date('2022-01-01'),
    status: 'completed',
  },
];