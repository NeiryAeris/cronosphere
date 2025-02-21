import Image from "next/image";
import Link from "next/link";
import avatar from "./alting.jpg";
import { Heart, ShoppingBasket } from "lucide-react";

export default async function MarketItemDetail({ params }) {
  const { id } = await params;

  return (
    <div className="px-10 box-border">
      <div className="w-full bg-slate-600 mr-10">
        <div>
          <p>Marketplace / Game Assets / Industrial Smart Materials</p>
        </div>
        <div>
          <h1>Marketplace Item Title</h1>
          <div className="flex items-center">
            <Link href={"/"}>
              <Image src={avatar} alt="author avatar" width={20} height={20} className="rounded-lg mr-2" />
            </Link>
            <span className="mr-2 text-gray-500">by</span>
            <p>author name</p>
            <span className="mx-2 w-1 h-1 bg-white rounded-full inline-block"></span>
            <Link href={"/"} className=" cursor-pointer underline text-blue-500 hover:text-white">
              Seller Infomation
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full bg-slate-400">
        {/* the section below is marketplace item descriptions */}
        <div className="w-screen"></div>
        {/* later on, the section below will display the bundles that the item have */}
        <div className="w-[750px]">
          <div className="mb-5 bg-cyan-600 mx-4 p-4 rounded-md border box-border">
            <div>
              <h1 className="flex justify-between">
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
          <div className="mb-5 bg-cyan-600 mx-4 p-4 rounded-md border box-border">
            <div>
              <h1 className="flex justify-between">
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
          <div className="mb-5 bg-cyan-600 mx-4 p-4 rounded-md border box-border">
            <div>
              <h1 className="flex justify-between">
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
        </div>
      </div>
    </div>
  );
}
