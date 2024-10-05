import { PropsWithChildren } from "react";
import Title from "./Title";
import cn from "@/utils/cn";

interface SubtitleProps extends PropsWithChildren {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Subtitle = ({ children, className, size = "md" }: SubtitleProps) => {
  return (
    <Title
      level={4}
      className={cn(
        {
          "text-base lg:text-2xl": size === "sm",
          "text-xl lg:text-4xl": size === "md",
          "text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Title>
  );
};

export default Subtitle;
