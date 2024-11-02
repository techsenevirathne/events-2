import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-setting-up-party-decorations-2683/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="text-center md:text-left text-white">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <Sparkles className="h-12 w-12 text-pink-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Making Your Events
            <span className="block text-pink-400">Truly Unforgettable</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Premium event decoration services for all occasions. From elegant weddings to vibrant celebrations, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#packages"
              className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600 transition shadow-lg text-lg font-semibold"
            >
              View Our Packages
            </a>
            <a
              href="#contact"
              className="bg-transparent text-white px-8 py-4 rounded-full border-2 border-white hover:bg-white/10 transition text-lg font-semibold"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-white/50 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;