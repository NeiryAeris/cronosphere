import { artworks } from "../assets/data";
import Image from "next/image";

export default function ChannelDisplay({ selectedChannel , className }) {
  if (!selectedChannel) return <h1 className={`${className}`}>All Channels</h1>;
  return (
    <div className={`${className}`}>
      <h1 className={`${className}`}>{selectedChannel}</h1>
      <div className="w-auto h-auto grid-flow-col grid-cols-10">
        {artworks
          .filter((artwork) => artwork.channel === selectedChannel)
          .map((artwork, index) => (
            <div key={index} className="w-20 h-20">
              <Image src={artwork.img} alt="Artwork" className="w-20 h-20" />
            </div>
          ))}
      </div>
    </div>
  );
}
