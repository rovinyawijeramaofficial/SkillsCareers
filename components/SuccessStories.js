import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SuccessStoryCard from './SuccessStoryCard';

const testimonials = [
  {
    text: "I joined Skill Careers right after graduating with a degree in Computer Science. Within a few weeks, I connected with recruiters at InovaTech Solutions. The platform’s job recommendations matched my skills perfectly, and I landed an interview for a Junior Developer role. Fast forward three years, and I'm now a Senior Full-Stack Developer, leading a team of talented professionals. Skill Careers played a pivotal role in kick-starting my career!",
    name: 'Sarah Collins',
    position: 'Senior Full-Stack Developer',
    company: 'Inova Tech Solutions',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    text: "I joined Skill Careers right after graduating with a degree in Computer Science. Within a few weeks, I connected with recruiters at InovaTech Solutions. The platform’s job recommendations matched my skills perfectly, and I landed an interview for a Junior Developer role. Fast forward three years, and I'm now a Senior Full-Stack Developer, leading a team of talented professionals. Skill Careers played a pivotal role in kick-starting my career!",
    name: 'James Lee',
    position: 'Software Engineer',
    company: 'Tech Innovators',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    text: "I joined Skill Careers right after graduating with a degree in Computer Science. Within a few weeks, I connected with recruiters at InovaTech Solutions. The platform’s job recommendations matched my skills perfectly, and I landed an interview for a Junior Developer role. Fast forward three years, and I'm now a Senior Full-Stack Developer, leading a team of talented professionals. Skill Careers played a pivotal role in kick-starting my career!",
    name: 'Emily Davis',
    position: 'Product Manager',
    company: 'Creative Solutions',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: "I joined Skill Careers right after graduating with a degree in Computer Science. Within a few weeks, I connected with recruiters at InovaTech Solutions. The platform’s job recommendations matched my skills perfectly, and I landed an interview for a Junior Developer role. Fast forward three years, and I'm now a Senior Full-Stack Developer, leading a team of talented professionals. Skill Careers played a pivotal role in kick-starting my career!",
    name: 'Michael Brown',
    position: 'Data Analyst',
    company: 'Analytics Hub',
    image: 'https://randomuser.me/api/portraits/men/66.jpg',
  },
  {
    text: "I joined Skill Careers right after graduating with a degree in Computer Science. Within a few weeks, I connected with recruiters at InovaTech Solutions. The platform’s job recommendations matched my skills perfectly, and I landed an interview for a Junior Developer role. Fast forward three years, and I'm now a Senior Full-Stack Developer, leading a team of talented professionals. Skill Careers played a pivotal role in kick-starting my career!",
    name: 'Sophia Wilson',
    position: 'UX Designer',
    company: 'Design Experts',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 3));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 3));
  };

  return (
    <div className="py-12 bg-gray-100 text-gray-800">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8 p-8">
          <h2 className="text-2xl font-bold text-blue-900">Success Stories from Our Community</h2>
          <a href="#" className="text-blue-900 hover:text-blue-700 font-semibold">
            View All
          </a>
        </div>
        
        <div className="flex items-center">
          <button
            onClick={handlePrev}
            className="text-blue-900 hover:text-blue-700 p-2"
          >
            <FaChevronLeft size={24} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-4">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <SuccessStoryCard key={index} testimonial={testimonial} />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-blue-900 hover:text-blue-700 p-2"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-4 space-x-2">
          {Array(Math.ceil(testimonials.length / 3)).fill().map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`w-3 h-3 rounded-full ${index === Math.floor(currentIndex / 3) ? 'bg-blue-900' : 'bg-gray-300'} cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
