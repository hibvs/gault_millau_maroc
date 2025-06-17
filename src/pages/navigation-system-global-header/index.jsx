// src/pages/navigation-system-global-header/index.jsx
import React, { useState } from 'react';
import Icon from 'components/AppIcon';

// Import new navigation components
import NavigationBar from './components/NavigationBar';
import RegionSelector from './components/RegionSelector';
import CategoryShowcase from './components/CategoryShowcase';

const NavigationSystemGlobalHeader = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [activeDemo, setActiveDemo] = useState('navigation');

  const handleRegionChange = (region) => {
    setSelectedRegion(region.id);
    console.log('Region changed to:', region);
    // You can add logic here to filter content based on selected region
  };

  // Demo sections to showcase different components
  const demoSections = [
    {
      id: 'navigation',
      name: 'Navigation Principal',
      description: 'Barre de navigation avec logo, recherche et catégories',
      icon: 'Navigation'
    },
    {
      id: 'regions', 
      name: 'Sélecteur de Régions',
      description: 'Sélection des régions marocaines (Nord, Centre, Sud)',
      icon: 'MapPin'
    },
    {
      id: 'categories',
      name: 'Showcase Catégories',
      description: 'Présentation des différentes catégories du site',
      icon: 'Grid3X3'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* New Navigation System */}
      <NavigationBar />
      
      {/* Main Content Area */}
      <main className="pt-32 pb-16">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-[#F4D03F]/10 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="mb-6">
                <Icon name="Navigation" size={64} className="text-[#E31E24] mx-auto mb-4" />
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-4">
                  Nouveau Système de Navigation
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Découvrez la nouvelle interface de navigation pour Gault & Millau Maroc, 
                  conçue pour une expérience utilisateur optimale avec un design moderne et intuitif.
                </p>
              </div>
              
              {/* Features Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-warm">
                  <Icon name="Search" size={32} className="text-[#F4D03F] mx-auto mb-3" />
                  <h3 className="font-semibold text-text-primary mb-2">Recherche Centralisée</h3>
                  <p className="text-sm text-gray-600">Barre de recherche intuitive au centre de la navigation</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-warm">
                  <Icon name="Grid3X3" size={32} className="text-[#F4D03F] mx-auto mb-3" />
                  <h3 className="font-semibold text-text-primary mb-2">12 Catégories</h3>
                  <p className="text-sm text-gray-600">Navigation horizontale avec icônes pour chaque catégorie</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-warm">
                  <Icon name="MapPin" size={32} className="text-[#F4D03F] mx-auto mb-3" />
                  <h3 className="font-semibold text-text-primary mb-2">Régions Marocaines</h3>
                  <p className="text-sm text-gray-600">Sélection par région : Nord, Centre, Sud du Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Navigation */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {demoSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveDemo(section.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeDemo === section.id
                      ? 'bg-[#E31E24] text-white shadow-warm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon name={section.icon} size={20} />
                  <span>{section.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Navigation Demo */}
            {activeDemo === 'navigation' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif font-bold text-text-primary mb-4">
                    Navigation Principale
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    La nouvelle barre de navigation intègre le logo Gault & Millau, une barre de recherche centralisée, 
                    et un menu horizontal avec 12 catégories principales.
                  </p>
                </div>
                
                {/* Navigation Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-warm">
                    <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center space-x-2">
                      <Icon name="Palette" size={24} className="text-[#F4D03F]" />
                      <span>Design & Couleurs</span>
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-[#F4D03F] rounded-full"></div>
                        <span>Fond jaune (#F4D03F) pour la barre principale</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-[#E31E24] rounded-full"></div>
                        <span>Logo rouge Gault & Millau</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-white border border-gray-300 rounded-full"></div>
                        <span>Fond blanc pour les sous-sections</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-warm">
                    <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center space-x-2">
                      <Icon name="Smartphone" size={24} className="text-[#F4D03F]" />
                      <span>Responsive Design</span>
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <Icon name="Monitor" size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                        <span>Navigation horizontale sur desktop avec toutes les catégories visibles</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Smartphone" size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                        <span>Menu hamburger sur mobile avec grid 2 colonnes</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Icon name="Search" size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                        <span>Barre de recherche adaptative selon la taille d'écran</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Categories List */}
                <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
                    Les 12 Catégories de Navigation
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[
                      { name: 'LA PLACE', icon: 'Home', desc: 'Hub éditorial' },
                      { name: 'ACTUALITÉS', icon: 'Newspaper', desc: 'Nouvelles' },
                      { name: 'RESTAURANTS', icon: 'UtensilsCrossed', desc: 'Découverte' },
                      { name: 'VINS', icon: 'Wine', desc: 'Sélection' },
                      { name: 'CHAMPAGNES', icon: 'GlassWater', desc: 'Collection' },
                      { name: 'SPIRITUEUX', icon: 'Bottle', desc: 'Spiritueux' },
                      { name: 'DOMAINES', icon: 'TreePine', desc: 'Domaines' },
                      { name: 'HÔTELS', icon: 'Building', desc: 'Hébergements' },
                      { name: 'ARTISANS', icon: 'Hammer', desc: 'Producteurs' },
                      { name: 'RECETTES', icon: 'ChefHat', desc: 'Cuisine' },
                      { name: 'PEOPLE', icon: 'Users', desc: 'Profils' },
                      { name: 'USTENSILES', icon: 'Utensils', desc: 'Outils' }
                    ].map((category, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                        <Icon name={category.icon} size={24} className="text-[#E31E24] mx-auto mb-2" />
                        <div className="text-xs font-semibold text-gray-700 mb-1">{category.name}</div>
                        <div className="text-xs text-gray-500">{category.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Region Selector Demo */}
            {activeDemo === 'regions' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif font-bold text-text-primary mb-4">
                    Sélecteur de Régions Marocaines
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Système de sélection des régions du Maroc comme demandé : Nord, Centre, Sud (sans Rabat).
                  </p>
                </div>
                
                {/* Region Selector Component */}
                <div className="flex justify-center mb-8">
                  <RegionSelector 
                    selectedRegion={selectedRegion}
                    onRegionChange={handleRegionChange}
                  />
                </div>

                {/* Regions Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" size={16} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-800">Nord du Maroc</h3>
                    </div>
                    <p className="text-blue-700 mb-4">Région du Nord avec ses villes emblématiques</p>
                    <ul className="space-y-2 text-blue-600">
                      <li>• Tanger - Porte de l'Afrique</li>
                      <li>• Tétouan - Perle du Nord</li>
                      <li>• Chefchaouen - Ville bleue</li>
                      <li>• Al Hoceima - Côte méditerranéenne</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" size={16} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800">Centre du Maroc</h3>
                    </div>
                    <p className="text-green-700 mb-4">Région centrale, cœur économique et culturel</p>
                    <ul className="space-y-2 text-green-600">
                      <li>• Casablanca - Capitale économique</li>
                      <li>• Fès - Capitale spirituelle</li>
                      <li>• Meknès - Ville impériale</li>
                      <li>• Kenitra - Région du Gharb</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" size={16} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-red-800">Sud du Maroc</h3>
                    </div>
                    <p className="text-red-700 mb-4">Région du Sud, entre Atlas et océan</p>
                    <ul className="space-y-2 text-red-600">
                      <li>• Marrakech - Ville rouge</li>
                      <li>• Agadir - Perle du Sud</li>
                      <li>• Essaouira - Cité des vents</li>
                      <li>• Ouarzazate - Porte du désert</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Categories Showcase Demo */}
            {activeDemo === 'categories' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-serif font-bold text-text-primary mb-4">
                    Showcase des Catégories
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Présentation visuelle des différentes catégories avec images temporaires 
                    facilement remplaçables.
                  </p>
                </div>
                <CategoryShowcase />
              </div>
            )}
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-2xl shadow-warm">
              <h2 className="text-2xl font-serif font-bold text-text-primary mb-6 flex items-center space-x-2">
                <Icon name="Code" size={28} className="text-[#F4D03F]" />
                <span>Notes d'Implémentation</span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">🖼️ Remplacement des Images</h3>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 mb-4">
                    {/* IMAGE PLACEHOLDER: Replace src with your images */}<br/>
                    src="/path/to/your/image.jpg"
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Toutes les images sont marquées avec des commentaires "IMAGE PLACEHOLDER" 
                    pour un remplacement facile. Cherchez ces commentaires dans le code.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">🎯 Remplacement des Icônes</h3>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm font-mono text-gray-700 mb-4">
                    {/* ICON PLACEHOLDER: Replace with your icon */}<br/>
                    icon="YourCustomIcon"
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Chaque icône est documentée avec "ICON PLACEHOLDER" et peut être 
                    remplacée par vos icônes personnalisées.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">🌍 Régions Marocaines</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Le système de régions est configuré pour le Maroc (Nord, Centre, Sud) 
                    sans Rabat comme demandé. Les régions sont utilisables dans tout le site.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">📱 Responsive Design</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    La navigation s'adapte automatiquement : menu horizontal sur desktop, 
                    menu hamburger sur mobile avec une grille optimisée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NavigationSystemGlobalHeader;