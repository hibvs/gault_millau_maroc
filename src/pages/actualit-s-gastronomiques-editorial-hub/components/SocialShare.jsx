import React from 'react';
import Icon from 'components/AppIcon';

const SocialShare = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: 'https://facebook.com/gaultmillaumaroc',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/gaultmillaumaroc',
      color: 'hover:text-pink-600',
      bgColor: 'hover:bg-pink-50'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/gaultmillaumaroc',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/company/gaultmillaumaroc',
      color: 'hover:text-blue-700',
      bgColor: 'hover:bg-blue-50'
    }
  ];

  return (
    <div className="bg-surface rounded-xl p-6 shadow-warm">
      <h3 className="font-serif text-xl font-bold text-text-primary mb-6 flex items-center">
        <Icon name="Share2" size={20} className="mr-2 text-accent" />
        Suivez-nous
      </h3>
      
      <p className="text-text-secondary text-sm mb-6 leading-relaxed">
        Restez connecté avec Gault et Millau Maroc sur les réseaux sociaux pour ne rien manquer de l'actualité culinaire.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center space-x-2 p-3 rounded-lg border border-border
              text-text-secondary transition-all duration-300 group
              ${social.color} ${social.bgColor}
            `}
          >
            <Icon name={social.icon} size={18} />
            <span className="text-sm font-medium">{social.name}</span>
          </a>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <span>Partagez nos articles</span>
          <div className="flex items-center space-x-2">
            <Icon name="Heart" size={12} className="text-accent" />
            <span>Merci de votre soutien</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;