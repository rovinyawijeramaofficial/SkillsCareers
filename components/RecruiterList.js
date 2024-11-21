import { useState } from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

export default function RecruiterListPage() {
  // Example recruiter data
  const recruiters = [
    {
      id: 1,
      name: "AerFin Technologies PVT (LTD)",
      location: "San Francisco, Canada",
      industry: "Technology & Development",
      employees: "11 - 50 Employees",
      description:
        "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
      phone: "011-2353-876",
      email: "info@aerfintechnologies.com",
      memberSince: "Feb 2024",
      logo: "/images/AerFin.png",
      socialLinks: [
        { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaInstagram  className="text-blue-800 w-8 h-8" />, url: "#" },
        { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
      ],
    },
    {
        id: 2,
        name: "AerFin Technologies PVT (LTD)",
        location: "San Francisco, Canada",
        industry: "Technology & Development",
        employees: "11 - 50 Employees",
        description:
          "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
        phone: "011-2353-876",
        email: "info@aerfintechnologies.com",
        memberSince: "Feb 2024",
        logo: "/images/AerFin.png",
        socialLinks: [
          { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaInstagram  className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
        ],
      },
      {
        id: 3,
        name: "AerFin Technologies PVT (LTD)",
        location: "San Francisco, Canada",
        industry: "Technology & Development",
        employees: "11 - 50 Employees",
        description:
          "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
        phone: "011-2353-876",
        email: "info@aerfintechnologies.com",
        memberSince: "Feb 2024",
        logo: "/images/AerFin.png",
        socialLinks: [
          { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaInstagram  className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
        ],
      },
      {
        id: 4,
        name: "AerFin Technologies PVT (LTD)",
        location: "San Francisco, Canada",
        industry: "Technology & Development",
        employees: "11 - 50 Employees",
        description:
          "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
        phone: "011-2353-876",
        email: "info@aerfintechnologies.com",
        memberSince: "Feb 2024",
        logo: "/images/AerFin.png",
        socialLinks: [
          { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaInstagram  className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
        ],
      },
      {
        id: 5,
        name: "AerFin Technologies PVT (LTD)",
        location: "San Francisco, Canada",
        industry: "Technology & Development",
        employees: "11 - 50 Employees",
        description:
          "TalentConnect Group is a leading recruitment firm specializing in technology and startup talent acquisition. With over 12 years of experience in the industry, TalentConnect has built a reputation for delivering top-tier executive and technical professionals to some of the most innovative companies in Silicon Valley. From software engineers to product managers, the firm focuses on matching the best talent with growth-focused startups and mid-sized companies.",
        phone: "011-2353-876",
        email: "info@aerfintechnologies.com",
        memberSince: "Feb 2024",
        logo: "/images/AerFin.png",
        socialLinks: [
          { icon: <FaLinkedin className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaTwitter className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaInstagram  className="text-blue-800 w-8 h-8" />, url: "#" },
          { icon: <FaFacebook className="text-blue-800 w-8 h-8" />, url: "#" },
        ],
      },
  
  
  
  
    // Add more recruiters as needed
  ];

  const itemsPerPage = 4; // 7 recruiters per page
  const totalPages = Math.ceil(recruiters.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate which recruiters to show based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRecruiters = recruiters.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="p-5 bg-gray-50 min-h-screen">
        {/* Page Header */}
        <div className="flex flex-row mb-6 justify-between">
          <h2 className="text-3xl font-bold">Search Results</h2>
          <p className="text-blue-900 font-semibold">145 Results</p>
        </div>

        {/* Recruiter List */}
        <div className="space-y-6">
          {currentRecruiters.map((recruiter) => (
            <div
              key={recruiter.id}
              className="border rounded-lg bg-white p-6 shadow-md"
            >
              {/* Member Since */}
              <p className="text-gray-800 font-semibold text-right ">
                Member Since {recruiter.memberSince}
              </p>

              <div className="flex flex-col md:flex-row">
                {/* Recruiter Logo */}
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <Image
                    src={recruiter.logo}
                    alt={`${recruiter.name} logo`}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                {/* Recruiter Details */}
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    {/* Company Name */}
                    <h3 className="text-xl font-bold text-blue-900">
                      {recruiter.name} <span className="text-blue-500">✓</span>
                    </h3>
                    {/* Social Media Icons */}
                    <div className="flex gap-4 mt-4 mr-5 justify-end">
                      {recruiter.socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className="text-gray-500 hover:text-blue-900"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-8 mt-2">
                    {/* Location, Category, Employee Range */}
                    <div className="flex flex-row justify-between gap-2">
                      <Image
                        src="/images/location.png"
                        alt="location"
                        width={20}
                        height={2}
                      />
                      <p className="text-gray-800 font-semibold">{recruiter.location}</p>
                    </div>
                    <div className="flex flex-row justify-between gap-2">
                      <Image
                        src="/images/category.png"
                        alt="location"
                        width={20}
                        height={2}
                      />

                      <p className="text-gray-800 font-semibold">{recruiter.industry}</p>
                    </div>
                    <div className="flex flex-row justify-between gap-2">
                      <Image
                        src="/images/user-octagon.png"
                        alt="location"
                        width={20}
                        height={2}
                      />

                      <p className="text-gray-800 font-semibold">{recruiter.employees}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-8 mb-6">{recruiter.description}</p>
                  {/* Contact Information */}
                  <div className="flex gap-8 mt-4">
                    <button className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md">
                      <FaPhoneAlt className="mr-2" />
                      {recruiter.phone}
                    </button>
                    <button className="flex items-center bg-blue-900 text-white px-4 py-2 rounded-md">
                      <FaEnvelope className="mr-2" />
                      {recruiter.email}
                    </button>
                  </div>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col gap-2 mt-4 justify-between">
                {/* Action Buttons */}
                <div className="flex justify-end gap-8">
                  <button className=" text-blue-900 border-blue-950 border-2 px-4 py-2 rounded-md">
                  <div className="flex flex-row justify-between gap-2">

                    <Image src="/images/arrow-up.png" alt="arrow" width={20} height={4}/>
                    <span>View Profile</span>
                    </div>
                  </button>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-md">
                    Open Jobs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ul className="flex space-x-2">
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <li key={pageNumber} className={`cursor-pointer ${currentPage === pageNumber + 1 ? "text-blue-900 font-semibold" : "text-gray-600"}`} onClick={() => handlePageChange(pageNumber + 1)}>
              {pageNumber + 1}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
}
