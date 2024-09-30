"use client";
import cn from "@/utils/cn";
import Image from "next/image";

interface CheckBoxProps {
  label: string;
  onChange?: (val: boolean) => void;
  value?: boolean;
  className?: string;
}

const CheckBox = ({
  label,
  onChange,
  value = false,
  className,
}: CheckBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className={cn("flex items-center gap-4", className)}>
      <input
        value={value ? "on" : "off"}
        type="checkbox"
        className="hidden"
        onChange={handleChange}
      />
      <div className="h-8 w-8 border border-[#FCE000] relative flex justify-center items-center">
        {value && (
          <Image
            className=""
            src="/icons/check.svg"
            alt=""
            width={32}
            height={32}
          />
        )}
      </div>
      <div className="font-bold">{label}</div>
    </label>
  );
};

export default CheckBox;
