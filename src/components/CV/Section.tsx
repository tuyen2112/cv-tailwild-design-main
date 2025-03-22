
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, className = "", id, icon }) => {
  return (
    <section id={id} className={`cv-section ${className}`}>
      <h2 className="cv-section-title flex items-center gap-2 text-blue-600 mb-4 pb-2 border-b border-gray-200">
        {icon && <span className="text-blue-600">{icon}</span>}
        <span>{title}</span>
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
