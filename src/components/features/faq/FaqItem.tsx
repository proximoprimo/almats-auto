import cn from "@/utils/cn";
import { Question } from "./MobileFaqBlock";

interface FaqItemProps {
  question: Question;
  open: boolean;
  setActive: (index: number) => void;
  index: number;
}

const FaqItem = ({ index, open, question, setActive }: FaqItemProps) => {
  const handleClick = () => {
    setActive(index);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "rounded-2xl transition text-black bg-[#FFFCE8] px-5 py-6 text-xl font-semibold",
        {
          "bg-[#FCE000]": open,
        }
      )}
    >
      <div>{question.question}</div>
      {open && <div className="mt-5 font-medium">{question.answer}</div>}
    </div>
  );
};

export default FaqItem;
