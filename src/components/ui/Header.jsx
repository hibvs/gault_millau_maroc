import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Image from '../AppImage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Accueil', path: '/accueil-homepage', icon: 'Home' },
    { name: 'Restaurants', path: '/restaurants-discovery-hub', icon: 'UtensilsCrossed' },
    { name: 'Actualités', path: '/actualit-s-gastronomiques-editorial-hub', icon: 'Newspaper' },
    { name: 'Guides Régionaux', path: '/guides-r-gionaux-regional-discovery', icon: 'MapPin' },
    { name: 'Critiques & Notes', path: '/critiques-notes-rating-system', icon: 'Star' },
    { name: 'Événements', path: '/v-nements-culinaires-events-calendar', icon: 'Calendar' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-warm border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/accueil-homepage" 
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <Image
                src="/assets/images/Logo_Gault&Millau-RVB_H-1750084252151.png"
                alt="Gault & Millau Maroc Logo"
                className="h-8 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.path)
                    ? 'text-[#E31E24] bg-[#E31E24]/5 shadow-sm'
                    : 'text-text-secondary hover:text-[#E31E24] hover:bg-surface'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </span>
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#E31E24] rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-text-secondary hover:text-[#E31E24] transition-colors duration-300 hover:bg-surface rounded-lg">
              <Icon name="Search" size={20} />
            </button>
            <Link
              to="/restaurants-discovery-hub"
              className="bg-[#E31E24] hover:bg-[#c91a1f] text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-warm transform hover:scale-105"
            >
              Découvrir
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-text-secondary hover:text-[#E31E24] transition-colors duration-300 hover:bg-surface rounded-lg"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-smooth ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Icon 
                  name="Search" 
                  size={20} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
                />
                <input
                  type="text"
                  placeholder="Rechercher un restaurant..."
                  className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent"
                />
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-[#E31E24] bg-[#E31E24]/5 border-l-4 border-[#E31E24]' :'text-text-secondary hover:text-[#E31E24] hover:bg-surface'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.name}</span>
                  {isActivePath(item.path) && (
                    <div className="ml-auto w-2 h-2 bg-[#E31E24] rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-border">
              <Link
                to="/restaurants-discovery-hub"
                onClick={closeMenu}
                className="block w-full bg-[#E31E24] hover:bg-[#c91a1f] text-white text-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-warm"
              >
                Découvrir les Restaurants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;