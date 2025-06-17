import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/ui/Header';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import RegionalHero from './components/RegionalHero';
import RegionalCard from './components/RegionalCard';
import InteractiveMap from './components/InteractiveMap';
import CulturalContext from './components/CulturalContext';
import SeasonalRecommendations from './components/SeasonalRecommendations';
import PracticalInfo from './components/PracticalInfo';

const GuidesRegionauxRegionalDiscovery = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(true);

  const regions = [
    {
      id: 'marrakech',
      name: 'Marrakech',
      title: 'La Perle du Sud',
      description: `Marrakech offre une expérience culinaire unique où les traditions berbères rencontrent l'innovation contemporaine. Des riads intimistes aux restaurants de luxe, la ville rouge propose une palette gastronomique exceptionnelle.Les souks regorgent d'épices authentiques et de produits locaux, tandis que les chefs internationaux réinventent la cuisine marocaine dans des cadres somptueux.`,
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop',
      restaurantCount: 127,
      specialties: ['Tagine aux olives', 'Pastilla au pigeon', 'Couscous royal', 'Méchoui'],
      atmosphere: 'Exotique et raffinée',
      priceRange: '€€€',
      highlights: [
        'Dining dans les riads historiques',
        'Terrasses avec vue sur l\'Atlas',
        'Cuisine fusion franco-marocaine',
        'Expériences culinaires authentiques'
      ],
      bestTime: 'Octobre à Avril',
      culturalNotes: `Marrakech est le carrefour des influences culinaires berbères, arabes et françaises. La ville a développé une identité gastronomique unique qui respecte les traditions tout en embrassant l'innovation.`
    },
    {
      id: 'casablanca',name: 'Casablanca',title: 'Métropole Cosmopolite',description: `Casablanca, capitale économique du Maroc, offre une scène culinaire cosmopolite où se mélangent influences internationales et traditions locales. La ville blanche séduit par sa modernité et son ouverture sur le monde.Des brasseries françaises aux restaurants de fruits de mer en bord d'océan, Casablanca propose une diversité gastronomique remarquable.`,
      image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&h=600&fit=crop',
      restaurantCount: 89,
      specialties: ['Fruits de mer grillés', 'Pastilla au poisson', 'Harira moderne', 'Pâtisseries françaises'],
      atmosphere: 'Moderne et internationale',
      priceRange: '€€€€',
      highlights: [
        'Restaurants en bord de mer',
        'Cuisine internationale haut de gamme',
        'Bars à cocktails sophistiqués',
        'Brunchs cosmopolites'
      ],
      bestTime: 'Toute l\'année',
      culturalNotes: `Casablanca représente le Maroc moderne et ouvert. Sa gastronomie reflète cette diversité avec des influences françaises, espagnoles et internationales qui enrichissent la cuisine traditionnelle marocaine.`
    },
    {
      id: 'fez',
      name: 'Fès',
      title: 'Capitale Spirituelle',
      description: `Fès, ancienne capitale impériale, préserve jalousement les traditions culinaires les plus authentiques du Maroc. La médina millénaire abrite des secrets gastronomiques transmis de génération en génération.
      
Les maîtres cuisiniers de Fès perpétuent un art culinaire raffiné, symbole de l'hospitalité marocaine et de la richesse culturelle du royaume.`,image: 'https://images.unsplash.com/photo-1570547490101-12ad11e1e19e?w=800&h=600&fit=crop',
      restaurantCount: 64,
      specialties: ['Pastilla traditionnelle', 'Couscous aux sept légumes', 'Rfissa', 'Chebakia'],
      atmosphere: 'Traditionnelle et authentique',priceRange: '€€',
      highlights: [
        'Cuisine impériale authentique','Restaurants dans la médina','Ateliers de cuisine traditionnelle','Pâtisseries artisanales'
      ],
      bestTime: 'Mars à Mai, Septembre à Novembre',
      culturalNotes: `Fès est considérée comme le berceau de la haute cuisine marocaine. Les recettes impériales y sont préservées avec un soin particulier, faisant de la ville un véritable conservatoire gastronomique.`
    },
    {
      id: 'rabat',name: 'Rabat',title: 'Élégance Contemporaine',description: `Rabat, capitale administrative du royaume, développe une scène culinaire contemporaine qui allie élégance et innovation. La ville offre une approche moderne de la gastronomie marocaine.Entre tradition et modernité, Rabat séduit par ses restaurants raffinés et sa nouvelle génération de chefs qui réinventent les classiques.`,image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      restaurantCount: 52,
      specialties: ['Cuisine fusion', 'Poissons de l\'Atlantique', 'Tajines revisités', 'Desserts modernes'],
      atmosphere: 'Élégante et contemporaine',
      priceRange: '€€€',
      highlights: [
        'Restaurants design contemporain',
        'Cuisine créative marocaine',
        'Terrasses avec vue sur l\'océan',
        'Expériences gastronomiques innovantes'
      ],
      bestTime: 'Avril à Juin, Septembre à Novembre',
      culturalNotes: `Rabat représente le nouveau visage de la gastronomie marocaine. La ville encourage l'innovation culinaire tout en respectant les traditions, créant une identité gastronomique unique.`
    }
  ];

  const featuredExperiences = [
    {
      id: 1,
      title: 'Route des Épices de Marrakech',
      description: 'Découverte des souks et dégustation chez les maîtres épiciers',
      duration: '3 heures',
      price: '€45',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop',
      region: 'marrakech'
    },
    {
      id: 2,
      title: 'Déjeuner en Bord de Mer à Casablanca',
      description: 'Fruits de mer frais avec vue sur l\'océan Atlantique',
      duration: '2 heures',
      price: '€65',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      region: 'casablanca'
    },
    {
      id: 3,
      title: 'Atelier Pastilla Traditionnelle à Fès',
      description: 'Apprentissage de la pastilla avec une famille fassi',
      duration: '4 heures',
      price: '€55',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      region: 'fez'
    },
    {
      id: 4,
      title: 'Dîner Gastronomique à Rabat',
      description: 'Menu dégustation dans un restaurant étoilé',
      duration: '3 heures',
      price: '€85',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
      region: 'rabat'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredRegions = selectedRegion === 'all' 
    ? regions 
    : regions.filter(region => region.id === selectedRegion);

  const filteredExperiences = selectedRegion === 'all'
    ? featuredExperiences
    : featuredExperiences.filter(exp => exp.region === selectedRegion);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-text-secondary">Chargement des guides régionaux...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <RegionalHero />

      {/* Navigation & Filters */}
      <div className="bg-surface border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 space-y-4 lg:space-y-0">
            {/* Region Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-text-secondary">Région:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedRegion('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedRegion === 'all' ?'bg-primary text-white shadow-warm' :'bg-background text-text-secondary hover:text-primary hover:bg-primary-50'
                  }`}
                >
                  Toutes les régions
                </button>
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedRegion === region.id
                        ? 'bg-primary text-white shadow-warm'
                        : 'bg-background text-text-secondary hover:text-primary hover:bg-primary-50'
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-text-secondary">Affichage:</span>
              <div className="flex bg-background rounded-lg p-1 border border-border">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ?'bg-primary text-white shadow-sm' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name="Grid3X3" size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ?'bg-primary text-white shadow-sm' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name="List" size={16} />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'map' ?'bg-primary text-white shadow-sm' :'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name="Map" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'map' ? (
          <InteractiveMap regions={filteredRegions} />
        ) : (
          <div className="space-y-12">
            {/* Regional Cards */}
            <div className={`${
              viewMode === 'grid' ?'grid grid-cols-1 lg:grid-cols-2 gap-8' :'space-y-8'
            }`}>
              {filteredRegions.map((region) => (
                <RegionalCard 
                  key={region.id} 
                  region={region} 
                  viewMode={viewMode}
                />
              ))}
            </div>

            {/* Cultural Context */}
            {selectedRegion !== 'all' && (
              <CulturalContext region={filteredRegions[0]} />
            )}

            {/* Featured Experiences */}
            <div className="bg-surface rounded-2xl p-8 shadow-warm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-text-primary mb-2">
                    Expériences Culinaires
                  </h2>
                  <p className="text-text-secondary">
                    Découvrez les saveurs authentiques à travers des expériences uniques
                  </p>
                </div>
                <Link
                  to="/v-nements-culinaires-events-calendar"
                  className="text-primary hover:text-primary-600 font-medium text-sm flex items-center space-x-1 transition-colors duration-300"
                >
                  <span>Voir tous les événements</span>
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredExperiences.map((experience) => (
                  <div key={experience.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-semibold text-primary">{experience.price}</span>
                      </div>
                    </div>
                    <h3 className="font-serif font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                      {experience.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={14} />
                        <span className="capitalize">{regions.find(r => r.id === experience.region)?.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seasonal Recommendations */}
            <SeasonalRecommendations selectedRegion={selectedRegion} />

            {/* Practical Information */}
            <PracticalInfo />
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary to-primary-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Planifiez Votre Voyage Gastronomique
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Découvrez les saveurs authentiques du Maroc avec nos guides experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/restaurants-discovery-hub"
              className="bg-white text-primary hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-warm transform hover:scale-105"
            >
              Explorer les Restaurants
            </Link>
            <Link
              to="/v-nements-culinaires-events-calendar"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Voir les Événements
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-800 rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold">Gault & Millau Maroc</h3>
                  <p className="text-sm text-gray-400">Excellence Culinaire</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Votre guide de référence pour découvrir l'excellence gastronomique marocaine.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/accueil-homepage" className="text-gray-300 hover:text-white transition-colors duration-300">Accueil</Link></li>
                <li><Link to="/restaurants-discovery-hub" className="text-gray-300 hover:text-white transition-colors duration-300">Restaurants</Link></li>
                <li><Link to="/actualit-s-gastronomiques-editorial-hub" className="text-gray-300 hover:text-white transition-colors duration-300">Actualités</Link></li>
                <li><Link to="/critiques-notes-rating-system" className="text-gray-300 hover:text-white transition-colors duration-300">Critiques</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>contact@gaultmillau.ma</li>
                <li>+212 5XX-XXXXXX</li>
                <li>Casablanca, Maroc</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Gault & Millau Maroc. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuidesRegionauxRegionalDiscovery;