'use client';
import { ReactNode, MouseEventHandler } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type NavLinkProps = {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
};

function NavLink({ href, onClick, children }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white font-medium transition-colors
                 relative after:absolute after:left-0 after:-bottom-1 after:w-0 
                 after:h-px after:bg-white after:transition-all hover:after:w-full"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.a>
  );
}

function MobileNavLink({ href, onClick, children }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white 
                 hover:bg-gray-700/50 rounded-lg transition-colors"
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 bg-black/80 backdrop-blur-xl z-50 shadow-2xl border-b border-gray-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <a 
            href="#hero" 
            className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
            onClick={handleNavClick}
          >
            Sachin Mallah
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#hero" onClick={handleNavClick}>Home</NavLink>
            <NavLink href="#about" onClick={handleNavClick}>About</NavLink>
            <NavLink href="#education" onClick={handleNavClick}>Education</NavLink>
            <NavLink href="#certificates" onClick={handleNavClick}>Certificates</NavLink>
            <NavLink href="#projects" onClick={handleNavClick}>Projects</NavLink>
            <NavLink href="#skills" onClick={handleNavClick}>Skills</NavLink>
            <NavLink href="#difference" onClick={handleNavClick}>My Edge</NavLink>
            <NavLink href="#contact" onClick={handleNavClick}>Contact</NavLink>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg"
              aria-label="Toggle navigation"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 bg-black/80 backdrop-blur-xl rounded-lg mt-2 border border-gray-500/30">
                <MobileNavLink href="#hero" onClick={handleNavClick}>Home</MobileNavLink>
                <MobileNavLink href="#about" onClick={handleNavClick}>About</MobileNavLink>
                <MobileNavLink href="#education" onClick={handleNavClick}>Education</MobileNavLink>
                <MobileNavLink href="#certificates" onClick={handleNavClick}>Certificates</MobileNavLink>
                <MobileNavLink href="#projects" onClick={handleNavClick}>Projects</MobileNavLink>
                <MobileNavLink href="#skills" onClick={handleNavClick}>Skills</MobileNavLink>
                <MobileNavLink href="#difference" onClick={handleNavClick}>My Edge</MobileNavLink>
                <MobileNavLink href="#contact" onClick={handleNavClick}>Contact</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}