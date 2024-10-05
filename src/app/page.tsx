import { Button } from "@/components/common";
import { Subtitle, Title } from "@/components/common/title";
import Image from "next/image";
import Advantage from "./components/Advantage";
import Calculator from "./components/Calculator";
import { MobileFaqBlock } from "@/components/features/faq";
import { ContactBlock } from "@/components/common/contact";
import RequestBlock from "./components/RequestBlock";
import FaqBlock from "@/components/features/faq/FaqBlock";
import { Section } from "@/components/layout/section";

export default function Home() {
  return (
    <>
      <Section className="pb-8 lg:pb-12 bg-[#121212] lg:grid lg:grid-cols-[55fr_53fr] lg:grid-rows-[auto_auto_auto_auto] lg:gap-x-36">
        <Title level={1} className="lg:order-1 text-center lg:text-left">
          ALMATS
        </Title>
        <div className="text-[10px] mt-4 lg:mt-8 lg:text-xs grid grid-cols-2 gap-5 lg:order-2">
          <div className="text-black lg:h-11 font-bold bg-foreground p-2.5 rounded-full font-pioneer flex justify-center items-center">
            КАЧЕСТВО
          </div>
          <div className="text-black lg:h-11 bg-foreground p-2.5 rounded-full font-pioneer flex justify-center items-center">
            СТАБИЛЬНОСТЬ
          </div>
        </div>
        <Image
          className="mx-auto mt-8 lg:mt-0 lg:order-5 lg:col-start-2 lg:col-end-3 lg:row-[1_/_span_4] lg:w-11/12"
          src="/main/first.png"
          alt=""
          width={336}
          height={352}
        />
        <div className="font-montserrat-alternates lg:mt-8 lg:order-3 lg:text-3xl lg:text-left mt-5 text-xl text-center">
          В нашем ассортименте представлены различные аксессуары для авто, среди
          которых можно найти что-то подходящее для любого автомобиля и любого
          водителя
        </div>
        <div className="lg:order-4 xl:h-min flex justify-center mt-5 lg:mt-8">
          <Button className="w-5/6 rounded-full">Оставить заявку</Button>
        </div>
      </Section>
      <div className="lg:pt-12 pt-8 bg-white">
        <Section className="xl:px-16 px-10">
          <Subtitle className="lg:text-left text-center text-black">
            НАШИ ПРЕИМУЩЕСТВА
          </Subtitle>
          <div className="lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:mt-16 flex flex-col gap-12 mt-10">
            <Advantage
              image={1}
              text="Всегда доставляем и устанавливаем в срок"
              title="Стабильность"
            />
            <Advantage
              image={2}
              text="Самые низкие цены на рынке"
              title="Цена"
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
        </Section>

        <Section className="mt-12">
          <Subtitle className="text-center text-black">Калькулятор</Subtitle>
          <Calculator />
        </Section>

        <Section className="lg:mt-16">
          <FaqBlock />
        </Section>

        <Section className="lg:grid grid-cols-[62fr,68fr] lg:mt-16 mt-12">
          <ContactBlock
            className="lg:rounded-l-2xl lg:rounded-r-none rounded-b-none"
            withLogo={true}
          />
          <RequestBlock />
        </Section>
      </div>
    </>
  );
}
