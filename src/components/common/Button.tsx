import cn from "@/utils/cn";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-5 rounded-2xl text-center font-bold text-black bg-foreground py-6 cursor-pointer w-full",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
