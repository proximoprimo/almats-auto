"use client";

import { useHeaderStore } from "@/stores/HeaderStore";
import Image from "next/image";

const HeaderMenuButton = () => {
  const toggleMenu = useHeaderStore((state) => state.toggleMenu);

  return (
    <Image
      className="lg:hidden"
      onClick={toggleMenu}
      src="/menu.svg"
      alt="меню"
      width={50}
      height={50}
    />
  );
};

export default HeaderMenuButton;
