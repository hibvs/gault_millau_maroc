import React from 'react';
import Icon from 'components/AppIcon';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const getCategoryIcon = (categoryId) => {
    const iconMap = {
      all: 'Grid3X3',
      poterie: 'Package',
      tissage: 'Layers',
      cuir: 'Briefcase',
      bois: 'Hammer',
    };
    return iconMap[categoryId] || 'Star';
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all
            ${selectedCategory === category.id
              ? 'bg-[#FF0000] text-white shadow-md'
              : 'bg-white text-black border border-[#FFEB00] hover:bg-[#FFEB00] hover:text-black'
            }
          `}
        >
          <Icon name={getCategoryIcon(category.id)} size={16} />
          <span>{category.name}</span>
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-black text-white">
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
