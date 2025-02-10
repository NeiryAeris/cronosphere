import { artworks } from "../../assets/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { artists } from "../../assets/data";
import avatar from "./alting.jpg";
import {
  Bookmark,
  Eye,
  Facebook,
  GitBranch,
  Github,
  Instagram,
  Linkedin,
  MessageSquare,
  MessageSquareMore,
  ThumbsUp,
} from "lucide-react";

export default async function ArtworkDetail({ params }) {
  const { id } = await params;
  const artwork = artworks.find((art) => art.id === id);
  const artist = artists.find((artArtist) => artArtist.name === artwork.artist) || {
    name: "Unknown",
    img: avatar,
    title: "concept artist",
  };

  if (!artwork) {
    return notFound(); // Show 404 if artwork is not found
  }
  if (!artist) {
    artist.name = "Unknown";
    artist.img = avatar;
  }

  return (
    <div className="container p-4 flex w-screen h-screen">
      {/* artwork section */}
      <div className="mt-4 w-full h-full">
        <Image src={artwork.img} alt={artwork.title} width={600} height={600} className="rounded-lg" />
      </div>
      {/* artist section */}
      <div className="absolute right-2 ml-4  w-[450px] mr-5 box-border">
        {/* infomation section */}
        <div className="bg-slate-700 rounded-lg p-4">
          <div className="flex items-center">
            <Image src={artist.img} alt={artist.name} width={80} height={80} className="rounded-full" />
            <div className="ml-4">
              <p className="mt-2 text-gray-300 font-bold text-2xl">Artist: {artist.name}</p>
              <p className="mt-1s text-gray-500"> {artist.title}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mx-5">
            <button className="flex items-center mt-4 bg-blue-400 p-2 rounded-lg justify-center px-14">
              <ThumbsUp size={20} />
              <p className="ml-2">Like</p>
            </button>
            <button className="flex items-center mt-4 bg-gray-600 p-2 rounded-lg justify-center px-14">
              <Bookmark size={20} />
              <p className="ml-2">Like</p>
            </button>
          </div>
          <div className="mt-4">
            <p className="text-gray-300 font-bold text-2xl">{artwork.title}</p>
            <p className="text-gray-500">{artwork.description}</p>
          </div>
          <div className="flex items-center mt-4 justify-between mx-4">
            <div className="flex items-center mt-4">
              <ThumbsUp />
              <p className="pl-2">{1000}</p>
            </div>
            <div className="flex items-center mt-4">
              <Eye />
              <p className="pl-2">1000</p>
            </div>
            <div className="flex items-center mt-4">
              <MessageSquareMore />
              <p className="pl-2">50</p>
            </div>
          </div>
          <div className="flex items-center mt-4 justify-between mx-6">
            <div className="flex items-center mt-4">
              <Facebook />
              <p className="text-base ml-1">Share</p>
            </div>
            <div className="flex items-center mt-4">
              <Github />
              <p className="text-base ml-1">Share</p>
            </div>
            <div className="flex items-center mt-4">
              <Instagram />
              <p className="text-base ml-1">Share</p>
            </div>
            <div className="flex items-center mt-4">
              <Linkedin />
              <p className="text-base ml-1">Share</p>
            </div>
          </div>
        </div>
        {/* Comment section */}
        <div className="bg-slate-700 rounded-lg p-4 mt-3">
          <input type="text" className="w-[400px]"/>
        </div>
        {/* tags */}
        <div className="bg-slate-700 rounded-lg p-4 mt-3">
          <p>Tags</p>
          <div className="flex flex-wrap mt-2">
            {artwork.tags.map((tag, index) => (
              <p className="p-1 bg-slate-400 m-1 rounded-md text-xs" key={index}>#{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
