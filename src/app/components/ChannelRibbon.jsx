import { MapPin, MoreVertical } from "lucide-react";
import { items } from "../assets/inventory";
import Image from "next/image";
import ChannelCarousel from "./ChannelCarousel";

export default function ChannelRibbon() {
  return (
    <div className="flex items-center w-auto h-auto bg-slate-700 ">
      <div className="hover:bg-slate-300 px-4 m-3 rounded-lg">
        <MoreVertical />
      </div>
      <div className="hover:bg-slate-800 p-4 rounded-lg bg-slate-500">
        <div className="flex justify-center text-center items-center">
          <MapPin />
          <p className="font-sans font-semibold ml-2">All Channels</p>
        </div>
      </div>
      <ChannelCarousel />
    </div>
  );
}
