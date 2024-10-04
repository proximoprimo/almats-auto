"use client";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { useHeaderStore } from "@/stores/HeaderStore";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

const HeaderMobileMenu = () => {
  const { isMenuOpen, toggleMenu } = useHeaderStore();

  if (!isMenuOpen) return null;

  return (
    <nav
      onClick={toggleMenu}
      className={cn(
        "gap-7 flex flex-col max-h-[calc(100vh-60px-80px)] overflow-auto transition"
      )}
    >
      {NAVIGATION_LINKS.map((link) => (
        <Link
          key={link.href}
          className="font-montserrat-alternates text-2xl font-semibold text-center text-black"
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
      <Link
        className="font-montserrat-alternates text-2xl font-semibold text-center text-black"
        href={"/cart"}
      >
        Корзина
      </Link>
      <div className="flex justify-between">
        <div className="grid grid-cols-3 gap-5">
          <Image src="/social/wa.svg" alt="whatsapp" width={35} height={35} />
          <Image src="/social/tg.svg" alt="whatsapp" width={35} height={35} />
          <Image src="/social/vk.svg" alt="whatsapp" width={35} height={35} />
        </div>
        <div className="flex flex-col font-semibold text-black">
          <a href="tel:79999999999">+7 999 999 99-99</a>
          <a href="mailto:mail@mail.com">mail@mail.com</a>
        </div>
      </div>
    </nav>
  );
};
export default HeaderMobileMenu;
