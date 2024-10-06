import { Section } from "@/components/layout/section";

const FILTER_OPTIONS = [
  "Категория",
  "Марка",
  "Модель",
  "По акции",
  "Производитель",
  "Цвет",
  "Цена",
];

const DesktopFilterBlock = () => {
  return (
    <Section className="hidden lg:flex gap-5">
      {FILTER_OPTIONS.map((option) => (
        <div
          key={option}
          className="bg-foreground h-16 text-sm font-bold text-black flex justify-start items-center lg:px-8 xl:px-12 rounded-full"
        >
          {option}
        </div>
      ))}
    </Section>
  );
};

export default DesktopFilterBlock;
