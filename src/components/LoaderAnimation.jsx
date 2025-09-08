import React, { useRef } from 'react';

const LoaderAnimation = () => {
  const videoRef = useRef(null);
  
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="w-full h-full">
        <video 
          ref={videoRef}
          src="/loader-video.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoaderAnimation;