"use client";
import Image from "next/image";
import Link from "next/link";
import { items } from "../assets/inventory";

export default function ShopNav() {
  return (
    <div>
      <div className="flex w-auto h-auto m-2 gap-2">
        {/*1. this section will decided weather section 2 appear or not*/}
        <div onClick={() => {}}>
          <Image src={items.wide_banner} alt="logo" className="h-24 object-cover" />
        </div>
        <div onClick={() => {}}>
          <Image src={items.wide_banner} alt="logo" className="h-24 object-cover" />
        </div>
      </div>
      <div>
        {/*2. this section will appear if section 1 is clicked*/}
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
      </div>
    </div>
  );
}
