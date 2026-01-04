import React, { useState } from 'react';
import { HISTORY_DATA } from './content/index';
import { TabView, TimelineEvent } from './types';
import { TabNavigation } from './components/TabNavigation';
import { TimelineView } from './components/TimelineView';
import { DocumentationView } from './components/DocumentationView';
import { InfoView } from './components/InfoView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>(TabView.DOCS);
  const [activeEventId, setActiveEventId] = useState<string>(HISTORY_DATA[0].id);

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
      <div className="w-full h-full max-w-6xl max-h-[900px] bg-clay-surface rounded-[2rem] shadow-clay-xl border border-white/40 flex flex-col overflow-hidden relative">
        
        {/* Top Bar / Header */}
        <div className="flex-none h-28 px-6 md:px-10 flex items-center justify-between bg-clay-surface z-20 border-b border-white/20">
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
          
          {/* Tabs - Centered/Right */}
          <div className="hidden md:block">
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </div>

        {/* Mobile Tab Bar (Bottom of Header) */}
        <div className="md:hidden flex-none px-6 py-2 bg-clay-surface border-b border-white/20 z-10">
           <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} fullWidth />
        </div>

        {/* Content Area - THE ONLY PLACE SCROLLING HAPPENS */}
        <div className="flex-1 min-h-0 relative overflow-hidden bg-clay-inset rounded-b-[2rem] shadow-clay-inner">
            
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