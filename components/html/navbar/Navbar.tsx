import { navLinks } from '@/Data/Data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt4, HiX } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import SocialButtons from '@/components/social-buttons/SocialButtons';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [navScroll, setNavScroll] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? 'text-Orange' : 'text-WhiteGray';

  useEffect(() => {
    function scrollActive() {
      setNavScroll(window.scrollY > 20);
    }
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, []);

  const menuVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 40,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
    },
  };

  const navLinkVariants = {
    hidden: {
      display: 'none',
      opacity: 0,
    },
    visible: {
      display: 'flex',
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-20 ${
        navScroll ? 'bg-Glass backdrop-blur-sm' : ''
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          showMenu ? 'hidden' : ''
        }`}
      >
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-3xl text-WhiteGray"
          >
            {process.env.brandName}
          </Link>
          <div className="hidden md:flex items-center justify-center space-x-4">
            {navLinks.map(navLink => (
              <Link
                href={navLink.path}
                key={navLink.path}
                className={`text-lg uppercase Text-Shadow font-medium ${isActive(
                  navLink.path
                )}`}
              >
                {navLink.label}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden items-center">
            <HiOutlineMenuAlt4
              className="text-White cursor-pointer w-6 h-6"
              onClick={() => setShowMenu(prev => !prev)}
            />
          </div>
        </div>
      </nav>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={showMenu ? 'visible' : 'hidden'}
        className="bg-Black fixed top-0 right-0 w-16 h-16 rounded-full"
      ></motion.div>
      <motion.nav
        variants={navLinkVariants}
        initial='hidden'
        animate={showMenu ? 'visible' : 'hidden'}
        className="min-h-screen md:hidden flex flex-col justify-center"
      >
        {navLinks.map(navLink => (
          <Link
            key={navLink.label}
            href={navLink.path}
            className={`block px-3 py-2 text-5xl font-medium ${isActive(
              navLink.path
            )}`}
            onClick={() => setShowMenu(prev => !prev)}
          >
            {navLink.label}
          </Link>
        ))}
        <SocialButtons className="fixed bottom-4 left-6 flex items-center flex-col gap-4" />
        <HiX
          className="absolute text-White top-20 right-8 w-6 h-6 cursor-pointer"
          onClick={() => setShowMenu(prev => !prev)}
        />
      </motion.nav>
    </header>
  );
}
