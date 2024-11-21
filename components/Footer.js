import React from "react";
import Image from "next/image";
import logo from "../public/images/logowhite.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Logo and Description on opposite corners */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Image
              src={logo}
              alt="Skills Careers Logo"
              width={200}
              height={100}
            />
          </div>

          {/* Description */}
          <div className="max-w-md text-left md:text-right">
            <p>
              Skill Careers connects job seekers, recruiters, and assessors
              through innovative digital solutions, offering a streamlined
              platform for career growth and talent acquisition.
            </p>
          </div>
        </div>

        {/* Bold horizontal line */}
        <hr className="border-t-4 border-white mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start mb-8 space-y-8 md:space-y-0">
          {/* Main Menu */}
          <div>
            <h3 className="font-semibold mb-4">Main Menu</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Explore Recruiters
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:ml-8">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sustainability Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:ml-auto w-full md:w-auto text-center md:text-left">
            <h3 className="font-semibold mb-4">Join Our Newsletter</h3>
            <p className="mb-4">
              Subscribe now for the latest updates on exclusive offers, new packages, and bulk discounts!
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 mb-2 md:mb-0 md:mr-2 w-full md:w-auto rounded-lg border-none text-white bg-blue-700"
              />
              <button className="bg-white text-blue-800 px-4 py-2 rounded-lg w-full md:w-auto">
                Submit Now
              </button>
            </div>
          </div>
        </div>

        {/* Bold horizontal line */}
        <hr className="border-t-4 border-white mb-8" />

        {/* Social Icons and Payment Methods */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="hover:underline ">
              <img src="/images/linkedin.png" alt="Linkedin" className="h-6" />
            </a>
            <a href="#" className="hover:underline">
              <img src="/images/twitter.png" alt="Twitter" className="h-6" />
            </a>
            <a href="#" className="hover:underline">
              <img src="/images/instagram.png" alt="Instagram" className="h-6" />
            </a>
            <a href="#" className="hover:underline">
              <img src="/images/facebook.png" alt="Facebook" className="h-6" />
            </a>
          </div>
          <p className="text-center">© 2024 Skills Careers. All rights reserved.</p>
          <div className="flex space-x-4">
            <img src="/images/visa.png" alt="Visa" className="h-6" />
            <img src="/images/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/images/amex.png" alt="Amex" className="h-6" />
            <img src="/images/discover.png" alt="Discover" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
