
import React, { useEffect, useState } from 'react';
import KeywordCloud from '@/components/KeywordCloud';

interface CloudPosition {
  left: string;
  top: string;
}

const Index = () => {
  const [positions, setPositions] = useState<CloudPosition[]>([]);

  const keywords = [
    {
      title: "distress tolerance",
      description: "Expanding your tolerance for distress allows you to develop the capacity to respond rather than react to stressors. This builds resilience and emotional strength."
    },
    {
      title: "emotional identification",
      description: "Before you can regulate your emotions, you must be able to identify them. This foundational skill enables understanding and growth in emotional awareness."
    },
    {
      title: "emotional expression",
      description: "Expressing yourself in healthy and constructive ways is vital to creating sustainable change in relationships and personal growth."
    },
    {
      title: "self-awareness",
      description: "Understanding our thoughts, feelings, and behaviors helps us recognize patterns and make conscious choices in our responses to life's challenges."
    },
    {
      title: "stress management",
      description: "Learning to effectively manage stress through various techniques helps maintain emotional balance and mental well-being."
    },
    {
      title: "cognitive restructuring",
      description: "Identifying and changing unhelpful thought patterns leads to improved emotional regulation and better mental health outcomes."
    }
  ];

  const generateRandomPosition = () => {
    return {
      left: `${Math.random() * 60}%`,
      top: `${Math.random() * 60 + 20}%`
    };
  };

  useEffect(() => {
    const newPositions = keywords.map(() => generateRandomPosition());
    setPositions(newPositions);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Emotional Regulation Skills
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore various aspects of emotional regulation through these interconnected concepts
          </p>
        </header>

        <div className="relative h-[800px]">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className="absolute animate-fade-in"
              style={{
                left: positions[index]?.left,
                top: positions[index]?.top,
                transition: 'all 0.5s ease-out',
                opacity: positions[index] ? 1 : 0,
              }}
            >
              <KeywordCloud
                title={keyword.title}
                description={keyword.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
