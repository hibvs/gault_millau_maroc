import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const InteractiveMap = ({ regions }) => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regionCoordinates = {
    marrakech: { lat: 31.6295, lng: -7.9811, top: '65%', left: '25%' },
    casablanca: { lat: 33.5731, lng: -7.5898, top: '35%', left: '20%' },
    fez: { lat: 34.0181, lng: -5.0078, top: '25%', left: '45%' },
    rabat: { lat: 34.0209, lng: -6.8416, top: '30%', left: '15%' }
  };

  return (
    <div className="bg-surface rounded-2xl shadow-warm overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-serif font-bold text-text-primary mb-2">
          Carte Interactive du Maroc Gastronomique
        </h2>
        <p className="text-text-secondary">
          Explorez les régions culinaires et découvrez leurs spécialités
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Map Section */}
        <div className="lg:w-2/3 relative bg-gradient-to-br from-primary-50 to-accent-50 min-h-96 lg:min-h-[600px]">
          {/* Morocco Map Outline */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full max-w-md opacity-20"
              fill="currentColor"
            >
              <path d="M50 150 Q100 100 150 120 Q200 110 250 130 Q300 140 350 160 Q340 200 320 220 Q280 240 240 230 Q200 235 160 225 Q120 220 80 200 Q60 180 50 150 Z" />
            </svg>
          </div>

          {/* Region Markers */}
          {regions.map((region) => {
            const coords = regionCoordinates[region.id];
            if (!coords) return null;

            return (
              <div
                key={region.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ top: coords.top, left: coords.left }}
                onClick={() => setSelectedRegion(region)}
              >
                <div className={`relative ${
                  selectedRegion?.id === region.id ? 'scale-125' : 'hover:scale-110'
                } transition-transform duration-300`}>
                  <div className={`w-12 h-12 rounded-full shadow-warm-lg flex items-center justify-center ${
                    selectedRegion?.id === region.id 
                      ? 'bg-primary text-white' :'bg-white text-primary hover:bg-primary hover:text-white'
                  } transition-colors duration-300`}>
                    <Icon name="MapPin" size={20} />
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className={`absolute inset-0 rounded-full ${
                    selectedRegion?.id === region.id ? 'bg-primary' : 'bg-accent'
                  } opacity-25 animate-ping`}></div>
                  
                  {/* Region Label */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-text-primary text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                      {region.name}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-text-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Google Maps Embed */}
          <div className="absolute bottom-4 right-4">
            <button className="bg-white hover:bg-gray-50 text-text-primary px-4 py-2 rounded-lg shadow-warm text-sm font-medium transition-colors duration-300 flex items-center space-x-2">
              <Icon name="ExternalLink" size={16} />
              <span>Voir sur Google Maps</span>
            </button>
          </div>
        </div>

        {/* Region Details Panel */}
        <div className="lg:w-1/3 p-6 bg-background">
          {selectedRegion ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif font-bold text-text-primary">
                  {selectedRegion.name}
                </h3>
                <button
                  onClick={() => setSelectedRegion(null)}
                  className="p-1 text-text-secondary hover:text-text-primary transition-colors duration-300"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              <div className="relative overflow-hidden rounded-xl">
                <iframe
                  width="100%"
                  height="200"
                  loading="lazy"
                  title={selectedRegion.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${regionCoordinates[selectedRegion.id]?.lat},${regionCoordinates[selectedRegion.id]?.lng}&z=12&output=embed`}
                  className="rounded-xl"
                />
              </div>

              <div>
                <p className="text-secondary font-medium text-lg mb-2">
                  {selectedRegion.title}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {selectedRegion.description.split('\n')[0]}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-surface p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="UtensilsCrossed" size={14} className="text-accent" />
                    <span className="font-medium text-text-primary">Restaurants</span>
                  </div>
                  <span className="text-text-secondary">{selectedRegion.restaurantCount}</span>
                </div>
                <div className="bg-surface p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="DollarSign" size={14} className="text-secondary" />
                    <span className="font-medium text-text-primary">Prix</span>
                  </div>
                  <span className="text-text-secondary">{selectedRegion.priceRange}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Star" size={16} className="text-secondary" />
                  <span>Spécialités</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRegion.specialties.map((specialty, index) => (
                    <span key={index} className="bg-accent-50 text-accent-700 px-2 py-1 rounded-full text-xs">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-primary" />
                  <span>Meilleure Période</span>
                </h4>
                <p className="text-text-secondary text-sm">{selectedRegion.bestTime}</p>
              </div>

              <button className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105 flex items-center justify-center space-x-2">
                <Icon name="ArrowRight" size={16} />
                <span>Explorer {selectedRegion.name}</span>
              </button>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-text-primary mb-2">
                Sélectionnez une Région
              </h3>
              <p className="text-text-secondary text-sm">
                Cliquez sur un marqueur pour découvrir les spécialités culinaires de chaque région
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;