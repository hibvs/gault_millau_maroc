import React from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const RegionalHero = () => {
  return (
    <div className="relative pt-16 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Icon name="MapPin" size={24} className="text-secondary" />
              <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                Guides Régionaux
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Découvrez le Maroc
              <span className="block text-secondary">Gastronomique</span>
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Explorez les richesses culinaires de chaque région marocaine à travers nos guides experts. 
              De Marrakech à Casablanca, de Fès à Rabat, découvrez les saveurs authentiques et les 
              adresses d'exception qui font la réputation gastronomique du royaume.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center space-x-3 text-primary-100">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Icon name="Star" size={16} className="text-secondary" />
                </div>
                <span className="font-medium">Sélection Gault & Millau</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-100">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={16} className="text-secondary" />
                </div>
                <span className="font-medium">4 Régions Principales</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-100">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Icon name="UtensilsCrossed" size={16} className="text-secondary" />
                </div>
                <span className="font-medium">332+ Restaurants</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary hover:bg-secondary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-warm transform hover:scale-105 flex items-center justify-center space-x-2">
                <Icon name="Compass" size={20} />
                <span>Commencer l'Exploration</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Download" size={20} />
                <span>Guide PDF</span>
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-warm-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=300&h=400&fit=crop"
                    alt="Marrakech cuisine"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold">Marrakech</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-warm-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1570547490101-12ad11e1e19e?w=300&h=300&fit=crop"
                    alt="Fès traditional"
                    className="w-full h-36 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white font-semibold text-sm">Fès</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-warm-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=300&h=300&fit=crop"
                    alt="Casablanca modern"
                    className="w-full h-36 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white font-semibold text-sm">Casablanca</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-warm-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop"
                    alt="Rabat contemporary"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold">Rabat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default RegionalHero;