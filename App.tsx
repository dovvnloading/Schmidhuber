import React, { useState, useEffect } from 'react';
import { HISTORY_DATA } from './content/index';
import { TabView, TimelineEvent } from './types';
import { TabNavigation } from './components/TabNavigation';
import { TimelineView } from './components/TimelineView';
import { DocumentationView } from './components/DocumentationView';
import { InfoView } from './components/InfoView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.DOCS);
  const [activeEventId, setActiveEventId] = useState<string>(HISTORY_DATA[0].id);
  
  // FIXED: Initialize state based on localStorage or OS preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check localStorage first
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Fallback to DOM class check (set by index.html script) or OS preference
      return document.documentElement.classList.contains('dark') || 
             (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Sync state with DOM and localStorage on updates
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const activeEvent = HISTORY_DATA.find(e => e.id === activeEventId) || HISTORY_DATA[0];

  const handleEventSelect = (event: TimelineEvent) => {
    setActiveEventId(event.id);
    setActiveTab(TabView.DOCS);
  };

  const handleNext = () => {
    const idx = HISTORY_DATA.findIndex(e => e.id === activeEventId);
    if (idx < HISTORY_DATA.length - 1) {
      setActiveEventId(HISTORY_DATA[idx + 1].id);
    } else {
      // Cycle back to beginning
      setActiveEventId(HISTORY_DATA[0].id);
    }
  };

  const handlePrev = () => {
    const idx = HISTORY_DATA.findIndex(e => e.id === activeEventId);
    if (idx > 0) {
      setActiveEventId(HISTORY_DATA[idx - 1].id);
    }
  };

  const handleHome = () => {
    setActiveEventId(HISTORY_DATA[0].id);
    setActiveTab(TabView.DOCS);
  };

  return (
    <div className="flex-1 w-full h-full p-2 md:p-8 flex items-center justify-center">
      
      {/* MAIN CONTAINER - FIXED MAX DIMENSIONS - NEVER SCROLLS ITSELF */}
      <div className="w-full h-full max-w-6xl max-h-[900px] bg-clay-surface rounded-[1.5rem] md:rounded-[2rem] shadow-clay-xl border border-white/40 dark:border-white/10 flex flex-col overflow-hidden relative transition-colors duration-300">
        
        {/* Top Bar / Header */}
        <div className="flex-none h-20 md:h-28 px-5 md:px-10 flex items-center justify-between bg-clay-surface z-20 border-b border-white/20 dark:border-white/5 transition-colors duration-300 gap-2">
          <div 
            className="flex items-center gap-3 md:gap-6 cursor-pointer group min-w-0"
            onClick={handleHome}
            title="Return Home"
          >
            <div className="min-w-0">
              <h1 className="text-xl md:text-3xl font-black text-clay-text tracking-tight leading-none group-hover:text-clay-primary transition-colors truncate">NEURO_HIST</h1>
              <span className="text-[10px] md:text-xs font-bold text-clay-secondary tracking-widest uppercase whitespace-nowrap">Schmidhuber Archive v2.0</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-6 flex-shrink-0">
             {/* Tabs - Centered/Right (Desktop Only) */}
            <div className="hidden md:block">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Custom Industrial Toggle Switch */}
            <div 
              className="w-16 h-8 md:w-20 md:h-10 bg-clay-inset rounded-full relative cursor-pointer shadow-clay-inner-sm transition-colors duration-300 group flex-shrink-0"
              onClick={toggleTheme}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {/* Icons Track */}
              <div className="absolute inset-0 flex items-center justify-between px-2 md:px-2.5">
                {/* Light Icon (Geometric Aperture) */}
                <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4 text-clay-secondary opacity-60">
                   <circle cx="12" cy="12" r="3" fill="currentColor" />
                   <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 4v2M12 18v2M4 12h2M18 12h2" />
                </svg>
                
                {/* Dark Icon (Clean Geometric Crescent) */}
                <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-4 md:h-4 text-clay-secondary opacity-60">
                   <path fill="currentColor" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>

              {/* Sliding Puck */}
              <div 
                className={`
                  absolute top-1 md:top-1 w-6 h-6 md:w-8 md:h-8 bg-clay-surface rounded-full shadow-clay-sm 
                  border-t border-l border-white/40 dark:border-white/10
                  transition-all duration-300 ease-out flex items-center justify-center
                  ${isDark ? 'translate-x-[36px] md:translate-x-[42px]' : 'translate-x-1'}
                `}
              >
                 {/* Active State Icon Indicator */}
                 {isDark ? (
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-clay-primary shadow-[0_0_8px_rgba(var(--clay-primary),0.6)]"></div>
                 ) : (
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]"></div>
                 )}
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Tab Bar (Bottom of Header) */}
        <div className="md:hidden flex-none px-4 py-2 bg-clay-surface border-b border-white/20 dark:border-white/5 z-10 transition-colors duration-300">
           <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} fullWidth />
        </div>

        {/* Content Area - THE ONLY PLACE SCROLLING HAPPENS */}
        <div className="flex-1 min-h-0 relative overflow-hidden bg-clay-inset rounded-b-[1.5rem] md:rounded-b-[2rem] shadow-clay-inner transition-colors duration-300">
            
            {/* Viewport for Views */}
            <div className="absolute inset-0">
                
                {activeTab === TabView.TIMELINE && (
                    <TimelineView 
                        events={HISTORY_DATA}
                        onSelectEvent={handleEventSelect}
                        selectedEventId={activeEventId}
                    />
                )}

                {activeTab === TabView.DOCS && (
                    <DocumentationView 
                        activeEvent={activeEvent}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        onHome={handleHome}
                        hasNext={HISTORY_DATA.findIndex(e => e.id === activeEventId) < HISTORY_DATA.length - 1}
                        hasPrev={HISTORY_DATA.findIndex(e => e.id === activeEventId) > 0}
                    />
                )}

                {activeTab === TabView.INFO && (
                    <InfoView />
                )}

            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
