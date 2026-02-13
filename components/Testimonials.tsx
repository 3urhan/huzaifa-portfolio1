
import React from 'react';
import { TESTIMONIALS } from '../constants.tsx';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Proof</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 dark:text-white">Real Results, Real Stories</h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-surface-dark p-6 rounded-lg shadow-sm border border-gray-100 dark:border-white/5 flex gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://picsum.photos/seed/p1/100/100" alt="H" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">Huzaifa Amjad</h4>
                  <p className="text-primary text-sm mb-3">AdSense Growth Specialist</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm italic">"Helping content creators and bloggers unlock premium monetization. I turn rejected sites into revenue machines."</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary text-white p-5 rounded-lg text-center shadow-lg shadow-primary/20">
                  <span className="text-3xl font-black block">500+</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Sites Approved</span>
                </div>
                <div className="bg-white dark:bg-surface-dark p-5 rounded-lg text-center border border-gray-100 dark:border-white/5">
                  <span className="text-3xl font-black text-primary block">98%</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            {/* WhatsApp Styled Testimonials */}
            <div className="space-y-4">
              <div className="bg-[#DCF8C6] dark:bg-[#005c4b] p-4 rounded-lg shadow-xl max-w-[85%] ml-auto border border-gray-200 dark:border-transparent transform hover:-translate-y-1 transition-transform">
                <p className="text-[10px] font-bold text-[#075e54] dark:text-[#25d366] mb-1">+92 300 1234567</p>
                <p className="text-sm text-gray-800 dark:text-gray-100">Bro! I just got the approval email! Can't believe it only took 3 days. Thank you so much 🙏</p>
                <p className="text-[9px] text-right text-gray-500 dark:text-gray-300 mt-1 uppercase font-mono">10:42 AM</p>
              </div>
              
              <div className="bg-[#DCF8C6] dark:bg-[#005c4b] p-4 rounded-lg shadow-xl max-w-[85%] ml-4 border border-gray-200 dark:border-transparent transform hover:-translate-y-1 transition-transform">
                <p className="text-[10px] font-bold text-[#075e54] dark:text-[#25d366] mb-1">+1 555 019283</p>
                <p className="text-sm text-gray-800 dark:text-gray-100">CPC increased from $0.05 to $0.42 after your optimization. Amazing work Huzaifa.</p>
                <p className="text-[9px] text-right text-gray-500 dark:text-gray-300 mt-1 uppercase font-mono">Yesterday</p>
              </div>

              {/* Standard Testimonial Card */}
              <div className="bg-white dark:bg-surface-dark p-6 rounded-lg shadow-xl border border-gray-100 dark:border-white/5 relative mt-8">
                 <span className="absolute top-4 right-6 text-primary/10 text-6xl font-serif">"</span>
                 <div className="flex items-center gap-4 mb-4">
                   <img src={TESTIMONIALS[0].avatar} alt="" className="w-12 h-12 rounded-full border-2 border-primary/20" />
                   <div>
                     <p className="font-bold dark:text-white">{TESTIMONIALS[0].name}</p>
                     <p className="text-xs text-gray-500">{TESTIMONIALS[0].role}</p>
                   </div>
                 </div>
                 <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">"{TESTIMONIALS[0].content}"</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
