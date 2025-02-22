// this component placed in Marketplace Item Detail page serve as item preview pictures
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import React from "react";

const ItemPreview = ({ previewPics }) => {
  const imageList = previewPics;
  const picCarousel = useRef(null);
  const pic = imageList[0];
  const [curentPreviewPic, setCurrentPreviewPic] = useState(imageList[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageList.length > 0) {
      setCurrentPreviewPic(imageList[0]);
      setCurrentIndex(0);
    }
  }, [previewPics]);

  const handleClick = (pic, index) => {
    setCurrentPreviewPic(pic);
    setCurrentIndex(index);
  };

  // Handle left and right navigation
  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    setCurrentPreviewPic(imageList[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % imageList.length;
    setCurrentPreviewPic(imageList[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-green-400 pb-1">
      <div>
        <div className="relative flex w-full justify-center">
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 z-10"
            onClick={handlePrev}
          >
            <ChevronLeft size={20} />
          </button>
          <Image src={curentPreviewPic} alt="dummy image" unoptimized className="w-full m-2" />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full hover:bg-white/50 z-10"
            onClick={handleNext}
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="flex overflow-x-auto mb-2 custom-scrollbar pb-2 box-border">
          {imageList.map((pic, index) => (
            <Image
              className={`mr-2 object-cover border-4 box-border cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "border-cyan-400 border-4 scale-105" : "border-transparent"
              }`}
              src={pic}
              key={index}
              height={100}
              width={150}
              alt="sub-preview"
              onClick={() => handleClick(pic,index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemPreview;
