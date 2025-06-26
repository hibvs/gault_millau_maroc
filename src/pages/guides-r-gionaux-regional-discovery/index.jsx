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
    title: 'La Ville Rouge',
    description: `Marrakech vous invite à séjourner dans des hôtels alliant charme traditionnel et confort moderne. Des riads authentiques aux établissements de luxe, chaque hébergement offre une immersion unique dans l’art de vivre marocain, au cœur de la ville rouge.`,
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/fe/c4/81/hotel-entrance.jpg?w=1000&h=-1&s=1',
    hotelCount: 127,
    specialties: ['Riads traditionnels', 'Hôtels de charme', 'Palaces luxueux', 'Maisons d’hôtes authentiques'],
    atmosphere: 'Exotique et raffinée',
    priceRange: '€€€',
    highlights: [
      'Séjour dans des riads historiques',
      'Terrasses avec vue sur l\'Atlas',
      'Hébergements alliant tradition et modernité',
      'Expériences authentiques de l’hospitalité marocaine'
    ],
    bestTime: 'Octobre à Avril',
    culturalNotes: `Marrakech est un carrefour d’influences culturelles et architecturales, offrant une hospitalité chaleureuse où le luxe traditionnel côtoie le confort contemporain.`
  },
  {
    id: 'casablanca',
    name: 'Casablanca',
    title: 'Métropole Cosmopolite',
    description: `Casablanca, capitale économique du Maroc, offre une scène hôtelière cosmopolite où modernité et luxe se côtoient. Des hôtels modernes en bord d’océan aux établissements design en centre-ville, Casablanca séduit par sa diversité et son confort haut de gamme.`,
    image: 'https://www.kayak.fr/rimg/himg/8d/4a/a4/expedia_group-194632-252514644-821362.jpg?width=836&height=607&crop=true',
    hotelCount: 89,
    specialties: ['Hôtels en bord de mer', 'Palaces modernes', 'Boutique-hôtels design', 'Appartements de luxe'],
    atmosphere: 'Moderne et internationale',
    priceRange: '€€€€',
    highlights: [
      'Hôtels avec vue sur l\'Atlantique',
      'Espaces contemporains et confort haut de gamme',
      'Bars et lounges sophistiqués',
      'Services premium et expériences personnalisées'
    ],
    bestTime: 'Toute l\'année',
    culturalNotes: `Casablanca reflète la modernité marocaine avec une offre hôtelière riche en diversité, combinant hospitalité internationale et charme local.`
  },
  {
    id: 'fez',
    name: 'Fès',
    title: 'Capitale Spirituelle',
    description: `Fès vous invite à découvrir des hébergements où l’authenticité et la tradition sont au cœur de l’expérience. Des maisons d’hôtes nichées dans la médina aux hôtels historiques, chaque séjour offre un voyage dans le temps et la culture marocaine.`,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/65290037.jpg?k=7d1defc26aec2d988a7830caaea0505c2cb8931ea729c5e496fb1a9314baddd7&o=&hp=1',
    hotelCount: 64,
    specialties: ['Maisons d’hôtes traditionnelles', 'Hôtels au cœur de la médina', 'Riad avec patios intérieurs', 'Hébergements artisanaux'],
    atmosphere: 'Traditionnelle et authentique',
    priceRange: '€€',
    highlights: [
      'Séjours dans des palais restaurés',
      'Décors authentiques et artisanaux',
      'Proximité des sites historiques',
      'Hospitalité marocaine légendaire'
    ],
    bestTime: 'Mars à Mai, Septembre à Novembre',
    culturalNotes: `Fès est un véritable conservatoire culturel, où l’hôtellerie traditionnelle met en valeur l’artisanat local et la richesse du patrimoine marocain.`
  },
  {
    id: 'rabat',
    name: 'Rabat',
    title: 'Élégance Contemporaine',
    description: `Rabat propose une offre hôtelière contemporaine qui allie élégance et innovation. Entre hôtels design, établissements modernes et maisons d’hôtes sophistiquées, la ville conjugue confort moderne et raffinement.`,
    image: 'https://www.momondo.fr/kimg/0c/22/0f3dd385-5f0eeb9a-40.jpeg',
    hotelCount: 52,
    specialties: ['Hôtels design', 'Établissements modernes', 'Maisons d’hôtes élégantes', 'Hôtels avec vue sur l’océan'],
    atmosphere: 'Élégante et contemporaine',
    priceRange: '€€€',
    highlights: [
      'Espaces contemporains et confort haut de gamme',
      'Terrasses panoramiques sur l’océan',
      'Hospitalité moderne et personnalisée',
      'Proximité des quartiers culturels'
    ],
    bestTime: 'Avril à Juin, Septembre à Novembre',
    culturalNotes: `Rabat symbolise le Maroc moderne avec une scène hôtelière innovante qui respecte les traditions tout en apportant une touche de modernité.`
  },

  {
    id: 'agadir',
    name: 'Agadir',
    title: 'La Perle de l’Atlantique',
    description: `Agadir est une destination balnéaire prisée où les hôtels modernes et les resorts de luxe offrent détente et confort face à l’océan Atlantique. Son climat doux toute l’année en fait un lieu idéal pour un séjour alliant plage et bien-être.`,
    image: 'https://www.riu.com/fr/binaris/playa-beach-01_tcm57-141013.jpg?v=tm211124_1637',
    hotelCount: 78,
    specialties: ['Resorts en bord de plage', 'Hôtels spa et bien-être', 'Établissements familiaux', 'Villages vacances'],
    atmosphere: 'Décontractée et ensoleillée',
    priceRange: '€€€',
    highlights: [
      'Plages de sable fin à proximité',
      'Centres de bien-être et spas',
      'Hébergements avec piscines et activités nautiques',
      'Ambiance conviviale et relaxante'
    ],
    bestTime: 'Toute l\'année',
    culturalNotes: `Agadir combine modernité et nature, avec une hôtellerie tournée vers la détente et les loisirs, idéale pour les amoureux de la mer et du soleil.`
  },
  {
    id: 'tetouan',
    name: 'Tétouan',
    title: 'La Ville Blanche',
    description: `Tétouan charme par ses hôtels de caractère nichés entre mer et montagnes. L’hospitalité locale se révèle dans des hébergements mêlant architecture andalouse et confort contemporain, parfaits pour explorer la richesse culturelle de la région.`,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/257897248.jpg?k=29338993f2b99be225b964dcda833358ace041cdb856436a8d876357c32df045&o=&hp=1',
    hotelCount: 45,
    specialties: ['Maisons d’hôtes andalouses', 'Hôtels au charme historique', 'Établissements avec vue sur la mer', 'Séjours culturels'],
    atmosphere: 'Authentique et paisible',
    priceRange: '€€',
    highlights: [
      'Hébergements typiques dans la médina',
      'Ambiance tranquille entre mer et montagne',
      'Proximité des sites historiques et naturels',
      'Accueil chaleureux et personnalisé'
    ],
    bestTime: 'Printemps et automne',
    culturalNotes: `Tétouan est un joyau architectural où l’hôtellerie locale reflète le mélange des influences méditerranéennes et marocaines dans un cadre paisible.`
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