import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const FeaturedRestaurants = () => {
  const featuredRestaurants = [
    {
      id: 1,
      name: "La Mamounia",
      chef: "Chef Rachid Agouray",
      location: "Marrakech",
      rating: "18/20",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
      cuisine: "Marocaine Raffinée",
      priceRange: "€€€€",
      description: `Un voyage culinaire exceptionnel dans l'univers de la gastronomie marocaine revisitée. Le Chef Rachid Agouray sublime les saveurs traditionnelles avec une technique irréprochable et une présentation artistique remarquable.`,
      specialties: ["Pastilla au pigeon", "Tajine d'agneau aux pruneaux", "Couscous royal"],
      features: ["Terrasse", "Vue Atlas", "Parking", "Climatisé"]
    },
    {
      id: 2,
      name: "Dar Roumana",chef: "Chef Younes Kamal",location: "Fès",rating: "17/20",image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?w=800&h=600&fit=crop",cuisine: "Fusion Franco-Marocaine",priceRange: "€€€",
      description: `Dans un riad restauré avec goût, une cuisine fusion qui marie harmonieusement les techniques françaises aux saveurs marocaines. Une expérience gastronomique unique dans un cadre authentique au cœur de la médina.`,
      specialties: ["Foie gras aux figues et amlou", "Tajine de lotte au safran", "Pastilla revisitée"],
      features: ["Riad historique", "Terrasse panoramique", "Cave à vins", "Cours de cuisine"]
    },
    {
      id: 3,
      name: "Le Cabestan",chef: "Chef Issam Rhachi",location: "Casablanca",rating: "16/20",image: "https://images.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg?w=800&h=600&fit=crop",cuisine: "Méditerranéenne",priceRange: "€€€",
      description: `Surplombant l'océan Atlantique, ce restaurant emblématique propose une cuisine méditerranéenne raffinée mettant à l'honneur les produits de la mer. L'ambiance élégante et la vue imprenable en font une adresse incontournable de Casablanca.`,
      specialties: ["Fruits de mer frais", "Paella royale", "Poisson du jour grillé"],
      features: ["Vue sur océan", "Terrasse", "Bar lounge", "Voiturier"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-600 rounded-full flex items-center justify-center mr-4">
              <Icon name="Star" size={24} className="text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-primary">
              Restaurants Étoilés
            </h2>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Découvrez notre sélection des meilleures tables du Maroc, évaluées par nos critiques gastronomiques selon les standards Gault & Millau
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="group bg-white rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-500 overflow-hidden border border-border hover:border-primary/20">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-secondary text-secondary-900 px-3 py-1 rounded-full font-bold text-lg shadow-warm">
                  {restaurant.rating}
                </div>
                
                {/* Price Range */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-text-primary px-3 py-1 rounded-full font-medium text-sm">
                  {restaurant.priceRange}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-text-secondary mb-2">
                    <span className="font-medium">{restaurant.chef}</span>
                    <div className="flex items-center">
                      <Icon name="MapPin" size={14} className="mr-1" />
                      {restaurant.location}
                    </div>
                  </div>
                  <div className="text-sm text-accent font-medium">
                    {restaurant.cuisine}
                  </div>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed">
                  {restaurant.description}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-primary mb-2">Spécialités</h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty, index) => (
                      <span key={index} className="text-xs bg-surface text-text-secondary px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {restaurant.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-text-secondary">
                        <Icon name="Check" size={12} className="mr-1 text-success" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to="/restaurants-discovery-hub"
                  className="block w-full bg-primary hover:bg-primary-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-warm transform hover:scale-105"
                >
                  Voir les Détails
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/restaurants-discovery-hub"
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-warm transform hover:scale-105"
          >
            <Icon name="UtensilsCrossed" size={20} className="mr-3" />
            Voir Tous les Restaurants
            <Icon name="ArrowRight" size={20} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;