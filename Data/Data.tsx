import {
  ContactsProps,
  NavLink,
  ProjectProps,
} from '@/Types';

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: 'project3_1.png',
    imgMobile: 'project3-mobile.jpg',
    name: 'Ellen seamstress (portfolio site)',
    tools: ['Next.JS', 'Tailwind CSS', 'Headless UI'],
    github: 'https://github.com/Geradot/next-promo-ellen-surzhykova',
    url: 'https://ellen-seamstress.vercel.app/',
  },
  {
    id: 2,
    img: 'project2.png',
    imgMobile: 'project2-mobile.jpg',
    name: 'Bookstore Web App',
    tools: ['Django', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Geradot/bookstore',
    url: 'https://toshkageradot.pythonanywhere.com/',
  },
  {
    id: 3,
    img: 'project1.png',
    imgMobile: 'project1-mobile.jpg',
    name: 'Bookstore SPA',
    tools: ['React.JS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Geradot/prometheus-x-course-task',
    url: 'https://geradot.github.io/prometheus-x-course-task/',
  },
];

const skills = [
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 75 },
  { name: 'JavaScript', level: 70 },
  { name: 'React.JS', level: 70 },
  { name: 'Next.JS', level: 70 },
  { name: 'TypeScript', level: 60 },
  { name: 'Tailwind CSS', level: 70 },
  { name: 'Bootstrap', level: 65 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: 'Phone', text: '+1 (712) 449 6101' },
  { id: 2, title: 'Email', text: 'anton.ryzhenko@tuta.io' },
];

export { navLinks, projects, skills, contacts };
