"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Product & Services", href: "/", icon: true },
  { label: "Promotions", href: "/promotions", icon: true },
  { label: "News & Events", href: "/news", icon: true },
  { label: "Safety Tips", href: "/safety", icon: true },
  { label: "FAQS", href: "/faq", icon: true },
  { label: "Location", href: "/location", icon: true },
];

const socialIcons = [
  {
    src: "/images/SOne_index_btfacebook.png",
    hover: "/images/SOne_index_btfacebook1.png",
    alt: "Facebook",
  },
  {
    src: "/images/SOne_index_bttwitter.png",
    hover: "/images/SOne_index_bttwitter1.png",
    alt: "Twitter",
  },
  {
    src: "/images/SOne_index_btyoutube.png",
    hover: "/images/SOne_index_btyoutube1.png",
    alt: "YouTube",
  },
];

export default function MainMenuBar() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className=" text-white container mx-auto px-6 md:px-0">
      <div className="w-full bg-black flex items-center justify-between py-2 px-6 md:px-4">
        {/* เมนูหลัก - Desktop */}
        <div className="hidden md:flex items-center gap-4 py-2 justify-center">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center gap-1 cursor-pointer">
              {item.icon && (
                <Image
                  src={
                    pathname === item.href
                      ? "/images/SOne_index_menu02.png"
                      : "/images/SOne_index_menu01.png"
                  }
                  alt=""
                  width={25}
                  height={25}
                />
              )}
              <Link
                href={item.href}
                className={`hover:underline ${
                  pathname === item.href ? "text-orange-500" : ""
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        {/* Hamburger toggle button on mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
        {/* Social icons (always visible) */}
        <div className="flex items-center gap-2 ml-4">
          {socialIcons.map((icon, idx) => (
            <HoverImage
              key={idx}
              src={icon.src}
              hoverSrc={icon.hover}
              alt={icon.alt}
            />
          ))}
        </div>
      </div>
      {/* เมนูมือถือ */}
      {mobileOpen && (
        <div className="flex flex-col md:hidden px-4 py-2 space-y-2 border-t border-orange-500 bg-black">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon && (
                <Image
                  src={
                    pathname === item.href
                      ? "/images/SOne_index_menu02.png"
                      : "/images/SOne_index_menu01.png"
                  }
                  alt=""
                  width={20}
                  height={20}
                />
              )}
              <Link
                href={item.href}
                className={`hover:underline ${
                  pathname === item.href ? "text-orange-500" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function HoverImage({ src, hoverSrc, alt }) {
  return (
    <div className="relative w-6 h-6">
      <Image
        src={src}
        alt={alt}
        fill
        className="absolute transition-opacity duration-200 opacity-100 hover:opacity-0"
      />
      <Image
        src={hoverSrc}
        alt={alt}
        fill
        className="absolute transition-opacity duration-200 opacity-0 hover:opacity-100"
      />
    </div>
  );
}
