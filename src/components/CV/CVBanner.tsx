
import React from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  User, 
  Briefcase, 
  Award, 
  Target, 
  Heart, 
  Activity, 
  GraduationCap, 
  Star 
} from 'lucide-react';

interface CVBannerProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CVBanner: React.FC<CVBannerProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-gradient-to-r from-cv-primary/30 to-cv-secondary/30 py-4 sticky top-0 z-10 backdrop-blur-sm border-b border-cv-primary/20 shadow-sm">
      <div className="max-w-5xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full h-auto flex flex-wrap justify-center gap-1 bg-transparent">
            <TabsTrigger 
              value="personal" 
              className="data-[state=active]:bg-cv-primary data-[state=active]:text-white flex items-center gap-2"
            >
              <User size={16} />
              <span className="hidden sm:inline">Thông tin cá nhân</span>
            </TabsTrigger>
            <TabsTrigger 
              value="skills" 
              className="data-[state=active]:bg-cv-primary data-[state=active]:text-white flex items-center gap-2"
            >
              <Star size={16} />
              <span className="hidden sm:inline">Kỹ năng</span>
            </TabsTrigger>
            <TabsTrigger 
              value="objectives" 
              className="data-[state=active]:bg-cv-primary data-[state=active]:text-white flex items-center gap-2"
            >
              <Target size={16} />
              <span className="hidden sm:inline">Mục tiêu nghề nghiệp</span>
            </TabsTrigger>
            <TabsTrigger 
              value="hobbies" 
              className="data-[state=active]:bg-cv-primary data-[state=active]:text-white flex items-center gap-2"
            >
              <Heart size={16} />
              <span className="hidden sm:inline">Sở thích</span>
            </TabsTrigger>
            <TabsTrigger 
              value="experience" 
              className="data-[state=active]:bg-cv-primary data-[state=active]:text-white flex items-center gap-2"
            >
              <Briefcase size={16} />
              <span className="hidden sm:inline">Kinh nghiệm làm việc</span>
            </TabsTrigger>
            <TabsTrigger 
              value="education" 
              className="data-[state=active]:bg-cv-primary data-[state=active]:text-white flex items-center gap-2"
            >
              <GraduationCap size={16} />
              <span className="hidden sm:inline">Học vấn</span>
            </TabsTrigger>
            <TabsTrigger 
              value="activities" 
              className="data-[state=active]:bg-cv-primary data-[state=active]:text-white flex items-center gap-2"
            >
              <Activity size={16} />
              <span className="hidden sm:inline">Hoạt động</span>
            </TabsTrigger>
            <TabsTrigger 
              value="certificates" 
              className="data-[state=active]:bg-cv-primary data-[state=active]:text-white flex items-center gap-2"
            >
              <Award size={16} />
              <span className="hidden sm:inline">Chứng chỉ</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default CVBanner;
