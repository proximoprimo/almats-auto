"use client";

import { useState } from "react";
import FaqItem from "./FaqItem";
import { Question } from "./FaqBlock";

interface MobileFaqBlockProps {
  questions: Question[];
}

const MobileFaqBlock = ({ questions }: MobileFaqBlockProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className="lg:hidden flex flex-col gap-5 mt-8">
      {questions?.map((question, index) => (
        <FaqItem
          key={index}
          question={question}
          open={active === index}
          index={index}
          setActive={setActive}
        />
      ))}
    </div>
  );
};

export default MobileFaqBlock;
