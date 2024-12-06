import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Top Bar for Contact and Social Media */}
      <div className="bg-teal-800 text-white p-2">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span>
              <a href="tel:+1234567890" className="hover:underline">
                📞 +1234567890
              </a>
            </span>
            <span>
              <a href="mailto:info@tact.edu" className="hover:underline">
                📧 info@tact.edu
              </a>
            </span>
          </div>

          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main Menu Bar */}
      <div className="bg-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center w-full md:w-auto">
            <img
              src="/logo.png"
              alt="TGI Logo"
              className="h-16 md:h-24 w-auto mr-3" // Increased logo size and added margin-right for spacing
            />
            <div>
              <span className="text-2xl md:text-3xl font-semibold text-blue-900">TRIDENT ACADEMY OF CREATIVE TECHNOLOGY</span>
              {/* Text next to the logo */}
              <span className="block text-sm text-gray-600 mt-1">Approved by AICTE & Affiliated to BPUT & Utkal Univercity</span>
              {/* Additional line below */}
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-teal-900 hover:text-teal-600">Home</Link>
            <Link href="/about" className="text-teal-900 hover:text-teal-600">About</Link>
            <Link href="/academics" className="text-teal-900 hover:text-teal-600">Academics</Link>
            <Link href="/admissions" className="text-teal-900 hover:text-teal-600">Admissions</Link>
            <Link href="/contact" className="text-teal-900 hover:text-teal-600">Contact</Link>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-teal-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-4">
              <li><Link href="/" className="text-teal-900 hover:text-teal-600">Home</Link></li>
              <li><Link href="/about" className="text-teal-900 hover:text-teal-600">About</Link></li>
              <li><Link href="/academics" className="text-teal-900 hover:text-teal-600">Academics</Link></li>
              <li><Link href="/admissions" className="text-teal-900 hover:text-teal-600">Admissions</Link></li>
              <li><Link href="/contact" className="text-teal-900 hover:text-teal-600">Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
