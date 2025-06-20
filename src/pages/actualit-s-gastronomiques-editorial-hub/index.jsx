import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/ui/Header';
import Icon from 'components/AppIcon';

import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import CategoryFilter from './components/CategoryFilter';
import NewsletterSubscription from './components/NewsletterSubscription';
import SocialShare from './components/SocialShare';

const ActualitesGastronomiquesEditorialHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Mock data for articles
  const featuredArticle = {
    id: 1,
    title: "L\'Art de la Pâtisserie Marocaine Moderne : Rencontre avec Chef Amina Benali",
    excerpt: `Découvrez comment la chef pâtissière Amina Benali révolutionne la pâtisserie traditionnelle marocaine en fusionnant techniques françaises et saveurs ancestrales. De ses débuts à Fès jusqu'à son restaurant étoilé à Casablanca, elle partage sa vision de la gastronomie marocaine contemporaine.Cette interview exclusive révèle les secrets de ses créations innovantes qui respectent l'héritage tout en embrassant la modernité.`,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=500&fit=crop",
    author: "Marie Dubois",
    publishDate: "2024-01-15",
    readTime: "8 min",
    category: "Portraits de Chefs",
    tags: ["Chef Interview", "Pâtisserie", "Innovation", "Tradition"],
    featured: true
  };

  const articles = [
    {
      id: 2,
      title: "Les Nouvelles Tendances du Street Food Marocain",
      excerpt: "Comment les jeunes entrepreneurs transforment la street food traditionnelle avec des concepts innovants qui séduisent une nouvelle génération de gourmets.",
      image: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?w=400&h=250&fit=crop",
      author: "Hassan El Mansouri",
      publishDate: "2024-01-12",
      readTime: "6 min",
      category: "Tendances Culinaires",
      tags: ["Street Food", "Innovation", "Jeunes Chefs"]
    },
    {
      id: 3,
      title: "Le Patrimoine Culinaire de Tétouan : Un Héritage Andalou",
      excerpt: "Exploration des influences andalouses dans la cuisine tétouanaise, où chaque plat raconte l\'histoire d\'un métissage culturel unique.",
      image: "https://images.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg?w=400&h=250&fit=crop",
      author: "Fatima Zahra Alami",
      publishDate: "2024-01-10",
      readTime: "10 min",
      category: "Patrimoine Gastronomique",
      tags: ["Histoire", "Tétouan", "Andalousie", "Tradition"]
    },
    {
      id: 4,
      title: "L\'Ouverture Très Attendue du Restaurant \'Dar Zellij\' à Marrakech",
      excerpt: "Le nouveau restaurant du chef Youssef Benjelloun promet de redéfinir la haute gastronomie marocaine dans un cadre somptueux au cœur de la médina.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
      author: "Pierre Martineau",
      publishDate: "2024-01-08",
      readTime: "5 min",
      category: "Actualités Restaurants",
      tags: ["Ouverture", "Marrakech", "Haute Gastronomie"]
    },
    {
      id: 5,
      title: "Portrait : Chef Rachid Agouray, Ambassadeur de la Cuisine Berbère",
      excerpt: "Rencontre avec le chef qui a consacré sa carrière à valoriser les traditions culinaires amazighes dans les plus grandes tables du royaume.",
      image: "https://images.pexels.com/photos/8629131/pexels-photo-8629131.jpeg?w=400&h=250&fit=crop",
      author: "Aicha Benkirane",
      publishDate: "2024-01-05",
      readTime: "12 min",
      category: "Portraits de Chefs",
      tags: ["Chef Portrait", "Cuisine Berbère", "Tradition"]
    },
    {
      id: 6,
      title: "Les Épices Marocaines à l\'Honneur dans la Gastronomie Internationale",
      excerpt: "Comment les épices traditionnelles marocaines conquièrent les cuisines du monde et inspirent les chefs internationaux.",
      image: "https://images.pixabay.com/photo/2017/02/15/10/39/spices-2068441_1280.jpg?w=400&h=250&fit=crop",
      author: "Mohamed Tazi",
      publishDate: "2024-01-03",
      readTime: "7 min",
      category: "Tendances Culinaires",
      tags: ["Épices", "International", "Export"]
    },
    {
      id: 7,
      title: "La Renaissance des Douars Gastronomiques dans l\'Atlas",
      excerpt: "Découverte des initiatives qui transforment les villages de montagne en destinations culinaires authentiques et durables.",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=250&fit=crop",
      author: "Laila Benjelloun",
      publishDate: "2024-01-01",
      readTime: "9 min",
      category: "Patrimoine Gastronomique",
      tags: ["Atlas", "Tourisme Rural", "Authenticité"]
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les Articles', count: articles.length + 1 },
    { id: 'portraits', name: 'Portraits de Chefs', count: 2 },
    { id: 'tendances', name: 'Tendances Culinaires', count: 2 },
    { id: 'patrimoine', name: 'Patrimoine Gastronomique', count: 2 },
    { id: 'actualites', name: 'Actualités Restaurants', count: 1 }
  ];

  const recentNews = [
    {
      id: 8,
      title: "Le Festival Gastronomique de Fès annonce sa programmation 2024",
      publishDate: "2024-01-14",
      category: "Événements"
    },
    {
      id: 9,
      title: "Nouveau partenariat entre l\'Institut Culinaire de Rabat et Le Cordon Bleu",
      publishDate: "2024-01-13",
      category: "Formation"
    },
    {
      id: 10,
      title: "Les restaurants marocains brillent aux World Culinary Awards",
      publishDate: "2024-01-11",
      category: "Récompenses"
    }
  ];

  useEffect(() => {
    let filtered = articles;
    
    if (selectedCategory !== 'all') {
      const categoryMap = {
        'portraits': 'Portraits de Chefs',
        'tendances': 'Tendances Culinaires',
        'patrimoine': 'Patrimoine Gastronomique',
        'actualites': 'Actualités Restaurants'
      };
      filtered = articles.filter(article => article.category === categoryMap[selectedCategory]);
    }

    if (searchQuery) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredArticles(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24 pb-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-800 rounded-full flex items-center justify-center shadow-warm">
                <Icon name="Newspaper" size={32} className="text-white" />
              </div>
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              L’Artisanat Marocain : Tradition et Excellence
            </h1>
            <p className="text-xl lg:text-2xl text-text-secondary mb-8 leading-relaxed">
              L’art et la passion au service d’une culture riche et authentique.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} />
                <span>Journalistes spécialisés</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span>Expertise reconnue</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} />
                <span>Couverture nationale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Icon 
                name="Search" 
                size={20} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
              />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {selectedCategory === 'all' && !searchQuery && (
              <div className="mb-12">
                <FeaturedArticle article={featuredArticle} />
              </div>
            )}

            {/* Articles Grid */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-text-primary">
                  {selectedCategory === 'all' ? 'Derniers Articles' : categories.find(cat => cat.id === selectedCategory)?.name}
                </h2>
                <div className="text-sm text-text-secondary">
                  {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''}
                </div>
              </div>

              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Icon name="FileText" size={48} className="text-text-secondary mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-text-primary mb-2">
                    Aucun article trouvé
                  </h3>
                  <p className="text-text-secondary">
                    Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
                  </p>
                </div>
              )}
            </div>

            {/* Load More Button */}
            {filteredArticles.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-accent hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105">
                  Charger plus d'articles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Newsletter Subscription */}
            <NewsletterSubscription />

            {/* Recent News */}
            <div className="bg-surface rounded-xl p-6 shadow-warm">
              <h3 className="font-serif text-xl font-bold text-text-primary mb-6 flex items-center">
                <Icon name="Zap" size={20} className="mr-2 text-accent" />
                Actualités Express
              </h3>
              <div className="space-y-4">
                {recentNews.map((news) => (
                  <div key={news.id} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <h4 className="font-medium text-text-primary mb-2 leading-snug hover:text-primary transition-colors duration-300 cursor-pointer">
                      {news.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <span className="bg-primary-100 text-primary px-2 py-1 rounded-full">
                        {news.category}
                      </span>
                      <span>{new Date(news.publishDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Share */}
            <SocialShare />

            {/* Popular Tags */}
            <div className="bg-surface rounded-xl p-6 shadow-warm">
              <h3 className="font-serif text-xl font-bold text-text-primary mb-6 flex items-center">
                <Icon name="Hash" size={20} className="mr-2 text-secondary" />
                Tags Populaires
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Chef Interview', 'Innovation', 'Tradition', 'Street Food', 'Pâtisserie', 'Épices', 'Atlas', 'Marrakech', 'Casablanca', 'Fès'].map((tag) => (
                  <button
                    key={tag}
                    className="bg-background hover:bg-primary-50 text-text-secondary hover:text-primary px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border border-border hover:border-primary"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-surface rounded-xl p-6 shadow-warm">
              <h3 className="font-serif text-xl font-bold text-text-primary mb-6 flex items-center">
                <Icon name="ExternalLink" size={20} className="mr-2 text-accent" />
                Liens Utiles
              </h3>
              <div className="space-y-3">
                <Link 
                  to="/restaurants-discovery-hub"
                  className="flex items-center text-text-secondary hover:text-primary transition-colors duration-300 group"
                >
                  <Icon name="UtensilsCrossed" size={16} className="mr-3 group-hover:text-primary" />
                  <span className="text-sm font-medium">Découvrir les Restaurants</span>
                </Link>
                <Link 
                  to="/guides-r-gionaux-regional-discovery"
                  className="flex items-center text-text-secondary hover:text-primary transition-colors duration-300 group"
                >
                  <Icon name="MapPin" size={16} className="mr-3 group-hover:text-primary" />
                  <span className="text-sm font-medium">Guides Régionaux</span>
                </Link>
                <Link 
                  to="/v-nements-culinaires-events-calendar"
                  className="flex items-center text-text-secondary hover:text-primary transition-colors duration-300 group"
                >
                  <Icon name="Calendar" size={16} className="mr-3 group-hover:text-primary" />
                  <span className="text-sm font-medium">Événements Culinaires</span>
                </Link>
                <Link 
                  to="/critiques-notes-rating-system"
                  className="flex items-center text-text-secondary hover:text-primary transition-colors duration-300 group"
                >
                  <Icon name="Star" size={16} className="mr-3 group-hover:text-primary" />
                  <span className="text-sm font-medium">Critiques & Notes</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
            Restez Informé de l'Actualité Culinaire
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Recevez nos derniers articles et analyses directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="bg-secondary hover:bg-secondary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActualitesGastronomiquesEditorialHub;