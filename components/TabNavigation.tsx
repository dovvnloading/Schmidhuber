import React from 'react';
import { TabView } from '../types';

interface TabNavigationProps {
  activeTab: TabView;
  onTabChange: (tab: TabView) => void;
  fullWidth?: boolean;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange, fullWidth }) => {
  return (
    <div className={`
      p-1.5 bg-clay-inset rounded-2xl shadow-clay-inner flex gap-2
      ${fullWidth ? 'w-full' : 'w-auto'}
    `}>
      {[
        { id: TabView.DOCS, label: 'READER' },
        { id: TabView.TIMELINE, label: 'MODULES' },
        { id: TabView.INFO, label: 'INFO' }
      ].map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              relative py-2.5 px-6 rounded-xl text-xs font-black tracking-widest transition-all duration-300
              ${fullWidth ? 'flex-1' : ''}
              ${isActive 
                ? 'bg-clay-surface text-clay-primary shadow-clay-sm border-t border-l border-white/60' 
                : 'text-clay-secondary hover:text-clay-text opacity-70 hover:opacity-100'}
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};