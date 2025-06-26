import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock data for hero carousel
  const heroSlides = [
    {
      id: 1,
      image: "/assets/images/slide1.jpeg",
      title: "L'Excellence Culinaire Marocaine",
      subtitle: "Découvrez les restaurants d'exception sélectionnés par nos critiques",
      restaurant: "La Mamounia",
      location: "Marrakech",
      rating: "18/20"
    },
    {
      id: 2,
      image: "/assets/images/slide2.jpeg",
      title: "Tradition et Innovation",
      subtitle: "Où l'art culinaire ancestral rencontre la créativité contemporaine",
      restaurant: "Dar Roumana",
      location: "Fès",
      rating: "17/20"
    },
    {
      id: 3,
      image: "/assets/images/slide3.jpeg",
      title: "Saveurs Authentiques",
      subtitle: "Les meilleures tables pour une expérience gastronomique inoubliable",
      restaurant: "Le Cabestan",
      location: "Casablanca",
      rating: "16/20"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Carousel */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-auto w-48 md:w-56">
                  <Image 
                    src="/assets/images/Logo_Gault&Millau-RVB_H-1750084252151.png" 
                    alt="Gault & Millau Maroc Logo"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Restaurant Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-white mb-1">
                    {heroSlides[currentSlide].restaurant}
                  </h3>
                  <div className="flex items-center text-gray-200">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    <span>{heroSlides[currentSlide].location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-[#E31E24] text-white px-3 py-1 rounded-full font-bold text-lg">
                    {heroSlides[currentSlide].rating}
                  </div>
                  <p className="text-sm text-gray-200 mt-1">Note G&M</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/restaurants-discovery-hub"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E31E24] hover:bg-[#c91a1f] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-warm transform hover:scale-105"
              >
                <Icon name="UtensilsCrossed" size={20} className="mr-3" />
                Découvrir les Restaurants
              </Link>
              <Link
                to="/guides-r-gionaux-regional-discovery"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-lg border border-white/30 transition-all duration-300"
              >
                <Icon name="MapPin" size={20} className="mr-3" />
                Guides Régionaux
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/30"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white' :'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/30"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2 rotate-90 origin-center whitespace-nowrap">Scroll</span>
          <div className="w-px h-12 bg-white/30"></div>
          <Icon name="ChevronDown" size={16} className="mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;