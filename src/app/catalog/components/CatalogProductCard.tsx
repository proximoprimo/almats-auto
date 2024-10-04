import { Button } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import CatalogProduct, { CatalogProductProps } from "./CatalogProduct";

const CatalogProductCard = ({
  description,
  image,
  name,
}: Omit<CatalogProductProps, "buttons">) => {
  return (
    <CatalogProduct
      name={name}
      description={description}
      image={image}
      buttons={
        <div className="grid grid-cols-[1fr,60px] gap-4 mt-5">
          <Link href={"/catalog/1"}>
            <Button className="py-5">Показать товар</Button>
          </Link>
          <div className="bg-foreground aspect-square p-2.5 flex justify-center items-center rounded-3xl">
            <Image src="/icons/cart.svg" alt="" width={30} height={30} />
          </div>
        </div>
      }
    />
  );
};

export default CatalogProductCard;
