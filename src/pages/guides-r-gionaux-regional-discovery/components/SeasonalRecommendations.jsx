import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const SeasonalRecommendations = ({ selectedRegion }) => {
  const [activeSeason, setActiveSeason] = useState('spring');

  const seasons = [
    { id: 'spring', name: 'Printemps', icon: 'Flower2', color: 'success' },
    { id: 'summer', name: 'Été', icon: 'Sun', color: 'warning' },
    { id: 'autumn', name: 'Automne', icon: 'Leaf', color: 'accent' },
    { id: 'winter', name: 'Hiver', icon: 'Snowflake', color: 'primary' }
  ];

  const seasonalData = {
    spring: {
      title: 'Printemps au Maroc',
      description: 'La saison idéale pour découvrir la fraîcheur des produits de saison et les terrasses ensoleillées.',
      temperature: '18-25°C',
      highlights: [
        'Légumes primeurs et herbes fraîches',
        'Terrasses et jardins en fleurs',
        'Festivals gastronomiques de printemps', 

        
        'Produits de la mer en abondance'
      ],
      dishes: [
        {
          name: 'Salade Marocaine aux Herbes Fraîches',
          description: 'Mélange de coriandre, persil et menthe avec légumes croquants',
          image: 'https://resize.elle.fr/original/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/salade-marocaine-2711399/47700736-1-fre-FR/Salade-marocaine.jpg',
          regions: ['all']
        },
        {
          name: 'Tagine aux Petits Pois et Artichauts',
          description: 'Légumes de saison mijotés aux épices douces',
          image: 'https://www.auxdelicesdupalais.net/wp-content/uploads/2016/06/Tajine-aux-petits-pois-artichaut-et-fenouilDSC04784.jpg',
          regions: ['marrakech', 'fez']
        },
        {
          name: 'Poisson Grillé aux Herbes',
          description: 'Poissons frais de l\'Atlantique aux herbes de saison',
          image: 'https://img.freepik.com/photos-gratuite/vue-laterale-du-poisson-grille-salade-legumes-herbes-tranche-citron_141793-4941.jpg',
          regions: ['casablanca', 'rabat']
        }
      ]
    },
    summer: {
      title: 'Été Marocain',
      description: 'Saveurs rafraîchissantes et plats légers pour affronter la chaleur avec délice.',
      temperature: '25-35°C',
      highlights: [
        'Fruits d\'été juteux et sucrés',
        'Boissons fraîches traditionnelles',
        'Cuisine légère et rafraîchissante',
        'Soirées en terrasse sous les étoiles'
      ],
      dishes: [
        {
          name: 'Gazpacho Marocain',
          description: 'Soupe froide aux tomates et concombres, épicée à la marocaine',
          image: 'https://www.greenvillage.ma/vyckungy/2024/07/recettes-de-gaspacho-1-e1656499198983.jpg',
          regions: ['all']
        },
        {
          name: 'Salade de Pastèque à la Menthe',
          description: 'Fraîcheur estivale avec fromage de chèvre local',
          image: 'https://www.delscookingtwist.com/wp-content/uploads/2022/06/Watermelon-Salad-with-Feta-and-Mint_4.jpg',
          regions: ['marrakech', 'rabat']
        },
        {
          name: 'Ceviche Marocain',
          description: 'Poisson mariné aux agrumes et épices locales',
          image: 'https://www.pavillonfrance.fr/sites/default/files/styles/recette_image_zoom/public/pf-ceviche_de_dorade_grise_cr_nfm.jpg?itok=0AztcgQw',
          regions: ['casablanca']
        }
      ]
    },
    autumn: {
      title: 'Automne Gourmand',
      description: 'Saison des récoltes et des saveurs riches, parfaite pour les plats mijotés traditionnels.',
      temperature: '20-28°C',
      highlights: [
        'Récolte des olives et production d\'huile',
        'Fruits secs et dattes fraîches',
        'Plats mijotés et tagines parfumés',
        'Vendanges et découverte des vins locaux'
      ],
      dishes: [
        {
          name: 'Tagine d\'Agneau aux Pruneaux',
          description: 'Plat emblématique aux saveurs sucrées-salées',
          image: 'https://img.cuisineaz.com/1200x675/2018/03/19/i137999-tajine-d-agneau-aux-pruneaux.webp',
          regions: ['fez', 'marrakech']
        },
        {
          name: 'Couscous aux Sept Légumes',
          description: 'Couscous traditionnel avec légumes d\'automne',
          image: 'https://img.cuisineaz.com/660x495/2025/02/19/i203988-couscous-marocain-facile.jpg',
          regions: ['all']
        },
        {
          name: 'Soupe Harira Enrichie',
          description: 'Version automnale avec légumineuses et viande',
          image: 'https://img.cuisineaz.com/660x495/2016/06/28/i74271-harira-choumicha.jpeg',
          regions: ['all']
        }
      ]
    },
    winter: {
      title: 'Hiver Réconfortant',
      description: 'Plats chaleureux et réconfortants pour profiter de la douceur de l\'hiver marocain.',
      temperature: '12-20°C',
      highlights: [
        'Agrumes à maturité parfaite',
        'Plats mijotés et soupes épaisses',
        'Pâtisseries traditionnelles de saison',
        'Ambiance cosy des riads'
      ],
      dishes: [
        {
          name: 'Rfissa Traditionnelle',
          description: 'Plat de fête aux vermicelles et poulet épicé',
          image: 'https://www.laho-rooftop.fr/wp-content/uploads/2024/09/article-2024-09-04T140247.080.jpg',
          regions: ['fez', 'rabat']
        },
        {
          name: 'La tangia',
          description: 'Plat de viande accompagné de citrons confits et d\'épices',
          image: 'https://madeincity-strapi-uploads.s3.eu-west-1.amazonaws.com/Tanjia_93ece5e9f0.jpg',
          regions: ['marrakech']
        },
        {
          name: 'Chorba aux Lentilles',
          description: 'Soupe épaisse et nourrissante aux épices chaudes',
          image: 'https://www.awni.fr/wp-content/uploads/2022/11/AdobeStock_106546216-scaled.jpeg',
          regions: ['all']
        }
      ]
    }
  };

  const currentSeason = seasonalData[activeSeason];
  const filteredDishes = selectedRegion === 'all' 
    ? currentSeason.dishes 
    : currentSeason.dishes.filter(dish => 
        dish.regions.includes('all') || dish.regions.includes(selectedRegion)
      );

  return (
    <div className="bg-surface rounded-2xl shadow-warm overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-2">
              Recommandations Saisonnières
            </h2>
            <p className="text-text-secondary">
              Découvrez les saveurs de chaque saison au Maroc
            </p>
          </div>
          
          {/* Season Selector */}
          <div className="flex bg-background rounded-xl p-1 border border-border">
            {seasons.map((season) => (
              <button
                key={season.id}
                onClick={() => setActiveSeason(season.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSeason === season.id
                    ? `bg-${season.color} text-white shadow-warm`
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon name={season.icon} size={16} />
                <span className="hidden sm:inline">{season.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Season Overview */}
        <div className="bg-gradient-to-r from-background to-surface rounded-xl p-6 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-serif font-semibold text-text-primary mb-2">
                {currentSeason.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {currentSeason.description}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-text-secondary mb-2">
                <Icon name="Thermometer" size={16} />
                <span className="text-sm">Température</span>
              </div>
              <span className="text-lg font-semibold text-primary">
                {currentSeason.temperature}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentSeason.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg">
                <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                <span className="text-sm text-text-secondary">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Dishes */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-text-primary mb-6 flex items-center space-x-2">
            <Icon name="ChefHat" size={18} className="text-accent" />
            <span>Plats de Saison</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center space-x-2 text-white text-xs">
                      <Icon name="MapPin" size={14} />
                      <span>
                        {dish.regions.includes('all') ? 'Toutes régions' : 
                         dish.regions.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-serif font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                  {dish.name}
                </h4>
                <p className="text-sm text-text-secondary line-clamp-2">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Tips */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
            <h3 className="text-lg font-serif font-semibold text-text-primary mb-4 flex items-center space-x-2">
              <Icon name="Lightbulb" size={18} className="text-warning" />
              <span>Conseils de Saison</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-text-primary mb-2">Meilleurs Moments</h4>
                <p className="text-sm text-text-secondary">
                  {activeSeason === 'spring' && 'Profitez des terrasses fleuries et des marchés colorés. Les températures douces sont parfaites pour explorer les médinas.'}
                  {activeSeason === 'summer' && 'Privilégiez les soirées tardives et les restaurants climatisés. Les boissons fraîches sont essentielles.'}
                  {activeSeason === 'autumn' && 'Saison idéale pour les tagines mijotés et les balades dans les souks aux épices. Les températures sont parfaites.'}
                  {activeSeason === 'winter' && 'Moment parfait pour les plats réconfortants et l\'ambiance cosy des riads. Les agrumes sont à leur apogée.'}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-2">À Éviter</h4>
                <p className="text-sm text-text-secondary">
                  {activeSeason === 'spring' && 'Les plats trop lourds qui ne correspondent pas à la fraîcheur de la saison.'}
                  {activeSeason === 'summer' && 'Les repas copieux en pleine journée. Préférez les collations légères.'}
                  {activeSeason === 'autumn' && 'Les salades froides qui ne réchauffent pas suffisamment.'}
                  {activeSeason === 'winter' && 'Les plats trop légers qui ne réchauffent pas assez pendant les soirées fraîches.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalRecommendations;