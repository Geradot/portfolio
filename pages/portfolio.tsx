import Wrapper from '@/components/wrapper/Wrapper';
import Head from 'next/head';
import MyWorks from '@/components/MyWorks';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>{process.env.brandName} | Portfolio</title>
      </Head>

      <Wrapper>
        <div className="flex flex-col text-start md:text-center justify-center px-6 pt-40">
          <h1 className="font-semibold text-3xl text-WhiteGray uppercase">
            My Work Collection
          </h1>
          {/* <p className="text-WhiteGray text-sm mt-8 leading-7">
            I specialize in developing custom web applications that cater to
            diverse business needs, from e-commerce platforms to data
            visualization dashboards, using the lates technologies and agile
            methodologies to deliver exceptional user experiences and measurable
            business outcomes.
          </p> */}
          <MyWorks />
        </div>
      </Wrapper>
    </>
  );
}
