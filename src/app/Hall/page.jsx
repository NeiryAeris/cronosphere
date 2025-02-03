import Image from "next/image";
import { items } from "../assets/inventory";
import Navbar from "../components/Navbar";
import BannerCarousel from "../components/BannerCarousel";
import ChannelRibbon from "../components/ChannelRibbon";

// const items = [
//   { id: 1, title: "Artwork 1", imageUrl: "https://via.placeholder.com/150" },
//   { id: 2, title: "Artwork 2", imageUrl: "https://via.placeholder.com/150" },
//   { id: 3, title: "Artwork 3", imageUrl: "https://via.placeholder.com/150" },
//   // Add more items as needed
// ];

export default function HallPage() {
  return (
    <div>
      <Navbar />
      <BannerCarousel />
      <ChannelRibbon />
    </div>
  );
}
