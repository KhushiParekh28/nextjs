'use client';
import { useState } from 'react';

const categories = [
  {
    title: 'Makeup',
    subcategories: {
      Face: ['Foundation', 'Compact', 'Highlighter', 'Concealer'],
      Eyes: ['Mascara', 'Eye Shadow', 'Eyeliner', 'Lashes'],
      Lips: ['Lipstick', 'Lip Balm', 'Lip Liner', 'Lip Tint'],
      'Tools & Brushes': ['Face Brush', 'Eye Brush', 'Applicators'],
    },
  },
  { title: 'Skin' },
  { title: 'Fragrance' },
  { title: 'Hair' },
  { title: 'Bath & Body' },
  { title: 'Gifts' },
  { title: 'Trending Now' },
  { title: 'New Launches' },
  { title: 'Minis' },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="bg-pink-100 shadow-md">
      <div className="flex justify-between px-8 py-4">
        <div className="text-pink-600 font-bold text-2xl">NYKAA</div>

        <div className="flex gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHovered(cat.title)}
              onMouseLeave={() => setHovered(null)}
              className="relative group"
            >
              <button className="text-gray-700 hover:text-pink-600 font-medium">
                {cat.title}
              </button>

              {cat.subcategories && hovered === cat.title && (
                <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-6 grid grid-cols-4 gap-8 z-50 min-w-[700px]">
                  {Object.entries(cat.subcategories).map(([section, items], index) => (
                    <div key={index}>
                      <h4 className="text-pink-600 font-semibold">{section}</h4>
                      <ul className="mt-2 space-y-1">
                        {items.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-600 text-sm hover:text-pink-500 cursor-pointer"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
