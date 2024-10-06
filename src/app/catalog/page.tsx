import { Pagination } from "@/components/common/pagination";
import { Section } from "@/components/layout/section";
import CatalogFilter from "./components/CatalogFilter/CatalogFilter";
import CatalogProductCard from "./components/CatalogProductCard";
import DesktopOrderBlock from "./components/DesktopOrderBlock";

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
      <Section className="px-0 xl:px-0">
        <CatalogFilter />
        <DesktopOrderBlock />
      </Section>
      <Section className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
        {ProductList}
      </Section>
      <Section>
        <Pagination />
      </Section>
    </>
  );
};

export default CatalogPage;
