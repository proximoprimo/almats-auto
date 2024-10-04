import Image from "next/image";

const CatalogFilter = () => {
  return (
    <div className="bg-secondary text-foreground flex justify-between p-5 font-semibold gap-2.5">
      <div className="flex items-center gap-2.5">
        <Image
          className="mx-auto"
          src="/icons/filter.svg"
          alt=""
          width={40}
          height={40}
        />
        <div>Фильтры</div>
      </div>
      <div className="flex items-center gap-2.5">
        <Image
          className="mx-auto"
          src="/icons/filter-menu.svg"
          alt=""
          width={40}
          height={40}
        />
        <div>Сортировка</div>
      </div>
    </div>
  );
};

export default CatalogFilter;
