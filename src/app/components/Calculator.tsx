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
    <div className="p-5 mt-12 bg-black lg:p-12 rounded-2xl">
      <div className="flex flex-col lg:flex-row gap-5">
        <Button>Выберите марку автомобиля</Button>
        <Button>Выберите модель автомобиля</Button>
      </div>
      <Subtitle className="mt-8 font-bold text-center font-montserrat">
        Выберите ряд
      </Subtitle>
      <div className="lg:grid lg:grid-cols-[1fr,max-content] lg:gap-12 lg:items-center lg:mt-7">
        <Image
          className="mx-auto mt-5 lg:w-full"
          src={"/main/calc/car-top.png"}
          alt=""
          width={322}
          height={146}
        />
        <div>
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
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-12 lg:mt-12">
        <Image
          className="mx-auto mt-10 lg:mt-0 lg:order-1 lg:h-full"
          src={"/main/calc/cabin.png"}
          alt=""
          width={350}
          height={242}
        />
        <Button className="mt-5 lg:mt-12 lg:order-3">Материалы</Button>
        <Image
          className="mx-auto mt-8 lg:mt-0 lg:order-2 lg:h-full"
          src={"/main/calc/carpets.png"}
          alt=""
          width={350}
          height={242}
        />
        <Button className="mt-8 lg:mt-12 lg:order-4">
          Местоположение вышивки
        </Button>
        <ColorInput
          label="Цвет окантовки"
          className="mt-8 lg:mt-12 lg:order-5"
        />
        <ColorInput
          label="Цвет материалов"
          className="mt-5 lg:mt-12  lg:order-6"
        />
        <ColorInput label="Цвет строчки" className="mt-5 lg:order-7" />
        <ColorInput label="Цвет салона" className="mt-5 lg:order-8" />
      </div>

      <div className="mt-8 text-lg font-bold">Варианты вышивок</div>

      <div className="lg:grid lg:grid-cols-[40%,40%] lg:gap-[20%]">
        <EmbroideryVariants label="Передние позиции" />
        <EmbroideryVariants label="Задние позиции" />
      </div>
      <div className="p-4 mt-8 bg-white lg:mt-12 rounded-2xl">
        <div className="font-bold text-center lg:text-xl text-black">
          Дополнительная информация
        </div>
        <div>
          <textarea
            className="w-full p-2 lg:p-4 mt-2 lg:mt-4 text-black border border-black rounded outline-none resize-none lg:text-xl"
            rows={4}
          />
        </div>
      </div>

      <Button className="mt-8">Заказать</Button>
    </div>
  );
};

export default Calculator;
