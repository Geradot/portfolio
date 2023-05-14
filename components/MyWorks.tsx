import React from 'react';
import { projects } from '@/Data/Data';
import Link from 'next/link';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';

export default function MyWorks() {
  let isPortrait = window.innerWidth < 480;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {projects.map(project => (
        <div
          key={project.id}
          className="bg-Blur flex flex-col justify-between p-4 h-auto rounded-lg"
        >
          <div className="w-full h-3/4 relative group">
            {isPortrait ? (
              <img
                src={`/${project.imgMobile}`}
                alt={project.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={`/${project.img}`}
                alt={project.name}
                className="w-full h-full object-contain"
              />
            )}
            <div className="absolute w-full h-full bg-Orange top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-300">
              <Link
                href={project.github}
                target="_blank"
              >
                <AiFillGithub className="text-3xl hover:scale-110 transition-all duration-300" />
              </Link>
              <Link
                href={project.url}
                target="_blank"
              >
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
  );
}
