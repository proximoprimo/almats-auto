import TextInput, {
  TextInputProps,
} from "@/components/common/inputs/TextInput";

const CartInput = ({ ...props }: TextInputProps) => {
  return <TextInput {...props}  className="rounded-2xl placeholder:text-sm placeholder:font-bold w-full px-3 py-4 bg-white"/>;
};

export default CartInput;