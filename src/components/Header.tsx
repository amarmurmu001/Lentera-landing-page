import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">LENTERA</div>
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/services" className="hover:text-gray-300">Services</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
          <div className="text-sm">
            <p>101 Dallas Street,</p>
            <p>Chicago, USA 1002</p>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded">
            Start a project →
          </button>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            <Link to="/services" className="hover:text-gray-300">Services</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
            <div className="text-sm">
              <p>101 Dallas Street,</p>
              <p>Chicago, USA 1002</p>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded w-full">
              Start a project →
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;