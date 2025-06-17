// src/pages/navigation-system-global-header/components/RegionSelector.jsx
import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const RegionSelector = ({ onRegionChange, selectedRegion }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Moroccan regions as requested (no Rabat)
  const moroccanRegions = [
    {
      id: 'nord',
      name: 'Nord du Maroc',
      cities: ['Tanger', 'Tétouan', 'Chefchaouen', 'Al Hoceima'],
      description: 'Région du Nord - Tanger, Tétouan et environs',
      color: '#2563EB' // Blue for North
    },
    {
      id: 'centre',
      name: 'Centre du Maroc', 
      cities: ['Casablanca', 'Fès', 'Meknès', 'Kenitra'],
      description: 'Région du Centre - Casablanca, Fès et environs',
      color: '#059669' // Green for Center
    },
    {
      id: 'sud',
      name: 'Sud du Maroc',
      cities: ['Marrakech', 'Agadir', 'Essaouira', 'Ouarzazate'],
      description: 'Région du Sud - Marrakech, Agadir et environs', 
      color: '#DC2626' // Red for South
    },
    {
      id: 'all',
      name: 'Tout le Maroc',
      cities: ['Toutes les villes'],
      description: 'Voir tous les restaurants du Maroc',
      color: '#6B7280' // Gray for All
    }
  ];

  const handleRegionSelect = (region) => {
    onRegionChange?.(region);
    setIsOpen(false);
  };

  const currentRegion = moroccanRegions.find(r => r.id === selectedRegion) || moroccanRegions[3];

  return (
    <div className="relative">
      {/* Region Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 min-w-[200px]"
      >
        <Icon name="MapPin" size={16} className="text-gray-500" />
        <div className="flex-1 text-left">
          <div className="text-sm font-medium text-gray-900">{currentRegion.name}</div>
          <div className="text-xs text-gray-500">{currentRegion.cities.slice(0, 2).join(', ')}</div>
        </div>
        <Icon 
          name={isOpen ? "ChevronUp" : "ChevronDown"} 
          size={16} 
          className="text-gray-400 transition-transform duration-200" 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-warm-lg z-50 overflow-hidden">
          {moroccanRegions.map((region) => (
            <button
              key={region.id}
              onClick={() => handleRegionSelect(region)}
              className={`w-full flex items-start space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                selectedRegion === region.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
              }`}
            >
              <div 
                className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                style={{ backgroundColor: region.color }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900 mb-1">{region.name}</div>
                <div className="text-xs text-gray-500 mb-1">{region.description}</div>
                <div className="text-xs text-gray-400">
                  {region.cities.length > 3 
                    ? `${region.cities.slice(0, 3).join(', ')} +${region.cities.length - 3} autres`
                    : region.cities.join(', ')
                  }
                </div>
              </div>
              {selectedRegion === region.id && (
                <Icon name="Check" size={16} className="text-blue-500 flex-shrink-0 mt-1" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default RegionSelector;