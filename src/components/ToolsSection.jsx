import React from "react";
import {
  AlertCircle,
  FileCode,
  Database,
  Server,
  Cloud,
  MessageSquare,
  Pen,
  Camera,
  Video,
  BarChart,
  Box,
} from "lucide-react";

const tools = [
  { name: "JavaScript", icon: FileCode },
  { name: "Python", icon: FileCode },
  { name: "SQL", icon: Database },
  { name: "NoSQL", icon: Database },
  { name: "Hadoop", icon: Server },
  { name: "Claude", icon: MessageSquare },
  { name: "ChatGPT", icon: MessageSquare },
  { name: "Gemini", icon: Cloud },
  { name: "Canva", icon: Pen },
  { name: "Grammarly", icon: AlertCircle },
  { name: "Speechify", icon: MessageSquare },
  { name: "Photopea", icon: Camera },
  { name: "OBS Studio", icon: Video },
  { name: "Pro Tools", icon: Video },
  { name: "Wireshark", icon: Server },
  { name: "Tableau", icon: BarChart },
  { name: "Docker", icon: Box },
];

const ToolsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            My Toolbox
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-200 sm:mt-4">
            Empowering creativity and efficiency with cutting-edge tools
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {tools.map((tool, index) => (
            <li key={index} className="flex flex-col items-center">
              <tool.icon className="w-12 h-12 mb-2 text-white" />
              <span className="text-white font-medium">{tool.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ToolsSection;
