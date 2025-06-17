import React from 'react';
import Icon from 'components/AppIcon';

const FilterSidebar = ({
  isOpen,
  filters,
  onFilterChange,
  onClearFilters,
  regions,
  cuisineTypes,
  priceRanges,
  amenityOptions,
  dietaryOptions,
  occasionTypes,
  onClose
}) => {
  const handleFilterUpdate = (key, value) => {
    if (key === 'amenities' || key === 'dietary') {
      const currentArray = filters[key] || [];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      onFilterChange({ ...filters, [key]: newArray });
    } else {
      onFilterChange({ ...filters, [key]: value });
    }
  };

  const renderRatingStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(4)].map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={16}
            className={`${i < rating ? 'text-secondary fill-current' : 'text-gray-300'}`}
          />
        ))}
        <span className="text-sm text-text-secondary ml-2">{rating} toque{rating > 1 ? 's' : ''}</span>
      </div>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative top-0 left-0 h-full lg:h-auto w-80 lg:w-72 
        bg-white lg:bg-surface border-r lg:border border-border rounded-none lg:rounded-lg
        transform transition-transform duration-300 ease-smooth z-50 lg:z-auto
        overflow-y-auto lg:overflow-visible
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-xl font-semibold text-text-primary">
              Filtres
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={onClearFilters}
                className="text-sm text-primary hover:text-primary-600 font-medium"
              >
                Effacer
              </button>
              <button
                onClick={onClose}
                className="lg:hidden p-1 text-text-secondary hover:text-primary"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-text-primary mb-3">Note minimum</h4>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={filters.rating === rating.toString()}
                    onChange={(e) => handleFilterUpdate('rating', e.target.value)}
                    className="sr-only"
                  />
                  <div className={`
                    flex items-center space-x-3 p-2 rounded-lg transition-colors duration-200
                    ${filters.rating === rating.toString() 
                      ? 'bg-primary-50 border border-primary' :'hover:bg-gray-50'
                    }
                  `}>
                    {renderRatingStars(rating)}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-text-primary mb-3">Gamme de prix</h4>
            <div className="grid grid-cols-2 gap-2">
              {priceRanges.map((price) => (
                <button
                  key={price}
                  onClick={() => handleFilterUpdate('priceRange', filters.priceRange === price ? '' : price)}
                  className={`
                    p-3 text-center rounded-lg border transition-all duration-200
                    ${filters.priceRange === price
                      ? 'bg-primary text-white border-primary' :'bg-white border-border hover:border-primary hover:bg-primary-50'
                    }
                  `}
                >
                  <div className="font-medium">{price}</div>
                  <div className="text-xs opacity-75">
                    {price === '€' && '< 200 DH'}
                    {price === '€€' && '200-400 DH'}
                    {price === '€€€' && '400-800 DH'}
                    {price === '€€€€' && '> 800 DH'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Region Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-text-primary mb-3">Région</h4>
            <select
              value={filters.region}
              onChange={(e) => handleFilterUpdate('region', e.target.value)}
              className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Toutes les régions</option>
              {regions.map((region) => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          {/* Cuisine Type Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-text-primary mb-3">Type de cuisine</h4>
            <select
              value={filters.cuisine}
              onChange={(e) => handleFilterUpdate('cuisine', e.target.value)}
              className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Tous les types</option>
              {cuisineTypes.map((cuisine) => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>

          {/* Amenities Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-text-primary mb-3">Équipements</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {amenityOptions.map((amenity) => (
                <label key={amenity} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => handleFilterUpdate('amenities', amenity)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-text-secondary">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Dietary Options Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-text-primary mb-3">Options alimentaires</h4>
            <div className="space-y-2">
              {dietaryOptions.map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.dietary.includes(option)}
                    onChange={() => handleFilterUpdate('dietary', option)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="ml-3 text-sm text-text-secondary">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Occasion Filter */}
          <div className="mb-6">
            <h4 className="font-medium text-text-primary mb-3">Occasion</h4>
            <select
              value={filters.occasion}
              onChange={(e) => handleFilterUpdate('occasion', e.target.value)}
              className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Toutes occasions</option>
              {occasionTypes.map((occasion) => (
                <option key={occasion} value={occasion}>{occasion}</option>
              ))}
            </select>
          </div>

          {/* Apply Button (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={onClose}
              className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Appliquer les filtres
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;