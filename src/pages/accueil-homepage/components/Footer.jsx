import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black border-t border-yellow-500">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + liens légaux */}
        <div>
          <Link to="/accueil-homepage" className="inline-block mb-4">
            <Image 
              src="/assets/images/Logo-Gault&Millau-NOIR_V.png" 
              alt="Gault & Millau Maroc Logo"
              className="w-36 h-auto"
            />
          </Link>
          <nav className="flex flex-col space-y-1 text-sm text-gray-600">
            <Link to="/a-propos" className="hover:underline">A propos</Link>
            <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
            <Link to="/cgu" className="hover:underline">CGU</Link>
            <Link to="/politique-confidentialite" className="hover:underline">Politique de confidentialité</Link>
          </nav>
        </div>

        {/* Notre sélection */}
        <div>
          <h3 className="font-semibold mb-3 uppercase text-sm">NOTRE SÉLECTION</h3>
          <nav className="flex flex-col space-y-1 text-sm text-gray-600">
            <Link to="/restaurants" className="hover:underline">Restaurants</Link>
            <Link to="/vins" className="hover:underline">Artisans</Link>
            <Link to="/champagnes" className="hover:underline">Hôtels</Link>
            <Link to="/spiritueux" className="hover:underline">Alcool</Link>
            <Link to="/domaines" className="hover:underline">Riads</Link>
            <Link to="/hotels" className="hover:underline">People</Link>
            <Link to="/artisans" className="hover:underline">Recettes</Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 uppercase text-sm">CONTACT</h3>
          <address className="not-italic text-gray-600 text-sm space-y-1">
            <div>37-39 rue Boissière</div>
            <div>75016 Paris</div>
            <div>France</div>
            <div>Appeler : <a href="tel:0141409980" className="hover:underline">01 41 40 99 80</a></div>
            <div><Link to="/contact" className="hover:underline">Contactez-nous</Link></div>
          </address>
        </div>

        {/* Réseaux sociaux + newsletter */}
        <div className="flex flex-col items-start justify-between">
          <div className="flex space-x-4 mb-6">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-yellow-500">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-yellow-500">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" aria-label="X (ex Twitter)" className="text-gray-600 hover:text-yellow-500">
              <Icon name="X" size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-yellow-500">
              <Icon name="Linkedin" size={24} />
            </a>
          </div>

          <div className="text-xs text-gray-500 italic mb-4">
            Inscrivez-vous à notre newsletter <br/>
            <Link to="/newsletters" className="hover:underline">Toutes les newsletters</Link>
          </div>

          <div className="text-xs text-gray-500 italic text-center w-full">
            GaultMillau © {currentYear} <br/>
            <span className="not-italic">Tous droits réservés</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
