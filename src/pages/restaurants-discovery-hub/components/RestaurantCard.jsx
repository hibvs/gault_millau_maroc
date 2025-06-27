import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const yellowColor = '#FFD700';

const RestaurantCard = ({ restaurant, viewMode }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const renderRating = () => {
    return (
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src="/assets/images/toques/toque.png"
              alt="toque"
              className={`w-4 h-4 mr-1 ${
                i < restaurant.rating.toques ? 'opacity-100' : 'opacity-30'
              }`}
              style={{ filter: `drop-shadow(0 0 1px black)` }} // optionnel
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
            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: '#FFF8DC', // un jaune très clair (Cornsilk) pour le fond
              color: '#B8860B', // un jaune foncé pour le texte
            }}
          >
            {amenity}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800">
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

  // Styles des boutons simplifiés (jaune #FFD700, rouge, blanc, noir)
  const buttonStyles = {
    primary: `bg-[${yellowColor}] hover:bg-[#e6c200] text-black`,
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    white: 'bg-white hover:bg-gray-100 text-black border border-black',
    black: 'bg-black hover:bg-gray-800 text-white',
  };

  // Comme Tailwind ne supporte pas les variables dynamiques dans les classes,
  // on remplace par style inline dans les boutons jaunes :

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
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
              className={`absolute top-3 right-3 p-2 rounded-full shadow-sm transition-colors duration-200 ${
                isFavorite ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-white hover:bg-gray-100 text-black border border-black'
              }`}
            >
              <Icon
                name="Heart"
                size={16}
                className={isFavorite ? 'fill-current text-white' : 'text-black'}
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
                  <span className="font-medium text-black">{restaurant.priceRange}</span>
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
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ backgroundColor: yellowColor, color: 'black' }}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">{renderAmenities(4)}</div>

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
                  className="bg-white hover:bg-gray-100 text-black border border-black px-4 py-2 rounded-lg text-sm font-medium text-center"
                >
                  Voir détails
                </Link>
                {restaurant.reservationAvailable && (
                  <button
                    onClick={handleReservation}
                    style={{ backgroundColor: yellowColor, color: 'black' }}
                    className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#e6c200] transition-colors"
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
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
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
          className={`absolute top-3 right-3 p-2 rounded-full shadow-sm transition-colors duration-200 ${
            isFavorite ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-white hover:bg-gray-100 text-black border border-black'
          }`}
        >
          <Icon
            name="Heart"
            size={16}
            className={isFavorite ? 'fill-current text-white' : 'text-black'}
          />
        </button>
        <div className="absolute bottom-3 left-3">
          <span
            className="text-sm font-medium rounded-full px-2 py-1"
            style={{ backgroundColor: yellowColor, color: 'black' }}
          >
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

        <p className="text-text-secondary text-sm mb-3 line-clamp-2">{restaurant.cuisine}</p>

        <div className="mb-4">
          <div className="text-xs text-text-secondary mb-2">Spécialités:</div>
          <div className="flex flex-wrap gap-1">
            {restaurant.specialties.slice(0, 2).map((specialty, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full"
                style={{ backgroundColor: yellowColor, color: 'black' }}
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">{renderAmenities(2)}</div>

        <div className="text-xs text-text-secondary mb-4 italic">"{restaurant.criticExcerpt}"</div>

        <div className="flex space-x-2">
          <Link
            to={`/restaurants-discovery-hub/${restaurant.id}`}
            className="bg-white hover:bg-gray-100 text-black border border-black flex-1 px-3 py-2 rounded-lg text-sm font-medium text-center"
          >
            Détails
          </Link>

        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
