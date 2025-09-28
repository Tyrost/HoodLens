'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type GoBackHomeButtonProps = {
  theme?: 'light' | 'dark';
};

const GoBackHomeButton: React.FC<GoBackHomeButtonProps> = ({ theme = 'dark' }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="absolute p-8">
      <div
        className={`rounded-lg ${
          theme === 'dark' ? 'border border-white' : 'border border-black'
        }`}
      >
        <button
          onClick={handleClick}
          className="flex items-center space-x-4 p-3 text-yellow-300 rounded-lg 
                     hover:scale-110 transition-transform duration-300"
        >
          <div
            className="w-3 h-3 bg-black bg-opacity-0 rounded-full flex items-center justify-center 
                       shadow-md transition-transform duration-300 border-white border-[1px]"
          />
          <span className={`${theme === "light" ? "text-black" : "text-white"} text-md font-outfit`}>Back Home</span>
        </button>
      </div>
    </div>
  );
};

export default GoBackHomeButton;
