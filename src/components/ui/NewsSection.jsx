import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: "L\'Art de la Pastilla Revisité par les Chefs Contemporains",
      excerpt: `Découvrez comment les grands chefs marocains réinventent ce plat emblématique en y apportant leur touche personnelle tout en respectant les traditions ancestrales. Une exploration culinaire fascinante entre heritage et innovation.`,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      author: "Fatima Zahra Benali",
      date: "15 Décembre 2024",
      category: "Tradition & Innovation",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Ouverture Exceptionnelle : Le Jardin Secret à Fès",
      excerpt: `Le nouveau restaurant du Chef Youssef Akram ouvre ses portes dans un riad du 18ème siècle entièrement restauré. Une cuisine marocaine raffinée dans un cadre d'exception qui promet de redéfinir la gastronomie fassi.`,
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?w=600&h=400&fit=crop",
      author: "Mohammed Tazi",
      date: "12 Décembre 2024",
      category: "Ouvertures",
      readTime: "3 min"
    },
    {
      id: 3,
      title: "Les Vins Marocains à l\'Honneur : Rencontre avec les Vignerons",
      excerpt: `Portrait des vignerons qui font rayonner le terroir marocain à l'international. De Meknès aux coteaux de l'Atlas, découvrez les cépages qui accompagnent parfaitement notre gastronomie nationale.`,
      image: "https://images.pixabay.com/photo/2016/10/22/20/34/wine-1761613_1280.jpg?w=600&h=400&fit=crop",
      author: "Aicha Bennani",
      date: "10 Décembre 2024",
      category: "Vins & Accords",
      readTime: "7 min"
    },
    {
      id: 4,
      title: "Festival Gastronomique de Marrakech : Bilan d\'une Édition Exceptionnelle",
      excerpt: `Retour sur les temps forts du festival qui a réuni les plus grands chefs du royaume et d'ailleurs. Démonstrations, dégustations et rencontres ont marqué cette édition dédiée aux saveurs d'exception.`,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      author: "Karim Alaoui",
      date: "8 Décembre 2024",
      category: "Événements",
      readTime: "4 min"
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