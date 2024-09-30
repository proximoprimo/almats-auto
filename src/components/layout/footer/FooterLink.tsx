import Link from "next/link";

export interface FooterLink {
  name: string;
  href: string;
}

const FooterLink = ({ name, href }: FooterLink) => {
  return <Link className="font-montserrat-alternates font-semibold" href={href}>{name}</Link>;
};

export default FooterLink;
