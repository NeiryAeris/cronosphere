"use client";
import Navbar from "./components/Navbar";
import BannerCarousel from "./components/ChannelSection/BannerCarousel";
import ChannelRibbon from "./components/ChannelSection/ChannelRibbon"; 
import ChannelDisplay from "./components/ChannelSection/ChannelDisplay";
import { useState } from "react";

export default function HallPage() {
  const [selectedChannel, setSelectedChannel] = useState(null);
  return (
    <div>
      <BannerCarousel />

      <ChannelRibbon onSelectChannel={setSelectedChannel}/>

      <ChannelDisplay selectedChannel={selectedChannel} className={`m-4`}/>
    </div>
  );
}
