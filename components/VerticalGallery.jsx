"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";

import { useRef } from "react";

const images = [
  "/images/SOne_index_banner.jpg",
  "/images/banner_promotion_01.jpg",
  "/images/banner_promotion_02.jpg",
];

export default function VerticalGallery() {
  const mainRef = useRef();
  const thumbsRef = useRef();

  return (
    <div className="flex w-full mx-auto bg-black justify-center items-center h-full">
      {/* Main Image */}
      <div className=" w-full lg:w-4/5 my-auto">
        <Splide
          options={{
            type: "fade",
            pagination: false,
            arrows: false,
            rewind: true,
            width: "100%",
            breakpoints: {
              1023: {
                arrows: true,
              },
            },
          }}
          ref={mainRef}
          className="rounded"
        >
          {images.map((img, i) => (
            <SplideSlide key={i}>
              <img
                src={img}
                alt={`Slide ${i}`}
                className="w-full my-auto object-cover h-full lg:object-contain rounded"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Thumbnails (Vertical) */}
      <div className="hidden w-1/5 lg:flex flex-col items-center justify-center ml-2 h-full TT">
        <Splide
          options={{
            direction: "ttb", // top to bottom
            height: "100%",
            perPage: 3,
            pagination: false,
            arrows: true,
            isNavigation: true,
            gap: "1rem",
            focus: "center",
            breakpoints: {
              1023: {
                height: "auto",
              },
            },
          }}
          ref={thumbsRef}
          className="splide--thumbs"
          onMoved={(splide) => {
            const index = splide.index;
            mainRef.current?.go(index);
          }}
        >
          {images.map((img, i) => (
            <SplideSlide key={i}>
              <img
                src={img}
                alt={`Thumb ${i}`}
                className="cursor-pointer hover:border-orange-500 transition rounded"
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
