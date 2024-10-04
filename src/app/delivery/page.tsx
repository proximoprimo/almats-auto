import { Subtitle } from "@/components/common/title";
import DeliveryTable from "./components/DeliveryTable";
import Image from "next/image";

const TERMS_ITEMS = [
  {
    title: "Наличные",
    image: {
      name: "first",
      width: 233,
      height: 135,
    },
  },
  {
    title: "Картой",
    image: {
      name: "second",
      width: 168,
      height: 168,
    },
  },
  {
    title: "Оплата по счету",
    image: {
      name: "third",
      width: 160,
      height: 160,
    },
  },
];

const DeliveryPage = () => {
  return (
    <>
      <section className="px-5">
        <Subtitle className="text-center text-black">Условия доставки</Subtitle>
        <DeliveryTable />
      </section>
      <section className="px-5">
        <Subtitle className="my-12 text-center text-black">
          Условия оплаты
        </Subtitle>
        <div className="rounded-2xl flex flex-col items-center gap-12 px-10 py-12 bg-black">
          {TERMS_ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col gap-8">
              <Image
                className="mx-auto"
                height={item.image.height}
                width={item.image.width}
                alt=""
                src={`/delivery/terms/${item.image.name}.svg`}
              />
              <div className="text-3xl font-medium text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DeliveryPage;
