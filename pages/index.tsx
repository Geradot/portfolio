import Wrapper from '@/components/wrapper/Wrapper';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.brandName}</title>
      </Head>
      <Wrapper className="max-w-2xl text-center flex flex-col justify-center">
        <div className="flex sm:justify-between items-center gap-4 sm:gap-0">
          <div className="text-xl sm:text-3xl uppercase text-WhiteGray font-bold">
            Hi, I&apos;m
          </div>
          <div className="sm:h-2 sm:w-[30rem] xs:w-[19rem] rounded-sm bg-Orange"></div>
        </div>
        <div className="sm:text-[7.2rem] xs:text-7xl text-5xl text-White font-medium">
          {process.env.brandName}
        </div>
        <div className="uppercase font-bold xs:text-2xl text-xl text-Orange text-end mt-8">
          A Front-end <br />
          web developer
        </div>
        <div className="about__buttons text-White hidden max-md:flex mx-auto mt-8 w-max py-2 px-2">
          <Link href="/about" className="sm:text-xl">About me</Link>
        </div>
      </Wrapper>
    </>
  );
}
