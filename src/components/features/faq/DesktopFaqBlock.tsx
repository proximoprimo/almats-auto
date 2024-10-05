"use client";
import { useState } from "react";
import { Question } from "./FaqBlock";
import cn from "@/utils/cn";

interface DesktopFaqBlockProps {
  questions: Question[];
}

const DesktopFaqBlock = ({ questions }: DesktopFaqBlockProps) => {
  const [active, setActive] = useState(0);

  const QuestionList = questions.map((question, index) => (
    <div
      key={question.question}
      onClick={() => setActive(index)}
      className={cn(
        "bg-foreground rounded-2xl px-8 py-10 text-3xl font-semibold text-black cursor-pointer",
        {
          "bg-[#FFFCE8]": active !== index,
        }
      )}
    >
      {question.question}
    </div>
  ));

  return (
    <div className="lg:grid grid-cols-[44fr,62fr] gap-2.5 hidden">
      <div className="bg-foreground rounded-2xl p-8 text-xl font-medium text-black">
        {questions[active].answer}
      </div>
      <div className="flex flex-col gap-12">{QuestionList}</div>
    </div>
  );
};

export default DesktopFaqBlock;
