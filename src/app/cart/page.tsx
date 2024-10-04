import { Button } from "@/components/common";
import { Subtitle } from "@/components/common/title";
import { Section } from "@/components/layout/section";
import CartItem from "./components/CartItem";
import CartInput from "./components/CartInput";

const CART_ITEMS = [
  {
    name: "Диффузор",
    description: "Диффузор для автомобиля",
    image: "/temp/product/1.png",
    count: 1,
  },
  {
    name: "Предохранитель",
    description: "Предохранитель для автомобиля",
    image: "/temp/product/2.png",
    count: 2,
  },
  {
    name: "Бустер",
    description: "Бустер для автомобиля",
    image: "/temp/product/3.png",
    count: 3,
  },
];

const CartPage = () => {
  const CartList = CART_ITEMS.map((item) => (
    <CartItem key={item.name} {...item} />
  ));

  return (
    <>
      <Section>
        <Subtitle>Корзина</Subtitle>
        <div className="flex flex-col gap-8">{CartList}</div>

        <div className="bg-secondary rounded-2xl p-5 mt-8">
          <div className="bg-foreground px-2.5 py-5 rounded-2xl">
            <div className="flex justify-between text-xl font-bold text-black">
              <div>Наличные</div>
              <div className="opacity-50">Картой</div>
              <div className="opacity-50">По счету</div>
            </div>
            <div className="mt-12">
              <CartInput placeholder="Адрес доставки" />
              <CartInput placeholder="Имя" />
              <CartInput placeholder="Контактный телефон" />
              <CartInput placeholder="e-mail" />
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2.5 text-4xl font-pioneer">
            <div>итого</div>
            <div className="text-foreground">50000 ₽</div>
            <div className="text-foreground">3 позиции</div>
          </div>

          <Button className="mt-8 rounded-full py-3.5">Оставить заявку</Button>
        </div>
      </Section>
    </>
  );
};

export default CartPage;
