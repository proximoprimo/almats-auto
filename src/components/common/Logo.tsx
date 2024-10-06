import cn from "@/utils/cn";
import Image from "next/image";

interface LogoProps {
  style?: "black" | "white";
  height?: number;
  width?: number;
  className?: string;
  imageClassName?: string;
}

const Logo = ({
  style = "black",
  height = 46,
  width = 80,
  className,
  imageClassName,
}: LogoProps) => {
  let src;

  switch (style) {
    case "black":
      src = "/logo.svg";
      break;
    case "white":
      src = "/common/white-logo.svg";
      break;
  }

  return (
    <div className={cn(className)}>
      <Image
        className={cn(imageClassName)}
        src={src}
        alt="Логотип"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;
