
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-lighter dark:bg-surface-dark p-8 md:p-12 rounded-lg border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-10">
            <h3 className="text-3xl font-black text-white mb-3">Let's Get Started</h3>
            <p className="text-gray-400">Fill out the form below to kickstart your monetization journey.</p>
          </div>

          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-background-dark border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-sm text-white placeholder-gray-600 transition-all shadow-inner"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-background-dark border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-sm text-white placeholder-gray-600 transition-all shadow-inner"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Website URL</label>
              <input 
                type="url" 
                className="w-full bg-background-dark border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-sm text-white placeholder-gray-600 transition-all shadow-inner"
                placeholder="https://yourblog.com"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Service Needed</label>
              <div className="relative">
                <select className="w-full bg-background-dark border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-sm text-gray-400 appearance-none shadow-inner cursor-pointer">
                  <option>AdSense Approval Service</option>
                  <option>CPC Optimization</option>
                  <option>Site Audit & Fix</option>
                  <option>Other Inquiry</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                  <span className="material-icons-round text-lg">expand_more</span>
                </div>
              </div>
            </div>

            <button 
              type="button" 
              className="w-full bg-primary hover:bg-orange-600 text-white font-black py-5 rounded-full shadow-lg shadow-primary/30 transform active:scale-[0.98] transition-all uppercase tracking-widest"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
