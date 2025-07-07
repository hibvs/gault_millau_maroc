import React from 'react';
import Icon from 'components/AppIcon';

const EventFilters = ({ locations, selectedFilters, onFilterChange }) => {
  const dateOptions = [
    { id: 'all', name: 'Toutes les dates' },
    { id: 'today', name: "Aujourd'hui" },
    { id: 'week', name: 'Cette semaine' },
    { id: 'month', name: 'Ce mois' }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 w-full lg:w-auto">
      
      {/* Location Filter */}
      <div className="w-full lg:w-auto">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Localisation
        </label>
        <div className="relative">
          <select
            value={selectedFilters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full lg:w-48 appearance-none bg-white border border-border rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
          <Icon 
            name="ChevronDown" 
            size={16} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" 
          />
        </div>
      </div>

      {/* Date Filter */}
      <div className="w-full lg:w-auto">
        <label className="block text-sm font-medium text-text-primary mb-2">
          Période
        </label>
        <div className="relative">
          <select
            value={selectedFilters.date}
            onChange={(e) => onFilterChange('date', e.target.value)}
            className="w-full lg:w-48 appearance-none bg-white border border-border rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {dateOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          <Icon 
            name="ChevronDown" 
            size={16} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" 
          />
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedFilters.location !== 'all' || selectedFilters.date !== 'all') && (
        <button
          onClick={() => {
            onFilterChange('location', 'all');
            onFilterChange('date', 'all');
          }}
          className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-300"
        >
          <Icon name="X" size={14} />
          <span>Effacer</span>
        </button>
      )}
    </div>
  );
};

export default EventFilters;
