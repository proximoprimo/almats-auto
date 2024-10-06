import { Button } from "@/components/common";
import Image from "next/image";

interface CartItemProps {
  image: string;
  name: string;
  description: string;
  count: number;
}

const CartItem = ({ count, description, image, name }: CartItemProps) => {
  return (
    <div className="border-foreground rounded-2xl lg:grid lg:grid-cols-[300px,1fr] lg:gap-8 p-5 pb-12 text-black border-2">
      <Image
        className="rounded-2xl w-full lg:h-[260px]"
        src={image}
        alt=""
        width={300}
        height={260}
      />
      <div className="lg:grid grid-rows-[1fr,auto]">
        <div>
          <div className="lg:mt-0 mt-8 text-2xl font-black">{name}</div>
          <div className="mt-5 text-xl font-medium">{description}</div>
        </div>
        <div className="lg:flex gap-4">
          <div className="bg-foreground rounded-2xl lg:text-base lg:order-1 flex items-center justify-center gap-5 p-4 mt-5 text-xl font-bold">
            <div>-</div>
            {count}
            <div>+</div>
          </div>
          <Button className="lg:text-base lg:px-12 lg:order-3 lg:w-max py-5 mt-5">
            Показать товар
          </Button>
          <Button className="lg:ml-auto lg:text-base flex py-4 mt-5 justify-center gap-2.5 items-center lg:order-2 lg:h-16 lg:max-w-16">
            <Image src="/icons/trash.svg" alt="" width={30} height={30} />
            <div className="lg:hidden">Убрать товар</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
