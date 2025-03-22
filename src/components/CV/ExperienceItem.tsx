
import React from 'react';

interface ExperienceItemProps {
  title: string;
  company?: string;
  period: string;
  children?: React.ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  period,
  children
}) => {
  return (
    <div className="cv-section-item">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
        <div>
          <h3 className="font-semibold text-cv-text">{title}</h3>
          {company && <p className="text-sm text-gray-600 mt-0.5">{company}</p>}
        </div>
        <div className="text-sm font-medium text-cv-primary mt-1 md:mt-0 flex items-center">
          <span className="bg-cv-secondary/60 rounded-full px-2.5 py-0.5">
            {period}
          </span>
        </div>
      </div>
      {children && <div className="mt-2 text-sm text-gray-700">{children}</div>}
    </div>
  );
};

export default ExperienceItem;
