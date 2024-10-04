"use client";

import { Button } from "@/components/common";
import { CheckBox, ColorInput } from "@/components/common/inputs";
import { Subtitle } from "@/components/common/title";
import Image from "next/image";
import { useState } from "react";
import EmbroideryVariants from "./EmbroideryVariants";

const Calculator = () => {
  const [thirdRow, setThirdRow] = useState(false);
  const [pendulum, setPendulum] = useState(false);

  return (
    <div className="p-5 mx-5 mt-12 bg-black rounded-2xl">
      <div className="flex flex-col gap-5">
        <Button>Выберите марку автомобиля</Button>
        <Button>Выберите модель автомобиля</Button>
      </div>
      <Subtitle className="mt-8 font-bold text-center font-montserrat">
        Выберите ряд
      </Subtitle>
      <Image
        className="mt-5"
        src={"/main/calc/car-top.png"}
        alt=""
        width={322}
        height={146}
      />
      <CheckBox
        className="mt-5"
        label="Третий ряд"
        value={thirdRow}
        onChange={(val) => setThirdRow(val)}
      />
      <CheckBox
        className="mt-5"
        label="Наличие подпятника"
        value={pendulum}
        onChange={(val) => setPendulum(val)}
      />
      <Image
        className="mt-10"
        src={"/main/calc/cabin.png"}
        alt=""
        width={350}
        height={242}
      />
      <Button className="mt-5">Материалы</Button>
      <Image
        className="mt-8"
        src={"/main/calc/carpets.png"}
        alt=""
        width={350}
        height={242}
      />
      <Button className="mt-8">Местоположение вышивки</Button>
      <ColorInput label="Цвет окантовки" className="mt-8" />
      <ColorInput label="Цвет материалов" className="mt-5" />
      <ColorInput label="Цвет строчки" className="mt-5" />
      <ColorInput label="Цвет салона" className="mt-5" />

      <div className="mt-8 text-lg font-bold">Варианты вышивок</div>

      <EmbroideryVariants label="Передние позиции" />
      <EmbroideryVariants label="Задние позиции" />
      <div className="p-4 mt-8 bg-white rounded-2xl">
        <div className="font-bold text-center text-black">
          Дополнительная информация
        </div>
        <div>
          <textarea
            className="w-full p-1 mt-1 text-black border border-black rounded outline-none resize-none"
            rows={4}
          />
        </div>
      </div>

      <Button className="mt-8">Заказать</Button>
    </div>
  );
};

export default Calculator;
