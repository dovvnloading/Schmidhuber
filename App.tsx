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
  const [isDark, setIsDark] = useState(false);

  // Initial Theme Check
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
    <div className="flex-1 w-full h-full p-4 md:p-8 flex items-center justify-center">
      
      {/* MAIN CONTAINER - FIXED MAX DIMENSIONS - NEVER SCROLLS ITSELF */}
      <div className="w-full h-full max-w-6xl max-h-[900px] bg-clay-surface rounded-[2rem] shadow-clay-xl border border-white/40 dark:border-white/10 flex flex-col overflow-hidden relative transition-colors duration-300">
        
        {/* Top Bar / Header */}
        <div className="flex-none h-28 px-6 md:px-10 flex items-center justify-between bg-clay-surface z-20 border-b border-white/20 dark:border-white/5 transition-colors duration-300">
          <div 
            className="flex items-center gap-6 cursor-pointer group"
            onClick={handleHome}
            title="Return Home"
          >
            <div>
              <h1 className="text-3xl font-black text-clay-text tracking-tight leading-none group-hover:text-clay-primary transition-colors">NEURO_HIST</h1>
              <span className="text-xs font-bold text-clay-secondary tracking-widest uppercase">Schmidhuber Archive v2.0</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
             {/* Tabs - Centered/Right */}
            <div className="hidden md:block">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Custom Industrial Toggle Switch */}
            <div 
              className="w-20 h-10 bg-clay-inset rounded-full relative cursor-pointer shadow-clay-inner-sm transition-colors duration-300 group"
              onClick={toggleTheme}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {/* Icons Track */}
              <div className="absolute inset-0 flex items-center justify-between px-2.5">
                {/* Light Icon (Geometric Aperture) */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-clay-secondary opacity-60">
                   <circle cx="12" cy="12" r="3" fill="currentColor" />
                   <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 4v2M12 18v2M4 12h2M18 12h2" />
                </svg>
                
                {/* Dark Icon (Geometric Eclipse) */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-clay-secondary opacity-60">
                   <path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-1.2 2.66 5.39 5.39 0 0 1-7.61 7.61 5.389 5.389 0 0 1-2.66-1.2c-.44-.06-.9-.1-1.36-.1z" />
                </svg>
              </div>

              {/* Sliding Puck */}
              <div 
                className={`
                  absolute top-1 w-8 h-8 bg-clay-surface rounded-full shadow-clay-sm 
                  border-t border-l border-white/40 dark:border-white/10
                  transition-all duration-300 ease-out flex items-center justify-center
                  ${isDark ? 'translate-x-[42px]' : 'translate-x-1'}
                `}
              >
                 {/* Active State Icon Indicator */}
                 {isDark ? (
                    <div className="w-2 h-2 rounded-full bg-clay-primary shadow-[0_0_8px_rgba(var(--clay-primary),0.6)]"></div>
                 ) : (
                    <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]"></div>
                 )}
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Tab Bar (Bottom of Header) */}
        <div className="md:hidden flex-none px-6 py-2 bg-clay-surface border-b border-white/20 dark:border-white/5 z-10 transition-colors duration-300">
           <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} fullWidth />
        </div>

        {/* Content Area - THE ONLY PLACE SCROLLING HAPPENS */}
        <div className="flex-1 min-h-0 relative overflow-hidden bg-clay-inset rounded-b-[2rem] shadow-clay-inner transition-colors duration-300">
            
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
