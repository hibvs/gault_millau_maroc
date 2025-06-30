import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const EventCard = ({ event }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeInfo = (type) => {
    const types = {
      'restaurant-opening': { icon: 'Store', color: 'text-accent', bg: 'bg-accent-50', label: 'Ouverture' },
      'food-festival': { icon: 'PartyPopper', color: 'text-secondary', bg: 'bg-secondary-50', label: 'Festival' },
      'wine-tasting': { icon: 'Wine', color: 'text-primary', bg: 'bg-primary-50', label: 'Dégustation' },
      'chef-event': { icon: 'ChefHat', color: 'text-success', bg: 'bg-success-50', label: 'Chef Event' },
      'cultural': { icon: 'Star', color: 'text-warning', bg: 'bg-warning-50', label: 'Culturel' }
    };
    return types[type] || types['restaurant-opening'];
  };

  const typeInfo = getEventTypeInfo(event.type);

  return (
    <div className="bg-white rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-300 overflow-hidden group">
      <div className="lg:flex">
        {/* Image Section */}
        <div className="lg:w-1/3 relative overflow-hidden">
          <div className="aspect-w-16 aspect-h-12 lg:aspect-h-16">
            <Image
              src={event.image}
              alt={event.title}
              className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Event Type Badge */}
          <div className={`absolute top-4 left-4 ${typeInfo.bg} ${typeInfo.color} px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1`}>
            <Icon name={typeInfo.icon} size={14} />
            <span>{typeInfo.label}</span>
          </div>

          {/* Date Badge */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-text-primary px-3 py-2 rounded-lg text-sm font-medium">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{new Date(event.date).getDate()}</span>
            </div>
            <div className="text-xs text-text-secondary">
              {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-2/3 p-6 lg:p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl lg:text-2xl font-serif font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                {event.title}
              </h3>
              <p className="text-accent font-medium mb-3">
                {event.subtitle}
              </p>
            </div>
            
            {event.ticketPrice && (
              <div className="text-right ml-4">
                <div className="text-lg font-bold text-primary">
                  {event.ticketPrice}
                </div>
                <div className="text-xs text-text-secondary">
                  par personne
                </div>
              </div>
            )}
          </div>

          {/* Event Details */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={16} />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={16} />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Building" size={16} />
              <span>{event.venue}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3">
            {event.description}
          </p>

          {/* Highlights */}
          {event.menuHighlights && (
            <div className="mb-6">
              <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                <Icon name="UtensilsCrossed" size={16} className="mr-2" />
                Menu Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                {event.menuHighlights.slice(0, 3).map((item, index) => (
                  <span key={index} className="bg-surface text-text-secondary px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {event.wineSelection && (
            <div className="mb-6">
              <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                <Icon name="Wine" size={16} className="mr-2" />
                Sélection de Vins
              </h4>
              <div className="flex flex-wrap gap-2">
                {event.wineSelection.slice(0, 2).map((wine, index) => (
                  <span key={index} className="bg-primary-50 text-primary px-3 py-1 rounded-full text-sm">
                    {wine}
                  </span>
                ))}
              </div>
            </div>
          )}

          {event.chefProfile && (
            <div className="mb-6">
              <h4 className="font-semibold text-text-primary mb-2 flex items-center">
                <Icon name="ChefHat" size={16} className="mr-2" />
                Chef
              </h4>
              <div className="bg-surface p-3 rounded-lg">
                <p className="font-medium text-text-primary">{event.chefProfile.name}</p>
                <p className="text-sm text-text-secondary">{event.chefProfile.experience || event.chefProfile.accolades}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="flex-1 bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105 flex items-center justify-center">
              <Icon name="Ticket" size={18} className="mr-2" />
              {event.reservationRequired ? 'Réserver' : 'Plus d\'infos'}
            </button>
            
            <button className="flex items-center justify-center px-6 py-3 border-2 border-border hover:border-primary text-text-secondary hover:text-primary rounded-lg font-medium transition-all duration-300">
              <Icon name="Heart" size={18} className="mr-2" />
              Sauvegarder
            </button>
            
            <button className="flex items-center justify-center px-6 py-3 border-2 border-border hover:border-primary text-text-secondary hover:text-primary rounded-lg font-medium transition-all duration-300">
              <Icon name="Share2" size={18} className="mr-2" />
              Partager
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;