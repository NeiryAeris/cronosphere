import { marketItems } from "../assets/data2";
import Image from "next/image";
import Link from "next/link";
import avatar from '../assets/avatar.jpg'

import { artists } from "../assets/data";

export default function ShopSection() {
  return (
    <div className="m-4">
      <div className="grid grid-cols-5 gap-4 hover:">
        {marketItems.map((item) => (
          <Link key={item.itemID} href={`/shop/${item.itemID}`}>
            <div key={item.itemID} className="max-w-[350px] w-[350px] hover:bg-slate-800 pb-2">
              <Image src={item.itemImage} alt={item.itemName} width={350} height={350} />
              <h1 className="m-2">{item.itemName}</h1>
              <div className="m-2 flex">
                <Image src={avatar} alt="artist avatar" width={20} height={20} className="max-w-[20px] max-h-[20px] mr-2 rounded-2xl"/>
                <p>by {item.itemAuthorID}</p>
                <p className="ml-auto mr-2">{item.itemPrice}$</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
