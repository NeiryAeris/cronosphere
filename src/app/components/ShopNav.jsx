"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { items } from "../assets/inventory";
import { marketTags } from "../assets/data";

export default function ShopNav() {
  const [showTags, setShowTags] = useState(false);
  const [showSection2, setShowSection2] = useState(true);
  const [maxVisibleTags, setMaxVisibleTags] = useState(10);
  const containerRef = useRef(null);

  // Dynamically update maxVisibleTags to fit available space
  useEffect(() => {
    const updateMaxTags = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth; // Get container width
        const tagWidth = 100; // Approximate tag width
        const spacing = 8; // Approximate gap between tags
        const tagsPerRow = Math.floor(containerWidth / (tagWidth + spacing));

        setMaxVisibleTags(tagsPerRow - 1); // Reserve space for "Show More"
      }
    };

    updateMaxTags();
    window.addEventListener("resize", updateMaxTags);
    return () => window.removeEventListener("resize", updateMaxTags);
  }, []);

  return (
    <div>
      {/* Section 1 - Toggle Section 2 */}
      <div className="flex w-auto h-auto m-2 gap-2">
        <div onClick={() => setShowSection2(true)} className="cursor-pointer">
          <Image src={items.wide_banner} alt="logo" className="h-24 object-cover" />
        </div>
        <div onClick={() => setShowSection2(false)} className="cursor-pointer">
          <Image src={items.wide_banner} alt="logo" className="h-24 object-cover" />
        </div>
      </div>

      {/* Section 2 - Appears only if showSection2 is true */}
      {showSection2 && (
        <div className="flex w-auto h-auto m-2 gap-2">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="cursor-pointer">
              <Image src={items.sub_banner} alt="logo" className="h-24 object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* Section 3 - Tags List (Only appears if Section 2 is visible) */}
      {showSection2 && (
        <div ref={containerRef} className="w-auto h-auto m-2">
          <div className="flex flex-wrap items-center gap-2">
            {/* Display dynamically calculated number of tags */}
            {marketTags.slice(0, showTags ? marketTags.length : maxVisibleTags - 1).map((tag, index) => (
              <p key={index} className="text-gray-300 bg-gray-800 px-2 py-1 rounded-sm">
                {tag.tagName}
              </p>
            ))}

            {/* "Show More" button always stays in line */}
            {marketTags.length > maxVisibleTags && (
              <p
                className="text-blue-400 hover:text-blue-500 hover:bg-slate-600 rounded-sm p-1 box-border cursor-pointer"
                onClick={() => setShowTags(!showTags)}
              >
                {showTags ? "Show Less" : "Show More"}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Section 4 - Filter Bar */}
      {/* <div className="flex items-center p-2 rounded-md mt-4">
        <div className="w-full h-auto box-border border border-white">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-[#171717] text-white p-2 outline-none w-[99%] m-1 bg-inherit"
          />
        </div>
        <div className="ml-4 flex gap-4">
          <select className="bg-inherit text-white p-2 rounded-md">
            <option>Software: ALL</option>
            <option>Photoshop</option>
            <option>Blender</option>
            <option>Substance Painter</option>
          </select>
          <select className="bg-inherit text-white p-2 rounded-md">
            <option>License: ALL</option>
            <option>Commercial</option>
            <option>Personal</option>
          </select>
          <select className="bg-inherit text-white p-2 rounded-md">
            <option>Price: ALL</option>
            <option>Free</option>
            <option>Paid</option>
          </select>
          <button className="text-blue-400 hover:text-blue-500">Clear Filters</button>
        </div>
      </div> */}

      <div className="flex items-center p-2 rounded-md mt-4">
        <div className="w-full h-auto box-border border border-white max-w-screen-xl">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-[#171717] text-white p-2 outline-none w-[99%] m-1 bg-inherit"
          />
        </div>
        <div className="flex gap-4 items-center justify-between w-max max-w-screen-md ">
          <div className="items-center justify-center text-center">
            <p>Software</p>
          </div>
          <div className="items-center justify-center text-center">
            <p>License</p>
          </div>
          <div className="items-center justify-center text-center">
            <p>Price</p>
          </div>
          <div className="items-center justify-center text-center">
            <p>Clear Filters</p>
          </div>
        </div>
      </div>
    </div>
  );
}
