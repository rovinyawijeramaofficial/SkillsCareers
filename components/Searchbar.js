import { useState } from 'react';
import Countries from '../components/Countries'; // Adjust path if needed

export default function Searchbar() {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-4 space-y-4">
        
        {/* Search Input and Country Selector */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search by job title, keywords, or company."
            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Countries />
          <button className="w-1/3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>

        {/* Filter Options */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Industry</option>
            <option>Tech</option>
            <option>Finance</option>
            <option>Healthcare</option>
          </select>

          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Experience Level</option>
            <option>Entry</option>
            <option>Mid</option>
            <option>Senior</option>
          </select>

          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Salary Range</option>
            <option>0-20k</option>
            <option>20k-50k</option>
            <option>50k+</option>
          </select>

          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Job Type</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Contract</option>
          </select>
        </div>
      </div>
    </div>
  );
}
