import React from 'react';
import { TimelineEvent } from '../types';
import { ClayCard } from './ClayCard';

interface TimelineViewProps {
  events: TimelineEvent[];
  onSelectEvent: (event: TimelineEvent) => void;
  selectedEventId?: string;
}

const getCategoryColor = (keyword: string) => {
  if (keyword.includes('math') || keyword.includes('calculus')) return 'bg-blue-400';
  if (keyword.includes('deep') || keyword.includes('network')) return 'bg-indigo-500';
  if (keyword.includes('vision') || keyword.includes('cnn')) return 'bg-purple-500';
  if (keyword.includes('physics')) return 'bg-amber-500';
  if (keyword.includes('future')) return 'bg-emerald-500';
  return 'bg-clay-secondary';
};

export const TimelineView: React.FC<TimelineViewProps> = ({ events, onSelectEvent, selectedEventId }) => {
  return (
    <div className="h-full w-full relative">
      <div 
        className="h-full w-full overflow-y-auto styled-scroll"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0px, black 20px, black calc(100% - 20px), transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 20px, black calc(100% - 20px), transparent 100%)'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 md:p-10 pb-32 pt-10">
          {events.map((event, index) => {
            const isSelected = selectedEventId === event.id;
            const catColor = getCategoryColor(event.imageKeyword);
            
            return (
              <div 
                key={event.id}
                onClick={() => onSelectEvent(event)}
                className="group cursor-pointer animate-pop-in relative hover:z-10"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <ClayCard 
                  variant={isSelected ? 'active' : 'surface'}
                  className={`
                    h-full p-5 flex flex-col justify-between transition-transform duration-300 
                    ${!isSelected && 'hover:-translate-y-2 hover:shadow-clay-xl'}
                    min-h-[220px]
                  `}
                >
                  {/* Header of Card */}
                  <div className="flex justify-between items-start mb-3">
                    <div className={`
                      text-3xl font-black tracking-tighter opacity-20 transition-colors duration-300
                      ${isSelected ? 'text-clay-primary' : 'text-clay-secondary'}
                    `}>
                      {event.year}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-clay-inset shadow-clay-inner flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full ${isSelected ? 'animate-pulse' : ''} ${catColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-clay-text leading-tight mb-2 group-hover:text-clay-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs text-clay-secondary leading-relaxed line-clamp-3 font-medium">
                      {event.content}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-5 pt-3 border-t border-clay-secondary/10 dark:border-white/10 flex items-center justify-between transition-colors duration-300">
                    <span className={`
                      text-[9px] font-bold uppercase tracking-widest transition-colors duration-300
                      ${isSelected ? 'text-clay-primary' : 'text-clay-secondary/60 dark:text-clay-secondary/50'}
                    `}>
                      Module {index + 1}
                    </span>
                    <span className={`text-[9px] font-bold ${isSelected ? 'text-clay-primary' : 'text-clay-secondary'} opacity-0 group-hover:opacity-100 transition-all uppercase tracking-wider`}>
                      Open →
                    </span>
                  </div>
                </ClayCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
