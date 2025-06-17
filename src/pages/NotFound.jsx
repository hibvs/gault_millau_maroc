import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-warm">
            <Icon name="ChefHat" size={48} className="text-white" />
          </div>
          <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-serif font-semibold text-text-primary mb-4">
            Page Non Trouvée
          </h2>
          <p className="text-text-secondary mb-8">
            Désolé, la page que vous recherchez n'existe pas. Elle a peut-être été déplacée ou supprimée.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/accueil-homepage"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-warm transform hover:scale-105"
          >
            <Icon name="Home" size={20} className="mr-2" />
            Retour à l'Accueil
          </Link>
          
          <Link
            to="/restaurants-discovery-hub"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent hover:bg-accent-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-warm"
          >
            <Icon name="UtensilsCrossed" size={20} className="mr-2" />
            Découvrir les Restaurants
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-text-secondary">
            Besoin d'aide ? Contactez notre équipe
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;