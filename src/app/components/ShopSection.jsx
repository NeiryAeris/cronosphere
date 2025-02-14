import { marketItems } from "../assets/data2";
import Image from "next/image";
import Link from "next/link";

export default function ShopSection() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4">
        {marketItems.map((item) => (
          <Link key={item.itemID} href={`/shop/${item.itemID}`}>
            <div key={item.itemID}>
              <Image src={item.itemImage} alt={item.itemName} width={250} height={250} />
              <h1>{item.itemName}</h1>
              <p>{item.itemPrice}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
