// src/pages/navigation-system-global-header/components/CategoryShowcase.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CategoryShowcase = () => {
  // Featured categories with mock data - easily replaceable
  const featuredCategories = [
    {
      id: 'restaurants',
      name: 'Restaurants',
      description: 'Découvrez les meilleurs restaurants du Maroc',
      count: '800+',
      // IMAGE PLACEHOLDER: Replace with restaurant category image
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      path: '/restaurants-discovery-hub',
      icon: 'UtensilsCrossed',
      color: 'bg-red-500'
    },
    {
      id: 'actualites',
      name: 'Actualités',
      description: 'Les dernières nouvelles gastronomiques',
      count: '150+',
      // IMAGE PLACEHOLDER: Replace with news/editorial image
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=400&fit=crop',
      path: '/actualit-s-gastronomiques-editorial-hub',
      icon: 'Newspaper',
      color: 'bg-blue-500'
    },
    {
      id: 'vins',
      name: 'Vins & Spiritueux',
      description: 'Sélection de vins et spiritueux',
      count: '200+',
      // IMAGE PLACEHOLDER: Replace with wine/spirits image
      image: 'https://images.unsplash.com/photo-1553906284-e2c0518fa96e?w=600&h=400&fit=crop',
      path: '/restaurants-discovery-hub?category=vins',
      icon: 'Wine',
      color: 'bg-purple-500'
    },
    {
      id: 'hotels',
      name: 'Hôtels & Riads',
      description: 'Hébergements et expériences uniques',
      count: '120+',
      // IMAGE PLACEHOLDER: Replace with hotel/riad image
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop',
      path: '/restaurants-discovery-hub?category=hotels',
      icon: 'Building',
      color: 'bg-green-500'
    },
    {
      id: 'artisans',
      name: 'Artisans',
      description: 'Producteurs locaux et artisans',
      count: '80+',
      // IMAGE PLACEHOLDER: Replace with artisan/craft image
      image: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=600&h=400&fit=crop',
      path: '/guides-r-gionaux-regional-discovery?focus=artisans',
      icon: 'Hammer',
      color: 'bg-yellow-500'
    },
    {
      id: 'recettes',
      name: 'Recettes',
      description: 'Recettes traditionnelles et modernes',
      count: '300+',
      // IMAGE PLACEHOLDER: Replace with cooking/recipe image
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      path: '/actualit-s-gastronomiques-editorial-hub?category=recettes',
      icon: 'ChefHat',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4">
            Explorez nos Catégories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez la richesse gastronomique du Maroc à travers nos différentes catégories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group bg-white rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-500 overflow-hidden transform hover:scale-105"
            >
              {/* Category Image */}
              <div className="relative overflow-hidden h-48">
                {/* IMAGE PLACEHOLDER: Replace src with your category images */}
                <Image
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Category Count Badge */}
                <div className={`absolute top-4 right-4 ${category.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {category.count}
                </div>
                
                {/* Category Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <Icon name={category.icon} size={24} className="text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-text-primary mb-2 group-hover:text-[#E31E24] transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    {category.count} éléments
                  </span>
                  <div className="flex items-center space-x-2 text-[#E31E24] group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-sm font-medium">Explorer</span>
                    <Icon name="ArrowRight" size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/restaurants-discovery-hub"
            className="inline-flex items-center space-x-2 bg-[#E31E24] hover:bg-[#c91a1f] text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-warm transform hover:scale-105"
          >
            <span>Voir Toutes les Catégories</span>
            <Icon name="ArrowRight" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;