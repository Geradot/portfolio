import Head from 'next/head';
import Wrapper from '@/components/wrapper/Wrapper';
import { contacts } from '@/Data/Data';

export default function Contact() {
  return (
    <>
      <Head>
        <title>{process.env.brandName} | Contact</title>
      </Head>

      <Wrapper className="text-White gap-12 flex flex-col justify-center items-center lg:flex-row pt-28 lg:pt-0">
        <div className="px-6 py-6 text-center">
          <div className="uppercase text-4xl tracking-widest font-semibold">
            Contact
          </div>
          <p className="leading-8 mb-8 text-sm max-w-xl mt-10 text-WhiteGray">
            If you are looking for a skilled front-end developer to help bring
            your web application ideas to life, feel free to contact me.
            Let&apos;s discuss how I can contribute to your team and deliver
            top-notch results.
          </p>
          <div>
            {contacts.map(contact => (
              <div key={contact.id} className="mt-6">
                <div className="text-xl font-medium mb-2">{contact.title}</div>
                <div className="text-sm text-WhiteGray">{contact.text}</div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
