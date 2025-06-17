import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'Accueil', 
      path: '/accueil-homepage', 
      icon: 'Home',
      description: 'Page d\'accueil'
    },
    { 
      name: 'Restaurants', 
      path: '/restaurants-discovery-hub', 
      icon: 'UtensilsCrossed',
      description: 'Découverte culinaire'
    },
    { 
      name: 'Actualités', 
      path: '/actualit-s-gastronomiques-editorial-hub', 
      icon: 'Newspaper',
      description: 'Actualités gastronomiques'
    },
    { 
      name: 'Guides Régionaux', 
      path: '/guides-r-gionaux-regional-discovery', 
      icon: 'MapPin',
      description: 'Découverte régionale'
    },
    { 
      name: 'Critiques & Notes', 
      path: '/critiques-notes-rating-system', 
      icon: 'Star',
      description: 'Système de notation'
    },
    { 
      name: 'Événements', 
      path: '/v-nements-culinaires-events-calendar', 
      icon: 'Calendar',
      description: 'Calendrier culinaire'
    },
  ];

  const quickActions = [
    { name: 'Recherche Avancée', icon: 'Search', action: 'search' },
    { name: 'Mes Favoris', icon: 'Heart', action: 'favorites' },
    { name: 'Réservations', icon: 'Clock', action: 'reservations' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const handleQuickAction = (action) => {
    console.log(`Quick action: ${action}`);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleMobile}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-primary text-white rounded-lg shadow-warm hover:bg-primary-600 transition-colors duration-300"
        aria-label="Toggle sidebar"
      >
        <Icon name="Menu" size={20} />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full bg-surface border-r border-border z-40
          transition-all duration-300 ease-smooth shadow-warm-lg
          ${isCollapsed ? 'w-16' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-background">
            {!isCollapsed && (
              <Link 
                to="/accueil-homepage" 
                className="flex items-center space-x-3 group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-800 rounded-lg flex items-center justify-center shadow-sm">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="font-serif text-lg font-bold text-primary leading-tight">
                    G&M Maroc
                  </h2>
                </div>
              </Link>
            )}
            
            <button
              onClick={toggleCollapse}
              className="hidden lg:flex p-1.5 text-text-secondary hover:text-primary transition-colors duration-300 hover:bg-background rounded-md"
              aria-label="Toggle sidebar"
            >
              <Icon name={isCollapsed ? "ChevronRight" : "ChevronLeft"} size={16} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileOpen(false)}
                  className={`
                    group flex items-center px-3 py-2.5 rounded-lg text-sm font-medium 
                    transition-all duration-300 relative
                    ${isActivePath(item.path)
                      ? 'text-primary bg-primary-50 shadow-sm border-l-4 border-primary'
                      : 'text-text-secondary hover:text-primary hover:bg-background'
                    }
                  `}
                  title={isCollapsed ? item.name : ''}
                >
                  <Icon 
                    name={item.icon} 
                    size={20} 
                    className={`flex-shrink-0 ${isCollapsed ? 'mx-auto' : 'mr-3'}`}
                  />
                  
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <div className="truncate">{item.name}</div>
                      <div className="text-xs text-text-secondary/70 truncate">
                        {item.description}
                      </div>
                    </div>
                  )}

                  {isActivePath(item.path) && !isCollapsed && (
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  )}

                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-text-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                      {item.name}
                    </div>
                  )}
                </Link>
              ))}
            </div>

            {/* Quick Actions */}
            {!isCollapsed && (
              <div className="pt-6 mt-6 border-t border-border">
                <h3 className="px-3 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">
                  Actions Rapides
                </h3>
                <div className="space-y-1">
                  {quickActions.map((action) => (
                    <button
                      key={action.action}
                      onClick={() => handleQuickAction(action.action)}
                      className="w-full group flex items-center px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-background transition-all duration-300"
                    >
                      <Icon name={action.icon} size={18} className="mr-3 flex-shrink-0" />
                      <span className="truncate">{action.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border bg-background">
            {!isCollapsed ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-secondary-800" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary truncate">
                      Utilisateur
                    </p>
                    <p className="text-xs text-text-secondary truncate">
                      Membre Premium
                    </p>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center px-3 py-2 text-xs font-medium text-text-secondary hover:text-primary transition-colors duration-300 hover:bg-surface rounded-lg">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Paramètres
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <button 
                  className="p-2 text-text-secondary hover:text-primary transition-colors duration-300 hover:bg-background rounded-lg"
                  title="Profil utilisateur"
                >
                  <Icon name="User" size={20} />
                </button>
                <button 
                  className="p-2 text-text-secondary hover:text-primary transition-colors duration-300 hover:bg-background rounded-lg"
                  title="Paramètres"
                >
                  <Icon name="Settings" size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;