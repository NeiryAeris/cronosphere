"use client";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { items } from "@/app/assets/inventory";
import Image from "next/image";
import { useRef, useState } from "react";
import { channels } from "@/app/assets/data";

export default function ChannelCarousel({ onSelectChannel }) {
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
    <div className="flex items-center w-auto h-auto bg-slate-700 box-border mx-3">
      <button
        onClick={scrollLeft}
        className="absolute left-auto z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        <ChevronLeft size={20} />
      </button>
      <div
        ref={carouselRef}
        className="w-auto h-auto rounded-md flex gap-5 px-2 mx-3 justify-between overflow-hidden whitespace-nowrap"
      >
        {channels.map((channel, index) => (
          <div
          key={channel.id || index}
            className=" w-auto h-auto flex justify-center text-center items-center hover:bg-slate-600 px-2 rounded-md flex-shrink-0"
            onClick={() => onSelectChannel(channel.title)}
          >
            <Image src={channel.img} alt="Artwork 1" className="w-[50px] h-[50px] rounded-lg" />
            <p className="font-sans font-semibold ml-2 break-words whitespace-normal max-w-[150px] text-left">
              {channel.title}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
