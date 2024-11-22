import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useState, useEffect } from "react";

// Function to shuffle an array
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function Categories() {
  const categories = [
    { id: 1, label: "Creative & Design", icon: "/images/creativeIdea.png" },
    { id: 2, label: "Education & Training", icon: "/images/educationTraining.png" },
    { id: 3, label: "Technology & Development", icon: "/images/technologyDevelopment.png" },
    { id: 4, label: "Operations & Logistics", icon: "/images/operationsLogistics.png" },
    { id: 5, label: "Marketing & Sales", icon: "/images/marketingSales.png" },
  ];

  const totalPages = 6; // Number of pages
  const [currentPage, setCurrentPage] = useState(1);
  const [shuffledCategories, setShuffledCategories] = useState([]);

  // Shuffle categories only once when the component mounts
  useEffect(() => {
    setShuffledCategories(shuffleArray([...categories]));
  }, []);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <Header />
      <div className="p-10">
        <div className="mt-20 mb-12">
          <h2 className="text-4xl text-gray-400 font-bold">
            Search for Job<span className="text-blue-900"> Categories</span>
          </h2>
          <p className="text-gray-500">
            Explore the diverse range of job categories to find the perfect fit for your skills and interests.
          </p>
        </div>
        <div className="bg-[#e6e8f1] h-auto mb-12 p-4 rounded-md">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <input
              type="text"
              placeholder="Easily find the category you’re looking for..."
              className="bg-gray-200 flex-grow px-4 py-6 focus:outline-none w-full rounded-md sm:w-auto font-semibold placeholder-[#5462A0]"
            />
            <button className="bg-[#001571] text-white px-14 py-5 rounded-md font-semibold w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-10 mb-10">
        {[...Array(5)].map((_, rowIndex) => (
          <div key={`${currentPage}-${rowIndex}`} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
            {shuffledCategories.map((category) => (
              <div
                key={category.id}
                className="text-center border p-5 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow aspect-square flex flex-col justify-center"
              >
                <Image src={category.icon} alt={category.label} width={50} height={50} className="mx-auto mb-4" />
                <p className="text-blue-900 font-semibold">{category.label}</p>
              </div>
            ))}
          </div>
        ))}

        {/* Pagination section */}
        <div className="flex justify-center mt-20">
          <div className="flex space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500'} cursor-pointer`}
            >
              {"<"}
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 ${currentPage === i + 1 ? 'text-blue-900 font-bold' : 'text-gray-500'} cursor-pointer`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-500'} cursor-pointer`}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
