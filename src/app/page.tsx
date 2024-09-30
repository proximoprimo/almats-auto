import { Button } from "@/components/common";
import { Subtitle, Title } from "@/components/common/title";
import Image from "next/image";
import Advantage from "./components/Advantage";
import Calculator from "./components/Calculator";
import { FaqBlock } from "@/components/features/faq";
import { ContactBlock } from "@/components/common/contact";
import RequestBlock from "./components/RequestBlock";

export default function Home() {
  return (
    <>
      <section className="px-6 pb-8">
        <Title level={1} className="text-center">
          ALMATS
        </Title>
        <div className="grid grid-cols-2 gap-5">
          <div className="text-xs font-bold bg-foreground p-2.5 rounded-full font-pioneer flex justify-center items-center">
            КАЧЕСТВО
          </div>
          <div className="text-xs bg-foreground p-2.5 rounded-full font-pioneer flex justify-center items-center">
            СТАБИЛЬНОСТЬ
          </div>
        </div>
        <Image
          className="mx-auto mt-8"
          src="/main/first.png"
          alt=""
          width={336}
          height={352}
        />
        <div className="font-montserrat-alternates mt-5 text-xl text-center">
          В нашем ассортименте представлены различные аксессуары для авто, среди
          которых можно найти что-то подходящее для любого автомобиля и любого
          водителя
        </div>
        <div className="flex justify-center mt-5">
          <Button className="w-5/6 rounded-full">Оставить заявку</Button>
        </div>
      </section>
      <div className="pt-8 bg-white">
        <section>
          <Subtitle className="text-center text-black">
            НАШИ ПРЕИМУЩЕСТВА
          </Subtitle>
          <div className="flex flex-col gap-12 px-12">
            <Advantage
              image={1}
              text="Всегда доставляем и устанавливаем в срок"
              title="Стабильность"
            />
            <Advantage
              image={2}
              text="Цена"
              title="Самые низкие цены на рынке"
            />
            <Advantage
              image={3}
              text="Куча довольных клиентов, в том числе в бизнес сегменте"
              title="Опыт"
            />
            <Advantage
              image={4}
              text="Все наши товары обладают расширенной гарантией"
              title="Гарантия"
            />
          </div>
        </section>

        <section className="mt-12">
          <Subtitle className="text-center text-black">Калькулятор</Subtitle>
          <Calculator />
        </section>

        <section>
          <FaqBlock />
        </section>

        <section className="mx-5 mt-12">
          <ContactBlock className="rounded-b-none" />
          <RequestBlock />
        </section>
      </div>
    </>
  );
}
