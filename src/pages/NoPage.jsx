import React from 'react';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-red-500">404!</h1>
        <p className="text-xl mt-4 text-gray-700">Page Not Found</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
