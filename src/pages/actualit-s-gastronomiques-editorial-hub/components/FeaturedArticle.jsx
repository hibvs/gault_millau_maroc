import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const FeaturedArticle = ({ article }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#FFEB00] group">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 lg:h-full min-h-[400px]">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#FF0000] text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-md">
              Artisan Vedette
            </span>
          </div>
        </div>
        <div className="p-8 lg:p-12">
          <div className="mb-4">
            <span className="bg-[#FFEB00] text-black px-3 py-1.5 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-black mb-6 group-hover:text-[#FF0000] transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-700 mb-6">{article.excerpt}</p>
          <Link
            to={`/article/${article.id}`}
            className="inline-flex items-center space-x-2 bg-[#FF0000] text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
          >
            <span>Voir l’artisan</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

// Exemple d'article sur l'artisanat marocain
const articleMarocain = {
  id: 'artisan-marocain-01',
  title: 'Le Tissage Traditionnel Marocain : Un Héritage Vivant',
  image: 'https://www.histoires-sans-fin.fr/wp-content/uploads/2022/05/porterie-artisanat-maroc-tourisme-maroc.jpg',
  category: 'Artisanat Marocain',
  excerpt: 'Découvrez le savoir-faire ancestral des tisserands marocains, qui perpétuent des techniques uniques transmises de génération en génération.'
};

// Exemple d'utilisation
const FeaturedArticleWrapper = () => {
  return <FeaturedArticle article={articleMarocain} />;
};

export default FeaturedArticleWrapper;
