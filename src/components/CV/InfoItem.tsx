
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoItemProps {
  icon: LucideIcon;
  text: string;
  link?: string;
  color?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, text, link, color }) => {
  const content = (
    <div className="flex items-center gap-3 text-cv-text group transition-all duration-300 ease-in-out">
      <div className="text-cv-primary flex-shrink-0">
        <Icon size={18} className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
      </div>
      <span className="text-sm md:text-base transition-all duration-300 ease-in-out group-hover:translate-x-1">
        {text}
      </span>
    </div>
  );

  if (link) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`block py-1.5 hover:text-cv-primary transition-transform duration-300 hover:scale-110 text-${color} text-2xl`}

      >
        {content}
      </a>
    );
  }

  return <div className="py-1.5">{content}</div>;
};

export default InfoItem;
