import React, { useState } from "react";
import { Music, Brain, Laptop, Github, Target, Leaf } from "lucide-react";

const ValueButton = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-full p-4 text-center transition-all duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col items-center justify-center">
        <Icon className="w-12 h-12 mb-4 text-blue-500" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {isHovered && (
          <p className="text-sm text-gray-600 mt-2 transition-opacity duration-300 ease-in-out opacity-100">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: Music,
      title: "Creativity",
      description:
        "Blending my passion for music and tech to create innovative solutions that resonate with users.",
    },
    {
      icon: Brain,
      title: "Analysis",
      description:
        "Applying behavioral economics insights to tech challenges, finding data-driven solutions.",
    },
    {
      icon: Laptop,
      title: "Growth",
      description:
        "Embracing continuous learning to stay at the forefront of tech innovation.",
    },
    {
      icon: Github,
      title: "Open Source Mindset",
      description:
        "Embracing collaboration, knowledge sharing, and transparency in my work and interactions.",
    },
    {
      icon: Target,
      title: "Impact",
      description:
        "Creating elegant, user-friendly solutions that make a real difference in people's lives.",
    },
    {
      icon: Leaf,
      title: "Ethical Innovation",
      description:
        "Developing technology with a conscience, considering its broader impact on society and the environment.",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Values
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Principles guiding my work in tech, music, and life
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <ValueButton key={index} {...value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
