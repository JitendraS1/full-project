import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4 min-h-[60vh]">
      <h1 className="text-5xl font-bold mb-5 text-gray-800">404 - Page Not Found</h1>
      <p className="text-xl mb-8 text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full transition duration-300">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
