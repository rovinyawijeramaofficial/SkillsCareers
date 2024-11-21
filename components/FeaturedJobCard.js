import Image from 'next/image';

export default function FeaturedJobCard(){

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
        // Repeat similar objects for additional job cards if needed
      ];
    
    return(
        <>
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-72 relative">
            {/* Logo on the top left */}
            <div className="absolute top-10 left-4">
              <Image src={job.logo} alt={`${job.company} logo`} width={80} height={40} />
            </div>
            {/* Date on the top right */}
            <div className="absolute top-4 right-4">
              <p className="text-gray-900">{job.date}</p>
            </div>
            
            <h3 className="text-xl font-bold text-blue-900 mt-12 mb-2">{job.title}</h3>
            <div className="flex space-x-2 mb-4">
              {job.employmentType.map((type, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    type === 'Full Time' ? 'bg-[#001571] text-white' : type === 'On Site' ? 'bg-[#00B6B4] text-white' : ''
                  }`}
                >
                  {type}
                </span>
              ))}
            </div>

            <p className="font-semibold text-gray-700 mt-10">{job.company}</p>
            <p className="text-gray-500 mb-4">{job.location}</p>

            <p className="text-gray-600 mb-4">{job.description}</p>
            <div className="flex space-x-4">
              <button className="bg-[#001571] text-white p-2 rounded-md font-semibold w-auto">
                Apply Now
              </button>
              <button className="border border-[#001571] text-[#001571] p-2 rounded-md font-semibold w-auto">
                Quick View
              </button>
            </div>
          </div>
        ))}
      </div>

        </>
    )
}