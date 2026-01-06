import React from 'react';
import ReactMarkdown from 'react-markdown';
import { TimelineEvent } from '../types';
import { ClayCard, ClayButton } from './ClayCard';

interface DocumentationViewProps {
  activeEvent: TimelineEvent;
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const DocumentationView: React.FC<DocumentationViewProps> = ({ 
  activeEvent, 
  onNext, 
  onPrev,
  onHome,
  hasNext,
  hasPrev 
}) => {
  return (
    <div className="w-full h-full flex flex-col animate-slide-in p-4 md:p-8">
      {/* Reader Container */}
      <ClayCard className="flex-1 flex flex-col overflow-hidden relative !rounded-[2rem] !shadow-none border-none ring-1 ring-white/50 dark:ring-white/10">
        
        {/* Fixed Header */}
        <div className="flex-none p-6 md:px-10 md:py-8 border-b border-clay-secondary/10 bg-clay-surface z-10 shadow-sm relative transition-colors duration-300">
          
          {/* Top Row: Meta & Controls */}
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 mb-6">
            
            {/* Meta Badges */}
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-full bg-clay-primary/10 text-clay-primary text-[10px] font-black tracking-widest uppercase shadow-sm border border-white/50 dark:border-white/10">
                {activeEvent.year}
              </span>
              <span className="text-[10px] font-bold text-clay-secondary uppercase tracking-widest hidden md:inline-block">
                Archive_Ref_{activeEvent.id}
              </span>
            </div>

            {/* Navigation Controls - Relocated to Header */}
            <div className="flex items-center gap-3 self-end md:self-auto">
              <ClayButton 
                variant="icon"
                onClick={onHome}
                className="!w-10 !h-10 !rounded-xl text-clay-secondary hover:text-clay-primary"
                title="Back to Start"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </ClayButton>

              <div className="w-px h-6 bg-clay-secondary/20 mx-1"></div>

              <ClayButton 
                variant="icon" 
                onClick={onPrev} 
                disabled={!hasPrev}
                className={`!w-10 !h-10 !rounded-xl ${!hasPrev ? 'opacity-50 cursor-not-allowed bg-clay-surface/50' : ''}`}
                aria-label="Previous Chapter"
              >
                ←
              </ClayButton>
              <ClayButton 
                variant="primary" 
                onClick={onNext} 
                className={`!py-2.5 !px-5 !text-xs !rounded-xl transition-all duration-300 ${!hasNext ? 'bg-clay-text !text-white hover:bg-black hover:scale-105' : ''}`}
              >
                {hasNext ? 'Next Module →' : 'Restart Archive ↺'}
              </ClayButton>
            </div>
          </div>

          <h1 className="text-2xl md:text-5xl font-black text-clay-text tracking-tight mb-3">
            {activeEvent.title}
          </h1>
          <p className="text-sm md:text-base text-clay-secondary font-medium max-w-3xl leading-relaxed">
            {activeEvent.content}
          </p>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto styled-scroll bg-clay-surface/30 p-6 md:p-10 transition-colors duration-300">
           <article className="
             prose prose-lg max-w-4xl mx-auto 
             prose-headings:font-black prose-headings:tracking-tight prose-headings:text-clay-text 
             prose-h1:text-4xl prose-h1:mb-8 prose-h1:text-clay-primary
             prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-clay-secondary/10 prose-h2:pb-2
             prose-h3:text-lg prose-h3:mt-6 prose-h3:uppercase prose-h3:tracking-widest prose-h3:text-clay-secondary
             /* UPDATED: Removed opacity from text-clay-text to ensure readability in dark mode */
             prose-p:text-clay-text prose-p:leading-8 prose-p:font-medium prose-p:mb-6
             prose-strong:text-clay-primary prose-strong:font-bold
             prose-li:text-clay-text prose-li:marker:text-clay-primary prose-li:font-medium
             prose-ul:list-disc prose-ul:pl-6 prose-ul:my-6 prose-ul:space-y-2
             prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-clay-text
             prose-blockquote:border-l-4 prose-blockquote:border-clay-primary prose-blockquote:bg-clay-inset/50 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-clay-secondary prose-blockquote:shadow-clay-inner-sm
             prose-hr:border-clay-secondary/20 prose-hr:my-10
             prose-a:text-clay-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline
           ">
            <ReactMarkdown>
              {activeEvent.detailedMarkdown}
            </ReactMarkdown>
           </article>
           
           {/* Spacer */}
           <div className="h-16" />
        </div>
      </ClayCard>
    </div>
  );
};
