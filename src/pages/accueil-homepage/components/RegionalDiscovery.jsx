import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const RegionalDiscovery = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = [
    {
      id: 1,
      name: "Nord",
      subtitle: "Tanger & Tétouan",
      image: "https://media.kazaden.com/imgth/1920x810/img/activity_school/5607/Trek_Maroc_Chefchaouan_Ana-Flasker_783832201.jpg",
      description: `Le Nord du Maroc, entre Tanger et Tétouan, offre une cuisine unique fortement influencée par la Méditerranée et l'Andalousie. Des fruits de mer frais aux pâtisseries hispano-mauresques, cette région est un carrefour de saveurs où l'histoire a façonné une gastronomie distinctive.`,
      specialties: ["Poissons de la Méditerranée", "Pastilla au poisson", "Thé à la menthe traditionnel", "Pâtisseries hispano-mauresques"],
      restaurantCount: 95,
      topRating: "17/20",
      highlights: ["Vue sur détroit", "Médina de Tétouan", "Atmosphère andalouse", "Cafés historiques"]
    },
    {
      id: 2,
      name: "Centre",
      subtitle: "Casablanca & Fès",
      image: "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_events_slider/public/thumbnails/image/city-panorama.-casablanca-morocco.-africa-marianna-ianovska.jpg?itok=h4FjZSIp",
      description: `Cœur économique et culturel du royaume, cette région allie l'héritage culinaire millénaire de Fès à la modernité cosmopolite de Casablanca. Découvrez des restaurants d'exception entre palais restaurés et établissements contemporains qui redéfinissent la gastronomie marocaine.`,
      specialties: ["Pastilla fassia", "Fruits de mer atlantique", "Cuisine fusion", "Pâtisserie française"],
      restaurantCount: 315,
      topRating: "18/20",
      highlights: ["Médina UNESCO", "Architecture Art Déco", "Palais historiques", "Rooftops modernes"]
    },
    {
      id: 3,
      name: "Sud",
      subtitle: "Marrakech & Agadir",
      image: "https://www.vanupied.com/wp-content/uploads/marrakech-medina-panorama-toits-max-libertine.jpg",
      description: `Entre les jardins luxuriants de Marrakech et les plages ensoleillées d'Agadir, le Sud marocain est un sanctuaire gastronomique où se mêlent traditions berbères et raffinement palatial. Savourez une cuisine généreuse et parfumée dans des cadres d'exception, des riads intimistes aux établissements de luxe.`,
      specialties: ["Tajine d'agneau aux pruneaux", "Poissons grillés", "Couscous berbère", "Méchoui traditionnel"],
      restaurantCount: 260,
      topRating: "18/20",
      highlights: ["Terrasses avec vue Atlas", "Riads historiques", "Front de mer", "Jardins secrets"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-success to-success-600 rounded-full flex items-center justify-center mr-4">
              <Icon name="MapPin" size={24} className="text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-primary">
              Découverte Régionale
            </h2>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explorez les richesses gastronomiques des trois grandes régions du Maroc, chacune avec ses spécialités et son identité culinaire unique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {regions.map((region) => (
            <div
              key={region.id}
              className="group bg-white rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-500 overflow-hidden border border-border"
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Region Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-3xl font-serif font-bold text-white mb-1">
                    {region.name}
                  </h3>
                  <p className="text-secondary-200 font-medium">
                    {region.subtitle}
                  </p>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{region.restaurantCount}</div>
                    <div className="text-xs text-text-secondary">Restaurants</div>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-secondary text-secondary-900 px-3 py-1 rounded-full font-bold">
                  {region.topRating}
                </div>
              </div>

              <div className="p-6">
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {region.description}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">Spécialités Régionales</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {region.specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center text-sm text-text-secondary">
                        <Icon name="ChefHat" size={12} className="mr-2 text-accent flex-shrink-0" />
                        <span className="truncate">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">Points Forts</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.highlights.map((highlight, index) => (
                      <span key={index} className="text-xs bg-surface text-text-secondary px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/guides-r-gionaux-regional-discovery"
                  className="block w-full bg-primary hover:bg-primary-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-warm transform hover:scale-105"
                >
                  Explorer {region.name}
                </Link>
              </div>

              {/* Hover Effect */}
              {hoveredRegion === region.id && (
                <div className="absolute inset-0 bg-primary/5 pointer-events-none transition-all duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Map Teaser */}
        <div className="bg-gradient-to-r from-surface to-primary-50 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="Map" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-serif font-bold text-text-primary mb-4">
              Carte Interactive des Saveurs
            </h3>
            <p className="text-lg text-text-secondary mb-8">
              Explorez notre carte interactive pour découvrir les restaurants recommandés dans chaque région, avec géolocalisation et filtres avancés.
            </p>
            <Link
              to="/guides-r-gionaux-regional-discovery"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-warm transform hover:scale-105"
            >
              <Icon name="MapPin" size={20} className="mr-3" />
              Découvrir la Carte
              <Icon name="ArrowRight" size={20} className="ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalDiscovery;