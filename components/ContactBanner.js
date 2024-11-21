import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export default function ContactBanner() {
  return (
    <>
      {/* Contact banner */}
      <div className="bg-blue-950 h-20 m=10 ">
        <div className="flex flex-row md:flex-row md:justify-between md:gap-3 mr-5 ml-5">
          <div className="flex flex-col items-start gap-2 mb-4 md:mb-0">
            <div className="flex items-center mt-4 space-x-4 text-gray-50">
              {/* Icon */}
              <FaMailBulk size={24} className="cursor-pointer" />

              {/* Text next to the icon */}
              <div className="flex flex-col">
                <div className="text-gray-50">Email</div>
                <div className="text-gray-50">info@skillscareer.com</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 mb-4 md:mb-0">
            <div className="flex items-center mt-4 space-x-4 text-gray-50">
              {/* Icon */}
              <FaPhone size={24} className="cursor-pointer" />

              {/* Text next to the icon */}
              <div className="flex flex-col">
                <div className="text-gray-50">Phone</div>
                <div className="text-gray-50">0112-234-763</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 mr-4 mb-4 md:mb-0">
            <div className="flex items-center mt-4 space-x-4 text-gray-50">
              {/* Icon */}
              <FaLocationArrow size={24} className="cursor-pointer" />

              {/* Text next to the icon */}
              <div className="flex flex-col">
                <div className="text-gray-50">Location</div>
                <div className="text-gray-50">Union Place, Colombo 07</div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-4 text-gray-50 mr-8">
            <FaLinkedin size={24} className="cursor-pointer" />
            <FaTwitter size={24} className="cursor-pointer" />
            <FaInstagram size={24} className="cursor-pointer" />
            <FaFacebook size={24} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
