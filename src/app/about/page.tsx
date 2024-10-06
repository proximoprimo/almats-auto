import { Button, Logo } from "@/components/common";
import { ContactBlock } from "@/components/common/contact";
import { Subtitle, Title } from "@/components/common/title";
import { Section } from "@/components/layout/section";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <Section className="pb-5 bg-[#121212] lg:grid lg:grid-rows-[repeat(4,auto)] lg:grid-cols-[55fr_60fr] lg:gap-x-20">
        <Title
          level={1}
          className="text-center lg:order-1 lg:text-5xl lg:text-left"
        >
          Кто мы такие
        </Title>
        <div className="grid grid-cols-[150px,150px] lg:grid-cols-[210px,210px] justify-center gap-5 mt-8 lg:order-2 lg:h-11">
          <div className="text-[10px] text-black font-bold bg-foreground p-2.5 rounded-full font-pioneer flex justify-center items-center">
            КАЧЕСТВО
          </div>
          <div className="text-[10px] text-black bg-foreground p-2.5 rounded-full font-pioneer flex justify-center items-center">
            СТАБИЛЬНОСТЬ
          </div>
        </div>
        <Image
          className="mx-auto mt-8 lg:mt-0 lg:order-5 lg:col-start-2 lg:col-end-3 lg:row-[1_/_span_4] lg:w-11/12 self-center"
          src="/about/first.png"
          alt=""
          width={336}
          height={286}
        />
        <div className="px-5 mt-5 text-xl text-center font-montserrat-alternates lg:order-3 lg:text-2xl xl:text-3xl lg:text-left text-white">
          В нашем ассортименте представлены различные аксессуары для авто, среди
          которых можно найти что-то подходящее для любого автомобиля и любого
          водителя
        </div>
        <div className="flex justify-center mt-5 lg:order-4">
          <Button className="w-5/6 rounded-full">Оставить заявку</Button>
        </div>
      </Section>
      <div className="p-5 pt-8 bg-white">
        <div>
          <Subtitle className="text-center text-black">Как нас найти</Subtitle>
          <ContactBlock className="lg:flex-row mt-5 lg:mt-12" />
        </div>
        <div>
          <Subtitle className="mt-10 text-center text-black">
            Наши реквизиты
          </Subtitle>
          <div className="mt-5 lg:mt-12 lg:grid lg:grid-cols-[45fr,85fr]">
            <div className="border-2 border-foreground rounded-t-2xl text-black font-bold text-xl grid grid-cols-[1fr,auto] p-10 gap-y-5 lg:rounded-l-2xl lg:rounded-r-none">
              <div>ИНН</div>
              <div>1234567890</div>
              <div>ИНН</div>
              <div>1234567890</div>
              <div>ИНН</div>
              <div>1234567890</div>
              <div>ИНН</div>
              <div>1234567890</div>
              <div>ИНН</div>
              <div>1234567890</div>
              <div>ИНН</div>
              <div>1234567890</div>
            </div>
            <div className="p-10 bg-black rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl">
              <Logo
                className="mx-auto lg:h-full"
                imageClassName="lg:h-full lg:mx-auto"
                width={307}
                height={176}
                style="white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
