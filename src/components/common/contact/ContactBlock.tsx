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
  const labelClass = "font-extralight text-3xl lg:text-2xl";
  const valueClass = "text-xl font-bold xl:text-xl";
  return (
    <address
      className={cn(
        "flex flex-col gap-7 not-italic rounded-2xl py-5 lg:py-12 bg-background text-white",
        className
      )}
    >
      <div className="flex flex-col w-full gap-3 text-center">
        <div className={labelClass}>Адрес</div>
        <div className={valueClass}>ул. Пушкина 123, оф. 123</div>
      </div>
      <div className="flex flex-col w-full gap-3 text-center">
        <div className={labelClass}>Телефон</div>
        <a className={valueClass} href={`tel:${PHONE}`}>
          {formatPhone(PHONE)}
        </a>
      </div>
      <div className="flex flex-col w-full gap-3 text-center">
        <div className={labelClass}>Электронная почта</div>
        <a className={valueClass} href={`mailto:${MAIL}`}>
          {MAIL}
        </a>
      </div>
      {withLogo && (
        <Logo
          className="lg:mt-16 mx-auto"
          width={300}
          height={171}
          style="white"
        />
      )}
      {withMap && <Map />}
    </address>
  );
};

export default ContactBlock;
