import Image from "next/image";
import ShopNav from "../components/ShopNav";
import ShopSection from "../components/ShopSection";

export default function page() {
  return (
    <div>
      <ShopNav />
      <ShopSection />
    </div>
  );
}
