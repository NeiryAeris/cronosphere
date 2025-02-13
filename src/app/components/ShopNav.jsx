"use client";
import Image from "next/image";
import Link from "next/link";
import { items } from "../assets/inventory";
import { useState } from "react";
import { marketTags } from "../assets/data";

export default function ShopNav() {
  const [showTags, setShowTags] = useState(false);
  const [showSection2, setShowSection2] = useState(true);
  const maxVisibleTags = 10;
  return (
    <div>
      <div className="flex w-auto h-auto m-2 gap-2">
        {/*1. this section will decided weather section 2 appear or not*/}
        <div onClick={() => setShowSection2(true)}>
          <Image src={items.wide_banner} alt="logo" className="h-24 object-cover" />
        </div>
        <div onClick={() => setShowSection2(false)}>
          <Image src={items.wide_banner} alt="logo" className="h-24 object-cover" />
        </div>
      </div>

      {/*2. this section will appear if section 1 is clicked
        also gonna control the tags list in section 3*/}
      {showSection2 && (
        <div className="flex w-auto h-auto m-2 gap-2">
          <div onClick={() => {}}>
            <Image src={items.sub_banner} alt="logo" className="h-24 object-cover" />{" "}
          </div>
          <div>
            <Image src={items.sub_banner} alt="logo" className="h-24 object-cover" />{" "}
          </div>
          <div onClick={() => {}}>
            <Image src={items.sub_banner} alt="logo" className="h-24 object-cover" />{" "}
          </div>
          <div onClick={() => {}}>
            <Image src={items.sub_banner} alt="logo" className="h-24 object-cover" />{" "}
          </div>
          <div onClick={() => {}}>
            <Image src={items.sub_banner} alt="logo" className="h-24 object-cover" />{" "}
          </div>
          <div onClick={() => {}}>
            <Image src={items.sub_banner} alt="logo" className="h-24 object-cover" />{" "}
          </div>
          <div onClick={() => {}}>
            <Image src={items.sub_banner} alt="logo" className="h-24 object-cover" />{" "}
          </div>
        </div>
      )}

      {/* 3. this is where the tags lies */}
      {showSection2 && (
        <div className={`w-auto h-auto m-2 ${showTags ? "flex-col" : "flex"} gap-2`}>
          <div className="flex flex-wrap gap-2">
            {marketTags.slice(0, showTags ? marketTags.length : maxVisibleTags).map((tag, index) => (
              <p key={index} className="text-gray-300 bg-gray-800 px-2 py-1 rounded-sm">
                {tag.tagName}
              </p>
            ))}
          </div>

          {/* "See More" Button */}
          {marketTags.length > maxVisibleTags && (
            <button
              className=" text-blue-400 hover:text-blue-500 hover:bg-slate-600 rounded-sm p-1 box-border"
              onClick={() => setShowTags(!showTags)}
            >
              {showTags ? "See Less" : "See More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
