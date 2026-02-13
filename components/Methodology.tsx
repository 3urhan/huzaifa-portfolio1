
import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    { number: '1', title: 'Free Audit', desc: 'I analyze your site\'s current status, identifying policy violations and content gaps.' },
    { number: '2', title: 'Implementation', desc: 'Fixing technical issues, optimizing ad layout, and improving mobile responsiveness.' },
    { number: '3', title: 'Verification', desc: 'Final check before submission to ensure all Google policies are met.' },
    { number: '4', title: 'Scaling', desc: 'Once approved, we focus on maximizing RPM through niche-specific strategies.' },
  ];

  return (
    <section className="py-24 bg-surface-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">Methodology</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Path to <span className="text-primary">AdSense Success</span></h2>
          <p className="text-gray-400 max-w-xl text-lg">A proven 4-step framework designed to take your blog from zero to monetization powerhouse.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="bg-surface-lighter p-8 rounded-lg border border-white/5 relative group hover:border-primary/30 transition-colors">
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center shadow-xl z-20">
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-icons-round">{idx % 2 === 0 ? 'search' : 'settings'}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
