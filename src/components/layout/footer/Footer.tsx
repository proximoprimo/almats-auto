import { NAVIGATION_LINKS } from "@/lib/constants";
import { Logo } from "../../common";
import FooterLink from "./FooterLink";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-5 bg-white">
      <div className="rounded-2xl p-8 bg-black">
        <div className="flex justify-between">
          <Logo style="white" />
          <div className="flex flex-col justify-between font-bold">
            <a href="tel:79999999999">+7 999 999 99-99</a>
            <a href="mailto:mail@mail.com">mail@mail.com</a>
          </div>
        </div>
        <nav className="flex flex-col gap-2.5 mt-5">
          {NAVIGATION_LINKS.map((link) => (
            <FooterLink key={link.name} name={link.name} href={link.href} />
          ))} 
        </nav>
        <div className="flex justify-between mt-5">
          <Image src="/social/wa.svg" alt="whatsapp" width={70} height={70} />
          <Image src="/social/tg.svg" alt="whatsapp" width={70} height={70} />
          <Image src="/social/vk.svg" alt="whatsapp" width={70} height={70} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
