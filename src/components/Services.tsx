import React from 'react';
import { Star, Heart, PartyPopper, Sparkles } from 'lucide-react';

const Services = () => {
  const categories = [
    {
      title: 'Light Up Letters & Numbers',
      items: [
        'Marquee 4ft Light Up Letters (A-Z) - Multi Coloured RGB',
        'Marquee 4ft Light Up Numbers (0-9) - Multi Coloured RGB',
        'Marquee 4ft Light Up Numbers (0-9) - Cool White Only',
        'Neon Signs'
      ],
      icon: Sparkles
    },
    {
      title: 'Backdrops & Walls',
      items: [
        'Arch Backdrops',
        'Shimmer Backdrop Walls',
        'Flower Walls',
        'Floral Setups'
      ],
      icon: Heart
    },
    {
      title: 'Props & Accessories',
      items: [
        'Garland Frames & Covers',
        'Plinths - Ripple or Plain + Covers',
        'Acrylic Signage Boards',
        'Chair Covers & Tablecloths'
      ],
      icon: PartyPopper
    },
    {
      title: 'Decor Elements',
      items: [
        'Custom Decals',
        'Red & White Carpet',
        'Cake & Dessert Stands',
        'Centrepieces',
        'Candles (All Sizes)'
      ],
      icon: Star
    }
  ];

  return (
    <div id="services" className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create magical moments. We offer a comprehensive range of premium event decoration services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-pink-500" />
                <h3 className="text-2xl font-bold ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-pink-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Perfect For Every Occasion</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Birthdays',
              'Weddings',
              'Engagements',
              'Proposals',
              'Bridal Showers',
              'Gender Reveals',
              'Cultural Ceremonies',
              'Corporate Events',
              'Seasonal Events'
            ].map((event, index) => (
              <span
                key={index}
                className="bg-white text-pink-600 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition"
              >
                {event}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;