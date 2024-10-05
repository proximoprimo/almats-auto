import { Button, Logo } from "@/components/common";
import { ContactBlock } from "@/components/common/contact";
import { Subtitle, Title } from "@/components/common/title";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <section className="pb-5 bg-[#121212]">
        <Title className="text-center">Кто мы такие</Title>
        <div className="grid grid-cols-[150px,150px] justify-center gap-5">
          <div className="text-[10px] text-black font-bold bg-foreground p-2.5 rounded-full font-pioneer flex justify-center items-center">
            КАЧЕСТВО
          </div>
          <div className="text-[10px] text-black bg-foreground p-2.5 rounded-full font-pioneer flex justify-center items-center">
            СТАБИЛЬНОСТЬ
          </div>
        </div>
        <Image
          className="mx-auto mt-8"
          src="/about/first.png"
          alt=""
          width={336}
          height={286}
        />
        <div className="px-5 mt-5 text-xl text-center font-montserrat-alternates">
          В нашем ассортименте представлены различные аксессуары для авто, среди
          которых можно найти что-то подходящее для любого автомобиля и любого
          водителя
        </div>
        <div className="flex justify-center mt-5">
          <Button className="w-5/6 rounded-full">Оставить заявку</Button>
        </div>
      </section>
      <div className="p-5 pt-8 bg-white">
        <div>
          <Subtitle className="text-center text-black">Как нас найти</Subtitle>
          <ContactBlock />
        </div>
        <div>
          <Subtitle className="mt-10 text-center text-black">
            Наши реквизиты
          </Subtitle>
          <div className="mt-5">
            <div className="border-2 border-foreground rounded-t-md text-black font-bold text-xl grid grid-cols-[1fr,auto] p-10 gap-y-5">
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
            <div className="p-10 bg-black rounded-b-md">
              <Logo
                className="mx-auto"
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
