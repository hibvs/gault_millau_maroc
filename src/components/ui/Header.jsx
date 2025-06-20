import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Image from '../AppImage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'ACTUALITÉS', path: '/accueil-homepage', image: './public/assets/images/primaryIcons/news.png', bgColor: 'bg-[#FFE700]' },
    { name: 'RESTAURANTS', path: '/restaurants-discovery-hub', image: './public/assets/images/primaryIcons/restaurants.png', bgColor: 'bg-[#FFE700]' },
    { name: 'ALCOOL', path: '/actualit-s-gastronomiques-editorial-hub', image: './public/assets/images/primaryIcons/wines.png', bgColor: 'bg-[#FFE700]' },
    { name: 'HOTELS', path: '/guides-r-gionaux-regional-discovery', image: './public/assets/images/primaryIcons/hotels.png', bgColor: 'bg-[#FFE700]' },
    { name: 'ARTISANS', path: '/critiques-notes-rating-system', image: './public/assets/images/primaryIcons/artisans.png', bgColor: 'bg-[#FFE700]' },
    { name: 'RIADS', path: '/v-nements-culinaires-events-calendar', image: './public/assets/images/primaryIcons/wineEstate.png', bgColor: 'bg-[#FFE700]' },
    { name: 'PEOPLE', path: '/v-nements-culinaires-events-calendar', image: './public/assets/images/primaryIcons/people.png', bgColor: 'bg-[#FFE700]' },
    { name: 'RECETTES', path: '/v-nements-culinaires-events-calendar', image: './public/assets/images/primaryIcons/Recipes.png', bgColor: 'bg-[#FFE700]' },
  ];

  return (
    <header className="bg-[#FFE700] px-6 py-4 shadow-md">

<div className="max-w-7xl mx-auto flex items-center">

  {/* Logo */}
  <Link to="/accueil-homepage" onClick={() => setIsMenuOpen(false)} className="flex items-center">
    <Image
      src="/assets/images/Logo_Gault&Millau-RVB_H-1750084252151.png"
      alt="Gault & Millau Maroc Logo"
      className="h-8 w-auto"
    />
  </Link>

  {/* Search Bar */}
  <div className="flex justify-center ml-12" style={{ flexShrink: 0 }}>
    <input
      type="search"
      placeholder="Une ville, un restaurant, un chef, une recette, ..."
      className="w-[35rem] rounded-md px-4 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>
</div>


      {/* Navigation Icons */}
      <nav className="max-w-7xl mx-auto mt-4 flex space-x-4 overflow-x-auto pl-6">

        <Link
          to="/"
          className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg ${
            location.pathname === '/' ? 'bg-[#FFE700]' : 'bg-yellow-300'
          }`}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow">
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H3a2 2 0 01-2-2V9z"
              ></path>
            </svg>
          </div>
          <span className="text-xs mt-1 font-bold text-gray-900">LA PLACE</span>
        </Link>

        {navigationItems.map(({ name, path, image, bgColor }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg ${bgColor} hover:brightness-90 transition`}
          >
            <img src={image} alt={name} className="w-10 h-10 object-contain" />
            <span className="text-xs mt-1 font-bold text-black">{name}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
