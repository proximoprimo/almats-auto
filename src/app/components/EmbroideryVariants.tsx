import Image from "next/image";

interface EmbroideryVariantsProps {
  label: string;
}

const EmbroideryVariants = ({ label }: EmbroideryVariantsProps) => {
  return (
    <div>
      <div className="mt-5 font-bold">{label}</div>

      <div className="mt-5 grid grid-cols-3 gap-6">
        <Image
          src="/main/calc/embroidery.svg"
          alt=""
          width={350}
          height={242}
        />
        <Image
          src="/main/calc/embroidery.svg"
          alt=""
          width={350}
          height={242}
        />
        <Image
          src="/main/calc/embroidery.svg"
          alt=""
          width={350}
          height={242}
        />
      </div>
    </div>
  );
};

export default EmbroideryVariants;
