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
            <div className="uppercase font-semibold text-sm text-WhiteGray">
              Introduction
            </div>
            <h1 className="font-semibold text-3xl mt-8 text-WhiteGray uppercase">
              Front-end developer
            </h1>
            <p className="text-WhiteGray text-sm mt-8 leading-7">
              I am a passionate front-end developer with an equal focus on
              usability and attractiveness of websites. Excited to collaborate
              on new projects!
            </p>
            <div className="flex gap-8 mt-8">
              <Link
                href="/contact"
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Contact Me
              </Link>
              <a
                href="/pdf/Ryzhenko_resume.pdf"
                download
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <Skills skills={skills}/>
      </Wrapper>
    </>
  );
}
