import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">Lighting Edge Events</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-500 transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-pink-500 transition">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-pink-500 transition">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-500 transition">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-pink-500">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-pink-500">Services</a>
            <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-pink-500">Gallery</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-pink-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;