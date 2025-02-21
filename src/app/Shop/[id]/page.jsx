import Image from "next/image";
import Link from "next/link";
import avatar from "./alting.jpg";

export default async function MarketItemDetail({ params }) {
  const { id } = await params;

  return (
    <div className="px-10 flex">
      <div>
        <div>
          <p>Marketplace / Game Assets / Industrial Smart Materials</p>
        </div>
        <div>
          <h1>Marketplace Item Title</h1>
          <div className="flex items-center">
            <Link href={"/"}>
              <Image src={avatar} alt="author avatar" width={20} height={20} className="rounded-lg mr-2" />
            </Link>
            <span className="mr-2 text-gray-600">by</span>
            <p>author name</p>
            <span></span>
            <Link href={"/"} className="ml-2 cursor-pointer underline text-blue-500 hover:text-white">
              Seller Infomation
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
