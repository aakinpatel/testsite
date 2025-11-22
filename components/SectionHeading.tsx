import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="block text-brand-accent text-sm font-bold tracking-widest uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-brand-accent mt-6 ${center ? 'mx-auto' : ''} rounded-full`}></div>
    </div>
  );
};

export default SectionHeading;