import {
  mobile,
  backend,
  frontend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  webdev,
  wild,
  pizza,
  worldwise,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },

  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Java Script Developer',
    company_name: 'Freelance',
    icon: javascript,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Collaborated with teams to develop  application utilizing JavaScript  to enhance business operation.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'Freelance',
    icon: reactjs,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Managed front-end development implementing responsive design to improve website user interface',
      'Championed revision of coding standards resulting in increase in development speed.',
    ],
  },
  {
    title: 'Node.js Developer',
    company_name: 'Freelance',
    icon: nodejs,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Designined API contracts',
      'Designined solutions for microservices architecture in general and for particular microservices',
      'Developined Confluence documentation for the project',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Freelance',
    icon: webdev,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      `Worked with Core Java to develop automated solutions to include web interfaces using HTML, CSS, JavaScript and Web services`,
      'Developed indexed database architecture using MongoDB different applications',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'test',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mohamed does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'test',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: 'test',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Wild Oasis',
    description:
      'Web-based platform for hotel-reservation that contains a lot of features and modern UI with advanced statistics representaion using charts, modern database implementaion using supabase, with a high RLS, and cool features like Dark Mode, and so on  ',
    tags: [
      {
        name: 'vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'styled-components',
        color: 'pink-text-gradient',
      },
    ],
    image: wild,
    source_code_link: 'https://github.com/muhamadatif/The-wild-oasis',
  },
  {
    name: 'Fast-Pizza-CO.',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'redux',
        color: 'pink-text-gradient',
      },
    ],
    image: pizza,
    source_code_link: 'https://github.com/muhamadatif/fast-pizza-co',
  },
  {
    name: 'World Wise',
    description:
      'A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world. ',
    tags: [
      {
        name: 'vite',
        color: 'blue-text-gradient',
      },
      {
        name: 'sass',
        color: 'green-text-gradient',
      },
      {
        name: 'leaflet',
        color: 'pink-text-gradient',
      },
    ],
    image: worldwise,
    source_code_link: 'https://github.com/muhamadatif/worldwise',
  },
];

export { services, technologies, experiences, testimonials, projects };
