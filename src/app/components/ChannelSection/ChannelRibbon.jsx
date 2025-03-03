import { MapPin, MoreVertical } from "lucide-react";
import { items } from "@/app/assets/inventory";
import Image from "next/image";
import ChannelCarousel from "./ChannelCarousel";

export default function ChannelRibbon({onSelectChannel}) {
  return (
    <div className="flex items-center w-auto h-auto ">
      <div className="hover:bg-slate-300 px-4 mx-3 rounded-lg">
        <MoreVertical />
      </div>
      <div className="hover:bg-slate-800 p-2 rounded-lg bg-slate-800">
        <div className="flex justify-center text-center items-center">
          <MapPin className="ml-2" size={30}/>
          <p className="font-sans font-semibold ml-1">All Channels</p>
        </div>
      </div>
      <ChannelCarousel onSelectChannel={onSelectChannel} />
    </div>
  );
}
