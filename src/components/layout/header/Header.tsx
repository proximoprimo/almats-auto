import Link from "next/link";
import { Logo } from "../../common";
import HeaderMenuButton from "./HeaderMenuButton";
import HeaderMobileMenu from "./HeaderMobileMenu";
import DesktopMenu from "./DesktopMenu";

const Header = () => {
  return (
    <header className="bg-foreground rounded-3xl top-5 fixed z-50 flex flex-col gap-4 px-5 py-4 m-5 mt-0 overflow-hidden w-[calc(100%-40px)]">
      <div className="flex justify-between">
        <Link href={"/"}>
          <Logo />
        </Link>
        <DesktopMenu />
        <HeaderMenuButton />
      </div>

      <HeaderMobileMenu />
    </header>
  );
};

export default Header;
