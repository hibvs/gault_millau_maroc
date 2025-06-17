import React, { useState, useEffect } from 'react';

import Header from 'components/ui/Header';
import Icon from 'components/AppIcon';

import HeroSection from './components/HeroSection';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import NewsSection from './components/NewsSection';
import RegionalDiscovery from './components/RegionalDiscovery';
import SearchSection from './components/SearchSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

const AccueilHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock data for quick stats
  const quickStats = [
    { label: "Restaurants Référencés", value: "800+", icon: "UtensilsCrossed" },
    { label: "Critiques Professionnelles", value: "600+", icon: "Star" },
    { label: "Villes Couvertes", value: "15", icon: "MapPin" },
    { label: "Chefs Partenaires", value: "120+", icon: "ChefHat" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Search Section */}
      <SearchSection />

      {/* Quick Stats */}
      <StatsSection stats={quickStats} />

      {/* Featured Restaurants */}
      <FeaturedRestaurants />

      {/* News Section */}
      <NewsSection />

      {/* Regional Discovery */}
      <RegionalDiscovery />

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-[#FFEEEE] to-[#FFF7EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <Icon name="Mail" size={48} className="text-[#E31E24] mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4">
                Restez Informé
              </h2>
              <p className="text-lg text-text-secondary">
                Recevez nos dernières critiques, actualités gastronomiques et recommandations exclusives directement dans votre boîte mail.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent bg-white"
              />
              <button className="px-6 py-3 bg-[#E31E24] hover:bg-[#c91a1f] text-white font-medium rounded-lg transition-all duration-300 hover:shadow-warm transform hover:scale-105 whitespace-nowrap">
                S'abonner
              </button>
            </div>
            
            <p className="text-sm text-text-secondary mt-4">
              Pas de spam, désabonnement possible à tout moment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccueilHomepage;