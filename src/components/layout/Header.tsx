'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Sourcing & Quality', href: '/sourcing' },
  { name: 'Wholesale', href: '/wholesale' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            aria-label="AM Seafood Home"
          >
            <div className="relative">
              <svg 
                className={`w-10 h-10 transition-colors duration-300 ${
                  isScrolled ? 'text-ocean-deep' : 'text-white'
                }`}
                viewBox="0 0 40 40" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 4C12 4 6 10 6 18c0 4 2 8 5 11l9 7 9-7c3-3 5-7 5-11 0-8-6-14-14-14zm0 4c2 0 4 1 5 2-1 1-3 2-5 2s-4-1-5-2c1-1 3-2 5-2zm-8 6c2-1 5-2 8-2s6 1 8 2c0 4-2 7-4 9l-4 3-4-3c-2-2-4-5-4-9z"/>
              </svg>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-coral rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-navy' : 'text-white'
              }`}>
                AM Seafood
              </span>
              <span className={`text-xs tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-ocean-mid' : 'text-ocean-light'
              }`}>
                American Caught. American Made.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-ocean-deep/10 ${
                  isScrolled 
                    ? 'text-navy hover:text-ocean-deep' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              href="/wholesale" 
              variant={isScrolled ? 'primary' : 'secondary'}
              size="sm"
              className="ml-4"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-navy' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-xl shadow-xl p-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-navy font-medium hover:bg-ocean-foam transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/wholesale" variant="primary" className="w-full">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

