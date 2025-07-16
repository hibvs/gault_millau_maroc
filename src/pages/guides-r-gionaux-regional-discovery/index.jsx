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
              Voir les Riads
            </Link>
          </div>
        </div>
      </div>

   
      {/* Footer */}
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
        <Link to="/restaurant" className="hover:underline">Restaurants</Link>
        <Link to="/artisans" className="hover:underline">Artisans</Link>
        <Link to="/hotels" className="hover:underline">Hôtels</Link>
        <Link to="/alcool" className="hover:underline">Alcool</Link>
        <Link to="/riads" className="hover:underline">Riads</Link>
        <Link to="/people" className="hover:underline">People</Link>
        <Link to="/recettes" className="hover:underline">Recettes</Link>
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

export default GuidesRegionauxRegionalDiscovery;