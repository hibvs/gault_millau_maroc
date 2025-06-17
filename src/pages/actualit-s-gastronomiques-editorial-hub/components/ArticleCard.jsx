import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ArticleCard = ({ article }) => {
  return (
    <article className="bg-surface rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 group">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-white px-2.5 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-text-primary mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="User" size={14} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{article.readTime}</span>
            </div>
          </div>
          <span>{new Date(article.publishDate).toLocaleDateString('fr-FR')}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-background text-text-secondary px-2 py-1 rounded-full text-xs font-medium border border-border"
            >
              {tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="text-text-secondary text-xs px-2 py-1">
              +{article.tags.length - 3}
            </span>
          )}
        </div>

        {/* Read More Link */}
        <Link
          to={`/article/${article.id}`}
          className="inline-flex items-center space-x-2 text-primary hover:text-primary-600 font-medium text-sm transition-colors duration-300 group/link"
        >
          <span>Lire la suite</span>
          <Icon 
            name="ArrowRight" 
            size={14} 
            className="group-hover/link:translate-x-1 transition-transform duration-300" 
          />
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;