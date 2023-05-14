import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
} from '@/Types';

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 9,
    text: 'Years of Experience',
  },
  {
    id: 2,
    number: 178,
    text: 'Satisfied Customers',
  },
  {
    id: 3,
    number: 742,
    text: 'Design Items',
  },
  {
    id: 4,
    number: 112,
    text: 'Clients Served',
  },
];

const projects: ProjectProps[] = [
  {
    id: 1,
    img: 'project3.png',
    imgMobile: 'project3-mobile.jpg',
    name: 'Ellen seamstress (portfolio site)',
    tools: ['NextJS', 'Tailwind CSS', 'Headless UI'],
    github: 'https://github.com/Geradot/next-promo-ellen-surzhykova',
    url: 'https://next-promo-ellen-surzhykova.vercel.app/',
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
    tools: ['React', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Geradot/prometheus-x-course-task',
    url: 'https://geradot.github.io/prometheus-x-course-task/',
  },
];

const skills = [
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 75 },
  { name: 'JavaScript', level: 70 },
  { name: 'ReactJS', level: 75 },
  { name: 'NextJS', level: 65 },
  { name: 'TypeScript', level: 50 },
  { name: 'Tailwind', level: 70 },
  { name: 'Bootstrap', level: 65 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: 'Phone', text: '+1 (712) 449 6101' },
  { id: 2, title: 'Email', text: 'anton.ryzhenko@tuta.io' },
];

export { navLinks, projects, countUpItems, skills, contacts };
