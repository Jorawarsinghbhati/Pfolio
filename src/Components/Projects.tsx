import React from "react";
import Image from "next/image";
import {
  IconCode,
  IconMail,
  IconMovie,
  IconShoppingCart,
  IconCloud,
  IconMessage,
} from "@tabler/icons-react";

// TypeScript Interface for Project Item
interface ProjectItem {
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
}

// TypeScript Interface for Image Component Props
interface ProjectImageProps {
  src: string;
  alt: string;
}

// Image Component with Proper TypeScript Typing
const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => (
  <div className="flex flex-1 w-full h-40 rounded-xl overflow-hidden">
    <Image src={src} alt={alt} width={300} height={200} className="object-cover w-full h-full" />
  </div>
);

// Project Card Component (Typed)
const BentoGridItem: React.FC<ProjectItem> = ({ title, description, header, icon }) => {
  return (
    <div className="shadow-md bg-white rounded-xl p-5 flex flex-col space-y-4 hover:shadow-lg transition-all duration-200">
      {header}
      <div className="flex items-center space-x-3">
        {icon}
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Project Data Array (Typed)
const items: ProjectItem[] = [
  {
    title: "Email Spam Classifier",
    description: "A Machine Learning model to detect spam emails.",
    header: <ProjectImage src="/Classification.jpg" alt="Email Spam Classifier" />,
    icon: <IconMail className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Movie Recommendation System",
    description: "Suggests movies based on user preferences.",
    header: <ProjectImage src="/movie.jpg" alt="Movie Recommendation System" />,
    icon: <IconMovie className="h-5 w-5 text-purple-500" />,
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills and projects.",
    header: <ProjectImage src="/portfolio.jpg" alt="Portfolio Website" />,
    icon: <IconCode className="h-5 w-5 text-green-500" />,
  },
  {
    title: "E-commerce Clone",
    description: "A functional e-commerce platform with modern tech stack.",
    header: <ProjectImage src="/Ecommarce.jpg" alt="E-commerce Clone" />,
    icon: <IconShoppingCart className="h-5 w-5 text-yellow-500" />,
  },
  {
    title: "Weather App",
    description: "Real-time weather updates using APIs.",
    header: <ProjectImage src="/weather.png" alt="Weather App" />,
    icon: <IconCloud className="h-5 w-5 text-cyan-500" />,
  },
  {
    title: "Chat Application",
    description: "Real-time chat with authentication.",
    header: <ProjectImage src="/Chat.png" alt="Chat Application" />,
    icon: <IconMessage className="h-5 w-5 text-red-500" />,
  },
];

// Main Bento Grid Component
const BentoGridDemo: React.FC = () => {
  return (
    <div className="w-full min-h-screen  py-16 px-6 lg:px-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10 tracking-tight">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Projects</span>
      </h2>

      {/* Grid Container */}
      <div className="grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default BentoGridDemo;
