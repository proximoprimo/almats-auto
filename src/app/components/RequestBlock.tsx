import { Button } from "@/components/common";
import { TextInput } from "@/components/common/inputs";
import { Title } from "@/components/common/title";

const RequestBlock = () => {
  return (
    <div className="px-5 py-8 border-2 border-foreground rounded-b-2xl lg:rounded-l-none rounded-r-2xl lg:flex lg:flex-col lg:justify-center">
      <Title
        className="text-2xl font-semibold text-center text-black font-montserrat lg:text-3xl lg:text-left"
        level={3}
      >
        Оставьте заявку и мы с вами свяжемся
      </Title>
      <div className="flex flex-col mt-8 gap-8 lg:mt-12 lg:gap-12">
        <TextInput placeholder="Имя" />
        <TextInput placeholder="Телефон*" />
      </div>
      <Button className="mt-8 rounded-full lg:w-3/5">Оставить заявку</Button>
    </div>
  );
};

export default RequestBlock;
