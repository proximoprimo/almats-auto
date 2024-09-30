import Link from "next/link";
import { Logo } from "../../common";
import HeaderMenuButton from "./HeaderMenuButton";
import HeaderMobileMenu from "./HeaderMobileMenu";

const Header = () => {
  return (
    <header className="bg-foreground rounded-3xl top-5 sticky z-50 flex flex-col gap-4 px-5 py-4 m-5 mt-0 overflow-hidden">
      <div className="flex justify-between">
        <Link href={'/'}>
          <Logo />
        </Link>
        <HeaderMenuButton />
      </div>

      <HeaderMobileMenu />
    </header>
  );
};

export default Header;
