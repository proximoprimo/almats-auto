import Image from "next/image";

export interface CatalogProductProps {
  name: string;
  description: string;
  image: string;
  buttons: React.ReactNode;
}

const CatalogProduct = ({
  description,
  image,
  name,
  buttons,
}: CatalogProductProps) => {
  return (
    <div className="bg-secondary rounded-2xl p-8 pb-5">
      <div className="text-xl font-bold">{name}</div>
      <Image
        className="rounded-2xl border-foreground h-44 object-cover mt-5 border-2"
        src={image}
        alt=""
        width={340}
        height={182}
      />
      <div className="mt-5 font-medium">{description}</div>
      {buttons}
    </div>
  );
};

export default CatalogProduct;
