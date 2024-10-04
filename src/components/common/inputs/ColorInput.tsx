import cn from "@/utils/cn";

const COLORS = [
  "#492828",
  "#A52C2C",
  "#E5F900",
  "#8917CF",
  "#1042EF",
  "#37F518",
  "#ED80FF",
  "#FAB70A",
  "#F90A60",
];

interface ColorInputProps {
  label: string;
  className?: string;
}

const ColorInput = ({ label, className }: ColorInputProps) => {
  return (
    <div className={cn(className)}>
      <div className="text-lg font-bold mb-2.5">{label}</div>
      <div className="justify-items-center grid grid-cols-9">
        {COLORS.map((color) => (
          <div
            key={color}
            className="rounded-full w-7 h-7"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorInput;
