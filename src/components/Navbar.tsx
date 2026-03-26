import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/diensten' },
    { name: 'About Us', path: '/over-mij' },
    { name: 'Resources', path: '/kennisbank' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#FDFBF7]/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <ShieldCheck className="h-8 w-8 text-teal-600" />
              <span className="font-serif font-bold text-2xl text-teal-900 tracking-tight">Lumina <span className="text-stone-500 font-sans font-medium text-lg">Privacy</span></span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path) ? 'text-teal-900 border-b-2 border-rose-300' : 'text-stone-600 hover:text-teal-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-teal-800 text-stone-50 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm"
            >
              Free Intake
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-teal-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-t border-stone-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-2xl text-base font-medium ${
                  isActive(link.path) ? 'text-teal-900 bg-teal-50' : 'text-stone-600 hover:text-teal-900 hover:bg-stone-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
