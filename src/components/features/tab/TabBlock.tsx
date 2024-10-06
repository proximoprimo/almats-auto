"use client";
import { useState } from "react";
import cn from "@/utils/cn";

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabBlockProps {
  tabItems: TabItem[];
  className?: string;
  invert?: boolean;
}

const TabBlock = ({ tabItems, className, invert = false }: TabBlockProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div
      className={cn("bg-background p-8", {
        "bg-foreground": invert,
      })}
    >
      <div className="flex gap-8">
        {tabItems.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              "rounded-t-2xl bg-white py-2.5 px-12 text-xl font-bold cursor-pointer flex items-center h-[70px]",
              className,
              {
                "bg-foreground": index === tabIndex,
                'bg-background text-white': index === tabIndex && invert,
              }
            )}
            onClick={() => setTabIndex(index)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div
        className={cn("bg-foreground rounded-2xl flex py-8 rounded-tl-none", {
          "bg-background": invert,
        })}
      >
        {tabItems[tabIndex].content}
      </div>
    </div>
  );
};

export default TabBlock;
