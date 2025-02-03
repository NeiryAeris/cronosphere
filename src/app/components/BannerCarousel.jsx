"use client";

import { useRef } from "react";
import { items } from "../assets/inventory";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BannerCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center w-auto h-auto bg-slate-700 mb-5">
      <button
        onClick={scrollLeft}
        className="absolute left-2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        <ChevronLeft size={30} />
      </button>

      <div
        ref={carouselRef}
        className="w-auto h-auto bg-slate-600 rounded-md mb-5 flex gap-5 p-5 m-5 justify-between overflow-hidden"
      >
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
        <Image src={items.banner} alt="Artwork 1" className="w-[250px] h-[150px] rounded-lg" />
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
