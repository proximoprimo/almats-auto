import Link from "next/link";

export interface FooterLink {
  name: string;
  href: string;
}

const FooterLink = ({ name, href }: FooterLink) => {
  return <Link className="font-semibold font-montserrat-alternates" href={href}>{name}</Link>;
};

export default FooterLink;
