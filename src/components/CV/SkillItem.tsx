
import React from 'react';

interface SkillItemProps {
  title: string;
  description: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ title, description }) => {
  return (
    <div className="cv-section-item">
      <h3 className="font-semibold text-cv-text mb-1">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default SkillItem;
