import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const SearchBar = ({ searchQuery, onSearchChange, onFilterToggle }) => {
  const [isFocused, setIsFocused] = useState(false);

  const quickFilters = [
    { label: '4 étoiles', value: 'rating:4', icon: 'Star' },
    { label: 'Marrakech', value: 'region:Marrakech', icon: 'MapPin' },
    { label: 'Terrasse', value: 'amenity:Terrasse', icon: 'Sun' },
    { label: 'Fruits de mer', value: 'cuisine:Fruits de Mer', icon: 'Fish' },
    { label: 'Romantique', value: 'occasion:Romantique', icon: 'Heart' },
  ];

  const handleQuickFilter = (filter) => {
    console.log('Quick filter applied:', filter);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Search Bar */}
      <div className={`
        relative bg-white rounded-xl shadow-warm transition-all duration-300
        ${isFocused ? 'shadow-warm-lg ring-2 ring-primary/20' : ''}
      `}>
        <div className="flex items-center">
          <div className="flex-1 relative">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" 
            />
            <input
              type="text"
              placeholder="Rechercher un restaurant, une cuisine, une région..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full pl-12 pr-4 py-4 text-lg bg-transparent border-0 focus:outline-none placeholder-text-secondary"
            />
          </div>
          
          <div className="flex items-center space-x-2 pr-4">
            <button
              onClick={onFilterToggle}
              className="flex items-center space-x-2 px-4 py-2 bg-surface hover:bg-border text-text-secondary hover:text-primary rounded-lg transition-all duration-300"
            >
              <Icon name="SlidersHorizontal" size={18} />
              <span className="hidden sm:inline font-medium">Filtres</span>
            </button>
            
            <button className="p-2 bg-primary hover:bg-primary-600 text-white rounded-lg transition-all duration-300 hover:shadow-warm">
              <Icon name="Search" size={18} />
            </button>
          </div>
        </div>

        {/* Search Suggestions (when focused) */}
        {isFocused && searchQuery.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-warm-lg border border-border z-50">
            <div className="p-4">
              <div className="text-sm text-text-secondary mb-3">Suggestions de recherche</div>
              <div className="space-y-2">
                {[
                  'La Mamounia Palace - Marrakech',
                  'Restaurants à Marrakech',
                  'Cuisine marocaine moderne',
                  'Restaurants avec terrasse'
                ].filter(suggestion => 
                  suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => onSearchChange(suggestion)}
                    className="w-full text-left px-3 py-2 hover:bg-surface rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon name="Search" size={14} className="text-text-secondary" />
                      <span className="text-sm">{suggestion}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {quickFilters.map((filter, index) => (
          <button
            key={index}
            onClick={() => handleQuickFilter(filter.value)}
            className="flex items-center space-x-2 px-4 py-2 bg-white hover:bg-primary hover:text-white border border-border hover:border-primary rounded-full text-sm font-medium transition-all duration-300 hover:shadow-warm"
          >
            <Icon name={filter.icon} size={16} />
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Popular Searches */}
      <div className="text-center mt-6">
        <div className="text-sm text-text-secondary mb-2">Recherches populaires:</div>
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            'Meilleurs restaurants Marrakech',
            'Cuisine gastronomique Casablanca',
            'Restaurants étoilés Fès',
            'Terrasse vue Atlas'
          ].map((search, index) => (
            <button
              key={index}
              onClick={() => onSearchChange(search)}
              className="text-sm text-primary hover:text-primary-600 hover:underline transition-colors duration-200"
            >
              {search}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;