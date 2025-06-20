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
    <div className="bg-black rounded-xl p-6 text-white border border-[#FFEB00]">
      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-[#FFEB00] rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={24} className="text-black" />
        </div>
        <h3 className="text-xl font-bold mb-2">Newsletter Artisanale</h3>
        <p className="text-gray-300 text-sm">
          Reçois chaque semaine un portrait d’un artisan marocain, ses créations, ses secrets de fabrication.
        </p>
      </div>

      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className="w-full px-4 py-3 bg-white text-black rounded-lg focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#FF0000] hover:bg-[#c90000] text-white px-4 py-3 rounded-lg font-medium transition"
          >
            <Icon name="Send" size={16} className="inline-block mr-2" />
            S’abonner
          </button>
        </form>
      ) : (
        <div className="text-center py-4">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <Icon name="Check" size={24} className="text-green-400" />
          </div>
          <p className="font-medium mb-1">Merci pour votre inscription !</p>
          <p className="text-gray-400 text-sm">
            Vous recevrez bientôt nos portraits d’artisans.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscription;
