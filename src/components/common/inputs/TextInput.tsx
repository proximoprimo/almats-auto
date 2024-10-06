import cn from "@/utils/cn";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  labelClassName?: string;
}

const TextInput = ({ labelClassName, ...props }: TextInputProps) => {
  return (
    <label
      className={cn(
        "block w-full p-3 py-4 lg:py-6 lg:px-8 bg-foreground rounded-2xl",
        labelClassName
      )}
    >
      <input
        type="text"
        className="lg:text-2xl bg-foreground w-full text-xl font-bold text-black placeholder-black rounded outline-none"
        {...props}
      />
    </label>
  );
};

export default TextInput;
