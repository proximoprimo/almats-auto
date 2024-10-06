"use client";
import { useState } from "react";
import { CITIES, DELIVERY_DATA } from "./DeliveryTable";
import cn from "@/utils/cn";

const DesktopDeliveryTable = () => {
  const [cityIndex, setCityIndex] = useState(0);

  const tableItemClass =
    "px-8 border-r last:border-r-0 border-black flex flex-col gap-8 pb-40";
  const tableHeaderClass = "font-bold";

  return (
    <div className="bg-background p-8">
      <div className="flex gap-8">
        {CITIES.map((city, index) => (
          <div
            key={city}
            className={cn(
              "rounded-t-2xl bg-white py-2.5 px-12 text-xl font-bold cursor-pointer",
              {
                "bg-foreground": index === cityIndex,
              }
            )}
            onClick={() => setCityIndex(index)}
          >
            {city}
          </div>
        ))}
      </div>
      <div className="bg-foreground flex py-8 rounded-2xl rounded-tl-none">
        <div className={tableItemClass}>
          <div className={tableHeaderClass}>Способ доставки</div>
          <div>{DELIVERY_DATA[cityIndex][0]}</div>
        </div>
        <div className={tableItemClass}>
          <div className={tableHeaderClass}>Стоимость</div>
          <div>{DELIVERY_DATA[cityIndex][1]}</div>
        </div>
        <div className={tableItemClass}>
          <div className={tableHeaderClass}>Срок</div>
          <div>{DELIVERY_DATA[cityIndex][2]}</div>
        </div>
        <div className={tableItemClass}>
          <div className={tableHeaderClass}>Способ оплаты</div>
          <div>{DELIVERY_DATA[cityIndex][3]}</div>
        </div>
        <div className={tableItemClass}>
          <div className={tableHeaderClass}>Адрес самовывоза</div>
          <div>{DELIVERY_DATA[cityIndex][4]}</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopDeliveryTable;
