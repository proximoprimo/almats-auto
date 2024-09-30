import cn from "@/utils/cn";
import { formatPhone } from "@/utils/format";
import Logo from "../Logo";

interface ContactBlockProps {
  className?: string;
}

const PHONE = "79999999999";
const MAIL = "mail@mail.com";

const ContactBlock = ({ className }: ContactBlockProps) => {
  return (
    <address
      className={cn(
        "flex flex-col gap-8 not-italic rounded-2xl py-8 bg-black",
        className
      )}
    >
      <div className="flex flex-col w-full gap-4 text-center">
        <div className="font-extralight text-3xl">Адрес</div>
        <div className="text-xl font-bold">Телефон</div>
      </div>
      <div className="flex flex-col w-full gap-4 text-center">
        <div className="font-extralight text-3xl">Телефон</div>
        <a className="text-xl font-bold" href={`tel:${PHONE}`}>
          {formatPhone(PHONE)}
        </a>
      </div>
      <div className="flex flex-col w-full gap-4 text-center">
        <div className="font-extralight text-3xl">Электронная почта</div>
        <a className="text-xl font-bold" href={`mailto:${MAIL}`}>
          {MAIL}
        </a>
      </div>
      <Logo className="mx-auto" width={300} height={171} style="white" />
    </address>
  );
};

export default ContactBlock;
