import cn from "@/utils/cn";
import { formatPhone } from "@/utils/format";
import Logo from "../Logo";
import Map from "./Map";

interface ContactBlockProps {
  className?: string;
  withLogo?: boolean;
  withMap?: boolean;
}

const PHONE = "79999999999";
const MAIL = "mail@mail.com";

const ContactBlock = ({
  className,
  withLogo = false,
  withMap = false,
}: ContactBlockProps) => {
  return (
    <address
      className={cn(
        "flex flex-col gap-7 not-italic rounded-2xl py-5 bg-black",
        className
      )}
    >
      <div className="flex flex-col w-full gap-3 text-center">
        <div className="font-extralight text-3xl">Адрес</div>
        <div className="text-xl font-bold">ул. Пушкина 123, оф. 123</div>
      </div>
      <div className="flex flex-col w-full gap-3 text-center">
        <div className="font-extralight text-3xl">Телефон</div>
        <a className="text-xl font-bold" href={`tel:${PHONE}`}>
          {formatPhone(PHONE)}
        </a>
      </div>
      <div className="flex flex-col w-full gap-3 text-center">
        <div className="font-extralight text-3xl">Электронная почта</div>
        <a className="text-xl font-bold" href={`mailto:${MAIL}`}>
          {MAIL}
        </a>
      </div>
      {withLogo && (
        <Logo className="mx-auto" width={300} height={171} style="white" />
      )}
      {withMap && <Map />}
    </address>
  );
};

export default ContactBlock;
