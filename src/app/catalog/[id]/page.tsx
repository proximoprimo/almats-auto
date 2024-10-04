import { Section } from "@/components/layout/section";
import CatalogProduct from "../components/CatalogProduct";
import { Button } from "@/components/common";
import Image from "next/image";

const PRODUCT = {
  name: "Диффузор",
  description: "Диффузор для автомобиля",
  image: "/temp/product/1.png",
};

const SingleProductPage = () => {
  return (
    <Section>
      <CatalogProduct
        {...PRODUCT}
        buttons={
          <Button className="mt-5 flex py-4 gap-2.5 justify-center items-center rounded-3xl">
            <Image src="/icons/cart.svg" alt="" width={30} height={30} />
            <div>Положить в корзину</div>
          </Button>
        }
      />
    </Section>
  );
};

export default SingleProductPage;
