import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/ui/Header';
import Icon from 'components/AppIcon';

import EventCard from './components/EventCard';
import FeaturedEvent from './components/FeaturedEvent';
import EventFilters from './components/EventFilters';
import CalendarView from './components/CalendarView';

const VenementsCulinairesEventsCalendar = () => {
  const [selectedView, setSelectedView] = useState('list');
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    location: 'all',
    date: 'all'
  });
  const [filteredEvents, setFilteredEvents] = useState([]);

  const eventTypes = [
    { id: 'all', name: 'Tous les événements', icon: 'Calendar' },
    { id: 'restaurant-opening', name: 'Ouvertures de restaurants', icon: 'Store' },
    { id: 'food-festival', name: 'Festivals gastronomiques', icon: 'PartyPopper' },
    { id: 'wine-tasting', name: 'Dégustations de vins', icon: 'Wine' },
    { id: 'chef-event', name: 'Événements de chefs', icon: 'ChefHat' },
    { id: 'cultural', name: 'Événements culturels', icon: 'Star' }
  ];

  const locations = [
    { id: 'all', name: 'Toutes les villes' },
    { id: 'casablanca', name: 'Casablanca' },
    { id: 'marrakech', name: 'Marrakech' },
    { id: 'rabat', name: 'Rabat' },
    { id: 'fez', name: 'Fès' },
    { id: 'tangier', name: 'Tanger' },
    { id: 'agadir', name: 'Agadir' }
  ];

  const featuredEvent = {
    id: 'featured-1',
    title: 'Festival Gastronomique de Marrakech 2024',
    subtitle: 'La Grande Célébration Culinaire',
    description: `Le Festival Gastronomique de Marrakech revient pour sa 8ème édition avec une programmation exceptionnelle mettant à l'honneur les saveurs authentiques du Maroc et les créations innovantes de chefs internationaux. Cet événement incontournable rassemble les plus grands noms de la gastronomie marocaine et mondiale dans un cadre enchanteur au cœur de la ville ocre.Au programme : dégustations exclusives, ateliers culinaires avec des chefs étoilés, découverte des produits du terroir marocain, et soirées gastronomiques dans les plus beaux riads de la médina. Une occasion unique de découvrir l'évolution de la cuisine marocaine contemporaine tout en célébrant ses traditions ancestrales.`,
    date: new Date('2024-04-15'),
    endDate: new Date('2024-04-20'),
    location: 'Marrakech',
    venue: 'Palais des Congrès & Médina',
    type: 'food-festival',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
    chefHighlights: [
      'Chef Moha Fedal - Restaurant Dar Moha',
      'Chef Najat Kaanache - Nur Restaurant',
      'Chef Meryem Cherkaoui - Amal Center'
    ],
    ticketPrice: 'À partir de 450 DH',
    isHighlighted: true,
    culturalSignificance: 'Célébration de la richesse culinaire marocaine et de son rayonnement international'
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Ouverture du Restaurant Zellij',
      subtitle: 'Nouvelle adresse gastronomique à Casablanca',
      description: `Le chef Youssef Akram ouvre son nouveau restaurant Zellij dans le quartier des Habous à Casablanca. Une cuisine marocaine contemporaine qui revisite les classiques avec une approche moderne et créative. Le concept met l'accent sur les produits locaux et de saison, avec une carte qui évolue au rythme des marchés.L'établissement propose une expérience culinaire complète avec un décor alliant tradition et modernité, une cave à vins soigneusement sélectionnée, et un service d'exception. La soirée d'inauguration sera l'occasion de découvrir les créations signature du chef et de rencontrer l'équipe.`,
      date: new Date('2024-03-25'),
      location: 'Casablanca',
      venue: 'Quartier des Habous',
      type: 'restaurant-opening',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      chefProfile: {
        name: 'Chef Youssef Akram',
        experience: '15 ans d\'expérience en gastronomie marocaine',
        background: 'Formé dans les plus grandes maisons parisiennes'
      },
      menuHighlights: [
        'Pastilla de pigeon aux amandes et fleur d\'oranger',
        'Tagine d\'agneau aux pruneaux et miel de lavande',
        'Couscous royal aux légumes de saison'
      ],
      reservationRequired: true,
      ticketPrice: 'Sur invitation'
    },
    {
      id: 2,
      title: 'Dégustation de Vins du Domaine Ouled Thaleb',
      subtitle: 'Découverte des cépages marocains',
      description: `Une soirée dégustation exceptionnelle au Domaine Ouled Thaleb, l\'un des vignobles les plus prestigieux du Maroc. Cette dégustation guidée par le maître de chai permettra de découvrir la richesse des terroirs marocains et l\'évolution qualitative des vins du royaume.

Au programme : dégustation de 8 cuvées différentes, accords mets-vins avec des spécialités locales, visite des chais et rencontre avec l\'équipe technique. Une expérience unique pour comprendre l\'art de la vinification marocaine et découvrir des vins d\'exception.`,
      date: new Date('2024-03-30'),location: 'Benslimane',venue: 'Domaine Ouled Thaleb',type: 'wine-tasting',image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop',
      wineSelection: [
        'Cuvée Président Rouge 2020','Chardonnay Blanc de Blancs 2022','Syrah Réserve 2019','Rosé de Saignée 2023'
      ],
      expertCommentary: 'Dégustation commentée par Hassan Hajjaj, œnologue conseil',
      foodPairings: [
        'Fromages de chèvre locaux','Olives marinées aux herbes','Tajines aux fruits secs'
      ],
      ticketPrice: '320 DH par personne'
    },
    {
      id: 3,
      title: 'Atelier Culinaire avec Chef Najat Kaanache',subtitle: 'Masterclass de cuisine fusion',
      description: `La chef étoilée Najat Kaanache propose un atelier culinaire exclusif dans son restaurant Nur à Fès. Cette masterclass unique permettra d\'apprendre les techniques de la cuisine fusion marocaine-internationale qui ont fait la réputation de la chef.

L\'atelier comprend la préparation de trois plats signature, l\'apprentissage des techniques de présentation moderne, et une dégustation accompagnée de vins sélectionnés. Une opportunité rare d\'apprendre auprès de l\'une des chefs les plus innovantes du Maroc.`,
      date: new Date('2024-04-05'),location: 'Fès',venue: 'Restaurant Nur',type: 'chef-event',image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      chefProfile: {
        name: 'Chef Najat Kaanache',accolades: 'Première femme chef étoilée du Maroc',specialty: 'Cuisine fusion marocaine-internationale'
      },
      workshopContent: [
        'Techniques de fusion culinaire','Présentation moderne des plats traditionnels','Sélection et accord des épices'
      ],
      limitedSeats: '12 participants maximum',ticketPrice: '850 DH par personne'
    },
    {
      id: 4,
      title: 'Soirée Iftar Gastronomique',subtitle: 'Célébration culinaire du Ramadan',
      description: `Une soirée iftar d\'exception organisée dans les jardins de La Mamounia à Marrakech. Cette célébration gastronomique du Ramadan propose une interprétation moderne et raffinée des traditions culinaires de rupture du jeûne, dans un cadre somptueux.

Le menu spécialement conçu pour l\'occasion met à l\'honneur les saveurs traditionnelles du Ramadan revisitées par l\'équipe culinaire de l\'hôtel. Une expérience spirituelle et gastronomique unique, accompagnée de musique traditionnelle et d\'animations culturelles.`,
      date: new Date('2024-04-10'),location: 'Marrakech',venue: 'La Mamounia - Jardins',type: 'cultural',image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',culturalContext: 'Célébration des traditions culinaires du Ramadan',
      menuHighlights: [
        'Harira royale aux herbes fraîches','Assortiment de dattes Medjool','Pâtisseries traditionnelles revisitées'
      ],
      culturalActivities: [
        'Récital de musique andalouse','Calligraphie arabe en direct','Démonstration de thé à la menthe'
      ],
      ticketPrice: '680 DH par personne'
    },
    {
      id: 5,
      title: 'Festival des Saveurs de l\'Atlas',
      subtitle: 'Découverte culinaire des montagnes',
      description: `Le Festival des Saveurs de l\'Atlas célèbre la richesse culinaire des régions montagneuses du Maroc. Cet événement unique met à l\'honneur les produits du terroir berbère, les techniques de conservation ancestrales, et les plats traditionnels des communautés de l\'Atlas.Trois jours de découvertes avec des ateliers de cuisine berbère, des dégustations de produits locaux, des rencontres avec les producteurs, et des démonstrations culinaires en plein air. Une immersion authentique dans la culture gastronomique des montagnes marocaines.`,date: new Date('2024-04-18'),endDate: new Date('2024-04-20'),location: 'Imlil',venue: 'Village d\'Imlil - Haut Atlas',
      type: 'food-festival',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=600&h=400&fit=crop',
      localProducts: [
        'Huile d\'argan première pression',
        'Miel de montagne aux mille fleurs',
        'Fromages de chèvre affinés'
      ],
      culturalWorkshops: [
        'Préparation du couscous berbère',
        'Techniques de conservation traditionnelles',
        'Art de la poterie culinaire'
      ],
      ticketPrice: 'À partir de 280 DH par jour'
    },
    {
      id: 6,
      title: 'Brunch Dominical au Rick\'s Café',
      subtitle: 'Ambiance casablancaise authentique',
      description: `Le légendaire Rick\'s Café de Casablanca propose un brunch dominical d\'exception dans son cadre mythique inspiré du film Casablanca. Une expérience culinaire unique qui mélange cuisine internationale et spécialités marocaines, dans une ambiance jazz et piano-bar.

Le brunch comprend un buffet varié avec des stations culinaires en direct, des cocktails signature, et une animation musicale live. L\'occasion parfaite de vivre l\'atmosphère unique de ce lieu emblématique tout en savourant une cuisine raffinée.`,
      date: new Date('2024-03-31'),location: 'Casablanca',venue: 'Rick\'s Café',
      type: 'restaurant-opening',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
      atmosphereHighlights: [
        'Piano-bar avec musiciens live',
        'Décor authentique années 1940',
        'Terrasse avec vue sur l\'océan'
      ],
      brunchSpecialties: [
        'Eggs Benedict à la marocaine',
        'Pancakes aux dattes et miel',
        'Station de pâtisseries françaises'
      ],
      ticketPrice: '420 DH par personne'
    }
  ];

  useEffect(() => {
    let filtered = upcomingEvents;

    if (selectedFilters.type !== 'all') {
      filtered = filtered.filter(event => event.type === selectedFilters.type);
    }

    if (selectedFilters.location !== 'all') {
      filtered = filtered.filter(event => 
        event.location.toLowerCase().includes(selectedFilters.location.toLowerCase())
      );
    }

    if (selectedFilters.date !== 'all') {
      const now = new Date();
      const oneWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      const oneMonth = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);
        switch (selectedFilters.date) {
          case 'week':
            return eventDate <= oneWeek;
          case 'month':
            return eventDate <= oneMonth;
          case 'today':
            return eventDate.toDateString() === now.toDateString();
          default:
            return true;
        }
      });
    }

    setFilteredEvents(filtered);
  }, [selectedFilters]);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Home" size={16} />
              
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-text-primary mb-6">
              Riads
              <span className="block text-primary">Culinaires</span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
             Plongez au cœur de l’authenticité marocaine en découvrant les riads, ces maisons traditionnelles nichées dans les médinas
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        
              
              
            </div>
          </div>
        </div>
      </section>



      {/* Filters and View Toggle */}
      <section className="py-8 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <EventFilters
              eventTypes={eventTypes}
              locations={locations}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setSelectedView('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedView === 'list' ?'bg-primary text-white shadow-sm' :'text-text-secondary hover:text-primary'
                }`}
              >
                <Icon name="List" size={16} className="mr-2 inline" />
                Liste
              </button>
              <button
                onClick={() => setSelectedView('calendar')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedView === 'calendar' ?'bg-primary text-white shadow-sm' :'text-text-secondary hover:text-primary'
                }`}
              >
                <Icon name="Calendar" size={16} className="mr-2 inline" />
                Calendrier
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedView === 'list' ? (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-text-primary">
                  Riads à découvrir 
                </h2>
                <span className="text-text-secondary">
                  {filteredEvents.length} événement{filteredEvents.length > 1 ? 's' : ''}
                </span>
              </div>
              
              {filteredEvents.length > 0 ? (
                <div className="grid gap-8">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Calendar" size={48} className="text-text-secondary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-text-primary mb-2">
                    Aucun événement trouvé
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Essayez de modifier vos filtres pour voir plus d'événements.
                  </p>
                  <button
                    onClick={() => setSelectedFilters({ type: 'all', location: 'all', date: 'all' })}
                    className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300"
                  >
                    <Icon name="RotateCcw" size={20} className="mr-2" />
                    Réinitialiser les Filtres
                  </button>
                </div>
              )}
            </div>
          ) : (
            <CalendarView events={filteredEvents} />
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <Icon name="Bell" size={48} className="text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
              Ne Manquez Aucun Événement
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Recevez les dernières actualités des événements culinaires directement dans votre boîte mail.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-text-primary"
                />
                <button className="px-6 py-3 bg-secondary hover:bg-secondary-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-warm whitespace-nowrap">
                  S'abonner
                </button>
              </div>
              <p className="text-sm text-white/70 mt-3">
                Pas de spam, désabonnement facile à tout moment.
              </p>
            </div>
          </div>
        </div>
      </section>

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

export default VenementsCulinairesEventsCalendar;