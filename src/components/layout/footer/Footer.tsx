import { NAVIGATION_LINKS } from "@/lib/constants";
import { Logo } from "../../common";
import FooterLink from "./FooterLink";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-5 mt-12 bg-white">
      <div className="rounded-2xl lg:flex items-center p-8 bg-black">
        <div className="flex justify-between">
          <Logo style="white" />
          <div className="lg:hidden flex flex-col justify-between font-bold">
            <a href="tel:79999999999">+7 999 999 99-99</a>
            <a href="mailto:mail@mail.com">mail@mail.com</a>
          </div>
        </div>
        <nav className="flex flex-col lg:flex-row lg:items-center gap-2.5 lg:gap-5 mt-5 lg:mt-0 lg:ml-12">
          {NAVIGATION_LINKS.map((link) => (
            <FooterLink key={link.name} name={link.name} href={link.href} />
          ))}
        </nav>
        <div className="lg:mt-0 flex justify-between mt-5 lg:grid lg:grid-cols-[35px_35px_35px] lg:gap-5 lg:mr-5 lg:ml-auto">
          <Image src="/social/wa.svg" alt="whatsapp" width={70} height={70} />
          <Image src="/social/tg.svg" alt="whatsapp" width={70} height={70} />
          <Image src="/social/vk.svg" alt="whatsapp" width={70} height={70} />
        </div>
        <div className="lg:flex flex-col justify-between hidden font-bold">
          <a href="tel:79999999999">+7 999 999 99-99</a>
          <a href="mailto:mail@mail.com">mail@mail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
