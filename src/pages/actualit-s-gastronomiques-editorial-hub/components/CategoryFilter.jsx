import React from 'react';
import Icon from 'components/AppIcon';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const getCategoryIcon = (categoryId) => {
    const iconMap = {
      'all': 'Grid3X3',
      'portraits': 'Users',
      'tendances': 'TrendingUp',
      'patrimoine': 'Landmark',
      'actualites': 'Newspaper'
    };
    return iconMap[categoryId] || 'FileText';
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
            ${selectedCategory === category.id
              ? 'bg-primary text-white shadow-warm'
              : 'bg-background text-text-secondary hover:text-primary hover:bg-primary-50 border border-border hover:border-primary'
            }
          `}
        >
          <Icon 
            name={getCategoryIcon(category.id)} 
            size={16} 
          />
          <span>{category.name}</span>
          <span className={`
            px-2 py-0.5 rounded-full text-xs font-medium
            ${selectedCategory === category.id
              ? 'bg-white/20 text-white' :'bg-text-secondary/10 text-text-secondary'
            }
          `}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;