
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants.tsx';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold dark:text-white">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-surface-dark rounded-lg overflow-hidden border border-gray-100 dark:border-white/5"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:text-primary transition-colors focus:outline-none"
              >
                <span className="font-bold text-gray-800 dark:text-gray-100">{item.question}</span>
                <span className={`material-icons-round transition-transform duration-300 text-primary ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}>
                  expand_more
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-6 pb-6 text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-50 dark:border-white/5 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
