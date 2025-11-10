'use client';

import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map((item) => {
        const element = document.querySelector(item.href);
        if (!element) return { id: item.id, top: Infinity };
        
        const rect = element.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top) };
      });

      const currentSection = sections.reduce((prev, current) => 
        current.top < prev.top ? current : prev
      );
      
      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string): void => {
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link
            href='#home'
            onClick={() => handleNavClick('#home')}
            className='text-2xl font-bold gradient-text hover:scale-105 transition-transform'
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-primary',
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-foreground/70'
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full' />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className='hidden md:block'>
            <Button
              variant='warm'
              size='sm'
              onClick={() => handleNavClick('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle mobile menu'
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-border'>
            <div className='flex flex-col space-y-4 pt-4'>
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary py-2',
                    activeSection === item.id
                      ? 'text-primary border-l-2 border-primary pl-4'
                      : 'text-foreground/70 pl-4'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className='pt-4 pl-4'>
                <Button
                  variant='warm'
                  size='sm'
                  onClick={() => handleNavClick('#contact')}
                  className='w-fit'
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
