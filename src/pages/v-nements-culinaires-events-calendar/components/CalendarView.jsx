import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const CalendarView = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const getEventsForDate = (date) => {
    if (!date) return [];
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const days = getDaysInMonth(currentDate);
  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  const getEventTypeColor = (type) => {
    const colors = {
      'restaurant-opening': 'bg-accent',
      'food-festival': 'bg-secondary',
      'wine-tasting': 'bg-primary',
      'chef-event': 'bg-success',
      'cultural': 'bg-warning'
    };
    return colors[type] || 'bg-accent';
  };

  return (
    <div className="bg-white rounded-2xl shadow-warm overflow-hidden">
      {/* Calendar Header */}
      <div className="bg-gradient-to-r from-primary to-primary-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-serif font-bold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-300"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              Aujourd'hui
            </button>
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-300"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-1">
          {dayNames.map((day) => (
            <div key={day} className="text-center py-2 text-sm font-medium text-white/80">
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        <div className="grid grid-cols-7 gap-1 mb-6">
          {days.map((date, index) => {
            const dayEvents = date ? getEventsForDate(date) : [];
            const hasEvents = dayEvents.length > 0;

            return (
              <div
                key={index}
                className={`
                  aspect-square p-2 border border-border-light rounded-lg cursor-pointer
                  transition-all duration-300 hover:shadow-sm relative
                  ${date ? 'hover:bg-surface' : ''}
                  ${isToday(date) ? 'bg-primary-50 border-primary' : ''}
                  ${isSelected(date) ? 'bg-primary text-white' : ''}
                  ${!date ? 'cursor-default' : ''}
                `}
                onClick={() => date && setSelectedDate(date)}
              >
                {date && (
                  <>
                    <div className={`text-sm font-medium ${isSelected(date) ? 'text-white' : 'text-text-primary'}`}>
                      {date.getDate()}
                    </div>
                    
                    {hasEvents && (
                      <div className="absolute bottom-1 left-1 right-1">
                        <div className="flex space-x-1 justify-center">
                          {dayEvents.slice(0, 3).map((event, eventIndex) => (
                            <div
                              key={eventIndex}
                              className={`w-1.5 h-1.5 rounded-full ${getEventTypeColor(event.type)}`}
                              title={event.title}
                            />
                          ))}
                          {dayEvents.length > 3 && (
                            <div className="w-1.5 h-1.5 rounded-full bg-text-secondary" />
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Date Events */}
        {selectedDate && (
          <div className="border-t border-border pt-6">
            <h3 className="text-lg font-serif font-semibold text-text-primary mb-4">
              Événements du {selectedDate.toLocaleDateString('fr-FR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </h3>

            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="bg-surface rounded-lg p-4 hover:shadow-sm transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-3 h-3 rounded-full ${getEventTypeColor(event.type)} mt-2 flex-shrink-0`} />
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary mb-1">{event.title}</h4>
                        <p className="text-sm text-accent mb-2">{event.subtitle}</p>
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={14} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Building" size={14} />
                            <span>{event.venue}</span>
                          </div>
                          {event.ticketPrice && (
                            <div className="flex items-center space-x-1">
                              <Icon name="Ticket" size={14} />
                              <span>{event.ticketPrice}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-primary hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors duration-300">
                        Voir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Icon name="Calendar" size={48} className="text-text-secondary mx-auto mb-4" />
                <p className="text-text-secondary">Aucun événement prévu pour cette date.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="bg-surface px-6 py-4 border-t border-border">
        <h4 className="text-sm font-semibold text-text-primary mb-3">Légende des événements</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-text-secondary">Ouvertures</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <span className="text-text-secondary">Festivals</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-text-secondary">Dégustations</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-success" />
            <span className="text-text-secondary">Événements Chef</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-warning" />
            <span className="text-text-secondary">Culturels</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;