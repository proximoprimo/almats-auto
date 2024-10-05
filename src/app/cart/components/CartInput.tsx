import TextInput, {
  TextInputProps,
} from "@/components/common/inputs/TextInput";

const CartInput = ({ ...props }: TextInputProps) => {
  return <TextInput {...props}  className="w-full px-3 py-4 bg-white rounded-2xl placeholder:text-sm placeholder:font-bold"/>;
};

export default CartInput;