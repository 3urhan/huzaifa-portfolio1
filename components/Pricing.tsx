
import React from 'react';
import { PRICING_PLANS } from '../constants.tsx';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-background-dark text-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Choose Your Growth Plan</h2>
          <p className="text-gray-400 text-lg">Transparent pricing for every stage of your blogging journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-lg border ${
                plan.popular 
                  ? 'bg-surface-lighter border-primary shadow-2xl scale-105 z-10' 
                  : 'bg-surface-dark border-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-glow">
                  Most Popular
                </div>
              )}

              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  {plan.badge && (
                    <span className="inline-block mt-2 px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold tracking-wider text-gray-300">
                      {plan.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm">
                    <span className={`material-icons-round text-sm ${feature.included ? 'text-primary' : 'text-gray-600'}`}>
                      {feature.included ? 'check_circle' : 'cancel'}
                    </span>
                    <span className={feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-bold transition-all shadow-glow ${
                plan.popular 
                  ? 'bg-primary text-white hover:bg-orange-600' 
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <h3 className="text-2xl font-bold mb-6">Book a free 15-min discovery call</h3>
          <a href="#" className="text-primary font-bold hover:underline flex items-center justify-center gap-2">
            View Calendar <span className="material-icons-round text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
