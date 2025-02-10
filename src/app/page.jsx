"use client";
import Navbar from "./components/Navbar";
import BannerCarousel from "./components/BannerCarousel";
import ChannelRibbon from "./components/ChannelRibbon";
import ChannelDisplay from "./components/ChannelDisplay";
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
