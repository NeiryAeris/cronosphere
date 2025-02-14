"use client";
import Image from "next/image";
import { items } from "../assets/inventory";
import Link from "next/link";
import SearchInput from "./SearchInput";
import { LogIn, ShoppingCart } from "lucide-react";
import { MoreVertical } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const loggedIn = false;
  const loggin = useState(loggedIn);
  const signIn = () => {};
  const signUp = () => {};

  return (
    <div className="w-auto h-[80px] bg-slate-600 mb-5 flex items-center sticky top-0 z-50">
      <Image src={items.dummy} alt="Logo 1" className="w-[50px] h-[50px] rounded-lg ml-7" />
      <div className="justify-between flex gap-8 ml-5 items-center font-sans font-semibold text-slate-300">
        <Link className="hover:bg-slate-700 h-auto" href="/">
          Explore
        </Link>
        <Link className="hover:bg-slate-700 h-auto" href="/Learn">
          Learn
        </Link>
        <Link className="hover:bg-slate-700 h-auto" href="/Shop">
          Shop
        </Link>
        <Link className="hover:bg-slate-700 h-auto" href="/Jobs">
          Jobs
        </Link>
      </div>
      <SearchInput className="ml-7 bg-slate-900 w-[1000px] rounded-3xl" />
      <div className="w-auto h-auto mx-auto  justify-between flex gap-5 items-center">
        <div className="mr-8">
          <ShoppingCart />
        </div>
        <Link href="/SignUp" className="w-auto bg-slate-400 px-3 py-1 rounded-lg mx-2 flex items-center">
          Sign up
        </Link>
        <Link href="/Sign" className="w-auto bg-slate-400 px-3 py-1 rounded-lg mx-2 flex items-center">
          <LogIn className="mr-1 " size={20}/>
          Sign in
        </Link>
        <div className="hover:bg-slate-300 p-1 rounded-lg">
          <MoreVertical />
        </div>
      </div>
    </div>
  );
}
