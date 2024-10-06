import Image from "next/image";

const MobileBlogFilter = () => {
  return (
    <div className="lg:hidden flex justify-between w-full">
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
          src="/icons/search.svg"
          alt=""
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default MobileBlogFilter;
