'use client';

import Image from 'next/image';
import React from 'react';

const images = [
  '/images/1651239730phpQs8lrL.jpeg',
  '/images/image.png',
  '/images/download.jpg',
];

export default function Hero() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-pink-50">
      <div className="inline-block animate-scroll whitespace-nowrap">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`banner-${i}`}
            width={500}
            height={300}
            className="inline-block mx-2 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
