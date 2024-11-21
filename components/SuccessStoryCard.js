import { FaQuoteLeft } from 'react-icons/fa';

const SuccessStoryCard = ({ testimonial }) => {
  return (
    <div className="max-w-lg p-6 bg-white shadow-lg rounded-lg text-gray-800">
      <FaQuoteLeft className="text-blue-900 mb-4 text-2xl" />
      <p className="text-sm text-gray-600 italic mb-6">"{testimonial.text}"</p>
      <hr className="my-4 border-gray-300" />
      <div className="flex items-center space-x-4">
        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
        <div>
          <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
          <p className="text-xs text-gray-500">{testimonial.position}</p>
          <p className="text-xs text-gray-500">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
