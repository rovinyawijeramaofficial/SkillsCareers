// pages/SearchResults.js
import React, { useState } from 'react';
import Link from 'next/link';
import FeaturedJobCard from '../components/FeaturedJobCard';

// Mock data - Add 40+ jobs for testing
const jobsData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  companyLogo: '/images/aerfin-logo.png',
  companyName: 'AerFin',
  title: 'Senior UX/UI Designer',
  location: 'New York, NY',
  datePosted: `0${(i % 9) + 1} Jan 2024`,
}));

const ITEMS_PER_PAGE = 20;

export default function SearchResults() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobsData.length / ITEMS_PER_PAGE);
  const currentJobs = jobsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-blue-900">Search Results</h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-200 text-blue-900 font-semibold hover:underline">Creative</button>
            <button className="px-4 py-2 bg-gray-200 text-blue-900 font-semibold hover:underline">IT/Software</button>
            <button className="px-4 py-2 bg-gray-200 text-blue-900 font-semibold hover:underline">Finance</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {currentJobs.map((job) => (
            <Link key={job.id} href={`/job/${job.id}`}>
              
                <FeaturedJobCard job={job} />
              
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Previous
          </button>
          <p className="text-gray-600">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
