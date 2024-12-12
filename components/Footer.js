import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">ABOUT US</h2>
          <p className="text-sm text-gray-400">
            Trident Academy of Creative Technology, a name that has become a brand in the field of technical education, is today synonymous with excellence. Trident is where Education meets Enthusiasm. Within just a few years of its establishment, Trident group of institutions has built an image amongst the aspiring masses which is worth the quality of education it imparts.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">QUICK LINKS</h2>
          <ul className="text-sm space-y-2">
            <li><a href="/career-guidance" className="hover:text-teal-500">Career Guidance</a></li>
            <li><a href="/alumni-mentoring" className="hover:text-teal-500">Alumni Mentoring</a></li>
            <li><a href="/hostels" className="hover:text-teal-500">Hostels</a></li>
            <li><a href="/learning-resources" className="hover:text-teal-500">Learning Resources</a></li>
            <li><a href="/placement-statistics" className="hover:text-teal-500">Placement Statistics</a></li>
            <li><a href="/notice-board" className="hover:text-teal-500">Notice Board</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">GET IN TOUCH</h2>
          <p className="text-sm text-gray-400 mb-4">
            F-2, Chandaka Industrial Estate, In front of Infocity, Infocity, Chandrasekharpur, Bhubaneswar, Odisha - 751024
          </p>
          <p className="text-sm text-gray-400 mb-4">
            <a href="mailto:info@trident.ac.in" className="hover:text-teal-500">info@trident.ac.in</a>
          </p>
          <p className="text-sm text-gray-400 mb-4">0674-6649003, 6649008, 6649036, 0674-6649043</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <a href="#" className="text-sm text-gray-400 hover:text-teal-500">TOP</a>
      </div>
      <div className="text-center mt-6">
        <p className="text-sm text-gray-400">&copy; 2024 Trident. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" target="_blank" className="text-white hover:text-teal-500">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" className="text-white hover:text-teal-500">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-white hover:text-teal-500">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" className="text-white hover:text-teal-500">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
