// components/Header.js
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="bg-white text-blue-950 p-3">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
          <img src="/images/logo.png" alt="Logo" className="w-[132.37px] h-[60px]" />

          </Link>
          <div>
            <nav className="space-x-6 hidden md:flex font-semibold">
              <Link href="/landingPage">Home</Link>
              <Link href="/explore">Explore Recruiters</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
            </nav>
          </div>
          <div>
            <Link href="/join-as-recruiter">
              <Button>
                <p className="p-3">Join as Recruiter</p>
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <button id="menu-toggle">Menu</button>
          </div>
        </div>
      </header>
      <hr className="border-t-4 border-blue-900 mb-8" />
    </>
  );
};

export default Header;
