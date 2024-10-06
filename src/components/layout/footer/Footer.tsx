import { NAVIGATION_LINKS } from "@/lib/constants";
import { Logo } from "../../common";
import FooterLink from "./FooterLink";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-5 mt-12 bg-white">
      <div className="rounded-2xl xl:flex items-center p-8 bg-background text-white">
        <div className="flex justify-between">
          <Logo style="white" />
          <div className="xl:hidden flex flex-col justify-between font-bold">
            <a href="tel:79999999999">+7 999 999 99-99</a>
            <a href="mailto:mail@mail.com">mail@mail.com</a>
          </div>
        </div>
        <nav className="flex flex-col xl:flex-row xl:items-center gap-2.5 xl:gap-5 mt-5 xl:mt-0 xl:ml-12">
          {NAVIGATION_LINKS.map((link) => (
            <FooterLink key={link.name} name={link.name} href={link.href} />
          ))}
        </nav>
        <div className="xl:mt-0 flex justify-between mt-5 xl:grid xl:grid-cols-[35px_35px_35px] xl:gap-5 xl:mr-5 xl:ml-auto">
          <Image src="/social/wa.svg" alt="whatsapp" width={70} height={70} />
          <Image src="/social/tg.svg" alt="whatsapp" width={70} height={70} />
          <Image src="/social/vk.svg" alt="whatsapp" width={70} height={70} />
        </div>
        <div className="xl:flex flex-col justify-between hidden font-bold">
          <a href="tel:79999999999">+7 999 999 99-99</a>
          <a href="mailto:mail@mail.com">mail@mail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
