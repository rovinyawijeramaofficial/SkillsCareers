import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';
import FeaturedJobCard from './FeaturedJobCard';

export default function FeaturedJobs() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth; // Scroll by the container width to show 4 new cards
    if (direction === 'left') {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-gray-100 p-8 relative">
      <div className="flex justify-between items-center mb-9 mt-5">
        <h2 className="text-2xl font-bold text-blue-900">Featured Jobs</h2>
        <a href="#" className="text-blue-600 flex items-center space-x-1">
          <span>View All</span>
          <FaChevronRight />
        </a>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10"
        >
          <FaChevronLeft className="text-blue-600" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide"
        >
          {/* Cards - Only 4 will be visible at a time */}
          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-[calc((100%-3rem)/4)]" // 4 cards with even spacing
            >
              <FeaturedJobCard />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10"
        >
          <FaChevronRight className="text-blue-600" />
        </button>
      </div>
    </div>
  );
}
