import { Logo } from "@/components/common";
import { ContactBlock } from "@/components/common/contact";
import { Subtitle } from "@/components/common/title";
import { Section } from "@/components/layout/section";

const ContactsPage = () => {
  return (
    <>
      <Section>
        <Subtitle className="text-center text-black">Наши реквизиты</Subtitle>

        <div className="mt-5 lg:mt-12 lg:grid lg:grid-cols-[45fr,85fr]">
          <div className="border-2 border-foreground rounded-t-2xl text-black font-bold text-xl grid grid-cols-[1fr,auto] p-10 gap-y-5 lg:rounded-l-2xl lg:rounded-r-none">
            <div>ИНН</div>
            <div>1234567890</div>
            <div>ИНН</div>
            <div>1234567890</div>
            <div>ИНН</div>
            <div>1234567890</div>
            <div>ИНН</div>
            <div>1234567890</div>
            <div>ИНН</div>
            <div>1234567890</div>
            <div>ИНН</div>
            <div>1234567890</div>
          </div>
          <div className="rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl p-10 bg-black">
            <Logo
              className="lg:h-full mx-auto"
              imageClassName="lg:h-full lg:mx-auto"
              width={307}
              height={176}
              style="white"
            />
          </div>
        </div>
      </Section>
      <Section className="mt-12">
        <ContactBlock className="lg:flex-row" withMap />
      </Section>
    </>
  );
};

export default ContactsPage;
