import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/ui/Header';
import Icon from 'components/AppIcon';

import FilterSidebar from './components/FilterSidebar';
import RestaurantCard from './components/RestaurantCard';
import MapView from './components/MapView';
import SearchBar from './components/SearchBar';

const RestaurantsDiscoveryHub = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'map'
  const [filters, setFilters] = useState({
    rating: '',
    priceRange: '',
    region: '',
    cuisine: '',
    amenities: [],
    dietary: [],
    occasion: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Mock restaurant data
  const restaurants = [
    {
      id: 1,
      name: "La Mamounia Palace",
      rating: { toques: 4, points: 18 },
      priceRange: "€€€€",
      region: "Marrakech",
      cuisine: "Gastronomie Marocaine Moderne",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      description: `Restaurant emblématique de La Mamounia, proposant une cuisine marocaine raffinée dans un cadre somptueux. Le chef revisite les classiques avec une approche contemporaine, utilisant les meilleurs produits du terroir marocain.`,
      specialties: ["Pastilla au pigeon", "Tajine d'agneau aux pruneaux", "Couscous royal"],
      amenities: ["Terrasse", "Cave à vin", "Parking", "Table du chef"],
      dietary: ["Végétarien", "Sans gluten"],
      location: { lat: 31.6295, lng: -7.9811 },
      address: "Avenue Bab Jdid, Marrakech 40040",
      phone: "+212 524 388 600",
      reservationAvailable: true,
      criticExcerpt: "Une expérience culinaire exceptionnelle qui honore la tradition tout en embrassant la modernité.",
      openingHours: "19h00 - 23h30"
    },
    {
      id: 2,
      name: "Le Foundouk",
      rating: { toques: 3, points: 15 },
      priceRange: "€€€",
      region: "Tanger",
      cuisine: "Fusion Franco-Marocaine",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description: `Niché dans un riad restauré de la médina, Le Foundouk propose une cuisine fusion inventive mêlant techniques françaises et saveurs marocaines. L'ambiance intimiste et la terrasse sur les toits offrent une expérience unique.`,
      specialties: ["Foie gras aux figues", "Tajine de lotte", "Tarte tatin aux dattes"],
      amenities: ["Terrasse", "Vue panoramique", "Ambiance romantique"],
      dietary: ["Végétarien"],
      location: { lat: 31.6317, lng: -7.9883 },
      address: "55 Rue du Souk des Fassis, Marrakech",
      phone: "+212 524 378 190",
      reservationAvailable: true,
      criticExcerpt: "Une fusion réussie entre deux cultures culinaires, servie dans un cadre authentique.",
      openingHours: "19h00 - 24h00"
    },
    {
      id: 3,
      name: "Rick\'s Café",
      rating: { toques: 2, points: 13 },
      priceRange: "€€€",
      region: "Casablanca",
      cuisine: "Internationale",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&h=600&fit=crop",
      description: `Inspiré du film Casablanca, ce restaurant emblématique propose une cuisine internationale raffinée dans une atmosphère nostalgique. Piano bar et terrasse avec vue sur l'océan complètent l'expérience.`,
      specialties: ["Bouillabaisse", "Côte de bœuf", "Homard thermidor"],
      amenities: ["Piano bar", "Terrasse", "Vue océan", "Parking"],
      dietary: ["Végétarien", "Pescatarian"],
      location: { lat: 33.5731, lng: -7.5898 },
      address: "248 Boulevard Sour Jdid, Casablanca",
      phone: "+212 522 274 207",
      reservationAvailable: true,
      criticExcerpt: "Un voyage culinaire dans l\'atmosphère mythique de Casablanca.",
      openingHours: "12h00 - 15h00, 19h00 - 01h00"
    },
    {
      id: 4,
      name: "Palais Amani",
      rating: { toques: 4, points: 17 },
      priceRange: "€€€€",
      region: "Fès",
      cuisine: "Cuisine Impériale",
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop",
      description: `Dans un palais du XVIIe siècle, découvrez la cuisine impériale de Fès dans toute sa splendeur. Chaque plat raconte l'histoire des dynasties marocaines à travers des recettes ancestrales préservées.`,
      specialties: ["Pastilla aux fruits de mer", "Méchoui d'agneau", "Chebakia au miel"],
      amenities: ["Jardin andalou", "Hammam", "Parking", "Service de conciergerie"],
      dietary: ["Halal"],
      location: { lat: 34.0181, lng: -5.0078 },
      address: "12 Derb el Miter, Fès 30000",
      phone: "+212 535 633 209",
      reservationAvailable: true,
      criticExcerpt: "L\'authenticité de la cuisine fassi dans un cadre d\'exception.",
      openingHours: "19h30 - 23h00"
    },
    {
      id: 5,
      name: "La Villa des Arts",
      rating: { toques: 3, points: 14 },
      priceRange: "€€",
      region: "Tetouan",
      cuisine: "Méditerranéenne",
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=600&fit=crop",
      description: `Restaurant contemporain au cœur de Rabat, proposant une cuisine méditerranéenne créative avec des influences marocaines. L'art contemporain orne les murs de cette villa transformée en lieu gastronomique.`,
      specialties: ["Salade de poulpe", "Dorade royale", "Tarte au citron"],
      amenities: ["Galerie d'art", "Terrasse", "Parking"],
      dietary: ["Végétarien", "Pescatarian", "Sans gluten"],
      location: { lat: 34.0209, lng: -6.8416 },
      address: "10 Rue Beni Mellal, Rabat",phone: "+212 537 668 407",reservationAvailable: true,criticExcerpt: "Art culinaire et visuel se rencontrent dans cette adresse raffinée.",openingHours: "12h00 - 15h00, 19h00 - 23h00"
    },
    {
      id: 6,
      name: "Océan Vagabond",
      rating: { toques: 2, points: 12 },
      priceRange: "€€",region: "Agadir",cuisine: "Fruits de Mer",image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
      description: `Face à l'océan Atlantique, ce restaurant de fruits de mer propose les prises du jour dans une ambiance décontractée. La fraîcheur des produits et la vue imprenable font de chaque repas un moment privilégié.`,
      specialties: ["Plateau de fruits de mer", "Tajine de poisson", "Sardines grillées"],
      amenities: ["Vue océan", "Terrasse", "Ambiance décontractée"],
      dietary: ["Pescatarian"],
      location: { lat: 31.5084, lng: -9.7595 },
      address: "Boulevard Mohammed V, Essaouira",phone: "+212 524 475 165",reservationAvailable: false,criticExcerpt: "Simplicité et fraîcheur au bord de l\'Atlantique.",openingHours: "11h00 - 22h00"
    }
  ];

  const regions = ["Marrakech", "Casablanca", "Fès", "Tetouan","Agadir", "Tanger"];
  const cuisineTypes = ["Gastronomie Marocaine Moderne", "Fusion Franco-Marocaine", "Internationale", "Cuisine Impériale", "Méditerranéenne", "Fruits de Mer"];
  const priceRanges = ["€", "€€", "€€€", "€€€€"];
  const amenityOptions = ["Terrasse", "Cave à vin", "Parking", "Table du chef", "Piano bar", "Vue océan", "Hammam", "Galerie d'art"];
  const dietaryOptions = ["Végétarien", "Végétalien", "Sans gluten", "Halal", "Pescatarian"];
  const occasionTypes = ["Romantique", "Affaires", "Famille", "Célébration", "Décontracté"];

  useEffect(() => {
    let filtered = restaurants.filter(restaurant => {
      const matchesSearch = !searchQuery || 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.region.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRating = !filters.rating || restaurant.rating.toques >= parseInt(filters.rating);
      const matchesPrice = !filters.priceRange || restaurant.priceRange === filters.priceRange;
      const matchesRegion = !filters.region || restaurant.region === filters.region;
      const matchesCuisine = !filters.cuisine || restaurant.cuisine === filters.cuisine;
      
      const matchesAmenities = filters.amenities.length === 0 || 
        filters.amenities.every(amenity => restaurant.amenities.includes(amenity));
      
      const matchesDietary = filters.dietary.length === 0 || 
        filters.dietary.every(diet => restaurant.dietary.includes(diet));

      return matchesSearch && matchesRating && matchesPrice && matchesRegion && 
             matchesCuisine && matchesAmenities && matchesDietary;
    });

    // Sort restaurants
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating.points - a.rating.points;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.priceRange.length - b.priceRange.length;
        case 'price-high':
          return b.priceRange.length - a.priceRange.length;
        default:
          return 0;
      }
    });

    setFilteredRestaurants(filtered);
  }, [filters, searchQuery, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      rating: '',
      priceRange: '',
      region: '',
      cuisine: '',
      amenities: [],
      dietary: [],
      occasion: ''
    });
    setSearchQuery('');
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-4">
              Découverte Culinaire
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Explorez les meilleurs restaurants du Maroc selon les critères d'excellence Gault et Millau. 
              Découvrez des expériences gastronomiques authentiques et raffinées.
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onFilterToggle={toggleFilter}
          />

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-lg p-4 text-center shadow-warm">
              <div className="text-2xl font-bold text-primary">{restaurants.length}</div>
              <div className="text-sm text-text-secondary">Restaurants</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-warm">
              <div className="text-2xl font-bold text-secondary">7</div>
              <div className="text-sm text-text-secondary">Régions</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-warm">
              <div className="text-2xl font-bold text-accent">15</div>
              <div className="text-sm text-text-secondary">Toques d'Or</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-warm">
              <div className="text-2xl font-bold text-success">98%</div>
              <div className="text-sm text-text-secondary">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            isOpen={isFilterOpen}
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
            regions={regions}
            cuisineTypes={cuisineTypes}
            priceRanges={priceRanges}
            amenityOptions={amenityOptions}
            dietaryOptions={dietaryOptions}
            occasionTypes={occasionTypes}
            onClose={() => setIsFilterOpen(false)}
          />

          {/* Results Section */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-text-secondary">
                  {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} trouvé{filteredRestaurants.length !== 1 ? 's' : ''}
                </span>
                {(Object.values(filters).some(f => f && f.length > 0) || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:text-primary-600 font-medium"
                  >
                    Effacer les filtres
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-4">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="rating">Meilleure note</option>
                  <option value="name">Nom A-Z</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-surface rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors duration-200 ${
                      viewMode === 'grid' ?'bg-primary text-white' :'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon name="Grid3X3" size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors duration-200 ${
                      viewMode === 'list' ?'bg-primary text-white' :'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon name="List" size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('map')}
                    className={`p-2 rounded-md transition-colors duration-200 ${
                      viewMode === 'map' ?'bg-primary text-white' :'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon name="Map" size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Display */}
            {viewMode === 'map' ? (
              <MapView restaurants={filteredRestaurants} />
            ) : (
              <div className={`
                ${viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' :'space-y-6'
                }
              `}>
                {filteredRestaurants.length > 0 ? (
                  filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.id}
                      restaurant={restaurant}
                      viewMode={viewMode}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      Aucun restaurant trouvé
                    </h3>
                    <p className="text-text-secondary mb-4">
                      Essayez de modifier vos critères de recherche ou effacez les filtres.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="bg-primary hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300"
                    >
                      Effacer tous les filtres
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Load More Button */}
            {filteredRestaurants.length > 0 && filteredRestaurants.length >= 6 && (
              <div className="text-center mt-12">
                <button className="bg-accent hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105">
                  Charger plus de restaurants
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-800 py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Votre restaurant n'est pas listé ?
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Rejoignez la communauté Gault et Millau Maroc et faites découvrir votre établissement 
            aux amateurs de gastronomie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/guides-r-gionaux-regional-discovery"
              className="bg-white hover:bg-gray-50 text-primary px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105"
            >
              Découvrir par région
            </Link>
            <Link
              to="/critiques-notes-rating-system"
              className="bg-secondary hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105"
            >
              Comprendre nos critères
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-white text-black border-t border-yellow-500 py-12">
  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

    {/* Logo + liens légaux */}
    <div>
      <Link to="/accueil-homepage" className="inline-block mb-4">
        <img 
          src="/assets/images/Logo-Gault&Millau-NOIR_V.png" 
          alt="Gault & Millau Maroc Logo"
          className="w-36 h-auto"
        />
      </Link>
      <nav className="flex flex-col space-y-1 text-sm text-gray-600">
        <Link to="/a-propos" className="hover:underline">A propos</Link>
        <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
        <Link to="/cgu" className="hover:underline">CGU</Link>
        <Link to="/politique-confidentialite" className="hover:underline">Politique de confidentialité</Link>
      </nav>
    </div>

    {/* Notre sélection */}
    <div>
      <h3 className="font-semibold mb-3 uppercase text-sm">NOTRE SÉLECTION</h3>
      <nav className="flex flex-col space-y-1 text-sm text-gray-600">
        <Link to="/restaurants" className="hover:underline">Restaurants</Link>
        <Link to="/vins" className="hover:underline">Vins</Link>
        <Link to="/champagnes" className="hover:underline">Champagnes</Link>
        <Link to="/spiritueux" className="hover:underline">Spiritueux</Link>
        <Link to="/domaines" className="hover:underline">Domaines</Link>
        <Link to="/hotels" className="hover:underline">Hôtels</Link>
        <Link to="/artisans" className="hover:underline">Artisans</Link>
      </nav>
    </div>

    {/* Contact */}
    <div>
      <h3 className="font-semibold mb-3 uppercase text-sm">CONTACT</h3>
      <address className="not-italic text-gray-600 text-sm space-y-1">
        <div>37-39 rue Boissière</div>
        <div>75016 Paris</div>
        <div>France</div>
        <div>Appeler : <a href="tel:0141409980" className="hover:underline">01 41 40 99 80</a></div>
        <div><Link to="/contact" className="hover:underline">Contactez-nous</Link></div>
      </address>
    </div>

    {/* Réseaux sociaux + newsletter */}
    <div className="flex flex-col items-start justify-between">
      <div className="flex space-x-4 mb-6">
        <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-yellow-500">
          <Icon name="Facebook" size={24} />
        </a>
        <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-yellow-500">
          <Icon name="Instagram" size={24} />
        </a>
        <a href="#" aria-label="X (ex Twitter)" className="text-gray-600 hover:text-yellow-500">
          <Icon name="X" size={24} />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-yellow-500">
          <Icon name="Linkedin" size={24} />
        </a>
      </div>

      <div className="text-xs text-gray-500 italic mb-4">
        Inscrivez-vous à notre newsletter <br />
        <Link to="/newsletters" className="hover:underline">Toutes les newsletters</Link>
      </div>

      <div className="text-xs text-gray-500 italic text-center w-full">
        GaultMillau © {new Date().getFullYear()} <br />
        <span className="not-italic">Tous droits réservés</span>
      </div>
    </div>

  </div>
</footer>
    </div>
  );
};

export default RestaurantsDiscoveryHub;