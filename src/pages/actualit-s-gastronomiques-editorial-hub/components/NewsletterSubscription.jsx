import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary-800 rounded-xl p-6 text-white shadow-warm">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={24} className="text-white" />
        </div>
        <h3 className="font-serif text-xl font-bold mb-2">
          Newsletter Gastronomique
        </h3>
        <p className="text-primary-100 text-sm leading-relaxed">
          Recevez nos derniers articles, interviews exclusives et actualités culinaires directement dans votre boîte mail.
        </p>
      </div>

      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Icon name="Send" size={16} />
            <span>S'abonner Gratuitement</span>
          </button>
        </form>
      ) : (
        <div className="text-center py-4">
          <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="Check" size={24} className="text-success-200" />
          </div>
          <p className="font-medium mb-1">Merci pour votre inscription !</p>
          <p className="text-primary-200 text-sm">
            Vous recevrez bientôt nos dernières actualités.
          </p>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-white/20">
        <div className="flex items-center justify-center space-x-4 text-xs text-primary-200">
          <div className="flex items-center space-x-1">
            <Icon name="Shield" size={12} />
            <span>Données protégées</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="X" size={12} />
            <span>Désabonnement facile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;