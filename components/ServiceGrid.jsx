'use client';

import { useState } from 'react';

const buttons = [
  {
    label: 'Tire',
    defaultSrc: '/images/SOne_index_bt-tire.jpg',
    hoverSrc: '/images/SOne_index_bt-tire1.jpg',
  },
  {
    label: 'Brake',
    defaultSrc: '/images/SOne_index_bt-break.jpg',
    hoverSrc: '/images/SOne_index_bt-break1.jpg',
  },
  {
    label: 'Battery',
    defaultSrc: '/images/SOne_index_bt-battery.jpg',
    hoverSrc: '/images/SOne_index_bt-battery1.jpg',
  },
  {
    label: 'Shockup',
    defaultSrc: '/images/SOne_index_bt-chokeup.jpg',
    hoverSrc: '/images/SOne_index_bt-chokeup1.jpg',
  },
  {
    label: 'Oil',
    defaultSrc: '/images/SOne_index_bt-oil.jpg',
    hoverSrc: '/images/SOne_index_bt-oil1.jpg',
  },
  {
    label: 'Guarantee',
    defaultSrc: '/images/SOne_index_bt-guarantee.jpg',
    hoverSrc: '/images/SOne_index_bt-guarantee1.jpg',
  },
];

export default function ServiceGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="gap-4 grid grid-cols-12">
      {buttons.map((btn, index) => (
        <div className='col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-2' key={index}>
            <img
          src={hoveredIndex === index ? btn.hoverSrc : btn.defaultSrc}
          alt={btn.label}
          className="cursor-pointer transition-transform hover:scale-105 w-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
        </div>
      ))}
    </div>
  );
}
