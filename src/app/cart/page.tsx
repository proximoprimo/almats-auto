import { Button } from "@/components/common";
import { Subtitle } from "@/components/common/title";
import { Section } from "@/components/layout/section";
import CartItem from "./components/CartItem";
import CartInput from "./components/CartInput";
import TabBlock, { TabItem } from "@/components/features/tab/TabBlock";

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

const CartOptions = ["Наличные", "Картой", "По счету"];

const CartPage = () => {
  const CartList = CART_ITEMS.map((item) => (
    <CartItem key={item.name} {...item} />
  ));

  const Content = (
    <div className="grid grid-cols-[70fr,42fr] gap-20 w-full">
      <div className="mt-12">
        <CartInput
          labelClassName="bg-background lg:py-3"
          placeholder="Адрес доставки"
        />
        <CartInput labelClassName="bg-background lg:py-3" placeholder="Имя" />
        <CartInput
          labelClassName="bg-background lg:py-3"
          placeholder="Контактный телефон"
        />
        <CartInput
          labelClassName="bg-background lg:py-3"
          placeholder="e-mail"
        />
      </div>
      <div className="flex flex-col justify-between pr-12">
        <div className="mt-12 flex flex-col gap-2.5 text-4xl font-pioneer">
          <div className="text-white">итого</div>
          <div className="text-foreground">50000 ₽</div>
          <div className="text-foreground">3 позиции</div>
        </div>

        <Button className="mt-8 rounded-full py-3.5">Оставить заявку</Button>
      </div>
    </div>
  );

  const tabItems: TabItem[] = CartOptions.map((option) => ({
    label: option,
    content: Content,
  }));

  return (
    <>
      <Section>
        <Subtitle className="lg:text-4xl lg:text-left text-center text-black">
          Корзина
        </Subtitle>
        <div className="flex flex-col gap-8 mt-12">{CartList}</div>
        <TabBlock tabItems={tabItems} invert={true} />
        <div className="bg-background rounded-2xl lg:hidden p-5 mt-8">
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
