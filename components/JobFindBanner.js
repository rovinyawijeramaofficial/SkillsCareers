import Image from "next/image";
import { FaSearch, FaChartLine, FaUserTie } from 'react-icons/fa';

export const countries = [
    { value: "", label: "Select the Country", code: "" },
    { value: "US", label: "United States", code: "us" },
    { value: "CA", label: "Canada", code: "ca" },
    { value: "GB", label: "United Kingdom", code: "gb" },
    { value: "FR", label: "France", code: "fr" },
    { value: "DE", label: "Germany", code: "de" },
    { value: "IN", label: "India", code: "in" },
    { value: "AU", label: "Australia", code: "au" },
    { value: "JP", label: "Japan", code: "jp" },
    { value: "CN", label: "China", code: "cn" },
    { value: "BR", label: "Brazil", code: "br" },
    { value: "ZA", label: "South Africa", code: "za" },
    { value: "RU", label: "Russia", code: "ru" },
    { value: "IT", label: "Italy", code: "it" },
    { value: "ES", label: "Spain", code: "es" },
    { value: "MX", label: "Mexico", code: "mx" },
    { value: "NG", label: "Nigeria", code: "ng" },
    { value: "KR", label: "South Korea", code: "kr" },
    { value: "AR", label: "Argentina", code: "ar" },
    { value: "NL", label: "Netherlands", code: "nl" },
    { value: "SE", label: "Sweden", code: "se" },
];




export default function JobFindBanner(){
    return(
        <>
              <div className="flex p-10">
        {/* Search content section */}
        <div className="w-2/3 bg-white py-12 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 px-4">
              <h1 className="text-4xl lg:text-5xl font-semibold text-gray-700 mb-4">
                Your Future <span className="text-blue-700">Starts Here!</span>
              </h1>
              <p className="text-gray-500 mb-6">
                Explore personalized job opportunities, expert tools, and
                connections with top companies to advance your career with Skill
                Careers.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 mb-8 ml-1 w-auto rounded-md">
            <select className="bg-[#e6e8f1] border border-2 border-[#B0B6D3] text-[#5462A0] px-20 py-5 font-semibold rounded-md">
              {countries.map((country) => (
                <option key={country.code}>{country.label}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8 rounded-md bg-gray-200">
            <input
              type="text"
              placeholder="Easily find the job you're looking for..."
              className="bg-gray-200 flex-grow px-4 py-6 focus:outline-none rounded-md font-semibold placeholder-[#5462A0]"
            />
            <button className="bg-[#001571] text-white px-14 py-5 mr-2 rounded-md font-semibold w-full sm:w-auto">
              Search
            </button>
          </div>

          <div>
            {/* User images and active users section */}
      <div className="flex items-center space-x-4">
        {/* User images */}
        <div className="flex -space-x-2">
          <Image
            src="/images/people1.jpg"
            alt="User 1"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <Image
            src="/images/people2.jpg"
            alt="User 2"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <Image
            src="/images/people3.jpg"
            alt="User 3"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        {/* Active user stats */}
        <div className="min-h-10 text-blue-900">|</div>
        <div>
          <p className="text-xl font-semibold text-blue-800">6K+</p>
          <p className="text-blue-800">Active Daily Users</p>
        </div>
      </div>

      {/* Features section */}
      <div className="flex space-x-20 text-blue-700  mt-20">
        <div className="flex items-center space-x-2">
          <FaSearch className="w-6 h-6" />
          <p>Advanced Job Search</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaChartLine className="w-6 h-6" />
          <p>Career Growth Resources</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaUserTie className="w-6 h-6" />
          <p>Recruiter Connections</p>
        </div>
      </div>
          </div>
        </div>

        {/* Image section */}
        <div className="w-1/3 flex items-center justify-center">
          <Image src="/images/landingpagegirl.png" alt="girl image" width={565} height={620} />
        </div>
      </div>

        </>
    )
}