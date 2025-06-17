import React from 'react';
import Icon from 'components/AppIcon';

const StatsSection = ({ stats }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-warm group-hover:shadow-warm-lg transition-all duration-300 group-hover:scale-110">
                <Icon name={stat.icon} size={28} className="text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base font-medium text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;