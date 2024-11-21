import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function ContactSection() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-6 mt-10 mx-5 mb-10">
        {/* Contact Form */}
        <div className="md:w-2/3">
          <h3 className="text-blue-900 text-l font-semibold mb-3">
            STILL YOU ARE IN TROUBLE? LET'S REACH US.
          </h3>
          <form>
            <label className="block">
              <input
                type="text"
                className="w-full p-3 border rounded-lg mt-6 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
                placeholder="Name"
              />
            </label>
            <label className="block">
              <input
                type="email"
                className="w-full p-3 border rounded-lg mt-6 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
                placeholder="Email"
              />
            </label>
            <label className="block">
              <input
                type="text"
                className="w-full p-3 border rounded-lg mt-6 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
                placeholder="Contact Number"
              />
            </label>
            <label className="block">
              <input
                type="text"
                className="w-full p-3 border rounded-lg mt-6 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
                placeholder="Subject"
              />
            </label>
            <label className="block mb-10">
              <textarea
                className="w-full p-3 border rounded-lg mt-6 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
                placeholder="Message"
                rows={7}
              />
            </label>
            <Button variant="primary">
              <span className="flex items-center justify-center">
                <Link href="/contact-us">Submit</Link>
                <img
                  src="/images/login-icon.png"
                  alt="Login"
                  className="h-5 w-5 ml-2"
                />
              </span>
            </Button>
          </form>
        </div>

        {/* Images Section */}
        <div className="md:w-1/2 flex flex-wrap justify-center md:justify-start gap-3">
          <div className="flex gap-3">
            <Image
              src="/images/people1.jpg"
              alt="Person 1"
              width={200}
              height={150}
              className="object-cover"
            />
            <Image
              src="/images/people2.jpg"
              alt="Person 2"
              width={200}
              height={150}
              className="object-cover"
            />
            <Image
              src="/images/people3.jpg"
              alt="Person 3"
              width={200}
              height={150}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
