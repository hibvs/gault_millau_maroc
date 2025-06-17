import React from 'react';
import Icon from 'components/AppIcon';


const CulturalContext = ({ region }) => {
  const culturalElements = {
    marrakech: {
      history: `Marrakech, fondée au XIe siècle, est le carrefour historique des routes commerciales transsahariennes. Cette position stratégique a façonné sa cuisine unique, mélange d'influences berbères, arabes et subsahariennes.`,
      ingredients: [
        { name: 'Safran de Taliouine', description: 'Le meilleur safran du monde, cultivé dans les montagnes de l\'Atlas' },
        { name: 'Olives de Picholine', description: 'Variété locale aux arômes fruités et épicés' },
        { name: 'Dattes Medjool', description: 'Surnommées "le fruit des rois" pour leur qualité exceptionnelle' },
        { name: 'Argan', description: 'Huile précieuse aux propriétés gustatives uniques' }
      ],
      traditions: [
        'Le méchoui traditionnel cuit dans les fours communautaires',
        'La cérémonie du thé à la menthe dans les riads',
        'Les souks aux épices et leurs mélanges secrets',
        'La pastilla, symbole de l\'art culinaire andalou-marocain'
      ],
      modernInfluences: `La nouvelle génération de chefs marrakchis réinvente la cuisine traditionnelle en intégrant des techniques modernes tout en respectant l'authenticité des saveurs ancestrales.`
    },
    casablanca: {
      history: `Casablanca, métropole moderne du Maroc, a développé une identité culinaire cosmopolite influencée par son statut de port international et sa diversité culturelle.`,
      ingredients: [
        { name: 'Poissons de l\'Atlantique', description: 'Sardines, daurades et bars pêchés quotidiennement' },
        { name: 'Légumes de la Chaouia', description: 'Région agricole fertile fournissant les meilleurs produits' },
        { name: 'Agrumes de Berkane', description: 'Oranges et citrons aux saveurs intenses' },
        { name: 'Épices du port', description: 'Mélanges d\'épices importées du monde entier' }
      ],
      traditions: [
        'Les grillades de poisson sur la corniche',
        'Les pâtisseries françaises adaptées au goût local',
        'Les cafés à l\'européenne avec une touche marocaine',
        'La fusion culinaire franco-marocaine'
      ],
      modernInfluences: `Casablanca incarne le Maroc contemporain où la gastronomie internationale se mélange harmonieusement avec les traditions locales, créant une cuisine urbaine sophistiquée.`
    },
    fez: {
      history: `Fès, ancienne capitale impériale et centre spirituel du Maroc, préserve les traditions culinaires les plus raffinées du royaume, héritées des dynasties almoravide et almohade.`,
      ingredients: [
        { name: 'Épices de la médina', description: 'Mélanges traditionnels gardés secrets par les familles' },
        { name: 'Amandes de Taounate', description: 'Variété locale aux arômes délicats' },
        { name: 'Miel de montagne', description: 'Miel de thym et de lavande sauvage' },
        { name: 'Céréales du Saïs', description: 'Blé dur et orge de la plaine fertile' }
      ],
      traditions: [
        'La pastilla impériale aux pigeons et aux amandes',
        'Le couscous du vendredi, tradition familiale sacrée',
        'Les pâtisseries de l\'Aïd préparées selon les recettes ancestrales',
        'L\'art de la table fassi et ses rituels'
      ],
      modernInfluences: `Fès maintient ses traditions culinaires tout en s'ouvrant discrètement à l'innovation, préservant l'authenticité tout en permettant une évolution respectueuse.`
    },
    rabat: {
      history: `Rabat, capitale administrative moderne, développe une nouvelle identité gastronomique qui allie l'héritage royal aux influences contemporaines internationales.`,
      ingredients: [
        { name: 'Légumes bio du Gharb', description: 'Production agricole moderne et respectueuse' },
        { name: 'Poissons de Salé', description: 'Pêche traditionnelle dans l\'estuaire du Bouregreg' },
        { name: 'Herbes aromatiques', description: 'Coriandre, persil et menthe fraîches' },
        { name: 'Produits artisanaux', description: 'Fromages et charcuteries locales innovantes' }
      ],
      traditions: [
        'La cuisine de palais adaptée au goût contemporain',
        'Les réceptions diplomatiques aux saveurs marocaines',
        'L\'art de recevoir à la rbatie',
        'La pâtisserie moderne inspirée des classiques'
      ],
      modernInfluences: `Rabat représente l'avenir de la gastronomie marocaine, où l'innovation culinaire s'épanouit dans le respect des traditions, créant une nouvelle école gastronomique.`
    }
  };

  const currentCulture = culturalElements[region.id] || culturalElements.marrakech;

  return (
    <div className="bg-gradient-to-br from-surface to-background rounded-2xl shadow-warm overflow-hidden">
      <div className="p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-600 rounded-lg flex items-center justify-center">
            <Icon name="BookOpen" size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-text-primary">
              Contexte Culturel
            </h2>
            <p className="text-accent font-medium">{region.name}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Historical Context */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-serif font-semibold text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="Clock" size={18} className="text-primary" />
                <span>Histoire Culinaire</span>
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {currentCulture.history}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold text-text-primary mb-4 flex items-center space-x-2">
                <Icon name="Leaf" size={18} className="text-success" />
                <span>Ingrédients Emblématiques</span>
              </h3>
              <div className="space-y-3">
                {currentCulture.ingredients.map((ingredient, index) => (
                  <div key={index} className="bg-background rounded-lg p-4 border border-border hover:border-success transition-colors duration-300">
                    <h4 className="font-semibold text-text-primary mb-1">{ingredient.name}</h4>
                    <p className="text-sm text-text-secondary">{ingredient.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Traditions & Modern Influences */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-serif font-semibold text-text-primary mb-4 flex items-center space-x-2">
                <Icon name="Heart" size={18} className="text-error" />
                <span>Traditions Vivantes</span>
              </h3>
              <div className="space-y-2">
                {currentCulture.traditions.map((tradition, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-background rounded-lg hover:bg-primary-50 transition-colors duration-300 group">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0 group-hover:bg-primary transition-colors duration-300"></div>
                    <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                      {tradition}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
              <h3 className="text-lg font-serif font-semibold text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="Sparkles" size={18} className="text-secondary" />
                <span>Influences Modernes</span>
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {currentCulture.modernInfluences}
              </p>
            </div>

            {/* Cultural Notes */}
            <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
              <h3 className="text-lg font-serif font-semibold text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="Info" size={18} className="text-accent" />
                <span>Notes Culturelles</span>
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {region.culturalNotes}
              </p>
            </div>
          </div>
        </div>

        {/* Visual Elements */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-background rounded-lg hover:bg-primary-50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon name="UtensilsCrossed" size={20} />
              </div>
              <p className="text-sm font-medium text-text-primary">Cuisine Authentique</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg hover:bg-secondary-50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Icon name="Users" size={20} />
              </div>
              <p className="text-sm font-medium text-text-primary">Traditions Familiales</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg hover:bg-accent-50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Icon name="Sparkles" size={20} />
              </div>
              <p className="text-sm font-medium text-text-primary">Innovation Culinaire</p>
            </div>
            <div className="text-center p-4 bg-background rounded-lg hover:bg-success-50 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-success group-hover:text-white transition-all duration-300">
                <Icon name="Award" size={20} />
              </div>
              <p className="text-sm font-medium text-text-primary">Excellence Reconnue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalContext;