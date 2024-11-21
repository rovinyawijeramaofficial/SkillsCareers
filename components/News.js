import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const newsData = [
  {
    id: 1,
    title: "Tech Industry Jobs See 20% Growth in 2024",
    description:
      "The tech industry continues to boom in 2024, with a 20% increase in job openings across software development, cybersecurity, and AI-related fields. Learn more about the skills in demand and the companies leading the way in this exciting sector.",
    date: "01 Oct 2024",
    image: "/images/tech1.png",
  },
  {
    id: 2,
    title: "Tech Industry Jobs See 20% Growth in 2024",
    description:
      "The tech industry continues to boom in 2024, with a 20% increase in job openings across software development, cybersecurity, and AI-related fields. Learn more about the skills in demand and the companies leading the way in this exciting sector.",
    date: "01 Oct 2024",
    image: "/images/tech2.png",
  },
  {
    id: 3,
    title: "Tech Industry Jobs See 20% Growth in 2024",
    description:
      "The tech industry continues to boom in 2024, with a 20% increase in job openings across software development, cybersecurity, and AI-related fields. Learn more about the skills in demand and the companies leading the way in this exciting sector.",
    date: "01 Oct 2024",
    image: "/images/tech3.png",
  },
];

export default function News() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="max-w-full mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-blue-900">Latest News</h2>
          <a href="#" className="text-blue-600 hover:underline">View All</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main News Card */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={newsData[0].image}
              alt={newsData[0].title}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
  <h3 className="text-lg font-semibold text-gray-800">{newsData[0].title}</h3>
  <p className="text-gray-600 mt-6">{newsData[0].description}</p>
  
  <div className="flex items-center justify-between mt-20">
    <a href="#" className="flex items-center p-2 bg-blue-950 text-white font-semibold rounded-md hover:bg-blue-800">
      Read Now
      <FaArrowRight className="ml-2" />
    </a>
  </div>
  
  <div className="mt-4">
    <span className="text-gray-500 text-sm">{newsData[0].date}</span>
  </div>
</div>

          </div>

          {/* Smaller News Cards */}
          <div className="grid grid-cols-1 gap-6">
            {newsData.slice(1).map((news) => (
              <div key={news.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-semibold text-gray-800">{news.title}</h3>
                  <p className="text-gray-600 mt-2 mb-4 text-sm">{news.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <a href="#" className="flex items-center p-2 bg-blue-950 text-white font-semibold rounded-md hover:bg-blue-800">
                      Read Now
                      <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                  <div className="mt-4">
                    <span className="text-gray-500 text-sm">{news.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
