"use client";
import Image from "next/image";
import Link from "next/link";
import { items } from "../assets/inventory";

export default function ShopNav() {
  return (
    <div>
      <div className="flex w-auto h-auto m-2 gap-2">
        <div onClick={() => {}}>
          <Image src={items.wide_banner} alt="logo" className="h-24 object-cover" />
        </div>
        <div onClick={() => {}}>
          <Image src={items.wide_banner} alt="logo" className="h-24 object-cover" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
