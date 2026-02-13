
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark border-t border-white/5 pt-16 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white font-black text-sm">H</span>
              <span className="font-bold text-2xl text-white">Huzaifa Amjad</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Professional consulting for digital publishers. Unlocking revenue potential through expert optimization and high-impact strategies.
            </p>
          </div>

          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-[10px] mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white uppercase tracking-widest text-[10px] mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-sm text-primary">email</span>
                hello@huzaifa.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-sm text-primary">phone</span>
                +92 300 1234567
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-[10px] text-gray-600 text-center leading-relaxed max-w-2xl mx-auto mb-6">
            Disclaimer: This service is not affiliated with, endorsed by, or connected to Google LLC or its partners. AdSense is a trademark of Google LLC. All results are based on individual site performance and are not guaranteed.
          </p>
          <div className="flex justify-center gap-8 text-[10px] text-gray-600 mb-6 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-primary underline decoration-primary/30">Privacy Policy</a>
            <a href="#" className="hover:text-primary underline decoration-primary/30">Terms of Service</a>
          </div>
          <p className="text-[10px] text-gray-700 text-center font-bold tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Huzaifa Amjad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
