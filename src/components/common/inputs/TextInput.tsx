export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {}

const TextInput = (props: TextInputProps) => {
  return (
    <label className="block w-full p-3 py-4 lg:py-6 lg:px-8 bg-foreground rounded-2xl">
      <input
        type="text"
        className="w-full text-xl lg:text-2xl text-black rounded outline-none bg-foreground font-bold placeholder-black"
        {...props}
      />
    </label>
  );
};

export default TextInput;
