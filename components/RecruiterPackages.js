import React from "react";

const packages = [
  {
    title: "Basic Recruiter Package",
    price: "29.99",
    features: [
      "5 job postings per month",
      "Access to basic candidate profiles",
      "Payment gateway integration",
      "Limited use of assessment templates",
    ],
    buttonStyle: "bg-blue-900 text-white",
  },
  {
    title: "Professional Recruiter Package",
    price: "49.99",
    features: [
      "20 job postings per month",
      "Access to basic candidate profiles",
      "Payment gateway integration",
      "Limited use of assessment templates",
    ],
    buttonStyle: "bg-white text-blue-900",
    highlight: true,
  },
  {
    title: "Enterprise Recruiter Package",
    price: "99.99",
    features: [
      "30 job postings per month",
      "Access to basic candidate profiles",
      "Payment gateway integration",
      "Limited use of assessment templates",
    ],
    buttonStyle: "bg-blue-900 text-white",
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col w-full items-center py-12 bg-gray-100">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">
        Recruiter Packages
      </h2>
      <p className="text-blue-900 mb-8 text-center px-4 max-w-2xl">
        Empower your hiring and assessment process with comprehensive tools
        designed to meet your goals.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-lg shadow-lg ${
              pkg.highlight
                ? "bg-gradient-to-b from-blue-900 to-[#0C002E] text-white"  // Gradient for the highlighted card
                : "bg-gradient-to-b from-[#EDF0FF] to-[#CAD1F1] text-gray-900"  // Gradient for other cards
            }`}
          >
            <h3 className="text-xl font-semibold mt-4 mb-2">{pkg.title}</h3>
            <p className="text-3xl font-bold mt-4 mb-4">
              ${pkg.price}
              <span className="text-lg">/month</span>
            </p>
            <ul className="text-sm mt-6 mb-6 space-y-2">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex flex-col items-center">
                  <span className="text-center mt-4 mb-2">{feature}</span>

                  {/* Bottom Divider */}
                  <hr className="w-full border-t border-gray-300 mt-2" />
                </li>
              ))}
            </ul>
            <button
              className={`px-4 py-2 rounded-lg mt-8 font-semibold ${pkg.buttonStyle}`}
            >
              Choose This Package
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
