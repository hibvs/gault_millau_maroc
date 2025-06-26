import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const NewsSection = () => {
const newsArticles = [
  {
    id: 1,
    title: "Tajine à la Truffe : Quand la Tradition Rencontre le Luxe",
    excerpt: `Un jeune chef casablancais marie truffe noire et tajine de veau pour séduire les gastronomes en quête d'excellence. Une réinterprétation audacieuse du plat emblématique.`,
    image: "https://img.fourchette-et-bikini.fr/660x495/2025/02/21/i50764-tajine-minceur.jpg",
    author: "Samira Lahlou",
    date: "10 Juin 2025",
    category: "Tradition & Innovation",
    readTime: "6 min"
  },
  {
    id: 2,
    title: "Ouverture : La Table du Riad Yasmina à Marrakech",
    excerpt: `Un nouveau joyau culinaire s’installe dans la médina. Le chef Mehdi Bouzid y propose une cuisine marocaine revisitée dans un décor intimiste.`,
    image: "https://www.riad-yasmine.com/wp-content/uploads/2018/02/PATIO-1024x664.jpg",
    author: "Omar Hachem",
    date: "6 Juin 2025",
    category: "Ouvertures",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "Rencontre avec les Vignerons de Benslimane",
    excerpt: `Découverte du domaine Ouled Thaleb et de ses cépages marocains qui conquièrent les grandes tables de Paris et Casablanca.`,
    image: "https://media-viniou.s3.eu-west-3.amazonaws.com/image-region/vins/maroc/benslimane-800x256.png",
    author: "Salma Berrada",
    date: "3 Juin 2025",
    category: "Vins & Accords",
    readTime: "5 min"
  },
  {
    id: 4,
    title: "Retour sur le Festival Saveurs du Sud à Agadir",
    excerpt: `Le grand rendez-vous des gourmets au sud du royaume a réuni producteurs, chefs étoilés et artisans du goût pour célébrer les produits locaux.`,
    image: "https://premiumtravelnews.com/wp-content/uploads/2024/04/IMG_7039.jpeg",
    author: "Yasmine Amrani",
    date: "1 Juin 2025",
    category: "Événements",
    readTime: "3 min"
  }
];


  const categories = [
    { name: "Tradition & Innovation", color: "bg-primary" },
    { name: "Ouvertures", color: "bg-accent" },
    { name: "Vins & Accords", color: "bg-secondary" },
    { name: "Événements", color: "bg-success" }
  ];

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : "bg-primary";
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center mr-4">
              <Icon name="Newspaper" size={24} className="text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-primary">
              Actualités Gastronomiques
            </h2>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Restez informé des dernières tendances, ouvertures et événements qui façonnent la scène culinaire marocaine
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-warm-lg overflow-hidden border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${getCategoryColor(newsArticles[0].category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {newsArticles[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-4 leading-tight">
                    {newsArticles[0].title}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    {newsArticles[0].excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-text-secondary mb-6">
                  <div className="flex items-center">
                    <Icon name="User" size={16} className="mr-2" />
                    <span className="font-medium">{newsArticles[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Icon name="Calendar" size={16} className="mr-1" />
                      {newsArticles[0].date}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {newsArticles[0].readTime}
                    </div>
                  </div>
                </div>
                <Link
                  to="/actualit-s-gastronomiques-editorial-hub"
                  className="inline-flex items-center text-primary hover:text-primary-600 font-semibold transition-colors duration-300"
                >
                  Lire l'article complet
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsArticles.slice(1).map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-warm hover:shadow-warm-lg transition-all duration-300 overflow-hidden border border-border group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`${getCategoryColor(article.category)} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-text-primary mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {article.excerpt.substring(0, 120)}...
                </p>
                <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                  <span className="font-medium">{article.author}</span>
                  <div className="flex items-center space-x-3">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Link
                  to="/actualit-s-gastronomiques-editorial-hub"
                  className="inline-flex items-center text-primary hover:text-primary-600 font-medium text-sm transition-colors duration-300"
                >
                  Lire la suite
                  <Icon name="ArrowRight" size={14} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/actualit-s-gastronomiques-editorial-hub"
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-warm transform hover:scale-105"
          >
            <Icon name="Newspaper" size={20} className="mr-3" />
            Toutes les Actualités
            <Icon name="ArrowRight" size={20} className="ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;