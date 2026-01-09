import React from 'react';
import { ClayCard, ClayButton } from './ClayCard';

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-clay-primary">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 mr-3">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-3">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-3">
    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  </svg>
);

const ArrowUpRight = () => (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
)

export const InfoView: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto styled-scroll animate-slide-in">
      <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 pb-32">
        
        {/* Header */}
        <div className="text-center py-6">
           <h1 className="text-4xl md:text-5xl font-black text-clay-text tracking-tight mb-4">About This Project</h1>
           <p className="text-clay-secondary font-medium max-w-xl mx-auto">
             Archiving the history of Deep Learning through a modern, interactive lens.
           </p>
        </div>

        {/* Hero Image Section */}
        <div className="flex justify-center -mt-2 mb-4">
           <ClayCard className="p-3 bg-clay-surface rounded-[2.5rem]">
              {/* RATIO FIX: 3:2 Aspect Ratio. Mobile: w-72 h-48. Desktop: w-[36rem] h-[24rem]. */}
              <div className="w-72 h-48 md:w-[36rem] md:h-[24rem] rounded-[2rem] overflow-hidden shadow-clay-inner border border-white/50 dark:border-white/10 relative group">
                {/* Light Mode Image */}
                <img 
                   src="https://github.com/dovvnloading/Schmidhuber/blob/main/Gemini_Generated_Image_zfx4yjzfx4yjzfx4.png?raw=true" 
                   alt="Jürgen Schmidhuber" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 block dark:hidden"
                />
                
                {/* Dark Mode Image */}
                <img 
                   src="https://github.com/dovvnloading/Schmidhuber/blob/main/Gemini_Generated_Image_jqtc24jqtc24jqtc.png?raw=true" 
                   alt="Jürgen Schmidhuber" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 hidden dark:block"
                />

                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem] pointer-events-none" />
                
                {/* Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-clay-surface/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-white/40 flex items-center justify-center">
                   <span className="text-xs font-black text-clay-primary uppercase tracking-widest">Jürgen Schmidhuber</span>
                </div>
              </div>
           </ClayCard>
        </div>

        {/* Purpose Section */}
        <ClayCard className="p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-40 bg-clay-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <h2 className="text-2xl font-black text-clay-primary mb-6 tracking-tight flex items-center gap-3 relative z-10">
             <SparklesIcon />
             <span>Purpose & Dedication</span>
          </h2>
          {/* UPDATED CLASS: Added prose-strong:text-clay-primary to fix invisible bold text in dark mode */}
          <div className="prose prose-lg text-clay-text/80 dark:text-white prose-strong:text-clay-primary leading-relaxed font-medium relative z-10">
            <p>
              This interactive documentation was developed independently as a digital homage to the pioneering work of <strong>Jürgen Schmidhuber</strong>.
            </p>
            <p>
              Its primary mission is to illuminate the often-overlooked foundations of Deep Learning. This project is not intended to diminish or replace original academic sources, but rather to <strong>amplify and praise</strong> the monumental contributions made to the field of Artificial Intelligence. By presenting this history in an accessible, modern format, we hope to ensure these milestones are celebrated by a new generation of engineers and researchers.
            </p>
          </div>
        </ClayCard>

        {/* Citations & Sources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ClayCard variant="inset" className="p-6 md:p-8 space-y-6">
             <h3 className="text-sm font-black text-clay-secondary uppercase tracking-widest mb-4">Primary Sources</h3>
             
             <a href="https://people.idsia.ch/~juergen/deep-learning-history.html" target="_blank" rel="noopener noreferrer" className="block group">
                 <ClayCard variant="surface" className="p-4 flex items-center justify-between group-hover:scale-[1.02] group-hover:bg-white/40 dark:group-hover:bg-white/5 transition-all">
                    <div>
                       <div className="text-[10px] font-bold text-clay-primary uppercase tracking-wider mb-1">Original Archive</div>
                       <div className="font-bold text-clay-text text-sm">Deep Learning History 1990-1991</div>
                    </div>
                    <span className="text-clay-secondary opacity-50 group-hover:opacity-100"><ArrowUpRight/></span>
                 </ClayCard>
              </a>

              <a href="https://people.idsia.ch/~juergen/most-cited-neural-nets.html" target="_blank" rel="noopener noreferrer" className="block group">
                 <ClayCard variant="surface" className="p-4 flex items-center justify-between group-hover:scale-[1.02] group-hover:bg-white/40 dark:group-hover:bg-white/5 transition-all">
                     <div>
                       <div className="text-[10px] font-bold text-clay-secondary uppercase tracking-wider mb-1">Additional Context</div>
                       <div className="font-bold text-clay-text text-sm">Most Cited Neural Networks</div>
                    </div>
                    <span className="text-clay-secondary opacity-50 group-hover:opacity-100"><ArrowUpRight/></span>
                 </ClayCard>
              </a>
          </ClayCard>

          <ClayCard variant="inset" className="p-6 md:p-8 space-y-6">
             <h3 className="text-sm font-black text-clay-secondary uppercase tracking-widest mb-4">Connect</h3>
             
             <a href="https://x.com/SchmidhuberAI" target="_blank" rel="noopener noreferrer" className="block group">
                 <ClayCard variant="surface" className="p-4 flex items-center justify-between group-hover:scale-[1.02] group-hover:bg-white/40 dark:group-hover:bg-white/5 transition-all">
                     <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                          </svg>
                       </div>
                       <div>
                         <div className="text-[10px] font-bold text-clay-secondary uppercase tracking-wider mb-0.5">Author</div>
                         <div className="font-bold text-clay-text text-sm">@SchmidhuberAI</div>
                       </div>
                    </div>
                    <span className="text-clay-secondary opacity-50 group-hover:opacity-100"><ArrowUpRight/></span>
                 </ClayCard>
              </a>
          </ClayCard>
        </div>

        {/* Developer Credits */}
        <ClayCard className="p-8 md:p-10 flex flex-col items-center text-center">
           <h2 className="text-sm font-black text-clay-secondary uppercase tracking-widest mb-6">App Development & Design</h2>
           
           <div className="mb-6">
              <h3 className="text-3xl font-black text-clay-text mb-1">Matthew Robert Wesney</h3>
              <p className="text-clay-primary font-bold">Frontend Engineer & Designer</p>
           </div>
                 
           <div className="flex flex-wrap justify-center gap-4 w-full max-w-lg">
              <a href="https://matt-wesney.github.io/website/" target="_blank" rel="noreferrer" className="flex-1 min-w-[120px]">
                <ClayButton variant="default" className="w-full !text-base !py-4">
                   <GlobeIcon /> Portfolio
                </ClayButton>
              </a>
              <a href="https://github.com/dovvnloading" target="_blank" rel="noreferrer" className="flex-1 min-w-[120px]">
                <ClayButton variant="default" className="w-full !text-base !py-4">
                   <GithubIcon /> Github
                </ClayButton>
              </a>
              <a href="https://x.com/D3VAUX" target="_blank" rel="noreferrer" className="flex-1 min-w-[120px]">
                <ClayButton variant="default" className="w-full !text-base !py-4">
                   <XIcon /> @D3VAUX
                </ClayButton>
              </a>
           </div>
        </ClayCard>

      </div>
    </div>
  );
};
