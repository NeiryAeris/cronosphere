import Image from "next/image";
import Link from "next/link";
import avatar from "./alting.jpg";
import { ShoppingBasket } from "lucide-react";

export default async function MarketItemDetail({ params }) {
  const { id } = await params;

  return (
    <div className="px-10 flex box-border">
      <div className="w-screen bg-slate-600 mr-10">
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
            <span></span>
            <Link href={"/"} className="ml-2 cursor-pointer underline text-blue-500 hover:text-white">
              Seller Infomation
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[550px] bg-slate-400">
        {/* later on, the section below will display the bundles that the item have */}
        <div className="mb-5 bg-cyan-600 mx-4">
          <div>
            <h1>
              bundle title <span>Free</span>
            </h1>
          </div>
          <div>
            <p className="text-gray-500">
              License: <span>Standart License</span>
            </p>
            <p>License type</p>
          </div>
          <div className="flex justify-center text-center hover:bg-slate-400 mx-2 my-1 bg-yellow-500 rounded-md">
            <ShoppingBasket size={20} />
            <p className="pl-2">Add To Cart</p>
          </div>
        </div>
        <div className="mb-5 bg-cyan-600 mx-4">
          <div>
            <h1>
              bundle title <span>Free</span>
            </h1>
          </div>
          <div>
            <p className="text-gray-500">
              License: <span>Standart License</span>
            </p>
            <p>License type</p>
          </div>
          <div className="flex justify-center text-center hover:bg-slate-400 mx-2 my-1 bg-yellow-500 rounded-md">
            <ShoppingBasket size={20} />
            <p className="pl-2">Add To Cart</p>
          </div>
        </div>
        <div className="mb-5 bg-cyan-600 mx-4">
          <div>
            <h1>
              bundle title <span>Free</span>
            </h1>
          </div>
          <div>
            <p className="text-gray-500">
              License: <span>Standart License</span>
            </p>
            <p>License type</p>
          </div>
          <div className="flex justify-center text-center hover:bg-slate-400 mx-2 my-1 bg-yellow-500 rounded-md">
            <ShoppingBasket size={20} />
            <p className="pl-2">Add To Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
