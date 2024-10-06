import cn from "@/utils/cn";
import Image from "next/image";

export interface CatalogProductProps {
  name: string;
  description: string;
  image: string;
  buttons: React.ReactNode;
  className?: string;
  imageClassName?: string;
}

const CatalogProduct = ({
  description,
  image,
  name,
  buttons,
  className,
  imageClassName,
}: CatalogProductProps) => {
  return (
    <div className={cn("bg-background rounded-2xl p-8 pb-5", className)}>
      <div className="lg:text-5xl text-xl font-bold text-white">{name}</div>
      <Image
        className={cn(
          "rounded-2xl border-foreground h-44 lg:w-full object-cover mx-auto mt-5 border-2",
          imageClassName
        )}
        src={image}
        alt=""
        width={340}
        height={182}
      />
      <div className="lg:text-xl mt-5 font-medium text-white">
        {description}
      </div>
      <div className="text-foreground font-pioneer lg:my-12 mt-5 mb-8 text-4xl font-bold">
        10000 ₽
      </div>
      {buttons}
    </div>
  );
};

export default CatalogProduct;
