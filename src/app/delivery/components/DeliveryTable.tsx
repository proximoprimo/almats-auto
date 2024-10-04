"use client";
import cn from "@/utils/cn";
import { useState } from "react";

const DELIVERY_DATA = [
  ["Курьером", "300 ₽", "3-5 дней", "Картой", "ул. Пушкина 123, помещение 123"],
  ["Самовывоз", "0 ₽", "1-2 дня", "Картой", "ул. Пушкина 123, помещение 123"],
];

const DeliveryTable = () => {
  const [city, setCity] = useState(0);

  return (
    <div className="p-5 bg-black rounded-2xl">
      <div className="px-2.5 py-5 bg-foreground rounded-2xl">
        <div className="flex gap-2.5 justify-between text-xl font-bold text-black">
          <div
            className={cn("transition", {
              "opacity-65": city !== 0,
            })}
            onClick={() => setCity(0)}
          >
            Москва
          </div>
          <div
            className={cn("transition", {
              "opacity-65": city !== 1,
            })}
            onClick={() => setCity(1)}
          >
            Московоская область
          </div>
        </div>
        <div className="mt-8 text-black grid grid-cols-2 delivery-terms">
          <div>Способ доставки</div>
          <div>{DELIVERY_DATA[city][0]}</div>
          <div>Стоимость</div>
          <div>{DELIVERY_DATA[city][1]}</div>
          <div>Срок</div>
          <div>{DELIVERY_DATA[city][2]}</div>
          <div>Способ оплаты</div>
          <div>{DELIVERY_DATA[city][3]}</div>
          <div>Адрес самовывоза</div>
          <div>{DELIVERY_DATA[city][4]}</div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTable;
