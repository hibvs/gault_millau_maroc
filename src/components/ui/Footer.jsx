import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    discover: [
      { name: 'Restaurants', path: '/restaurants-discovery-hub' },
      { name: 'Guides Régionaux', path: '/guides-r-gionaux-regional-discovery' },
      { name: 'Critiques & Notes', path: '/critiques-notes-rating-system' },
      { name: 'Événements', path: '/v-nements-culinaires-events-calendar' }
    ],
    content: [
      { name: 'Actualités', path: '/actualit-s-gastronomiques-editorial-hub' },
      { name: 'Interviews Chefs', path: '/actualit-s-gastronomiques-editorial-hub' },
      { name: 'Tendances Culinaires', path: '/actualit-s-gastronomiques-editorial-hub' },
      { name: 'Culture Gastronomique', path: '/actualit-s-gastronomiques-editorial-hub' }
    ],
    about: [
      { name: 'À Propos', path: '/accueil-homepage' },
      { name: 'Notre Équipe', path: '/accueil-homepage' },
      { name: 'Méthodologie', path: '/critiques-notes-rating-system' },
      { name: 'Partenaires', path: '/accueil-homepage' }
    ],
    support: [
      { name: 'Contact', path: '/accueil-homepage' },
      { name: 'FAQ', path: '/accueil-homepage' },
      { name: 'Conditions d\'utilisation', path: '/accueil-homepage' },
      { name: 'Politique de confidentialité', path: '/accueil-homepage' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' }
  ];

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/accueil-homepage" className="flex items-center mb-6">
              <div className="w-40 h-auto">
                <Image 
                  src="/assets/images/Logo_Gault&Millau-RVB_H-1750084252151.png" 
                  alt="Gault & Millau Maroc Logo"
                  className="w-full h-auto"
                />
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre guide de référence pour découvrir l'excellence culinaire marocaine. 
              Depuis plus de 50 ans, nous célébrons les talents qui font rayonner la gastronomie du royaume.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="px-6 py-2 bg-[#E31E24] hover:bg-[#c91a1f] text-white font-medium rounded-lg transition-colors duration-300 whitespace-nowrap">
                  S'abonner
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 hover:bg-[#E31E24] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Découvrir</h4>
            <ul className="space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <Icon name="ChevronRight" size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contenu</h4>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <Icon name="ChevronRight" size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">À Propos</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <Icon name="ChevronRight" size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <Icon name="ChevronRight" size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Gault & Millau Maroc. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/accueil-homepage" className="hover:text-white transition-colors duration-300">
                Mentions légales
              </Link>
              <Link to="/accueil-homepage" className="hover:text-white transition-colors duration-300">
                Cookies
              </Link>
              <Link to="/accueil-homepage" className="hover:text-white transition-colors duration-300">
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;