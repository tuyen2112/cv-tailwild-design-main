
import React, { useState } from 'react';

import InfoItem from './InfoItem';
import Section from './Section';
import ExperienceItem from './ExperienceItem';

import { 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  Globe, 
  MapPin,
  GraduationCap, 
  Briefcase, 
  Award, 
  Heart,
  Target,
  Activity,
  Languages,
  FileText,
  Star,
  Facebook, InstagramIcon,
} from 'lucide-react';


const CVDocument: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Banner */}
      <div 
  className="bg-cover bg-center h-40 relative" 
  style={{ backgroundImage: `url("https://res.cloudinary.com/dv8e9h3o7/image/upload/v1742656384/2294820181canhdepmienbac-1711070654909_nkrodi.jpg")` }}
>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
    <img 
      src="https://res.cloudinary.com/dv8e9h3o7/image/upload/v1742657168/7fe4feca-264c-4bee-a854-ed4023fe0461_xgvch8.jpg" 
      alt="Profile"
      className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white object-cover"
    />
  </div>
</div>

      
      {/* Navbar */}
      <div className="flex justify-center mt-16 mb-8">
        <div className="flex space-x-6 text-sm font-medium">
          <a href="#objective" className="text-blue-600 border-b-2 border-blue-600 pb-1">Mục tiêu</a>
          <a href="#info" className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1">Thông tin</a>
          <a href="#experience" className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1">Kinh nghiệm</a>
          <a href="#education" className="text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1">Học vấn</a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <h1 className="text-center text-2xl font-bold mb-2">Nguyen Minh Tuyen</h1>
        <p className="text-center text-gray-600 mb-12">Front-end Developer & Kỹ sư Viễn thông</p>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <Section title="Mục tiêu nghề nghiệp" id="objective" icon={<Target size={20} />} className="mb-8">
              <p className="text-gray-700">
                Tìm kiếm cơ hội làm việc trong môi trường chuyên nghiệp, nơi có thể áp dụng kiến thức và kỹ năng về viễn thông và công nghệ vào thực tế. Học hỏi, trao đổi ý tưởng với đồng nghiệp, quản lý hệ thống mạng, phát triển phần mềm và nghiên cứu các công nghệ mới như IoT, AI, và điện toán đám mây.
              </p>
            </Section>
            
            <Section title="Kinh nghiệm làm việc" id="experience" icon={<Briefcase size={20} />} className="mb-8">
              <div className="relative border-l-2 border-gray-200 pl-6 space-y-6 ml-2">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0"></div>
                <ExperienceItem
                  title="Kĩ thuật viên bảo trì Indoor-outdoor"
                  company="Tập đoàn bưu chính viễn thông VNPT"
                  period="2024 - 2024"
                >
                  <ul className="list-disc list-inside space-y-1 ml-2 text-gray-600">
                    <li>Bảo trì và bảo dưỡng các thiết bị viễn thông</li>
                    <li>Kiểm tra định kỳ trạm BTS và hệ thống tổng đài</li>
                    <li>Xử lý sự cố kỹ thuật kịp thời</li>
                  </ul>
                </ExperienceItem>
                
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1/3"></div>
                <ExperienceItem
                  title="Kĩ thuật viên"
                  company="NamHaComputer"
                  period="2024 - 2024"
                >
                  <ul className="list-disc list-inside space-y-1 ml-2 text-gray-600">
                    <li>Sửa chữa và bảo trì máy tính, laptop</li>
                    <li>Cài đặt và cấu hình phần mềm</li>
                    <li>Tư vấn khách hàng về giải pháp công nghệ</li>
                  </ul>
                </ExperienceItem>
              </div>
            </Section>
            
            <Section title="Học vấn" id="education" icon={<GraduationCap size={20} />} className="mb-8">
              <div className="relative border-l-2 border-gray-200 pl-6 space-y-6 ml-2">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-0"></div>
                <ExperienceItem
                  title="Đại học Giao thông vận tải"
                  company="Điện tử viễn thông"
                  period="2019 - 2024"
                />
                
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1/3"></div>
                <ExperienceItem
                  title="Học viện Green Academy"
                  company="Full-stack Web"
                  period="2024 - 2025"
                />
              </div>
            </Section>
          </div>
          
          {/* Right Column */}
          <div>
            <Section title="Thông tin cá nhân" id="info" icon={<User size={20} />} className="mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <InfoItem icon={Calendar} text="21/12/2000" />
                  <InfoItem icon={User} text="Nam" />
                  <InfoItem icon={Phone} text="0356766847" link="tel:0356766847" />
                </div>
                <div>
                  <InfoItem 
                    icon={Mail} 
                    text="nguyenminhtuyen21122000t@gmail.com" 
                    link="mailto:nguyenminhtuyen21122000t@gmail.com" 
                  />
                  <div className="flex space-x-4 mt-4">
      <InfoItem 
        icon={Facebook}
        text="" 
        link="https://www.facebook.com/nguyenminh.tuyen.7731" 
        color="blue-600" 
      />
      <InfoItem 
        icon={Phone} 
        text=""
        link="tel:+84356766847" 
        color="green-500" 
      />
      <InfoItem 
        icon={InstagramIcon} 
        text=""
        link="https://www.instagram.com/tnz2k" 
        color="pink-500" 
      />
    </div>
                  <InfoItem icon={MapPin} text="xã Hà Hồi, huyện Thường Tín, Hà Nội" />
                </div>
              </div>
              
             
            </Section>
            
            <Section title="Kỹ năng" id="skills" icon={<Star size={20} />} className="mb-8">
              <h3 className="font-medium mb-2">Chuyên môn</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-100 p-2 rounded text-sm text-center">HTML/CSS</div>
                <div className="bg-gray-100 p-2 rounded text-sm text-center">JavaScript</div>
                <div className="bg-gray-100 p-2 rounded text-sm text-center">Tailwind CSS</div>
                <div className="bg-gray-100 p-2 rounded text-sm text-center">Bootstrap</div>
                <div className="bg-gray-100 p-2 rounded text-sm text-center">React</div>
                <div className="bg-gray-100 p-2 rounded text-sm text-center">Git/GitHub</div>
              </div>
              
              <h3 className="font-medium mb-2">Viễn thông</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-gray-100 p-2 rounded text-sm text-center">Bảo trì Indoor</div>
                <div className="bg-gray-100 p-2 rounded text-sm text-center">Bảo trì Outdoor</div>
                <div className="bg-gray-100 p-2 rounded text-sm text-center">Hệ thống tổng đài</div>
                <div className="bg-gray-100 p-2 rounded text-sm text-center">Trạm BTS</div>
              </div>
            </Section>
            
            <Section title="Ngôn ngữ" id="languages" icon={<Languages size={20} />} className="mb-8">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Tiếng Anh</span>
                    <span className="text-sm text-gray-500">B1</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </Section>
            
            <Section title="Sở thích" id="hobbies" icon={<Heart size={20} />} className="mb-8">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <Heart size={20} className="text-gray-600" />
                  </div>
                  <p className="text-sm">Đọc sách</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <Activity size={20} className="text-gray-600" />
                  </div>
                  <p className="text-sm">Thể thao</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <Globe size={20} className="text-gray-600" />
                  </div>
                  <p className="text-sm">Du lịch</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <FileText size={20} className="text-gray-600" />
                  </div>
                  <p className="text-sm">Học tập</p>
                </div>
              </div>
            </Section>
            
            <Section title="Chứng chỉ" id="certificates" icon={<Award size={20} />} className="mb-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="min-w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center mr-3">
                    <Award size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Tiếng anh B1</h3>
                    <p className="text-sm text-gray-600">Cấp năm 2023</p>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDocument;
