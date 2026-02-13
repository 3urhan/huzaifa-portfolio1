
import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: 'gpp_bad',
      title: 'Rejected Multiple Times?',
      desc: 'Tired of seeing "Low Value Content" or "Policy Violation" emails with zero explanation on how to fix it?'
    },
    {
      icon: 'trending_down',
      title: 'Stuck with Low RPM?',
      desc: 'Getting traffic but earning pennies? Poor ad placement and optimization are leaving money on the table.'
    },
    {
      icon: 'hourglass_empty',
      title: 'Waiting Months?',
      desc: 'Stuck in the "Getting Ready" loop for weeks? We speed up the review process with proven techniques.'
    }
  ];

  return (
    <section className="py-24 bg-background-light text-gray-900 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">The Struggle is Real</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Does AdSense Feel Out of Reach?</h2>
          <p className="text-lg text-gray-600">Most bloggers give up just before the breakthrough. Do any of these sound like your current situation?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                <span className="material-icons-round text-3xl">{point.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#pricing" className="inline-flex items-center text-primary font-bold hover:text-orange-700 transition-colors text-lg group">
            See how we fix this 
            <span className="material-icons-round ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
