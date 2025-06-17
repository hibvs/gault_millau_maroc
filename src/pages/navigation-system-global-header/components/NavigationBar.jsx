// src/pages/navigation-system-global-header/components/NavigationBar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Navigation categories as requested - easily replaceable icons
  const navigationCategories = [
    {
      name: 'LA PLACE',
      path: '/actualit-s-gastronomiques-editorial-hub',
      // ICON PLACEHOLDER: Replace with your custom icon
      icon: 'Home', 
      description: 'Editorial hub'
    },
    {
      name: 'ACTUALITÉS',
      path: '/actualit-s-gastronomiques-editorial-hub',
      // ICON PLACEHOLDER: Replace with news/newspaper icon
      icon: 'Newspaper',
      description: 'News and updates'
    },
    {
      name: 'RESTAURANTS',
      path: '/restaurants-discovery-hub',
      // ICON PLACEHOLDER: Replace with restaurant/utensils icon
      icon: 'UtensilsCrossed',
      description: 'Restaurant discovery'
    },
    {
      name: 'VINS',
      path: '/restaurants-discovery-hub?category=vins',
      // ICON PLACEHOLDER: Replace with wine glass icon
      icon: 'Wine',
      description: 'Wine selection'
    },
    {
      name: 'CHAMPAGNES',
      path: '/restaurants-discovery-hub?category=champagnes',
      // ICON PLACEHOLDER: Replace with champagne glass icon
      icon: 'GlassWater',
      description: 'Champagne collection'
    },
    {
      name: 'SPIRITUEUX',
      path: '/restaurants-discovery-hub?category=spiritueux',
      // ICON PLACEHOLDER: Replace with bottle/spirits icon
      icon: 'Bottle',
      description: 'Spirits and liquors'
    },
    {
      name: 'DOMAINES',
      path: '/guides-r-gionaux-regional-discovery?focus=domaines',
      // ICON PLACEHOLDER: Replace with vineyard/estate icon
      icon: 'TreePine',
      description: 'Wine estates'
    },
    {
      name: 'HÔTELS',
      path: '/restaurants-discovery-hub?category=hotels',
      // ICON PLACEHOLDER: Replace with hotel/building icon
      icon: 'Building',
      description: 'Hotel recommendations'
    },
    {
      name: 'ARTISANS',
      path: '/guides-r-gionaux-regional-discovery?focus=artisans',
      // ICON PLACEHOLDER: Replace with artisan/craft icon
      icon: 'Hammer',
      description: 'Local artisans'
    },
    {
      name: 'RECETTES',
      path: '/actualit-s-gastronomiques-editorial-hub?category=recettes',
      // ICON PLACEHOLDER: Replace with recipe/cooking icon
      icon: 'ChefHat',
      description: 'Recipes and cooking'
    },
    {
      name: 'PEOPLE',
      path: '/actualit-s-gastronomiques-editorial-hub?category=people',
      // ICON PLACEHOLDER: Replace with people/chef profiles icon
      icon: 'Users',
      description: 'Chef profiles'
    },
    {
      name: 'USTENSILES',
      path: '/restaurants-discovery-hub?category=ustensiles',
      // ICON PLACEHOLDER: Replace with kitchen tools icon
      icon: 'Utensils',
      description: 'Culinary tools'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results - you can customize this logic
      window.location.href = `/restaurants-discovery-hub?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const isActivePath = (path) => {
    return location.pathname === path || location.pathname.startsWith(path.split('?')[0]);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-warm">
      {/* Main Navigation Bar with Yellow Background */}
      <div className="bg-[#F4D03F] border-b border-[#E6C84A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section - LEFT */}
            <Link 
              to="/accueil-homepage" 
              className="flex items-center space-x-3 group flex-shrink-0"
            >
              <div className="relative">
                {/* LOGO PLACEHOLDER: Replace src with your Gault&Millau logo path */}
                <Image
                  src="/assets/images/Logo_Gault&Millau-RVB_H-1750084252151.png"
                  alt="Gault & Millau Maroc Logo"
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Search Bar Section - CENTER */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Icon 
                    name="Search" 
                    size={20} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" 
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher restaurants, articles, régions..."
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent shadow-sm font-medium text-gray-700 placeholder-gray-500"
                  />
                </div>
              </form>
            </div>

            {/* Language Selector and Menu - RIGHT */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="hidden md:flex items-center space-x-2">
                <button className="px-3 py-2 text-sm font-semibold text-[#E31E24] bg-white rounded-md hover:bg-gray-50 transition-colors duration-200">
                  FR
                </button>
                {/* Uncomment if you want AR language option */}
                {/* <button className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#E31E24] hover:bg-white rounded-md transition-colors duration-200">
                  AR
                </button> */}
              </div>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 hover:text-[#E31E24] transition-colors duration-300 hover:bg-white rounded-lg md:hidden"
                aria-label="Toggle menu"
              >
                <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Icon Navigation */}
      <div className="bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-1 py-3">
            {navigationCategories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className={`group flex flex-col items-center px-4 py-3 rounded-lg text-xs font-medium transition-all duration-300 min-w-[90px] ${
                  isActivePath(category.path)
                    ? 'text-[#E31E24] bg-[#E31E24]/5'
                    : 'text-gray-600 hover:text-[#E31E24] hover:bg-gray-50'
                }`}
                title={category.description}
              >
                {/* ICON PLACEHOLDER: Each icon can be easily replaced */}
                <Icon 
                  name={category.icon} 
                  size={20} 
                  className={`mb-1 transition-colors duration-300 ${
                    isActivePath(category.path) ? 'text-[#E31E24]' : 'text-gray-500 group-hover:text-[#E31E24]'
                  }`} 
                />
                <span className="text-center leading-tight">{category.name}</span>
                {isActivePath(category.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#E31E24] rounded-full mt-1"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-smooth ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            
            {/* Mobile Search */}
            <div className="mb-6">
              <form onSubmit={handleSearch} className="relative">
                <Icon 
                  name="Search" 
                  size={20} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher restaurants, articles..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent"
                />
              </form>
            </div>

            {/* Mobile Language Selector */}
            <div className="mb-4 pb-4 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700 mr-3">Langue:</span>
                <button className="px-3 py-2 text-sm font-semibold text-[#E31E24] bg-gray-100 rounded-md">
                  FR
                </button>
              </div>
            </div>

            {/* Mobile Navigation Categories */}
            <nav className="grid grid-cols-2 gap-3">
              {navigationCategories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActivePath(category.path)
                      ? 'text-[#E31E24] bg-[#E31E24]/5 border-l-4 border-[#E31E24]'
                      : 'text-gray-600 hover:text-[#E31E24] hover:bg-gray-50'
                  }`}
                >
                  <Icon name={category.icon} size={18} />
                  <span className="text-xs">{category.name}</span>
                  {isActivePath(category.path) && (
                    <div className="ml-auto w-2 h-2 bg-[#E31E24] rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;