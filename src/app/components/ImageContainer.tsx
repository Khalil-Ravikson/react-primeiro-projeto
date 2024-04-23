import React from 'react';

interface ImageContainerProps {
  children: React.ReactNode;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ children }) => {
  return (
    <div className="w-40 h-50 border border-gray-300 p-2 rounded-lg ">
      {children}
    </div>
  );
};

export default ImageContainer;