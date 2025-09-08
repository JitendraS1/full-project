import React, { useState, useEffect } from 'react';
import LoaderAnimation from './LoaderAnimation';

const Loader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loader after 5 seconds 
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 4000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  // If not loading, don't render anything
  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black h-screen w-screen">
      <div className="w-full h-full flex items-center justify-center">
        <LoaderAnimation />
      </div>
    </div>
  );
};

export default Loader;