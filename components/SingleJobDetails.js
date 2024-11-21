// components/SingleJobDetails.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import SimilarJobs from './SimilarJobs';



const SingleJobDetails = () => {

    const jobs = [
        {
          id: 1,
          logo: '/images/AerFinLogo.png',
          date: '08 Jan 2024',
          title: 'Senior UX/UI Designer',
          company: 'InnovateTech Solutions',
          location: 'New York, NY',
          description: 'Join our creative team to design intuitive user experiences and interfaces for cutting-edge tech solutions. Ideal for someone with a passion for modern design trends.',
          employmentType: ['Full Time', 'On Site'],
        },
      ];
    

  return (
    <>
    <Header/>

    <div className="max-w-full mx-auto  bg-white shadow-md rounded-md">
      <div className='p-20'>
    {jobs.map((job) => (
  <div className="flex items-center justify-between mb-8 mt-5">
    {/* Left: Logo */}
    <Image src="/images/AerFinLogo.png" alt="logo" width={80} height={40} />

    {/* Right: Date */}
    <p className="text-blue-950">{job.date}</p>
  </div>
))}
      <div className="flex justify-between items-center">
<div>
<div className="flex items-center justify-between">
  {/* Left: Job Title */}
  <h1 className="text-2xl font-bold text-blue-900 mr-4">Senior UX/UI Designer</h1>

  {/* Right: Buttons */}
  <div className="flex space-x-2">
    <span className="px-3 py-1 text-xs bg-[#001571] text-white rounded">Full Time</span>
    <span className="px-3 py-1 text-xs bg-[#00B6B4] text-white rounded">On Site</span>
  </div>
</div>
<div>
          <p className="text-gray-800 font-semibold mt-6 mb-6">InnovateTech Solutions | Colombo, Sri Lanka</p>
          
        </div>
        </div>

<div className="flex justify-between items-center">
  <button className="px-4 py-2 mr-5 text-blue-950 border-2 border-blue-900 flex items-center space-x-2">
    <span>View Company Profile</span>
    <FaArrowRight className="text-blue-900" />
  </button>
  
  <button className="px-4 py-2 bg-blue-950 text-white">
    Apply Now
  </button>
</div>
      </div>

      <div className="w-full border-t border-gray-300"></div>


      <div className="mt-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700 ">
          As a Senior UX/UI Designer at InnovateTech Solutions, you will work with a talented team of designers and developers
          to create intuitive, user-centered designs for our cutting-edge digital products. We are looking for a creative
          thinker who has a passion for modern design and enjoys collaborating in a fast-paced environment. You’ll be
          responsible for translating user needs into interactive, high-performing web and mobile applications.
        </p>
      </div>

      <div className="mt-3 mb-3 w-full border-t border-gray-300"></div>


      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-6">Key Responsibilities</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-5">
          <li>Design engaging and user-friendly interfaces for web and mobile applications.</li>
          <li>Conduct user research, wireframing, prototyping, and usability testing to improve designs.</li>
          <li>Collaborate with cross-functional teams including developers, product managers, and marketers.</li>
          <li>Maintain and evolve design systems to ensure consistency across all platforms.</li>
          <li>Stay updated with the latest design trends, tools, and technologies.</li>
        </ul>
      </div>

      <div className="mt-3 mb-3 w-full border-t border-gray-300"></div>


      <div className="mt-6 ">
        <h2 className="text-xl font-semibold mb-6">Required Qualifications</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-5">
          <li>5+ years of experience in UX/UI design.</li>
          <li>Strong portfolio showcasing user-centered design and problem-solving skills.</li>
          <li>Proficiency in design tools like Figma, Sketch, and Adobe Creative Suite.</li>
          <li>Experience with HTML/CSS and front-end frameworks is a plus.</li>
          <li>Excellent communication skills and ability to work in a team environment.</li>
        </ul>
      </div>

      <div className="mt-3 mb-3 w-full border-t border-gray-300"></div>


      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-6">Perks & Benefits</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Remote work flexibility.</li>
          <li>Health, dental, and vision insurance.</li>
          <li>401(k) plan with company match.</li>
          <li>Professional development opportunities.</li>
          <li>Flexible vacation policy.</li>
        </ul>
      </div>
      </div>

      <SimilarJobs/>
    </div>
    <Footer/>
    </>
  );
};

export default SingleJobDetails;
