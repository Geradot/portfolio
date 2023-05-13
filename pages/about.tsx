import Wrapper from '@/components/wrapper/Wrapper';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Skills from '@/components/skills/Skills';
import { skills } from '@/Data/Data';

export default function About() {
  return (
    <>
      <Head>
        <title>{process.env.brandName} | Portfolio</title>
      </Head>

      <Wrapper>
        <div className="flex flex-col items-center justify-center mb-12 min-h-screen lg:mb-0 gap-12 lg:flex-row pt-28 lg:pt-0">
          <Image
            src={'/about.png'}
            width={300}
            height={300}
            alt="Anton Ryzhenko. Photo"
            style={{
              filter: 'grayscale(1) drop-shadow(#eeb844 1px -4px 0px)',
            }}
          />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div className="uppercase text-start lg:text-start font-semibold text-sm text-WhiteGray">
               Anton «Geradot» Ryzhenko
            </div>
            <h1 className="text-start lg:text-start font-semibold text-2xl lg:text-3xl mt-8 text-WhiteGray uppercase">
              Front-end developer
            </h1>
            <p className="text-WhiteGray text-sm mt-8 leading-7">
              I am a passionate front-end developer
              with an equal focus on usability and attractiveness of websites.
              Excited to collaborate on new projects!
            </p>
            <div className="about__buttons flex gap-8 mt-8">
              <a
                href="/pdf/Ryzhenko_resume.pdf"
                download
                className="flex gap-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>
        <Skills skills={skills} />
      </Wrapper>
    </>
  );
}
