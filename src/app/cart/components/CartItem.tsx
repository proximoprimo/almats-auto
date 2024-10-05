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
    <div className="p-5 pb-12 text-black border-2 border-foreground rounded-2xl">
      <Image
        className="w-full rounded-2xl"
        src={image}
        alt=""
        width={300}
        height={260}
      />
      <div className="mt-8 text-2xl font-black">{name}</div>
      <div className="mt-5 text-xl font-medium">{description}</div>
      <div className="flex justify-center p-4 mt-5 text-xl font-bold bg-foreground rounded-2xl gap-5">
        <div>-</div>
        {count}
        <div>+</div>
      </div>
      <Button className="py-5 mt-5">Показать товар</Button>
      <Button className="flex py-4 mt-5 justify-center gap-2.5 items-center">
        <Image src="/icons/trash.svg" alt="" width={30} height={30} />
        <div>Убрать товар</div>
      </Button>
    </div>
  );
};

export default CartItem;
