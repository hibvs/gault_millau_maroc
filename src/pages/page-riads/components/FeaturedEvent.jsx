import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const FeaturedEvent = ({ event }) => {
  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start.toDateString() === end.toDateString()) {
      return start.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    
    return `Du ${start.getDate()} au ${end.getDate()} ${end.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}`;
  };

  return (
    <div className="relative bg-gradient-to-br from-primary to-primary-800 rounded-3xl overflow-hidden shadow-warm-lg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="featured-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#featured-pattern)" />
        </svg>
      </div>

      <div className="relative lg:flex lg:items-center">
        {/* Content Section */}
        <div className="lg:w-1/2 p-8 lg:p-12 text-white">
          {/* Featured Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" size={16} />
            <span>Événement à la Une</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight">
            {event.title}
          </h2>
          
          <p className="text-xl text-white/90 font-medium mb-6">
            {event.subtitle}
          </p>

          {/* Event Details */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center space-x-3">
              <Icon name="Calendar" size={20} className="text-secondary" />
              <span className="text-lg">{formatDateRange(event.date, event.endDate)}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="MapPin" size={20} className="text-secondary" />
              <span className="text-lg">{event.location} - {event.venue}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Ticket" size={20} className="text-secondary" />
              <span className="text-lg">{event.ticketPrice}</span>
            </div>
          </div>

          {/* Chef Highlights */}
          {event.chefHighlights && (
            <div className="mb-8">
              <h3 className="font-semibold mb-3 flex items-center">
                <Icon name="ChefHat" size={18} className="mr-2 text-secondary" />
                Chefs Invités
              </h3>
              <div className="space-y-2">
                {event.chefHighlights.map((chef, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-white/90">{chef}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cultural Significance */}
          {event.culturalSignificance && (
            <div className="mb-8">
              <h3 className="font-semibold mb-3 flex items-center">
                <Icon name="Heart" size={18} className="mr-2 text-secondary" />
                Signification Culturelle
              </h3>
              <p className="text-white/80 leading-relaxed">
                {event.culturalSignificance}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-warm transform hover:scale-105 flex items-center justify-center">
              <Icon name="Ticket" size={20} className="mr-2" />
              Réserver Maintenant
            </button>
            
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/30 flex items-center justify-center">
              <Icon name="Info" size={20} className="mr-2" />
              Plus de Détails
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <div className="aspect-w-16 aspect-h-12 lg:aspect-h-16">
            <Image
              src={event.image}
              alt={event.title}
              className="w-full h-64 lg:h-96 object-cover"
            />
          </div>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-primary/50 lg:via-transparent lg:to-transparent"></div>
          
          {/* Floating Info Cards */}
          <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-warm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-text-primary">Festival Premium</p>
                  <p className="text-sm text-text-secondary">6 jours d'exception</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">8ème</p>
                  <p className="text-sm text-text-secondary">Édition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="px-8 lg:px-12 pb-8 lg:pb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <p className="text-white/90 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;