import Image from "next/image";
import Link from "next/link";
import avatar from "./alting.jpg";
import { Heart, ShoppingBasket } from "lucide-react";
import { artists, marketItems } from "@/app/assets/data";
import ItemPreview from "@/app/components/MarketplaceSection/ItemPreview";
import { notFound } from "next/navigation";
import { Facebook, Twitter, Linkedin, Instagram, Link2 } from "lucide-react";

export default async function MarketItemDetail({ params }) {
  const { id } = await params;
  const marketItem = marketItems.find((item) => item.itemID === Number(id));
  // const artist = artists.find((itemArtist) => itemArtist.name === marketItem.itemAuthor) || {
  //   name: "Unknown",
  //   img: avatar,
  //   title: "concept artist",
  // };

  if (!marketItem) {
    return notFound(); // Show 404 if artwork is not found
  }
  // if (!artist) {
  //   artist.name = "Unknown";
  //   artist.img = avatar;
  // }

  return (
    <div className="px-10 box-border mx-48 min-h-screen">
      <div className="w-full mr-10 mb-2">
        <div className="mb-1 ">
          <p className="text-slate-400 hover:text-slate-200">Marketplace / Game Assets / Industrial Smart Materials</p>
        </div>
        <div>
          <h1 className="text-3xl">Marketplace Item Title</h1>
          <div className="flex items-center mt-1">
            <Link href={"/"}>
              <Image src={avatar} alt="author avatar" width={25} height={25} className="rounded-xl mr-2" />
            </Link>
            <span className="mr-2 text-gray-500">by</span>
            <p className="text-blue-300 hover:text-blue-400">author name</p>
            <span className="mx-2 w-1 h-1 bg-white rounded-full inline-block"></span>
            <Link href={"/"} className=" cursor-pointer underline text-blue-300 hover:text-white">
              Seller Infomation
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        {/* the section below is marketplace item descriptions */}
        <div className="w-screen mr-2 pt-2 pb-2">
          <ItemPreview previewPics={marketItem.previewPics} />
          <div className="mt-2">
            <p>{marketItem.itemDescription}</p>
          </div>
        </div>
        {/* later on, the section below will display the bundles that the item have */}
        <div className="w-[750px] mt-4">
          <div className="mb-5 mx-4 p-4 rounded-sm border-2 border-slate-400 box-border">
            <div>
              <h1 className="flex justify-between font-bold text-xl">
                bundle title <span>Free</span>
              </h1>
            </div>
            <div>
              <p className="text-gray-500">
                License: <span>Standart License</span>
              </p>
              <p>License type</p>
            </div>
            <div className="flex">
              <div className="w-full flex justify-center text-center hover:bg-slate-400 mr-2 my-1 bg-yellow-500 rounded-md py-3">
                <ShoppingBasket size={20} />
                <p className="pl-2">Add To Cart</p>
              </div>
              <div className="flex justify-center items-center p-2 my-1 border rounded-md hover:bg-slate-500">
                <Heart size={30} />
              </div>
            </div>
          </div>
          <div className="mb-5 mx-4 p-4 rounded-sm border-2 border-slate-400 box-border">
            <div>
              <h1 className="flex justify-between font-bold text-xl">
                bundle title <span>Free</span>
              </h1>
            </div>
            <div>
              <p className="text-gray-500">
                License: <span>Standart License</span>
              </p>
              <p>License type</p>
            </div>
            <div className="flex">
              <div className="w-full flex justify-center text-center hover:bg-slate-400 mr-2 my-1 bg-yellow-500 rounded-md py-3">
                <ShoppingBasket size={20} />
                <p className="pl-2">Add To Cart</p>
              </div>
              <div className="flex justify-center items-center p-2 my-1 border rounded-md hover:bg-slate-500">
                <Heart size={30} />
              </div>
            </div>
          </div>
          <div className="mb-5 mx-4 p-4 rounded-sm border-2 border-slate-400 box-border">
            <div>
              <h1 className="flex justify-between font-bold text-xl">
                bundle title <span>Free</span>
              </h1>
            </div>
            <div>
              <p className="text-gray-500">
                License: <span>Standart License</span>
              </p>
              <p>License type</p>
            </div>
            <div className="flex">
              <div className="w-full flex justify-center text-center hover:bg-slate-400 mr-2 my-1 bg-yellow-500 rounded-md py-3">
                <ShoppingBasket size={20} />
                <p className="pl-2">Add To Cart</p>
              </div>
              <div className="flex justify-center items-center p-2 my-1 border rounded-md hover:bg-slate-500">
                <Heart size={30} />
              </div>
            </div>
          </div>

          <div className="mb-5 mx-4 p-1 bg-slate-900">
            <div className=" flex justify-between ">
              <button className="flex items-center bg-blue-500 p-1 px-2">
                <Facebook size={20} />
                <p className="ml-1 inline">Share</p>
              </button>
              <button className="flex items-center bg-red-500 p-1 px-2">
                <Instagram size={20} />
                <p className="ml-1 inline">Share</p>
              </button>
              <button className="flex items-center bg-cyan-400 p-1 px-2">
                <Twitter size={20} />
                <p className="ml-1 inline">Share</p>
              </button>
              <button className="flex items-center bg-blue-600 p-1 px-2">
                <Linkedin size={20} />
                <p className="ml-1 inline">Share</p>
              </button>
            </div>
            <p className="flex p-1 px-2 mt-1 bg-black justify-between items-center hover:text-cyan-300 hover:cursor-pointer">
              share link{" "}
              <span>
                <Link2 size={15} />
              </span>
            </p>
            <div>
              <p></p>
              <p></p>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
