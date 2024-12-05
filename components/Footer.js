export default function Footer() {
    return (
      <footer className="bg-teal-900 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 TACT. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://facebook.com" target="_blank" className="text-white hover:text-teal-500">Facebook</a>
            <a href="https://twitter.com" target="_blank" className="text-white hover:text-teal-500">Twitter</a>
            <a href="https://instagram.com" target="_blank" className="text-white hover:text-teal-500">Instagram</a>
          </div>
        </div>
      </footer>
    );
  }
  