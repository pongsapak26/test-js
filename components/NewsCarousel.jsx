"use client";

import { useEffect, useState } from "react";

const newsGroups = [
  [
    {
      date: "Mar 27, 2025",
      title: "[New news!!] News and activities...",
      image: "/images/SOne_Mobile_pic.jpg",
    },
    {
      date: "Mar 26, 2025",
      title: "[New news!!] News and activities...",
      image: "/images/SOne_Mobile_pic.jpg",
    },
    {
      date: "Mar 25, 2025",
      title: "[New news!!] News and activities...",
      image: "/images/SOne_Mobile_pic.jpg",
    },
  ],
  [
    {
      date: "Mar 24, 2025",
      title: "[New news!!] News and activities...",
      image: "/images/SOne_Mobile_pic.jpg",
    },
    {
      date: "Mar 23, 2025",
      title: "[New news!!] News and activities...",
      image: "/images/SOne_Mobile_pic.jpg",
    },
    {
      date: "Mar 22, 2025",
      title: "[New news!!] News and activities...",
      image: "/images/SOne_Mobile_pic.jpg",
    },
  ],
  [
    {
      date: "Mar 21, 2025",
      title: "[New news!!] News and activities...",
      image: "/images/SOne_Mobile_pic.jpg",
    },
    {
      date: "Mar 20, 2025",
      title: "[New news!!] News and activities...",
      image: "/images/SOne_Mobile_pic.jpg",
    },
    {
      date: "Mar 19, 2025",
      title: "[New news!!] News and activities...",
      image: "/images/SOne_Mobile_pic.jpg",
    },
  ],
];

export default function NewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsGroups.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border w-full border-b-2 border-orange-500 text-center h-full">
      {/* Header + Dot Navigation */}
      <div className="flex w-full p-2 items-center border-b border-orange-500 justify-between">
        <h2 className="text-xl font-semibold text-black">News & Events</h2>
        <div className="flex space-x-2">
          {newsGroups.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === currentIndex ? "bg-orange-500" : "bg-black"
              } hover:bg-orange-500`}
            />
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${newsGroups.length * 100}%`,
            transform: `translateX(-${
              (100 / newsGroups.length) * currentIndex
            }%)`,
          }}
        >
          {newsGroups.map((group, gi) => (
            <div key={gi} className="flex w-full justify-center p-2 gap-2">
              {group.map((item, ni) => (
                <div
                  key={ni}
                  className="relative group w-full max-w-sm border-r border-orange-500 px-2 bg-white cursor-pointer overflow-hidden"
                >
                  <div className="hidden md:block absolute top-2 left-2 bg-black text-white text-sm px-2 py-1 rounded">
                    {item.date}
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/9] w-full border-b-4 border-transparent group-hover:border-orange-500 object-cover"
                  />
                  <div className="p-2">
                    <h3 className="text-sm group-hover:underline text-black">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
