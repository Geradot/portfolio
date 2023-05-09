import {
  ContactsProps,
  countUpItemsProps,
  NavLink,
  ProjectProps,
  ServiceProps,
} from '@/Types';
import { BsVectorPen, BsCode } from 'react-icons/bs';
import { FiBarChart } from 'react-icons/fi';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const navLinks: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

const services: ServiceProps[] = [
  { id: 1, title: 'UI/UX Design', icon: <BsVectorPen />, finished: 113 },
  { id: 2, title: 'Web Developmemt', icon: <BsCode />, finished: 209 },
  { id: 3, title: 'Web Research', icon: <HiMagnifyingGlass />, finished: 369 },
  { id: 4, title: 'Marketing', icon: <FiBarChart />, finished: 313 },
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
    img: '/project3.png',
    name: 'Ellen seamstress (portfolio site)',
    tools: ['NextJS', 'Bootstrap', 'Headless UI'],
    github: 'https://github.com/Geradot/next-promo-ellen-surzhykova',
    url: 'https://next-promo-ellen-surzhykova.vercel.app/',
  },
  {
    id: 2,
    img: '/project2.png',
    name: 'Bookstore Web App',
    tools: ['Django', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/Geradot/bookstore',
    url: 'https://toshkageradot.pythonanywhere.com/',
  },
  {
    id: 3,
    img: '/project1.png',
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
  { name: 'TypeScript', level: 50 },
  { name: 'ReactJS', level: 75 },
  { name: 'NextJS', level: 65 },
];

const contacts: ContactsProps[] = [
  { id: 1, title: 'Phone', text: '+1 (712) 449 6101' },
  { id: 2, title: 'Email', text: 'anton.ryzhenko@tuta.io' },
];

export { navLinks, projects, countUpItems, services, skills, contacts };
