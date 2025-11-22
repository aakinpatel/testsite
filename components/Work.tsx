import React from 'react';
import { PROJECTS } from '../constants';
import SectionHeading from './SectionHeading';
import { ExternalLink } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-32 bg-brand-800 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionHeading title="Selected Works" subtitle="Portfolio" />
          <a href="#" className="hidden md:flex items-center gap-2 text-brand-accent hover:text-white transition-colors pb-16 font-medium">
            View All Projects <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-brand-900/40 group-hover:bg-brand-900/0 transition-colors duration-700 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif font-medium mb-1 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm uppercase tracking-wider">{project.category}</p>
                </div>
                <span className="text-slate-500 font-serif italic">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
         
         <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-brand-accent font-medium">
              View All Projects <ExternalLink size={16} />
            </a>
         </div>
      </div>
    </section>
  );
};

export default Work;