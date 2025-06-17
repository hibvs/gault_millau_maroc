import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const RestaurantCard = ({ restaurant, viewMode }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const renderRating = () => {
    return (
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          {[...Array(4)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={`${i < restaurant.rating.toques ? 'text-secondary fill-current' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-text-primary">
          {restaurant.rating.points}/20
        </span>
      </div>
    );
  };

  const renderAmenities = (limit = 3) => {
    const displayAmenities = restaurant.amenities.slice(0, limit);
    const remainingCount = restaurant.amenities.length - limit;

    return (
      <div className="flex flex-wrap gap-1">
        {displayAmenities.map((amenity) => (
          <span
            key={amenity}
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-50 text-accent-700"
          >
            {amenity}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
            +{remainingCount}
          </span>
        )}
      </div>
    );
  };

  const handleFavoriteToggle = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const handleReservation = (e) => {
    e.preventDefault();
    console.log('Réservation pour:', restaurant.name);
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-warm hover:shadow-warm-lg transition-all duration-300 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onLoad={() => setIsImageLoaded(true)}
            />
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <Icon name="ImageIcon" size={32} className="text-gray-400" />
              </div>
            )}
            <button
              onClick={handleFavoriteToggle}
              className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all duration-200"
            >
              <Icon
                name="Heart"
                size={16}
                className={isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}
              />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-serif text-xl font-semibold text-text-primary mb-1">
                  {restaurant.name}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <span className="flex items-center">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {restaurant.region}
                  </span>
                  <span className="font-medium text-primary">{restaurant.priceRange}</span>
                </div>
              </div>
              {renderRating()}
            </div>

            <p className="text-text-secondary text-sm mb-4 line-clamp-2">
              {restaurant.description}
            </p>

            <div className="mb-4">
              <div className="text-sm text-text-secondary mb-2">Spécialités:</div>
              <div className="flex flex-wrap gap-2">
                {restaurant.specialties.slice(0, 3).map((specialty, index) => (
                  <span
                    key={index}
                    className="text-xs bg-secondary-50 text-secondary-700 px-2 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              {renderAmenities(4)}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-text-secondary">
                <div className="flex items-center mb-1">
                  <Icon name="Clock" size={14} className="mr-1" />
                  {restaurant.openingHours}
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={14} className="mr-1" />
                  {restaurant.phone}
                </div>
              </div>

              <div className="flex space-x-2">
                <Link
                  to={`/restaurants-discovery-hub/${restaurant.id}`}
                  className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Voir détails
                </Link>
                {restaurant.reservationAvailable && (
                  <button
                    onClick={handleReservation}
                    className="px-4 py-2 bg-accent hover:bg-accent-600 text-white rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Réserver
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid view (default)
  return (
    <div className="bg-white rounded-lg shadow-warm hover:shadow-warm-lg transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onLoad={() => setIsImageLoaded(true)}
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <Icon name="ImageIcon" size={32} className="text-gray-400" />
          </div>
        )}
        <button
          onClick={handleFavoriteToggle}
          className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all duration-200"
        >
          <Icon
            name="Heart"
            size={16}
            className={isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}
          />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/90 text-primary px-2 py-1 rounded-full text-sm font-medium">
            {restaurant.priceRange}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="font-serif text-lg font-semibold text-text-primary mb-1 line-clamp-1">
              {restaurant.name}
            </h3>
            <div className="flex items-center text-sm text-text-secondary">
              <Icon name="MapPin" size={14} className="mr-1" />
              {restaurant.region}
            </div>
          </div>
          {renderRating()}
        </div>

        <p className="text-text-secondary text-sm mb-3 line-clamp-2">
          {restaurant.cuisine}
        </p>

        <div className="mb-4">
          <div className="text-xs text-text-secondary mb-2">Spécialités:</div>
          <div className="flex flex-wrap gap-1">
            {restaurant.specialties.slice(0, 2).map((specialty, index) => (
              <span
                key={index}
                className="text-xs bg-secondary-50 text-secondary-700 px-2 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          {renderAmenities(2)}
        </div>

        <div className="text-xs text-text-secondary mb-4 italic">
          "{restaurant.criticExcerpt}"
        </div>

        <div className="flex space-x-2">
          <Link
            to={`/restaurants-discovery-hub/${restaurant.id}`}
            className="flex-1 px-3 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg text-sm font-medium transition-all duration-300 text-center"
          >
            Détails
          </Link>
          {restaurant.reservationAvailable && (
            <button
              onClick={handleReservation}
              className="flex-1 px-3 py-2 bg-accent hover:bg-accent-600 text-white rounded-lg text-sm font-medium transition-all duration-300"
            >
              Réserver
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;