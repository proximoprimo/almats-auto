const TextInput = (props: React.HTMLProps<HTMLInputElement>) => {
  return (
    <label className="bg-foreground rounded-2xl block w-full p-3 py-4">
      <input
        type="text"
        className="bg-foreground w-full text-xl text-black rounded outline-none"
        {...props}
      />
    </label>
  );
};

export default TextInput;
