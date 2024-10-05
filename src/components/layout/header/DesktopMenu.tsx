import { NAVIGATION_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const DesktopMenu = () => {
  const LinkList = NAVIGATION_LINKS.map((link) => (
    <Link
      className="text-sm font-bold text-black font-montserrat-alternates"
      key={link.href}
      href={link.href}
    >
      {link.name}
    </Link>
  ));

  return (
    <div className="items-center justify-between hidden w-full ml-5 lg:flex">
      <nav className="flex xl:gap-7 gap-4">{LinkList}</nav>
      <div className="flex items-center gap-2 xl:gap-5">
        <div className="grid grid-cols-3 gap-2 xl:gap-5">
          <Image src="/social/wa.svg" alt="whatsapp" width={35} height={35} />
          <Image src="/social/tg.svg" alt="whatsapp" width={35} height={35} />
          <Image src="/social/vk.svg" alt="whatsapp" width={35} height={35} />
        </div>
        <div className="flex flex-col font-semibold text-black">
          <a href="tel:79999999999">+7 999 999 99-99</a>
          <a href="mailto:mail@mail.com">mail@mail.com</a>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
