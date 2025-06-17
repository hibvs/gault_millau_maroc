import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const PracticalInfo = () => {
  const [activeTab, setActiveTab] = useState('transport');

  const tabs = [
    { id: 'transport', name: 'Transport', icon: 'Car' },
    { id: 'etiquette', name: 'Étiquette', icon: 'Users' },
    { id: 'reservations', name: 'Réservations', icon: 'Calendar' },
    { id: 'budget', name: 'Budget', icon: 'DollarSign' }
  ];

  const practicalData = {
    transport: {
      title: 'Se Déplacer au Maroc',
      sections: [
        {
          title: 'Entre les Villes',
          icon: 'Train',
          items: [
            'Train ONCF : Liaison rapide Casablanca-Rabat-Fès (1ère et 2ème classe)',
            'Bus CTM et Supratours : Confortables pour tous les trajets',
            'Location de voiture : Liberté totale, routes en bon état',
            'Vols intérieurs : Royal Air Maroc pour les longues distances'
          ]
        },
        {
          title: 'Dans les Villes',
          icon: 'Navigation',
          items: [
            'Taxi petit : Compteur obligatoire, négocier si nécessaire',
            'Grand taxi : Partagé, économique pour les trajets plus longs',
            'Uber/Careem : Disponible dans les grandes villes',
            'Marche : Idéal dans les médinas, attention aux ruelles étroites'
          ]
        },
        {
          title: 'Conseils Pratiques',
          icon: 'AlertCircle',
          items: [
            'Évitez les heures de pointe (7h-9h et 17h-19h)',
            'Gardez toujours de la monnaie pour les taxis',
            'Téléchargez les apps de transport local',
            'Prévoyez du temps supplémentaire pour les trajets'
          ]
        }
      ]
    },
    etiquette: {
      title: 'Étiquette et Savoir-Vivre',
      sections: [
        {
          title: 'À Table',
          icon: 'UtensilsCrossed',
          items: [
            'Lavez-vous les mains avant et après le repas',
            'Mangez avec la main droite uniquement',
            'Goûtez tous les plats proposés par politesse',
            'Laissez un peu de nourriture dans votre assiette'
          ]
        },
        {
          title: 'Tenue Vestimentaire',
          icon: 'Shirt',
          items: [
            'Tenue correcte exigée dans les restaurants haut de gamme',
            'Évitez les shorts et débardeurs dans les lieux traditionnels',
            'Chaussures fermées recommandées dans les médinas',
            'Respectez les codes vestimentaires locaux'
          ]
        },
        {
          title: 'Interactions Sociales',
          icon: 'Heart',
          items: [
            'Saluez avec "As-salamu alaykum" ou "Bonjour"',
            'Acceptez le thé à la menthe offert avec le sourire',
            'Négociation courtoise dans les souks',
            'Respectez les horaires de prière'
          ]
        }
      ]
    },
    reservations: {
      title: 'Réservations et Planification',
      sections: [
        {
          title: 'Réserver une Table',
          icon: 'Phone',
          items: [
            'Réservation obligatoire pour les restaurants étoilés',
            'Appelez directement ou utilisez les plateformes en ligne',
            'Confirmez 24h avant, surtout en haute saison',
            'Précisez vos préférences alimentaires à l\'avance'
          ]
        },
        {
          title: 'Meilleurs Moments',
          icon: 'Clock',
          items: [
            'Déjeuner : 12h30-14h30 (service continu rare)',
            'Dîner : 19h30-22h30 (plus tard en été)',
            'Évitez les vendredis midi (prière du vendredi)',
            'Ramadan : horaires spéciaux, vérifiez avant'
          ]
        },
        {
          title: 'Annulation',
          icon: 'XCircle',
          items: [
            'Prévenez au moins 2h à l\'avance',
            'Certains restaurants facturent les no-show',
            'Soyez flexible avec les horaires locaux',
            'Gardez les coordonnées du restaurant'
          ]
        }
      ]
    },
    budget: {
      title: 'Budget et Tarifs',
      sections: [
        {
          title: 'Gammes de Prix',
          icon: 'TrendingUp',
          items: [
            'Économique : 50-100 DH par personne (street food, gargotes)',
            'Moyen : 150-300 DH par personne (restaurants locaux)',
            'Haut de gamme : 400-800 DH par personne (cuisine raffinée)',
            'Luxe : 800+ DH par personne (restaurants étoilés)'
          ]
        },
        {
          title: 'Moyens de Paiement',
          icon: 'CreditCard',
          items: [
            'Espèces privilégiées dans les petits établissements',
            'Cartes acceptées dans les restaurants haut de gamme',
            'Distributeurs disponibles dans toutes les villes',
            'Pourboire : 10-15% si service non inclus'
          ]
        },
        {
          title: 'Économies Possibles',
          icon: 'PiggyBank',
          items: [
            'Menus du jour souvent plus avantageux',
            'Déjeuner moins cher que le dîner',
            'Partage des plats traditionnels (tagines, couscous)',
            'Marchés locaux pour les produits frais'
          ]
        }
      ]
    }
  };

  const currentData = practicalData[activeTab];

  return (
    <div className="bg-surface rounded-2xl shadow-warm overflow-hidden">
      <div className="p-8">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-warning to-warning-600 rounded-lg flex items-center justify-center">
            <Icon name="Info" size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-text-primary">
              Informations Pratiques
            </h2>
            <p className="text-text-secondary">
              Tout ce qu'il faut savoir pour bien voyager au Maroc
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 p-1 bg-background rounded-xl border border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex-1 justify-center ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-warm'
                  : 'text-text-secondary hover:text-primary hover:bg-surface'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-serif font-semibold text-text-primary">
              {currentData.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {currentData.sections.map((section, index) => (
              <div key={index} className="bg-background rounded-xl p-6 hover:shadow-warm transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon name={section.icon} size={16} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary">{section.title}</h4>
                </div>

                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-text-secondary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="bg-gradient-to-r from-error-50 to-warning-50 rounded-xl p-6">
            <h3 className="text-lg font-serif font-semibold text-text-primary mb-4 flex items-center space-x-2">
              <Icon name="Phone" size={18} className="text-error" />
              <span>Contacts Utiles</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-text-primary mb-2">Urgences</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>Police : 19</li>
                  <li>Pompiers : 15</li>
                  <li>SAMU : 141</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-text-primary mb-2">Tourisme</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>Office du Tourisme : 0537-27-07-77</li>
                  <li>Gendarmerie Touristique : 0537-20-46-40</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-text-primary mb-2">Transport</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>ONCF (trains) : 0890-20-30-40</li>
                  <li>Aéroport Mohammed V : 0522-53-90-40</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticalInfo;