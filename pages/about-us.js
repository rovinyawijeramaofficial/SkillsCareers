import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function AboutUsPage() {
  const features = [
    {
      title: "Comprehensive Job Portal",
      description:
        "Access thousands of opportunities across multiple industries",
      imageUrl: "/images/Rectangle 162.png", // replace with actual image path
    },
    {
      title: "Support at Every Stage",
      description:
        "Whether you're searching for a job or hiring top talent, we're here to guide and support you.",
      imageUrl: "/images/Rectangle 162 (1).png", // replace with actual image path
    },
    {
      title: "Personalized Recommendations",
      description:
        "Get job matches tailored to your skills, experience, and preferences.",
      imageUrl: "/images/Rectangle 162 (2).png", // replace with actual image path
    },
    {
      title: "Trusted by Top Employers",
      description:
        "Join a platform where top organizations seek out the best candidates.",
      imageUrl: "/images/Rectangle 162 (3).png", // replace with actual image path
    },
    {
      title: "Fast & Easy Application Process",
      description:
        "Our user-friendly platform makes applying to jobs quick and simple.",
      imageUrl: "/images/Rectangle 162 (4).png", // replace with actual image path
    },
    {
      title: "Expert Career Resources",
      description:
        "We offer career advice, resume-building tools, and skill assessments to help you stand out.",
      imageUrl: "/images/Rectangle 162 (5).png", // replace with actual image path
    },
  ];
  return (
    <>
      <Header />
      {/* Upper Banner */}
      <div
        className="relative hidden md:flex md:w-full bg-cover bg-center h-80"
        style={{ backgroundImage: "url('/images/backgroundImage.png')" }}
      >
        {/* Content */}
        <div className="flex flex-col items-start justify-end p-10 bg-black bg-opacity-30 text-white h-full w-full ">
          <h1 className="text-6xl ml-3 font-bold mb-2 ">Empowering Careers,</h1>
          <h2 className="text-6xl ml-3 font-bold mb-4 ">
            Connecting Talent With Opportunity.
          </h2>
        </div>
      </div>

      {/* Who we are */}
      <div className="bg-blue-950 text-gray-100 py-12">
        <h3 className="text-2xl font-semibold p-6">Who We Are</h3>
        <div className="flex flex-col md:flex-row justify-center gap-20 px-6  m-10">
          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="leading-relaxed text-lg">
              At Skill Careers, we believe that finding the right job or the
              right talent should be seamless and efficient. Founded with the
              mission to bridge the gap between job seekers and recruiters, we
              are committed to offering a platform that is both easy to use and
              highly effective. Whether you're a job seeker looking to advance
              your career or a recruiter seeking top talent, Skill Careers is
              here to support you every step of the way.
            </p>
          </div>

          {/* People Images */}
          <div className="md:w-1/2 flex gap-4 justify-end md:justify-start">
            <Image
              src="/images/people1.png"
              alt="Person 1"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Image
              src="/images/people2.png"
              alt="Person 2"
              width={150}
              height={150}
              className="rounded-lg"
            />
            <Image
              src="/images/people3.png"
              alt="Person 3"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="bg-blue-950 text-gray-100 py-12">
        <h3 className="text-2xl font-semibold text-left mb-6 ml-6">
          What We Offer
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-20 px-6">
          {/* Job Seekers Card */}
          <div className="bg-white text-blue-950 rounded-lg shadow-md p-6 md:w-1/3">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* SVG icon for job seekers */}
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-13h2v6h-2zm1 8a1.5 1.5 0 1 0 1.5-1.5A1.5 1.5 0 0 0 12 15z" />
              </svg>
              <h4 className="text-lg font-semibold ml-2">For Job Seekers</h4>
            </div>
            <p className="text-gray-800">
              Skill Careers provides access to thousands of job opportunities
              across various industries. Our personalized job recommendations,
              career development resources, and advanced search tools help you
              find the perfect role that matches your skills and goals.
            </p>
          </div>

          {/* Recruiters Card */}
          <div className="bg-white text-blue-950 rounded-lg shadow-md p-6 md:w-1/3">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* SVG icon for recruiters */}
                <path d="M3 3v18h18V3zm2 2h14v14H5zm7 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm0 6a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm-5.5 5.5A4.5 4.5 0 0 1 9 15h6a4.5 4.5 0 0 1 4.5 4.5z" />
              </svg>
              <h4 className="text-lg font-semibold ml-2">For Recruiters</h4>
            </div>
            <p className="text-gray-800">
              Our platform offers tailored recruitment packages, allowing
              companies to post jobs, access candidate databases, and utilize
              assessment tools for efficient hiring. From small businesses to
              large enterprises, Skill Careers helps you find and connect with
              top talent quickly and effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div>
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <img
                    src={feature.imageUrl}
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Vision & Mission */}
      <div className="bg-blue-950 text-gray-100 py-12">
        <h3 className="text-2xl font-semibold text-left mb-6 ml-6">
          {" "}
          Vision & Mission
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-20 px-6">
          {/* Vision */}
          <div className="bg-white text-blue-950 rounded-lg shadow-md p-6 md:w-1/3">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 4.5C7.305 4.5 3.336 7.314 1.659 11.25c1.677 3.936 5.646 6.75 10.341 6.75s8.664-2.814 10.341-6.75C20.664 7.314 16.695 4.5 12 4.5zm0 10.5a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1-4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5A2.503 2.503 0 0 0 12 8z" />
              </svg>
              <h4 className="text-lg font-semibold ml-2">Over Vision</h4>
            </div>
            <p className="text-gray-800">
              To be the premier platform that transforms the future of job
              searching and recruitment by creating meaningful connections,
              empowering individuals, and driving business success globaly.
            </p>
          </div>

          {/* Mission*/}
          <div className="bg-white text-blue-950 rounded-lg shadow-md p-6 md:w-1/3">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-13h-2v3H8v2h3v3h2v-3h3v-2h-3z" />
              </svg>
              <h4 className="text-lg font-semibold ml-2">Our Mission</h4>
            </div>
            <p className="text-gray-800">
              We strive to simplify and elevate the recruitement experience for
              bth job seekers and employers. By leveraging innovative technology
              and personalized support, we connect the right talent with the
              right opportunities, foresting growth , success, and a stronger
              workforce for the future.
            </p>
          </div>
        </div>
      </div>

{/* Commitment Section */}
<div className="bg-gray-50 text-blue-900 py-12 ">
  <h3 className="text-2xl font-semibold text-center mb-8">Who We Are</h3>
  
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-10">
    {/* Text Content */}
    <div className="md:w-1/2 justify-start">
      <p className="leading-relaxed text-lg">
        At Skill Careers, we believe that finding the right job or the right talent should be seamless and efficient. Founded with the mission to bridge the gap between job seekers and recruiters, we are committed to offering a platform that is both easy to use and highly effective. Whether you're a job seeker looking to advance your career or a recruiter seeking top talent, Skill Careers is here to support you every step of the way.
      </p>
    </div>
    
    {/* Image */}
    <div className="md:w-1/2 w-full flex justify-center md:justify-start">
      <Image
        src="/images/future.png"
        alt="Person 1"
        width={300}  
        height={300} 
        className="rounded-lg object-cover w-full h-auto"
      />
    </div>
  </div>
</div>
      <Footer />
    </>
  );
}
