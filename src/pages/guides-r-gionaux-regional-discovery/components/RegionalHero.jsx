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
             L’Art de Séjourner  
              <span className="block text-secondary">au Maroc</span>
            </h1>
            
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
             Découvrez l'hospitalité marocaine dans toute sa splendeur
             Partez à la découverte des plus beaux hôtels du royaume, sélectionnés pour leur raffinement, 
              leur service irréprochable et leur cadre exceptionnel. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex items-center space-x-3 text-primary-100">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <img src="./public/assets/images/toques/TOQUES_2023_JAUNE.png" alt="Toque de chef" className="w-4 h-4 object-contain text-secondary" />
                </div>
                <span className="font-medium">Sélection Gault & Millau</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-100">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={16} className="text-secondary" />
                </div>
                <span className="font-medium">3 Régions Principales</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-100">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Icon name="Hotel" size={16} className="text-secondary" />
                </div>
                <span className="font-medium">332+ Hôtels</span>
              </div>
            </div>


          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-warm-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/474656748.jpg?k=3f511d8a7de370ec912d62ffc0f9666b0995d5a97b556a81b2492a07d2ae84af&o=&hp=1"
                    alt="Marrakech cuisine"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-semibold">Marrakech</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-warm-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://www.placesofjuma.com/wp-content/uploads/2024/02/Riad-Maison-Bleue-and-Spa-9.0-2.jpg"
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
                    src="https://www.royalmansour.com/wp-content/uploads/2024/07/casa-c2-lobby.jpg"
                    alt="Casablanca modern"
                    className="w-full h-36 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white font-semibold text-sm">Casablanca</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-warm-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="https://y.cdrst.com/foto/hotel-sf/39bf/listcardm/sofitel-rabat-jardin-des-roses-servicios-1209717a.jpg"
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


    </div>
  );
};

export default RegionalHero;