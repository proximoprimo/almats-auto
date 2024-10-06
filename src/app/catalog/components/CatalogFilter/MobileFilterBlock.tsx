import Image from "next/image";

const MobileFilterBlock = () => {
  return (
    <div className="flex justify-between w-full lg:hidden">
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

export default MobileFilterBlock;
