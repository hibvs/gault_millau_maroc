import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const FeaturedArticle = ({ article }) => {
  return (
    <article className="bg-surface rounded-2xl overflow-hidden shadow-warm-lg hover:shadow-xl transition-all duration-500 group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative overflow-hidden h-64 lg:h-full min-h-[400px]">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-accent text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-warm">
              Article Vedette
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center space-x-4 text-white text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="User" size={16} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-4">
            <span className="bg-primary-100 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-text-primary mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
            {article.title}
          </h2>
          
          <div className="text-text-secondary mb-8 leading-relaxed">
            <p className="mb-4">{article.excerpt}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Calendar" size={16} />
              <span>{new Date(article.publishDate).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            
            <Link
              to={`/article/${article.id}`}
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-warm transform hover:scale-105"
            >
              <span>Lire l'article</span>
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>

          {/* Tags */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-background text-text-secondary px-3 py-1 rounded-full text-xs font-medium border border-border hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;