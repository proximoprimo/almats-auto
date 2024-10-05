import DesktopFaqBlock from "./DesktopFaqBlock";
import MobileFaqBlock from "./MobileFaqBlock";

export interface Question {
  question: string;
  answer: string;
}

const QUESTIONS: Question[] = [
  {
    question: "Какие сроки изготовления?",
    answer:
      "Сроки изготовления зависят от сложности заказа. Обычно это 5-7 дней.",
  },
  {
    question: "Вопрос 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor quis sapien a fermentum. Sed viverra, dolor sit amet tincidunt euismod, ex libero aliquet ex, vestibulum aliquet ante nulla eu dui. Cras imperdiet turpis ac commodo gravida. Suspendisse rutrum semper ante ac euismod. Mauris quis porttitor orci. Nunc molestie, dolor vitae eleifend condimentum, felis est elementum felis, et efficitur leo dolor vitae felis. In euismod, enim vel venenatis rutrum, felis velit accumsan nisi, non luctus ligula metus a urna. Aenean id varius massa. Etiam ultrices erat at ligula facilisis semper. Quisque ac eleifend ante, sed fringilla enim. Sed malesuada convallis.",
  },
  {
    question: "Вопрос 3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porttitor quis sapien a fermentum. Sed viverra, dolor sit amet tincidunt euismod, ex libero aliquet ex, vestibulum aliquet ante nulla eu dui. Cras imperdiet turpis ac commodo gravida. Suspendisse rutrum semper ante ac euismod. Mauris quis porttitor orci. Nunc molestie, dolor vitae eleifend condimentum, felis est elementum felis, et efficitur leo dolor vitae felis. In euismod, enim vel venenatis rutrum, felis velit accumsan nisi, non luctus ligula metus a urna. Aenean id varius massa. Etiam ultrices erat at ligula facilisis semper. Quisque ac eleifend ante, sed fringilla enim. Sed malesuada convallis.",
  },
];

const FaqBlock = () => {
  return (
    <>
      <MobileFaqBlock questions={QUESTIONS} />
      <DesktopFaqBlock questions={QUESTIONS} />
    </>
  );
};

export default FaqBlock;
