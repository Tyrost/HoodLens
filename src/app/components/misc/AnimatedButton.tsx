'use client';
import React from "react";
import "../../../AnimatedButton.css"; // CSS file we’ll add below

interface AnimatedSvgButtonProps {
  label: string;
  onClick?: () => void;
}

const AnimatedSvgButton: React.FC<AnimatedSvgButtonProps> = ({ label, onClick }) => {
  return (
    <div className="svg-wrapper cursor-pointer" onClick={onClick}>
        <svg height="45" width="120" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" height="45" width="120" />
        </svg>
    <div className="text">{label}</div>
    </div>
  );
};

export default AnimatedSvgButton;
