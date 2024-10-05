import { Pagination } from "@/components/common/pagination";
import { Section } from "@/components/layout/section";
import CatalogFilter from "./components/CatalogFilter";
import CatalogProductCard from "./components/CatalogProductCard";

const PRODUCTS = [
  {
    name: "Диффузор",
    description: "Диффузор для автомобиля",
    image: "/temp/product/1.png",
  },
  {
    name: "Предохранитель",
    description: "Предохранитель для автомобиля",
    image: "/temp/product/2.png",
  },
  {
    name: "Бустер",
    description: "Бустер для автомобиля",
    image: "/temp/product/3.png",
  },
];

const CatalogPage = () => {
  const ProductList = PRODUCTS.map((product) => (
    <CatalogProductCard key={product.name} {...product} />
  ));

  return (
    <>
      <Section className="px-0">
        <CatalogFilter />
      </Section>
      <Section className="flex flex-col mt-16 gap-8">
        {ProductList}
        <Pagination />
      </Section>
    </>
  );
};

export default CatalogPage;
