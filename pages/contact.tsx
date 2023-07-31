import Head from 'next/head';
import Wrapper from '@/components/wrapper/Wrapper';
import { contacts } from '@/Data/Data';
import Link from 'next/link';
import { AiFillMail } from 'react-icons/ai';

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
            If you are looking for a skilled front-end web developer to help bring
            your web application ideas to life, feel free to contact me.
            Let&apos;s discuss how I can contribute to your team and deliver
            top-notch results.
          </p>
          <div className="contacts mx-auto w-max flex flex-col text-WhiteGray gap-4">
            <a href="tel:+17124496101">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span>+1&nbsp;(712)&nbsp;449&nbsp;6101</span>
            </a>
            <a href="mailto:geradot@tuta.io">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>geradot@tuta.io</span>
            </a>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
