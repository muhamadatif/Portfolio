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
  reactnative,
  expo,
  medilink,
  deliveryx,
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
    title: 'Frontend Developer',
    icon: frontend,
  },

  {
    title: 'Backend Developer',
    icon: backend,
  },

  {
    title: 'Mobile App Developer',
    icon: mobile,
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
    name: 'TypeScript',
    icon: typescript,
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
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'JavaScript Developer (Freelance)',
    company_name: 'Freelance',
    icon: javascript,
    iconBg: '#383E56',
    date: 'March 2020 – April 2021',
    points: [
      'Started building dynamic websites using modern JavaScript (ES6+), focusing on responsive layouts and browser compatibility.',
      'Worked with real clients to create interactive UIs and improve user experiences on small business websites.',
      'Practiced clean, maintainable code and modular architecture from the start, laying the foundation for scalable apps.',
    ],
  },
  {
    title: 'React.js Frontend Developer (Freelance)',
    company_name: 'Freelance',
    icon: reactjs,
    iconBg: '#E6DEDD',
    date: 'May 2021 – Jan 2022',
    points: [
      'Built SPA (Single Page Applications) using React.js, integrating Tailwind CSS and Styled-components for modern UI/UX.',
      'Managed global state using Redux and React Context to handle user authentication and app data.',
      'Created reusable components, routing systems, and responsive layouts to deliver seamless web experiences.',
      'Implemented dark mode, charts, and dashboard components in a hotel-reservation platform (Wild Oasis project).',
    ],
  },
  {
    title: 'Backend Developer (Node.js / MongoDB)',
    company_name: 'Freelance',
    icon: nodejs,
    iconBg: '#383E56',
    date: 'Feb 2022 – Jan 2023',
    points: [
      'Designed and developed RESTful APIs using Node.js and Express.js to support web and mobile apps.',
      'Built secure authentication systems using JWT, role-based access, and cookie/session strategies.',
      'Worked with MongoDB and Supabase to structure databases and handle complex queries with proper indexing.',
      'Ensured clear API documentation and smooth collaboration between backend and frontend sides.',
    ],
  },
  {
    title: 'React Native Mobile Developer (Freelance)',
    company_name: 'Freelance',
    icon: reactnative,
    iconBg: '#383E56',
    date: 'Feb 2023 – Present',
    points: [
      'Created and deployed cross-platform mobile apps using React Native, React Navigation, and Expo.',
      'Integrated Firebase and Supabase for authentication, file storage, and real-time data sync.',
      'Built animated components, parallax scroll views, and segment buttons to enhance mobile interactivity.',
      'Optimized app performance and UX by using lazy loading, offline caching, and efficient state management.',
      'Focused on pixel-perfect UI, accessibility, and smooth onboarding flows.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Working with Mohamed was a game-changer for our business. He delivered a clean, responsive website ahead of schedule, and our user engagement has noticeably improved.',
    name: 'Nadia El-Sayed',
    designation: 'Marketing Manager',
    company: 'CairoTech Solutions',
    image:
      'https://media.istockphoto.com/id/1170356638/photo/portrait-of-smiling-muslim-woman-outdoors.jpg?s=612x612&w=0&k=20&c=xB70SwPYynDhHJn6ciOZycVFj3ci7P_VPNhfEQ8IPtk=',
  },
  {
    testimonial:
      "Mohamed quickly understood our goals and built a custom dashboard that streamlined our internal workflow. Communication was smooth, and he's clearly passionate about his work.",
    name: 'Omar Abdelrahman',
    designation: 'Product Manager',
    company: 'NextPhase Analytics',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    testimonial:
      "Our old website was outdated and clunky. Mohamed gave it a modern facelift and improved the load time significantly. We've seen a 35% increase in user retention since the launch.",
    name: 'Yasser Radwan',
    designation: 'Operations Lead',
    company: 'Greenline Logistics',
    image:
      'https://t3.ftcdn.net/jpg/01/10/79/02/360_F_110790299_wdE1KqnWAlkjlfD8nujgEWuTtLzAnzxa.jpg',
  },
];

const projects = [
  {
    name: 'Wild Oasis',
    description:
      'Web-based platform for hotel management with a modern UI and rich features. It includes real-time CRUD operations using Supabase, advanced statistics representation through interactive charts.',
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
    name: 'MediLink',
    description:
      'A modern healthcare application that streamlines medical appointment booking, patient-doctor interactions, and access to health records. Built to enhance the digital health experience for users and providers.',
    tags: [
      {
        name: 'next',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'appwrite',
        color: 'pink-text-gradient',
      },
    ],
    image: medilink,
    source_code_link: 'https://github.com/muhamadatif/MediLink',
  },
  {
    name: 'DeliveryX',
    description:
      'A delivery tracking platform that offers real-time updates, optimized delivery routes, and seamless order management. Designed to enhance logistics efficiency for both customers and delivery agents.',
    tags: [
      {
        name: 'react native',
        color: 'blue-text-gradient',
      },
      {
        name: 'expo',
        color: 'green-text-gradient',
      },
      {
        name: 'expo-location',
        color: 'pink-text-gradient',
      },
    ],
    image: deliveryx, // Make sure to add a related image asset
    source_code_link: 'https://github.com/muhamadatif/DeliveryX',
  },
];

export { services, technologies, experiences, testimonials, projects };
