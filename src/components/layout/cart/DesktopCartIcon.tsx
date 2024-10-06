import Image from "next/image";
import Link from "next/link";

const DesktopCartIcon = () => {
  return (
    <Link href={'/cart'} className="fixed bottom-12 right-12 h-[150px] w-[150px] bg-background rounded-full flex justify-center items-center">
      <Image src="/icons/cart-yellow.svg" alt="" width={70} height={70} />
    </Link>
  );
};

export default DesktopCartIcon;
