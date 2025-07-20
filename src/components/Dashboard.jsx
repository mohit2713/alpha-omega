import React from "react";
import ImageCarousel from "./ImageCarousel";
import PriceCalculator from "./PriceCalculator";

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-8 p-6">
        <div className="flex-1">
          <ImageCarousel />
        </div>

        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold">2021 Kia Seltos HTX IVT G</h2>

          <p className="text-gray-600">50K km • Petrol • Automatic</p>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Hub test drive only</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Spinny Car Hub, City Emporium Mall, Chandigarh</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div className="flex items-center space-x-2 bg-purple-100 px-3 py-2 rounded-lg">
            <div className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
              S Assured
            </div>
            <span className="text-sm text-gray-700">
              High quality, less driven
            </span>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>26 people shortlisted</span>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-600">Fixed on road price</p>
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold">₹11.64 Lakh</h3>
              <span className="text-sm text-gray-600">+ 1% TCS</span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              Includes RC transfer, insurance & more
            </p>
          </div>

          {/* EMI Section */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="text-lg font-semibold">₹20,009/m</p>
              <p className="text-sm text-gray-600">Starting EMI</p>
            </div>
            <PriceCalculator />
          </div>

          <div className="flex gap-3 mt-6">
            <button className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 font-semibold">
              BOOK NOW
              <div className="text-xs opacity-90">100% refundable</div>
            </button>
            <button className="flex-1 bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 font-semibold">
              FREE TEST DRIVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
