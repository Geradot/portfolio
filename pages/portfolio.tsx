import Wrapper from '@/components/wrapper/Wrapper';
import Head from 'next/head';
import { projects } from '@/Data/Data';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>{process.env.brandName} | Portfolio</title>
      </Head>

      <Wrapper>
        <div className="flex flex-col pt-40 items-center">
          <h1 className="font-semibold text-3xl text-WhiteGray uppercase">
            My Work Collections
          </h1>
          <p className="text-WhiteGray text-sm mt-8 leading-7">
            I specialize in developing custom web applications that cater to
            diverse business needs, from e-commerce platforms to data
            visualization dashboards, using the lates technologies and agile
            methodologies to deliver exceptional user experiences and measurable
            business outcomes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-Blur flex flex-col justify-between p-4 h-auto rounded-lg"
              >
                <div className="w-full h-3/4 relative group">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute w-full h-full bg-Orange top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-300">
                    <Link href={project.github} target='_blank'>
                      <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
                    </Link>
                    <Link href={project.url} target='_blank'>
                      <AiFillEye className="text-3xl hover:scale-110 transition-all duration-300" />
                    </Link>
                  </div>
                </div>
                <div className="text-White mt-2 text-start">{project.name}</div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {project.tools.map(tool => (
                    <span
                      key={tool}
                      className="bg-Blur rounded-full py-2 px-4 text-White text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
