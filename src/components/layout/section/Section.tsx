import cn from "@/utils/cn";
import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return <section className={cn("px-5", className)}>{children}</section>;
};

export default Section;
