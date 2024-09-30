import { Subtitle } from "@/components/common/title";
import Image from "next/image";

interface AdvantageProps {
  title: string;
  text: string;
  image: 1 | 2 | 3 | 4;
}

const Advantage = ({ image, text, title }: AdvantageProps) => {
  return (
    <div className="flex flex-col items-center text-black">
      <Image src={`/main/adv/${image}.svg`} alt={""} width={261} height={261} />
      <Subtitle size="sm" className="mt-5 text-center text-black">
        {title}
      </Subtitle>
      <div className="text-sm text-center mt-2.5">{text}</div>
    </div>
  );
};

export default Advantage;
