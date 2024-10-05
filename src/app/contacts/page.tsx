import { Logo } from "@/components/common";
import { ContactBlock } from "@/components/common/contact";
import { Subtitle } from "@/components/common/title";
import { Section } from "@/components/layout/section";

const ContactsPage = () => {
  return (
    <>
      <Section>
        <Subtitle className="text-center text-black">Наши реквизиты</Subtitle>

        <div className="mt-12">
          <div className="border-2 border-foreground rounded-t-md text-black font-bold text-xl grid grid-cols-[1fr,auto] p-10 gap-y-5">
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
          <div className="p-10 bg-black rounded-b-md">
            <Logo className="mx-auto" width={307} height={176} style="white" />
          </div>
        </div>
      </Section>
      <Section className="mt-12">
        <ContactBlock withMap />
      </Section>
    </>
  );
};

export default ContactsPage;
