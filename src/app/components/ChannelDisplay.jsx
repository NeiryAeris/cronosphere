import Link from "next/link";
import { artworks } from "../assets/data";
import Image from "next/image";

export default function ChannelDisplay({ selectedChannel, className }) {
  if (!selectedChannel) return <h1 className={`${className}`}>All Channels</h1>;
  return (
    <div className={`${className}`}>
      <h1 className={`font-bold text-2xl`}>{selectedChannel}</h1>
      <div className="w-auto h-auto grid grid-cols-7 gap-y-3">
        {artworks
          .filter((artwork) => artwork.channelTitle === selectedChannel)
          .map((artwork, index) => (
            <Link key={artwork.id} href={`/artwork/${artwork.id}`}>
            <div key={index} className="max-w-[250px] max-h-[250px] w-[250px] h-[250px]">
              <Image
                src={artwork.img}
                alt={artwork.title}
                className="object-cover overflow-hidden w-full h-full rounded-sm"
                width={250}
                height={250}
              />
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
