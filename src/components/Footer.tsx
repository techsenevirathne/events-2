import React from 'react';
import { Sparkles, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold">Lighting Edge Events</span>
            </div>
            <p className="text-gray-400 mb-4">
              Dedicated to making your celebrations truly unforgettable. Premium event decoration services for all occasions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-pink-500 transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-500 transition">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-pink-500 transition">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-pink-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Light Up Letters</li>
              <li className="text-gray-400">Balloon Garlands</li>
              <li className="text-gray-400">Backdrop Walls</li>
              <li className="text-gray-400">Props Hire</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lighting Edge Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;