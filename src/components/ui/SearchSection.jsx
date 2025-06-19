import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');

  const cities = [
    { value: '', label: 'Toutes les villes' },
    { value: 'tanger', label: 'Tanger' },
    { value: 'tetouan', label: 'Tétouan' },
    { value: 'casablanca', label: 'Casablanca' },
    { value: 'fes', label: 'Fès' },
    { value: 'marrakech', label: 'Marrakech' },
    { value: 'agadir', label: 'Agadir' }
  ];

  const cuisineTypes = [
    { value: '', label: 'Tous les types' },
    { value: 'moroccan', label: 'Marocaine Traditionnelle' },
    { value: 'fusion', label: 'Fusion Contemporaine' },
    { value: 'french-moroccan', label: 'Franco-Marocaine' },
    { value: 'mediterranean', label: 'Méditerranéenne' },
    { value: 'international', label: 'Internationale' },
    { value: 'seafood', label: 'Fruits de Mer' }
  ];

  const handleSearch = () => {
    console.log('Search:', { searchQuery, selectedCity, selectedCuisine });
  };

  return (
    <section className="py-16 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4">
            Trouvez Votre Table d'Exception
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Recherchez parmi plus de 800 restaurants sélectionnés par nos critiques gastronomiques
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-warm-lg p-6 lg:p-8 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* Search Input */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Restaurant ou Chef
                </label>
                <div className="relative">
                  <Icon 
                    name="Search" 
                    size={20} 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ex: La Mamounia, Chef Moha..."
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                  />
                </div>
              </div>

              {/* City Selection */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Ville
                </label>
                <div className="relative">
                  <Icon 
                    name="MapPin" 
                    size={20} 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
                  />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-8 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background appearance-none"
                  >
                    {cities.map((city) => (
                      <option key={city.value} value={city.value}>
                        {city.label}
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

              {/* Cuisine Type */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Cuisine
                </label>
                <div className="relative">
                  <Icon 
                    name="UtensilsCrossed" 
                    size={20} 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
                  />
                  <select
                    value={selectedCuisine}
                    onChange={(e) => setSelectedCuisine(e.target.value)}
                    className="w-full pl-10 pr-8 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background appearance-none"
                  >
                    {cuisineTypes.map((cuisine) => (
                      <option key={cuisine.value} value={cuisine.value}>
                        {cuisine.label}
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
            </div>

            {/* Search Button */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={handleSearch}
                className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-warm transform hover:scale-105 flex items-center justify-center"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Rechercher
              </button>
              
              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <button className="flex items-center hover:text-primary transition-colors duration-300">
                  <Icon name="SlidersHorizontal" size={16} className="mr-1" />
                  Filtres avancés
                </button>
                <button className="flex items-center hover:text-primary transition-colors duration-300">
                  <Icon name="MapPin" size={16} className="mr-1" />
                  Près de moi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            { label: 'Restaurants Étoilés', icon: 'Star' },
            { label: 'Terrasse', icon: 'Sun' },
            { label: 'Vue Panoramique', icon: 'Eye' },
            { label: 'Cuisine Ouverte', icon: 'ChefHat' },
            { label: 'Parking', icon: 'Car' },
            { label: 'Accessible PMR', icon: 'Accessibility' }
          ].map((filter) => (
            <button
              key={filter.label}
              className="flex items-center px-4 py-2 bg-white hover:bg-primary-50 border border-border hover:border-primary text-text-secondary hover:text-primary rounded-full text-sm font-medium transition-all duration-300"
            >
              <Icon name={filter.icon} size={16} className="mr-2" />
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;