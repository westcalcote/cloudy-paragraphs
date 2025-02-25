
import React from 'react';
import { cn } from "@/lib/utils";

interface KeywordCloudProps {
  title: string;
  description: string;
  className?: string;
}

const KeywordCloud = ({ title, description, className }: KeywordCloudProps) => {
  return (
    <div className={cn(
      "max-w-md p-6 rounded-xl backdrop-blur-sm bg-white/80 shadow-lg transition-all duration-500 hover:scale-[1.02]",
      className
    )}>
      <h3 className="text-2xl font-light text-gray-700 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default KeywordCloud;
