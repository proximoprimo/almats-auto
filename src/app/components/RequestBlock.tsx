import { Button } from "@/components/common";
import { TextInput } from "@/components/common/inputs";
import { Title } from "@/components/common/title";

const RequestBlock = () => {
  return (
    <div className="border-foreground rounded-b-2xl px-5 py-8 border">
      <Title
        className="font-montserrat text-2xl font-semibold text-center text-black"
        level={3}
      >
        Оставьте заявку и мы с вами свяжемся
      </Title>
      <div className="flex flex-col gap-8 mt-8">
        <TextInput />
        <TextInput />
      </div>
      <Button className="mt-8 rounded-full">Оставить заявку</Button>
    </div>
  );
};

export default RequestBlock;
