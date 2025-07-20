import React, { useState } from "react";

const PriceCalculator = () => {
  const [invites, setInvites] = useState(50);
  const [duration, setDuration] = useState(3);
  const [isOpen, setIsOpen] = useState(false);

  // Calculate price based on invites and duration
  const calculatePrice = () => {
    const basePrice = 5000; // Custom price
    const inviteMultiplier = invites * 100; // Custom ₹100 per invite
    const durationMultiplier = duration * 0.5; // 50% increase per month

    const totalPrice =
      basePrice + inviteMultiplier + basePrice * durationMultiplier;
    return Math.round(totalPrice);
  };

  const calculatedPrice = calculatePrice();

  // simple formatting
  const formatPrice = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <>
      {/* Calculator Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-50 transition-colors"
      >
        Calculate your EMI
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                Check Eligibility
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Calculator Content */}
            <div className="p-6 space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Price Calculator
              </h3>

              {/* Number of Invites */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Number of Invites
                </label>
                <div className="text-right">
                  <span className="text-lg font-bold text-purple-600">
                    {invites.toLocaleString()}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="10"
                    max="200"
                    value={invites}
                    onChange={(e) => setInvites(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${
                        ((invites - 10) / (200 - 10)) * 100
                      }%, #e5e7eb ${
                        ((invites - 10) / (200 - 10)) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10</span>
                    <span>200</span>
                  </div>
                </div>
              </div>

              {/* Duration of Event */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Duration of Event
                </label>
                <div className="text-right">
                  <span className="text-lg font-bold text-purple-600">
                    {duration} {duration === 1 ? "Month" : "Months"}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="84"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${
                        ((duration - 1) / (84 - 1)) * 100
                      }%, #e5e7eb ${
                        ((duration - 1) / (84 - 1)) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 Month</span>
                    <span>84 Months</span>
                  </div>
                </div>
              </div>

              {/* Calculated Price */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    {formatPrice(calculatedPrice)}
                  </div>
                  <div className="text-sm text-green-500">per month</div>
                </div>
                <button className="w-full mt-3 text-purple-600 text-sm font-medium flex items-center justify-center space-x-1 hover:text-purple-700">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span>View Price Breakdown</span>
                </button>
              </div>

              {/* Action Button */}
              <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                <span>Check eligibility</span>
              </button>

              <div className="text-xs text-gray-500 space-y-1">
                <p>
                  *Rate of interest can vary subject to credit profile. Loan
                  approval is at the sole discretion of the finance partner.
                </p>
                <p>**Processing fee and other loan charges are not included.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #7c3aed;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #7c3aed;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default PriceCalculator;
