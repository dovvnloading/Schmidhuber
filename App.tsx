import React, { useState, useEffect } from 'react';
import { HISTORY_DATA } from './content/index';
import { TabView, TimelineEvent } from './types';
import { TabNavigation } from './components/TabNavigation';
import { TimelineView } from './components/TimelineView';
import { DocumentationView } from './components/DocumentationView';
import { InfoView } from './components/InfoView';
import { ClayButton } from './components/ClayCard';

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
          
          <div className="flex items-center gap-4">
             {/* Tabs - Centered/Right */}
            <div className="hidden md:block">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Dark Mode Toggle */}
            <ClayButton variant="icon" onClick={toggleTheme} className="!w-12 !h-12 !rounded-xl" title="Toggle Theme">
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-yellow-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-clay-secondary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </ClayButton>
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
