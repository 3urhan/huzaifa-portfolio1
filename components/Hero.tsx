
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const data = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 50 },
  { name: 'Wed', value: 45 },
  { name: 'Thu', value: 70 },
  { name: 'Fri', value: 65 },
  { name: 'Today', value: 95 },
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background-dark">
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Premium AdSense Consulting
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Get Google AdSense Approved & <span className="text-primary">Profitable — Without Guesswork.</span>
            </h1>
            
            <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Stop struggling with policy violations and low RPM. Expert consulting for bloggers and creators tired of rejections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-primary hover:bg-orange-600 transition-all shadow-glow transform hover:-translate-y-1">
                Get Free AdSense Audit
                <span className="material-icons-round ml-2">arrow_forward</span>
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-medium rounded-full text-white hover:bg-white/5 transition-all backdrop-blur-sm">
                <span className="material-icons-round mr-2 text-green-400">chat</span>
                Chat on WhatsApp
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                      className="w-10 h-10 rounded-full border-2 border-background-dark object-cover" 
                      alt="User avatar" 
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-background-dark bg-primary flex items-center justify-center text-xs font-bold text-white">
                    50+
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">50+ Publishers</p>
                  <p className="text-gray-500 text-xs">Successfully Approved</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-icons-round text-primary">trending_up</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">+40% Avg.</p>
                  <p className="text-gray-500 text-xs">RPM Increase</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 mt-16 lg:mt-0 relative flex justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20"></div>
            
            <div className="glass-card rounded-lg p-6 w-full max-w-sm animate-float relative z-10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Recent Client Result</p>
                  <h3 className="text-xl font-bold text-white mt-1">$4,289.45</h3>
                </div>
                <div className="bg-green-500/20 px-2 py-1 rounded-full flex items-center">
                  <span className="material-icons-round text-green-500 text-sm mr-1">arrow_upward</span>
                  <span className="text-green-500 text-xs font-bold">+128%</span>
                </div>
              </div>
              
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={index === data.length - 1 ? '#ff7b00' : 'rgba(255, 255, 255, 0.1)'} 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-between mt-4 text-[10px] text-gray-500 font-mono uppercase">
                {data.map((d) => (
                  <span key={d.name} className={d.name === 'Today' ? 'text-primary font-bold' : ''}>
                    {d.name.substring(0, 3)}
                  </span>
                ))}
              </div>

              <div className="absolute -bottom-6 -left-6 glass-card px-4 py-3 rounded-full flex items-center gap-3 shadow-2xl">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="material-icons-round text-white text-sm">check</span>
                </div>
                <div>
                  <p className="text-white text-xs font-bold">Approved</p>
                  <p className="text-gray-400 text-[10px]">Just now</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
