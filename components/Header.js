import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
  {/* Top Bar for Contact and Social Media */}
  <div className="bg-teal-800 text-white p-2">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
      <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 mb-2 sm:mb-0">
        <a href="tel:+1234567890" className="hover:underline">
          📞 +1234567890
        </a>
        <a href="mailto:info@tact.edu" className="hover:underline">
          📧 info@tact.edu
        </a>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          Instagram
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </div>

  {/* Main Menu Bar */}
  <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
    <Link href="/" className="flex items-center w-full md:w-auto">
      <img
        src="/logo.png"
        alt="TGI Logo"
        className="h-12 sm:h-16 md:h-24 w-auto mr-3"
      />
      <div className="text-center md:text-left">
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-900">
          TRIDENT ACADEMY OF CREATIVE TECHNOLOGY
        </span>
        <span className="block text-xs sm:text-sm text-gray-600 mt-1">
          Approved by AICTE & Affiliated to BPUT & Utkal University
        </span>
      </div>
    </Link>

    {/* Mobile Menu Icon */}
    <div className="md:hidden ml-auto">
      <button onClick={toggleMenu} className="text-teal-900 p-2">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Additional Bar */}
  <div className="hidden md:flex bg-teal-800 text-white">
    <div className="container mx-auto flex flex-wrap justify-start items-center gap-1 p-3 overflow-x-auto">
      {[
        "HOME",
        "ABOUT",
        "ACADEMICS",
        "RESEARCH",
        "ACTIVITIES",
        "TRAINING",
        "PLACEMENT",
        "BEST PRACTICES",
        "FACILITIES",
        "ADMISSION",
        "ALUMNI",
        "GRIEVANCE",
        "CONTACT",
        "Mandatory Disclosure",
        "AICTE Approvals",
      ].map((item) => (
        <Link
          key={item}
          href={`/${item.replace(/ /g, "-").toLowerCase()}`}
          className="bg-white text-teal-800 hover:bg-gray-300 font-semibold text-xs py-1 px-3 rounded shadow-md text-center whitespace-nowrap"
        >
          {item}
        </Link>
      ))}
    </div>
  </div>

  {/* Mobile Menu */}
  {isMenuOpen && (
    <nav className="md:hidden bg-teal-800 text-white shadow-lg">
      <ul className="flex flex-col space-y-2 p-4">
        {[
          "HOME",
          "ABOUT",
          "ACADEMICS",
          "RESEARCH",
          "ACTIVITIES",
          "TRAINING",
          "PLACEMENT",
          "BEST PRACTICES",
          "FACILITIES",
          "ADMISSION",
          "ALUMNI",
          "GRIEVANCE",
          "CONTACT",
          "Mandatory Disclosure",
          "AICTE Approvals",
        ].map((item) => (
          <li key={item} className="w-full">
            <Link
              href={`/${item.replace(/ /g, "-").toLowerCase()}`}
              className="block bg-white text-teal-900 hover:bg-gray-100 font-semibold text-sm py-3 px-4 rounded shadow-md transition-all duration-300 ease-in-out"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )}
</header>

  );
}
