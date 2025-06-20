import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ArticleCard = ({ article }) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#FFEB00]">
      <div className="relative overflow-hidden h-48">
        <Image
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-3 left-3">
          <span className="bg-[#FFEB00] text-black px-2.5 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#FF0000] transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
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
        <div className="flex flex-wrap gap-1.5 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-[#FFEB00] text-black px-2 py-1 rounded-full text-xs font-medium border border-black"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/article/${article.id}`}
          className="inline-flex items-center space-x-2 text-[#FF0000] hover:text-black font-medium text-sm"
        >
          <span>Découvrir</span>
          <Icon name="ArrowRight" size={14} />
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
