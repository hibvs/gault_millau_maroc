import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const MapView = ({ restaurants }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleMarkerClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const renderRating = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(4)].map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={12}
            className={`${i < rating.toques ? 'text-secondary fill-current' : 'text-gray-300'}`}
          />
        ))}
        <span className="text-xs font-medium text-text-primary ml-1">
          {rating.points}/20
        </span>
      </div>
    );
  };

  return (
    <div className="relative h-96 lg:h-[600px] bg-gray-100 rounded-lg overflow-hidden">
      {/* Map Container */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Restaurants Map Morocco"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=31.6295,-7.9811&z=6&output=embed"
          className="border-0"
        />
      </div>

      {/* Custom Markers Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {restaurants.map((restaurant, index) => {
          // Calculate position based on restaurant location (mock positioning)
          const positions = [
            { top: '45%', left: '25%' }, // Marrakech area
            { top: '35%', left: '45%' }, // Casablanca area
            { top: '25%', left: '35%' }, // Fès area
            { top: '30%', left: '40%' }, // Rabat area
            { top: '55%', left: '15%' }, // Essaouira area
            { top: '65%', left: '20%' }, // Agadir area
          ];
          
          const position = positions[index % positions.length];
          
          return (
            <div
              key={restaurant.id}
              className="absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: position.top, left: position.left }}
              onClick={() => handleMarkerClick(restaurant)}
            >
              <div className={`
                relative w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-200 hover:scale-110
                ${restaurant.rating.toques >= 4 ? 'bg-primary' : 
                  restaurant.rating.toques >= 3 ? 'bg-secondary' : 
                  restaurant.rating.toques >= 2 ? 'bg-accent' : 'bg-gray-500'}
              `}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="UtensilsCrossed" size={16} className="text-white" />
                </div>
                {/* Rating indicator */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">
                    {restaurant.rating.toques}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Restaurant Info Card */}
      {selectedRestaurant && (
        <div className="absolute bottom-4 left-4 right-4 lg:left-4 lg:right-auto lg:w-80 bg-white rounded-lg shadow-warm-lg p-4 z-10">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3 className="font-serif text-lg font-semibold text-text-primary mb-1">
                {selectedRestaurant.name}
              </h3>
              <div className="flex items-center text-sm text-text-secondary">
                <Icon name="MapPin" size={14} className="mr-1" />
                {selectedRestaurant.region}
              </div>
            </div>
            <button
              onClick={() => setSelectedRestaurant(null)}
              className="p-1 text-text-secondary hover:text-primary"
            >
              <Icon name="X" size={16} />
            </button>
          </div>

          <div className="flex items-center justify-between mb-3">
            {renderRating(selectedRestaurant.rating)}
            <span className="font-medium text-primary">{selectedRestaurant.priceRange}</span>
          </div>

          <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
            <Image
              src={selectedRestaurant.image}
              alt={selectedRestaurant.name}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-text-secondary text-sm mb-3 line-clamp-2">
            {selectedRestaurant.description}
          </p>

          <div className="mb-3">
            <div className="text-xs text-text-secondary mb-1">Spécialités:</div>
            <div className="flex flex-wrap gap-1">
              {selectedRestaurant.specialties.slice(0, 2).map((specialty, index) => (
                <span
                  key={index}
                  className="text-xs bg-secondary-50 text-secondary-700 px-2 py-1 rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center text-sm text-text-secondary mb-3">
            <Icon name="Clock" size={14} className="mr-1" />
            {selectedRestaurant.openingHours}
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 px-3 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-medium transition-all duration-300">
              Voir détails
            </button>
            {selectedRestaurant.reservationAvailable && (
              <button className="flex-1 px-3 py-2 bg-accent hover:bg-accent-600 text-white rounded-lg text-sm font-medium transition-all duration-300">
                Réserver
              </button>
            )}
          </div>
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-warm p-3">
        <h4 className="font-medium text-text-primary mb-2 text-sm">Légende</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <span className="text-xs text-text-secondary">4 Toques</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-secondary rounded-full"></div>
            <span className="text-xs text-text-secondary">3 Toques</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-accent rounded-full"></div>
            <span className="text-xs text-text-secondary">2 Toques</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
            <span className="text-xs text-text-secondary">1 Toque</span>
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button className="p-2 bg-white hover:bg-gray-50 rounded-lg shadow-warm transition-colors duration-200">
          <Icon name="Plus" size={16} className="text-text-secondary" />
        </button>
        <button className="p-2 bg-white hover:bg-gray-50 rounded-lg shadow-warm transition-colors duration-200">
          <Icon name="Minus" size={16} className="text-text-secondary" />
        </button>
        <button className="p-2 bg-white hover:bg-gray-50 rounded-lg shadow-warm transition-colors duration-200">
          <Icon name="Locate" size={16} className="text-text-secondary" />
        </button>
      </div>
    </div>
  );
};

export default MapView;