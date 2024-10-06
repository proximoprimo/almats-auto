"use client";
import { Section } from "@/components/layout/section";
import cn from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

const ORDER_OPTIONS = ["По цене", "По алфавиту"];

const DesktopOrderBlock = () => {
  const [orderIndex, setOrderIndex] = useState(0);

  return (
    <Section className="lg:flex items-center hidden gap-5 mt-8">
      <div className="text-xl font-bold">Сортировка</div>
      {ORDER_OPTIONS.map((option, index) => (
        <div
          onClick={() => setOrderIndex(index)}
          key={option}
          className={cn(
            "text-xl text-black opacity-50 py-4 rounded-[50px] cursor-pointer font-bold",
            {
              "bg-background text-foreground opacity-100 flex px-10":
                orderIndex === index,
            }
          )}
        >
          {option}
          {orderIndex === index && (
            <Image src="/icons/arrow.svg" alt="" width={20} height={20} />
          )}
        </div>
      ))}
    </Section>
  );
};

export default DesktopOrderBlock;
