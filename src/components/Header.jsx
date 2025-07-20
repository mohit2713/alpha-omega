import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">CarHub</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              Cars
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search car"
                className="w-64 px-4 py-2 pr-10 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <button className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 font-medium">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
