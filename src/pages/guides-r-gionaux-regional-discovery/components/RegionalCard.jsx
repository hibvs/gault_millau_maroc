import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const RegionalCard = ({ region, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-surface rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-500 overflow-hidden group">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 relative overflow-hidden">
            <Image
              src={region.image}
              alt={region.name}
              className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              {region.restaurantCount} restaurants
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
              {region.priceRange}
            </div>
          </div>
          
          <div className="lg:w-2/3 p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                  {region.name}
                </h3>
                <p className="text-secondary font-medium text-lg">{region.title}</p>
              </div>
              <div className="flex items-center space-x-1 text-secondary">
                <Icon name="MapPin" size={20} />
              </div>
            </div>

            <p className="text-text-secondary mb-6 leading-relaxed">
              {region.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="UtensilsCrossed" size={16} className="text-accent" />
                  <span>Spécialités</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {region.specialties.slice(0, 3).map((specialty, index) => (
                    <span key={index} className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                  {region.specialties.length > 3 && (
                    <span className="bg-background text-text-secondary px-3 py-1 rounded-full text-sm">
                      +{region.specialties.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Sparkles" size={16} className="text-secondary" />
                  <span>Points Forts</span>
                </h4>
                <ul className="space-y-1">
                  {region.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="text-sm text-text-secondary flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-6 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} />
                  <span>{region.bestTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Palette" size={16} />
                  <span>{region.atmosphere}</span>
                </div>
              </div>
              
              <button className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105 flex items-center space-x-2">
                <span>Explorer</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-500 overflow-hidden group cursor-pointer">
      <div className="relative overflow-hidden">
        <Image
          src={region.image}
          alt={region.name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
          {region.restaurantCount} restaurants
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
          {region.priceRange}
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-secondary transition-colors duration-300">
            {region.name}
          </h3>
          <p className="text-secondary font-medium">{region.title}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
          {region.description}
        </p>

        <div className="mb-4">
          <h4 className="font-semibold text-text-primary mb-2 flex items-center space-x-2">
            <Icon name="UtensilsCrossed" size={16} className="text-accent" />
            <span>Spécialités</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {region.specialties.slice(0, 3).map((specialty, index) => (
              <span key={index} className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-sm">
                {specialty}
              </span>
            ))}
            {region.specialties.length > 3 && (
              <span className="bg-background text-text-secondary px-3 py-1 rounded-full text-sm">
                +{region.specialties.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-text-primary mb-2 flex items-center space-x-2">
            <Icon name="Sparkles" size={16} className="text-secondary" />
            <span>Points Forts</span>
          </h4>
          <ul className="space-y-1">
            {region.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-sm text-text-secondary flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex flex-col space-y-1 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={14} />
              <span>{region.bestTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Palette" size={14} />
              <span>{region.atmosphere}</span>
            </div>
          </div>
          
          <button className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105 flex items-center space-x-2">
            <span>Explorer</span>
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegionalCard;