// this component placed in Marketplace Item Detail page serve as item preview pictures
"use client";
import Image from "next/image";
import { useRef, useState } from "react";

import React from "react";

const ItemPreview = ({ context }) => {
  const imageList = Object.values(context);
  const picCarousel = useRef(null);

  const [curentPreviewPic, setCurrentPreviewPic] = useState(imageList[0]);

  return (
    <div className="bg-green-400 pb-1">
      <div>
        <div className="flex w-full justify-center">
          <Image
            src={curentPreviewPic}
            alt="dummy image"
            unoptimized
            className="w-full m-2"
          />
        </div>
        <div className="flex overflow-x-auto mb-2 custom-scrollbar pb-2">
          {Object.values(context).map((pic, index) => (
            <Image src={pic} key={index} height={100} width={150} alt="sub-preview" className="mr-2 object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemPreview;
